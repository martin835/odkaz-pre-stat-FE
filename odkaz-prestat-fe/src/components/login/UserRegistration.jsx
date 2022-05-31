import "./checkBox.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function UserRegistration() {
  const { t } = useTranslation();
  const [registrationReq, setRegistrationReq] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const register = async () => {};

  return (
    <>
      <div className="govuk-width-container">
        <div className="govuk-grid-row ">
          <div className="govuk-grid-column-two-thirds">
            <h1 className=" govuk-heading-l">Registrácia</h1>
            <form onSubmit={(e) => register(e)}>
              <div className="govuk-form-group">
                <label className="govuk-label" htmlFor="meno">
                  Meno:
                </label>
                <input
                  className="govuk-input"
                  name="name"
                  type="text"
                  id="meno"
                  required
                  value={registrationReq.name}
                  onChange={(e) =>
                    setRegistrationReq({
                      ...registrationReq,
                      name: e.target.value,
                    })
                  }
                ></input>
              </div>
              <div className="govuk-form-group">
                <label className="govuk-label" htmlFor="priezvisko">
                  Priezvisko:
                </label>
                <input
                  className="govuk-input"
                  name="surname"
                  id="priezvisko"
                  type="text"
                  required
                  value={registrationReq.surname}
                  onChange={(e) =>
                    setRegistrationReq({
                      ...registrationReq,
                      surname: e.target.value,
                    })
                  }
                ></input>
              </div>
              <div className="govuk-form-group">
                <label className="govuk-label" htmlFor="input-example-4-name">
                  E-mail:
                </label>
                <input
                  className="govuk-input"
                  name="name"
                  type="email"
                  required
                  value={registrationReq.email}
                  onChange={(e) =>
                    setRegistrationReq({
                      ...registrationReq,
                      email: e.target.value,
                    })
                  }
                ></input>
              </div>

              <div className="govuk-form-group">
                <label
                  className="govuk-label"
                  htmlFor="input-example-4-surname"
                >
                  Heslo:
                </label>
                <input
                  className="govuk-input"
                  name="surname"
                  type="password"
                  required
                  value={registrationReq.password}
                  onChange={(e) =>
                    setRegistrationReq({
                      ...registrationReq,
                      password: e.target.value,
                    })
                  }
                ></input>
              </div>

              <div className="govuk-form-group">
                <div className="govuk-checkboxes">
                  <div className="govuk-checkboxes__item">
                    <input
                      className="govuk-checkboxes__input checkBox-gov-uk-reset"
                      style={{ boxSizing: "initial" }}
                      id="suhlas"
                      name="suhlas"
                      type="checkbox"
                      value="suhlas"
                      required
                    ></input>
                    <label
                      className="govuk-label govuk-checkboxes__label"
                      htmlFor="suhlas"
                    >
                      Súhlas so spracovaním osobných údajov
                    </label>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="idsk-button idsk-header-web__main--login-loginbtn"
                data-module="idsk-button"
              >
                {t("register")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserRegistration;
