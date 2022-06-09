import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Login from "../login/Login";

function UserProfile(props) {
  const loggedUser = useSelector((state) => state.loggedUser);
  const { t } = useTranslation();

  return loggedUser ? (
    <div className="govuk-width-container">
      <div className="govuk-grid-row ">
        <div className="govuk-grid-column-full">
          <h1 className="govuk-heading-xl heading-bigger-margin govuk-!-margin-bottom-6">
            {t("UserProfile-1")}
          </h1>

          <dl className="govuk-summary-list">
            {/* ROW START */}
            <div className="govuk-summary-list__row">
              <dt className="govuk-summary-list__key">{t("UserProfile-2")}</dt>
              <dd className="govuk-summary-list__value">{loggedUser.name}</dd>
              <dd className="govuk-summary-list__actions">
                <a className="govuk-link" href="#">
                  {t("UserProfile-3")}
                  <span className="govuk-visually-hidden"> name</span>
                </a>
              </dd>
            </div>
            {/* ROW END */}
            {/* ROW START */}
            <div className="govuk-summary-list__row">
              <dt className="govuk-summary-list__key">{t("UserProfile-4")}</dt>
              <dd className="govuk-summary-list__value">
                {" "}
                {loggedUser.surname}
              </dd>
              <dd className="govuk-summary-list__actions">
                <a className="govuk-link" href="#">
                  {t("UserProfile-3")}
                  <span className="govuk-visually-hidden"> name</span>
                </a>
              </dd>
            </div>
            {/* ROW END */}
            {/* ROW START */}
            <div className="govuk-summary-list__row">
              <dt className="govuk-summary-list__key">E-mail</dt>
              <dd className="govuk-summary-list__value"> {loggedUser.email}</dd>
              <dd className="govuk-summary-list__actions"></dd>
            </div>
            {/* ROW END */}
            {/* ROW START */}
            <div className="govuk-summary-list__row">
              <dt className="govuk-summary-list__key">Avatar</dt>
              <dd className="govuk-summary-list__value">
                <img
                  src={loggedUser.avatar}
                  className="header-profile-pic"
                  referrerpolicy="no-referrer"
                ></img>
              </dd>
              <dd className="govuk-summary-list__actions">
                <a className="govuk-link" href="#">
                  {t("UserProfile-3")}
                  <span className="govuk-visually-hidden"> name</span>
                </a>
              </dd>
            </div>
            {/* ROW END */}
          </dl>
        </div>
      </div>
    </div>
  ) : (
    <Login />
  );
}

export default UserProfile;
