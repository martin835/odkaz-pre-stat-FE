/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Link, useNavigate } from "react-router-dom";
import HeaderCaption from "./HeaderCaption";
import WarningBar from "./WarningBar";
import profilePic from "../../assets/images/header-web/profile.svg";
import { VscFeedback } from "react-icons/vsc";
import "../../styles/header.css";

function Header(props) {
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [langSelected, setLangSelected] = useState("Slovenčina");
  const [showMobileLogin, setShowMobileLogin] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <header
        className="idsk-header-web govuk-!-margin-bottom-9 "
        data-module="idsk-header-web"
      >
        <WarningBar />
        <div className="idsk-header-web__tricolor"></div>
        <div className="idsk-header-web__brand ">
          <div className="govuk-width-container">
            <div className="govuk-grid-row">
              <div className="govuk-grid-column-full">
                <HeaderCaption />

                {/* Conditional Rendering */}
                {langMenuOpen ? (
                  <div className="idsk-header-web__brand-language idsk-header-web__brand-language--active">
                    <button
                      className="idsk-header-web__brand-language-button"
                      aria-label="Skryť jazykové menu"
                      aria-expanded="true"
                      data-text-for-hide="Skryť jazykové menu"
                      data-text-for-show="Rozbaliť jazykové menu"
                      onClick={() => setLangMenuOpen(!langMenuOpen)}
                    >
                      {langSelected}
                      <div className="idsk-header-web__link-arrow"></div>
                    </button>
                    <ul className="idsk-header-web__brand-language-list">
                      <li
                        className="idsk-header-web__brand-language-list-item  "
                        onClick={(e) => {
                          setLangSelected(e.target.innerText);
                          i18next.changeLanguage("en");
                          setLangMenuOpen(false);
                        }}
                      >
                        {/* Conditional Rendering */}
                        <span
                          className={
                            langSelected === "English"
                              ? `idsk-header-web__brand-language-list-item-link govuk-body lang-item idsk-header-web__brand-language-list-item-link--selected  `
                              : `idsk-header-web__brand-language-list-item-link govuk-body lang-item`
                          }
                        >
                          English
                        </span>
                      </li>

                      <li
                        className="idsk-header-web__brand-language-list-item  "
                        onClick={(e) => {
                          setLangSelected(e.target.innerText);
                          i18next.changeLanguage("sk");
                          setLangMenuOpen(false);
                        }}
                      >
                        {/* Conditional Rendering */}
                        <span
                          className={
                            langSelected === "Slovenčina"
                              ? `idsk-header-web__brand-language-list-item-link govuk-body lang-item idsk-header-web__brand-language-list-item-link--selected  `
                              : `idsk-header-web__brand-language-list-item-link govuk-body lang-item`
                          }
                        >
                          Slovenčina
                        </span>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <div className="idsk-header-web__brand-language">
                    <button
                      className="idsk-header-web__brand-language-button"
                      aria-label="Rozbaliť jazykové menu"
                      aria-expanded="false"
                      data-text-for-hide="Skryť jazykové menu"
                      data-text-for-show="Rozbaliť jazykové menu"
                      onClick={() => setLangMenuOpen(!langMenuOpen)}
                    >
                      {langSelected}
                      <div className="idsk-header-web__link-arrow"></div>
                    </button>
                    <ul className="idsk-header-web__brand-language-list">
                      <li
                        className="idsk-header-web__brand-language-list-item"
                        onClick={(e) => setLangSelected(e.target.value)}
                      >
                        English
                      </li>

                      <li
                        className="idsk-header-web__brand-language-list-item"
                        onClick={(e) => {
                          setLangSelected(e.target.value);
                          console.log(e.target.value);
                        }}
                      >
                        Slovenčina
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="idsk-header-web__main">
          <div className="govuk-width-container">
            <div className="govuk-grid-row">
              <div className="govuk-grid-column-full govuk-grid-column-one-third-from-desktop">
                <div className="idsk-header-web__main-headline">
                  <Link to="/" title="Odkaz na úvodnú stránku">
                    <h2 className="govuk-heading-m">
                      {t("app_name")} <VscFeedback />
                    </h2>
                  </Link>

                  <button
                    className="idsk-button idsk-header-web__main-headline-menu-button idsk-header-web__main-headline-menu-button-service"
                    aria-label="Rozbaliť menu"
                    aria-expanded="false"
                    data-text-for-show="Rozbaliť menu"
                    data-text-for-hide="Skryť menu"
                    onClick={() => setShowMobileLogin(!showMobileLogin)}
                  >
                    <img
                      src={
                        props.loggedUser ? props.loggedUser.avatar : profilePic
                      }
                      alt="Electronic service menu icon"
                      className="header-profile-pic"
                    />
                    <div className="idsk-header-web__menu-close"></div>
                  </button>
                </div>
              </div>

              <div className="govuk-grid-column-two-thirds">
                <div className="idsk-header-web__main-action">
                  <div className="idsk-header-web__main--buttons">
                    <div
                      className={
                        props.loggedUser
                          ? `idsk-header-web__main--login  idsk-header-web__main--login--loggedIn`
                          : `idsk-header-web__main--login`
                      }
                    >
                      <a
                        href={`${process.env.REACT_APP_BE_URL}/users/googleLogin`}
                      >
                        <button
                          type="button"
                          className="idsk-button idsk-header-web__main--login-loginbtn"
                          data-module="idsk-button"
                        >
                          {t("log_in")}
                        </button>
                      </a>
                      <div className="idsk-header-web__main--login-action ">
                        <img
                          className="header-profile-pic"
                          src={props.loggedUser?.avatar}
                          alt="Profile image"
                        />
                        <div className="idsk-header-web__main--login-action-text">
                          <span className="govuk-body-s idsk-header-web__main--login-action-text-user-name">
                            {props.loggedUser?.name} {props.loggedUser?.surname}
                          </span>
                          <div className="govuk-!-margin-bottom-1">
                            <a
                              className="govuk-link idsk-header-web__main--login-action-text-logout idsk-header-web__main--login-logoutbtn"
                              title="odhlásiť"
                              href="#"
                              onClick={() => {
                                props.setLoggedUser(null);
                                localStorage.removeItem("accessToken");
                              }}
                            >
                              Odhlásiť
                            </a>
                            <span> | </span>
                            <Link
                              to="/profil"
                              title="profil"
                              className="govuk-link idsk-header-web__main--login-action-text-profile idsk-header-web__main--login-profilebtn"
                            >
                              Profil
                            </Link>
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="idsk-button idsk-header-web__main--login-profilebtn"
                        data-module="idsk-button"
                        onClick={() => navigate("/profil")}
                      >
                        Profil
                      </button>
                      <button
                        type="button"
                        className="idsk-button idsk-header-web__main--login-logoutbtn"
                        data-module="idsk-button"
                        onClick={() => {
                          props.setLoggedUser(null);
                          localStorage.removeItem("accessToken");
                        }}
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
        {/* TOGGLE CLASS FOR MOBILE VIEW HERE idsk-header-web__nav--mobile */}
        <div
          className={
            showMobileLogin
              ? `idsk-header-web__nav`
              : `idsk-header-web__nav idsk-header-web__nav--mobile`
          }
        >
          <div className="govuk-width-container">
            <div className="govuk-grid-row">
              <div className="govuk-grid-column-full"></div>
            </div>

            <div className="govuk-grid-row">
              <div className="govuk-grid-column-full">
                <div className="idsk-header-web__main--buttons">
                  <div
                    className={
                      props.loggedUser
                        ? `idsk-header-web__main--login  idsk-header-web__main--login--loggedIn`
                        : `idsk-header-web__main--login`
                    }
                  >
                    <a
                      href={`${process.env.REACT_APP_BE_URL}/users/googleLogin`}
                    >
                      <button
                        type="button"
                        className="idsk-button idsk-header-web__main--login-loginbtn"
                        data-module="idsk-button"
                      >
                        {t("log_in")}
                      </button>
                    </a>
                    <div className="idsk-header-web__main--login-action">
                      <img
                        className="header-profile-pic"
                        src={props.loggedUser?.avatar}
                        alt="Profile image"
                      />
                      <div className="idsk-header-web__main--login-action-text">
                        <span className="govuk-body-s idsk-header-web__main--login-action-text-user-name">
                          {props.loggedUser?.name} {props.loggedUser?.surname}
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
                          <Link
                            to="/profil"
                            title="profil"
                            className="govuk-link idsk-header-web__main--login-action-text-profile idsk-header-web__main--login-profilebtn"
                          >
                            Profil
                          </Link>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="idsk-button idsk-header-web__main--login-profilebtn"
                      data-module="idsk-button"
                      onClick={() => {
                        navigate("/profil");
                        setShowMobileLogin(false);
                      }}
                    >
                      Profil
                    </button>
                    <button
                      type="button"
                      className="idsk-button idsk-header-web__main--login-logoutbtn"
                      data-module="idsk-button"
                      onClick={() => {
                        props.setLoggedUser(null);
                        localStorage.removeItem("accessToken");
                      }}
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
