import Login from "./Login";

function UserProfile(props) {
  return props.loggedUser ? (
    <div className="govuk-width-container">
      <div className="govuk-grid-row ">
        <div className="govuk-grid-column-full">
          <h1 className="govuk-heading-xl heading-bigger-margin govuk-!-margin-bottom-6">
            Váš aktuálny profil
          </h1>

          <dl class="govuk-summary-list">
            {/* ROW START */}
            <div class="govuk-summary-list__row">
              <dt class="govuk-summary-list__key">Meno</dt>
              <dd class="govuk-summary-list__value">{props.loggedUser.name}</dd>
              <dd class="govuk-summary-list__actions">
                <a class="govuk-link" href="#">
                  Zmeniť<span class="govuk-visually-hidden"> name</span>
                </a>
              </dd>
            </div>
            {/* ROW END */}
            {/* ROW START */}
            <div class="govuk-summary-list__row">
              <dt class="govuk-summary-list__key">Priezvisko</dt>
              <dd class="govuk-summary-list__value">
                {" "}
                {props.loggedUser.surname}
              </dd>
              <dd class="govuk-summary-list__actions">
                <a class="govuk-link" href="#">
                  Zmeniť<span class="govuk-visually-hidden"> name</span>
                </a>
              </dd>
            </div>
            {/* ROW END */}
            {/* ROW START */}
            <div class="govuk-summary-list__row">
              <dt class="govuk-summary-list__key">E-mail</dt>
              <dd class="govuk-summary-list__value">
                {" "}
                {props.loggedUser.email}
              </dd>
              <dd class="govuk-summary-list__actions"></dd>
            </div>
            {/* ROW END */}
            {/* ROW START */}
            <div class="govuk-summary-list__row">
              <dt class="govuk-summary-list__key">Avatar</dt>
              <dd class="govuk-summary-list__value">
                <img
                  src={props.loggedUser.avatar}
                  className="header-profile-pic"
                ></img>
              </dd>
              <dd class="govuk-summary-list__actions">
                <a class="govuk-link" href="#">
                  Zmeniť<span class="govuk-visually-hidden"> name</span>
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
