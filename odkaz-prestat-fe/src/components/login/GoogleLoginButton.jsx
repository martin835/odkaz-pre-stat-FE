import { useTranslation } from "react-i18next";
import "./googleBtn.css";

function GoogleLoginButton() {
  const { t } = useTranslation();

  //Google login guidelines:
  //https://developers.google.com/identity/branding-guidelines

  return (
    <div className="google-btn">
      <div className="google-icon-wrapper">
        <img
          className="google-icon"
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
        />
      </div>
      <p className="btn-text">
        <b>{t("log_in_with_google")}</b>
      </p>
    </div>
  );
}

export default GoogleLoginButton;
