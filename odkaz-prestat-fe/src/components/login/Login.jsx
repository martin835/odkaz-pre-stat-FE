import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { setLoggedUserAction } from "../../redux/actions";
import GoogleLoginButton from "./GoogleLoginButton";

function Login() {
  const [loginReq, setLoginReq] = useState({
    email: "",
    password: "",
  });
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.loggedUser);

  const loadLoggedUser = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BE_URL}/users/me`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      });
      if (response.ok) {
        const data = await response.json();
        //console.log(data);
        //setLoggedUser(data);
        dispatch(setLoggedUserAction(data));

        navigate(`/`);
      } else {
        console.log("error on fetching users");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        `${process.env.REACT_APP_BE_URL}/users/login`,
        {
          method: "POST",
          body: JSON.stringify(loginReq),
          //credentials: "include",
          headers: {
            "Content-type": "application/json",
            //Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        //console.log(data);
        localStorage.setItem("accessToken", data.accessToken);
        loadLoggedUser();
        console.log(process.env.REACT_APP_FE_URL);
        //This is a force reload to homepage, so the chat is working correctly after user logs in with credentials -> it is different then OAuth login, because OAuth does reload automatically.
        window.location.href = `${process.env.REACT_APP_FE_URL}/`;
      } else {
        console.log("login failed");
        if (response.status === 400) {
          console.log("bad request");
        }
        if (response.status === 404) {
          console.log("page not found");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="govuk-width-container">
      <div className="govuk-grid-row ">
        <div className="govuk-grid-column-two-thirds">
          <h1 className=" govuk-heading-l">{t("Login-1")}</h1>

          <h2 className="govuk-heading-m">{t("Login-2")}</h2>
          <div className="mb-4">
            <a href={`${process.env.REACT_APP_BE_URL}/users/googleLogin`}>
              <GoogleLoginButton />
            </a>
          </div>
          <h2 className="govuk-heading-m">{t("Login-3")}</h2>

          <form onSubmit={(e) => login(e)}>
            <div className="govuk-form-group">
              <label className="govuk-label" htmlFor="input-example-4-name">
                E-mail:
              </label>
              <input
                className="govuk-input"
                name="name"
                type="email"
                required
                value={loginReq.email}
                onChange={(e) =>
                  setLoginReq({ ...loginReq, email: e.target.value })
                }
              ></input>
            </div>

            <div className="govuk-form-group">
              <label className="govuk-label" htmlFor="input-example-4-surname">
                {t("Login-4")}
              </label>
              <input
                className="govuk-input"
                name="surname"
                type="password"
                required
                value={loginReq.password}
                onChange={(e) =>
                  setLoginReq({ ...loginReq, password: e.target.value })
                }
              ></input>
            </div>
            <button
              type="submit"
              className="idsk-button idsk-header-web__main--login-loginbtn"
              data-module="idsk-button"
            >
              {t("log_in")}
            </button>
          </form>
          <h2 className="govuk-heading-m">{t("Login-5")}</h2>
          <Link to="/user-registration" className="govuk-link">
            {t("Login-6")}{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
