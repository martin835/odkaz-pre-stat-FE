import { useState } from "react";
import { useTranslation } from "react-i18next";

function WarningBar() {
  const [showWarningBar, setShowWarningBar] = useState(true);
  const { t } = useTranslation();

  return (
    showWarningBar && (
      <div class="idsk-header-web__banner ">
        <div class="govuk-width-container">
          <div class="govuk-grid-row">
            <div class="govuk-grid-column-full">
              <div class="govuk-body-s idsk-header-web__banner-title">
                <strong class="govuk-tag govuk-phase-banner__content__tag">
                  {t("test_version")}
                </strong>
              </div>
              <button
                class="idsk-header-web__banner-close"
                aria-label="Zavrieť banner"
                onClick={() => setShowWarningBar(false)}
              >
                <span class="idsk-header-web__menu-close"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default WarningBar;
