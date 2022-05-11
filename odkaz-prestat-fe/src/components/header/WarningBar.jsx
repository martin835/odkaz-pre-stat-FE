import { useState } from "react";
import { useTranslation } from "react-i18next";

function WarningBar() {
  const [showWarningBar, setShowWarningBar] = useState(true);
  const { t } = useTranslation();

  return (
    showWarningBar && (
      <div className="idsk-header-web__banner ">
        <div className="govuk-width-container">
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-full">
              <div className="govuk-body-s idsk-header-web__banner-title">
                <strong className="govuk-tag govuk-phase-banner__content__tag">
                  {t("test_version")}
                </strong>
              </div>
              <button
                className="idsk-header-web__banner-close"
                aria-label="Zavrieť banner"
                onClick={() => setShowWarningBar(false)}
              >
                <span className="idsk-header-web__menu-close"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default WarningBar;
