import { useState } from "react";
import HeaderCaption from "./HeaderCaption";
import WarningBar from "./WarningBar";
import profilePic from "../../assets/images/header-web/profile.svg";

function Header() {
  return (
    <>
      <header className="idsk-header-web " data-module="idsk-header-web">
        <WarningBar />
        <div className="idsk-header-web__tricolor"></div>
        <div className="idsk-header-web__brand ">
          <div className="govuk-width-container">
            <div className="govuk-grid-row">
              <div className="govuk-grid-column-full">
                <HeaderCaption />

                {/* 
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
              </div> */}
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
                    <h2 className="govuk-heading-m">Odkaz pre štát</h2>
                  </a>

                  <button
                    className="idsk-button idsk-header-web__main-headline-menu-button idsk-header-web__main-headline-menu-button-service"
                    aria-label="Rozbaliť menu"
                    aria-expanded="false"
                    data-text-for-show="Rozbaliť menu"
                    data-text-for-hide="Skryť menu"
                  >
                    <img src={profilePic} alt="Electronic service menu icon" />
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
                          src={profilePic}
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
                        src={profilePic}
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
    </>
  );
}

export default Header;
