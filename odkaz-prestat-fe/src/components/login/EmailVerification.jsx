import "./checkBox.css";
import { useState } from "react";

import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { setLoggedUserAction } from "../../redux/actions";

function EmailVerification() {
  const { t } = useTranslation();
  const [regSuccess, setRegSuccess] = useState(null);
  const dispatch = useDispatch();

  const emailVerificationToken = new URLSearchParams(
    window.location.search
  ).get("emailVerificationToken");

  useEffect(() => {
    console.log("EMAIL TOKEN: ", emailVerificationToken);
    validateEmail();
  }, []);

  const validateEmail = async () => {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_BE_URL}/users/verify-email`,
        {
          method: "POST",
          body: JSON.stringify({}),
          //credentials: "include",
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + emailVerificationToken,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setRegSuccess(true);
        console.log(data);
        dispatch(setLoggedUserAction(data.verifiedUser));
        localStorage.setItem("accessToken", data.accessToken);
      } else {
        console.log("login failed");
        setRegSuccess(false);
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
    <>
      <div className="govuk-width-container">
        <div className="govuk-grid-row ">
          <div className="govuk-grid-column-two-thirds">
            <h1 className=" govuk-heading-l">{t("EmailVerification-1")}</h1>

            {regSuccess === null && (
              <Spinner animation="border" variant="primary" />
            )}
            {regSuccess === true && (
              <div className="govuk-panel govuk-panel--confirmation">
                <h1 className="govuk-panel__title">
                  {t("EmailVerification-2")}
                </h1>
              </div>
            )}

            {regSuccess === false && (
              <div
                className="govuk-error-summary"
                aria-labelledby="error-summary-title"
                role="alert"
                data-module="govuk-error-summary"
              >
                <div className="govuk-error-summary__body">
                  <h2
                    className="govuk-error-summary__title"
                    id="error-summary-title"
                  >
                    {t("EmailVerification-3")}
                  </h2>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default EmailVerification;
