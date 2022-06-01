import "./checkBox.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function EmailVerification() {
  const { t } = useTranslation();

  const emailVerificationToken = new URLSearchParams(
    window.location.search
  ).get("emailVerificationToken");

  useEffect(() => {
    console.log(emailVerificationToken);
  }, []);

  return (
    <>
      <div className="govuk-width-container">
        <div className="govuk-grid-row ">
          <div className="govuk-grid-column-two-thirds">
            <h1 className=" govuk-heading-l">Potvrdenie emailu</h1>
            <div> Uspesne / neuspesne</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmailVerification;
