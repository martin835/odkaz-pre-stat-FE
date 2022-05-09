function Header() {
  return (
    <header className="idsk-header-web " data-module="idsk-header-web">
      <div className="idsk-header-web__tricolor"></div>

      <div className="idsk-header-web__brand ">
        <div className="govuk-width-container">
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full">
              <div className="idsk-header-web__brand-gestor">
                <span className="govuk-body-s idsk-header-web__brand-gestor-text">
                  Oficiálna stránka
                  <button
                    className="idsk-header-web__brand-gestor-button"
                    aria-label="Zobraziť informácie o stránke"
                    aria-expanded="false"
                    data-text-for-hide="Skryť informácie o stránke"
                    data-text-for-show="Zobraziť informácie o stránke"
                  >
                    verejnej správy SR
                    <span className="idsk-header-web__link-arrow"></span>
                  </button>
                </span>
                <span className="govuk-body-s idsk-header-web__brand-gestor-text--mobile">
                  SK
                  <button
                    className="idsk-header-web__brand-gestor-button"
                    aria-label="Zobraziť informácie o stránke"
                    aria-expanded="false"
                    data-text-for-hide="Skryť informácie o stránke"
                    data-text-for-show="Zobraziť informácie o stránke"
                  >
                    e-gov
                    <span className="idsk-header-web__link-arrow"></span>
                  </button>
                </span>

                <div className="idsk-header-web__brand-dropdown">
                  <div className="govuk-width-container">
                    <div className="govuk-grid-row">
                      <div className="govuk-grid-column-one-half">
                        <h3 className="govuk-body-s">
                          Doména gov.sk je oficálna
                        </h3>
                        <p className="govuk-body-s">
                          Toto je oficiálna webová stránka orgánu verejnej moci
                          Slovenskej republiky. Oficiálne stránky využívajú
                          najmä doménu gov.sk.{" "}
                          <a
                            className="govuk-link"
                            href="https://www.slovensko.sk/sk/agendy/agenda/_organy-verejnej-moci"
                            target="_blank"
                            title="odkazy na webové sídla orgánov verejnej moci"
                          >
                            Odkazy na jednotlivé webové sídla orgánov verejnej
                            moci nájdete na tomto odkaze
                          </a>
                          .
                        </p>
                      </div>
                      <div className="govuk-grid-column-one-half">
                        <h3 className="govuk-body-s">
                          Táto stránka je zabezpečená
                        </h3>
                        <p className="govuk-body-s">
                          Buďte pozorní a vždy sa uistite, že zdieľate
                          informácie iba cez zabezpečenú webovú stránku verejnej
                          správy SR. Zabezpečená stránka vždy začína https://
                          pred názvom domény webového sídla.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="idsk-header-web__brand-spacer"></div>
              <div className="idsk-header-web__brand-language">
                <button
                  className="idsk-header-web__brand-language-button"
                  aria-label="Rozbaliť jazykové menu"
                  aria-expanded="false"
                  data-text-for-hide="Skryť jazykové menu"
                  data-text-for-show="Rozbaliť jazykové menu"
                >
                  Slovenčina
                  <div className="idsk-header-web__link-arrow"></div>
                </button>
                <ul className="idsk-header-web__brand-language-list">
                  <li className="idsk-header-web__brand-language-list-item">
                    <a
                      className="govuk-link idsk-header-web__brand-language-list-item-link "
                      title="Deutsch"
                      href="#"
                    >
                      Deutsch
                    </a>
                  </li>
                  <li className="idsk-header-web__brand-language-list-item">
                    <a
                      className="govuk-link idsk-header-web__brand-language-list-item-link "
                      title="English"
                      href="#"
                    >
                      English
                    </a>
                  </li>
                  <li className="idsk-header-web__brand-language-list-item">
                    <a
                      className="govuk-link idsk-header-web__brand-language-list-item-link "
                      title="Español"
                      href="#"
                    >
                      Español
                    </a>
                  </li>
                  <li className="idsk-header-web__brand-language-list-item">
                    <a
                      className="govuk-link idsk-header-web__brand-language-list-item-link idsk-header-web__brand-language-list-item-link--selected"
                      title="Slovenčina"
                      href="#"
                    >
                      Slovenčina
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="idsk-header-web__main">
        <div className="govuk-width-container">
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full govuk-grid-column-one-third-from-desktop">
              <div className="idsk-header-web__main-headline">
                <a href="/" title="Odkaz na úvodnú stránku">
                  <h2 className="govuk-heading-m">Ministerstvo investícií</h2>
                </a>

                <button
                  className="idsk-button idsk-header-web__main-headline-menu-button idsk-header-web__main-headline-menu-button-service"
                  aria-label="Rozbaliť menu"
                  aria-expanded="false"
                  data-text-for-show="Rozbaliť menu"
                  data-text-for-hide="Skryť menu"
                >
                  <img
                    src="/public/assets/images/header-web//profile.svg"
                    alt="Electronic service menu icon"
                  />
                  <div className="idsk-header-web__menu-close"></div>
                </button>
              </div>
            </div>

            <div className="govuk-grid-column-two-thirds">
              <div className="idsk-header-web__main-action">
                <div className="idsk-header-web__main--buttons">
                  <div className="idsk-header-web__main--login ">
                    <button
                      type="button"
                      className="idsk-button idsk-header-web__main--login-loginbtn"
                      data-module="idsk-button"
                    >
                      Prihlásiť sa
                    </button>
                    <div className="idsk-header-web__main--login-action">
                      <img
                        className="idsk-header-web__main--login-action-profile-img"
                        src="/public/assets/images/header-web/profile.svg"
                        alt="Profile image"
                      />
                      <div className="idsk-header-web__main--login-action-text">
                        <span className="govuk-body-s idsk-header-web__main--login-action-text-user-name">
                          Ing. Jožko Veľký M.A
                        </span>
                        <div className="govuk-!-margin-bottom-1">
                          <a
                            className="govuk-link idsk-header-web__main--login-action-text-logout idsk-header-web__main--login-logoutbtn"
                            href="#"
                            title="odhlásiť"
                          >
                            Odhlásiť
                          </a>
                          <span> | </span>
                          <a
                            className="govuk-link idsk-header-web__main--login-action-text-profile idsk-header-web__main--login-profilebtn"
                            href="#"
                            title="profil"
                          >
                            Profil
                          </a>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="idsk-button idsk-header-web__main--login-profilebtn"
                      data-module="idsk-button"
                    >
                      Profil
                    </button>
                    <button
                      type="button"
                      className="idsk-button idsk-header-web__main--login-logoutbtn"
                      data-module="idsk-button"
                    >
                      Odhlásiť sa
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="idsk-header-web__nav idsk-header-web__nav--mobile ">
        <div className="govuk-width-container">
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full"></div>
          </div>

          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full">
              <div className="idsk-header-web__main--buttons">
                <div className="idsk-header-web__main--login ">
                  <button
                    type="button"
                    className="idsk-button idsk-header-web__main--login-loginbtn"
                    data-module="idsk-button"
                  >
                    Prihlásiť sa
                  </button>
                  <div className="idsk-header-web__main--login-action">
                    <img
                      className="idsk-header-web__main--login-action-profile-img"
                      src="/public/assets/images/header-web/profile.svg"
                      alt="Profile image"
                    />
                    <div className="idsk-header-web__main--login-action-text">
                      <span className="govuk-body-s idsk-header-web__main--login-action-text-user-name">
                        Ing. Jožko Veľký M.A
                      </span>
                      <div className="govuk-!-margin-bottom-1">
                        <a
                          className="govuk-link idsk-header-web__main--login-action-text-logout idsk-header-web__main--login-logoutbtn"
                          href="#"
                          title="odhlásiť"
                        >
                          Odhlásiť
                        </a>
                        <span> | </span>
                        <a
                          className="govuk-link idsk-header-web__main--login-action-text-profile idsk-header-web__main--login-profilebtn"
                          href="#"
                          title="profil"
                        >
                          Profil
                        </a>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="idsk-button idsk-header-web__main--login-profilebtn"
                    data-module="idsk-button"
                  >
                    Profil
                  </button>
                  <button
                    type="button"
                    className="idsk-button idsk-header-web__main--login-logoutbtn"
                    data-module="idsk-button"
                  >
                    Odhlásiť sa
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
