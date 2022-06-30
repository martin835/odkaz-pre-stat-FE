import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

function HeaderCaption() {
  //header Caption is the blue, expandable area of the header
  const [headerCaption, setHeaderCaption] = useState(true);
  const { t } = useTranslation();
  return (
    <>
      {headerCaption ? (
        <>
          {" "}
          <div className="idsk-header-web__brand-gestor">
            <span className="govuk-body-s idsk-header-web__brand-gestor-text">
              {t("header-c-1")} &nbsp;
              <button
                className="idsk-header-web__brand-gestor-button"
                aria-label="Zobraziť informácie o stránke"
                aria-expanded="false"
                data-text-for-hide="Skryť informácie o stránke"
                data-text-for-show="Zobraziť informácie o stránke"
                onClick={() => setHeaderCaption(!headerCaption)}
              >
                {t("header-c-2")}
                <span className="idsk-header-web__link-arrow"></span>
              </button>
            </span>
            <span className="govuk-body-s idsk-header-web__brand-gestor-text--mobile">
              <button
                className="idsk-header-web__brand-gestor-button"
                aria-label="Zobraziť informácie o stránke"
                aria-expanded="false"
                data-text-for-hide="Skryť informácie o stránke"
                data-text-for-show="Zobraziť informácie o stránke"
                onClick={() => setHeaderCaption(!headerCaption)}
              >
                {t("header-c-3")}
                <span className="idsk-header-web__link-arrow"></span>
              </button>
            </span>

            <div className="idsk-header-web__brand-dropdown">
              <div className="govuk-width-container">
                <div className="govuk-grid-row">
                  <div className="govuk-grid-column-one-half">
                    <h3 className="govuk-body-s">{t("header-c-4")}</h3>
                    <p className="govuk-body-s">{t("header-c-5")}</p>
                  </div>
                  <div className="govuk-grid-column-one-half">
                    <h3 className="govuk-body-s">{t("header-c-6")}</h3>
                    <p className="govuk-body-s">{t("header-c-7")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="idsk-header-web__brand-spacer"></div>
        </>
      ) : (
        <>
          {" "}
          <div className="idsk-header-web__brand-gestor">
            <span className="govuk-body-s idsk-header-web__brand-gestor-text">
              {t("header-c-1")} &nbsp;
              <button
                className="idsk-header-web__brand-gestor-button idsk-header-web__brand-gestor-button--active"
                aria-label="Skryť informácie o stránke"
                aria-expanded="true"
                data-text-for-hide="Skryť informácie o stránke"
                data-text-for-show="Zobraziť informácie o stránke"
                onClick={() => setHeaderCaption(!headerCaption)}
              >
                {t("header-c-8")}
                <span className="idsk-header-web__link-arrow"></span>
              </button>
            </span>
            <span className="govuk-body-s idsk-header-web__brand-gestor-text--mobile">
              <button
                className="idsk-header-web__brand-gestor-button idsk-header-web__brand-gestor-button--active"
                aria-label="Skryť informácie o stránke"
                aria-expanded="true"
                data-text-for-hide="Skryť informácie o stránke"
                data-text-for-show="Zobraziť informácie o stránke"
                onClick={() => setHeaderCaption(!headerCaption)}
              >
                {t("header-c-3")}
                <span className="idsk-header-web__link-arrow"></span>
              </button>
            </span>

            <div className="idsk-header-web__brand-dropdown idsk-header-web__brand-dropdown--active">
              <div className="govuk-width-container">
                <div className="govuk-grid-row">
                  <div className="govuk-grid-column-one-half">
                    <h3 className="govuk-body-s">{t("header-c-4")}</h3>
                    <p className="govuk-body-s">{t("header-c-5")}</p>
                  </div>
                  <div className="govuk-grid-column-one-half">
                    <h3 className="govuk-body-s">{t("header-c-6")}</h3>
                    <p className="govuk-body-s">{t("header-c-7")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="idsk-header-web__brand-spacer idsk-header-web__brand-spacer--active"></div>
        </>
      )}
    </>
  );
}

export default HeaderCaption;
