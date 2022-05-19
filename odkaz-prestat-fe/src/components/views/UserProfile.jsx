import Login from "./Login";

function UserProfile(props) {
  return props.loggedUser ? (
    <div className="govuk-width-container">
      <div className="govuk-grid-row ">
        <div className="govuk-grid-column-full">
          <h1 className="govuk-heading-xl heading-bigger-margin govuk-!-margin-bottom-6">
            Váš aktuálny profil
          </h1>

          <dl className="govuk-summary-list">
            {/* ROW START */}
            <div className="govuk-summary-list__row">
              <dt className="govuk-summary-list__key">Meno</dt>
              <dd className="govuk-summary-list__value">
                {props.loggedUser.name}
              </dd>
              <dd className="govuk-summary-list__actions">
                <a className="govuk-link" href="#">
                  Zmeniť<span className="govuk-visually-hidden"> name</span>
                </a>
              </dd>
            </div>
            {/* ROW END */}
            {/* ROW START */}
            <div className="govuk-summary-list__row">
              <dt className="govuk-summary-list__key">Priezvisko</dt>
              <dd className="govuk-summary-list__value">
                {" "}
                {props.loggedUser.surname}
              </dd>
              <dd className="govuk-summary-list__actions">
                <a className="govuk-link" href="#">
                  Zmeniť<span className="govuk-visually-hidden"> name</span>
                </a>
              </dd>
            </div>
            {/* ROW END */}
            {/* ROW START */}
            <div className="govuk-summary-list__row">
              <dt className="govuk-summary-list__key">E-mail</dt>
              <dd className="govuk-summary-list__value">
                {" "}
                {props.loggedUser.email}
              </dd>
              <dd className="govuk-summary-list__actions"></dd>
            </div>
            {/* ROW END */}
            {/* ROW START */}
            <div className="govuk-summary-list__row">
              <dt className="govuk-summary-list__key">Avatar</dt>
              <dd className="govuk-summary-list__value">
                <img
                  src={props.loggedUser.avatar}
                  className="header-profile-pic"
                ></img>
              </dd>
              <dd className="govuk-summary-list__actions">
                <a className="govuk-link" href="#">
                  Zmeniť<span className="govuk-visually-hidden"> name</span>
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
