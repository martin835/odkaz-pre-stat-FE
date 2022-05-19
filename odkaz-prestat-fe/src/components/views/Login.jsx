import { useTranslation } from "react-i18next";

function Login() {
  const { t } = useTranslation();

  return (
    <div className="govuk-width-container">
      <div className="govuk-grid-row ">
        <div className="govuk-grid-column-two-thirds">
          <h2 className=" govuk-heading-m">
            Aby ste mohli hodnotiť služby musíte sa prihlásiť
          </h2>
          <a href={`${process.env.REACT_APP_BE_URL}/users/googleLogin`}>
            <button
              type="button"
              className="idsk-button idsk-header-web__main--login-loginbtn"
              data-module="idsk-button"
            >
              {t("log_in")}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
