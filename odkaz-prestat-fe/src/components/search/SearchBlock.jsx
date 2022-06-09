import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import "../../styles/organizations.css";

function SearchBlock() {
  const { t } = useTranslation();

  return (
    <>
      {" "}
      <div className="govuk-width-container">
        <div className="govuk-grid-row ">
          <div className="govuk-grid-column-full ">
            <h1 className="govuk-heading-l  govuk-!-margin-bottom-6">
              {t("SearchBlock-1")}
            </h1>
          </div>
        </div>
      </div>
      <div className="govuk-width-container">
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-full">
            <Link to="/organizations/bb" state={{ region: "banskobystrickom" }}>
              <div className="govuk-grid-column-one-quarter org-panel-info ">
                <div className="govuk-!-font-weight-bold">
                  {t("SearchBlock-3")} {t("SearchBlock-2")}
                </div>
              </div>
            </Link>
            <Link to="/organizations/ba" state={{ region: "bratislavskom" }}>
              <div className="govuk-grid-column-one-quarter org-panel-info ">
                <div className="govuk-!-font-weight-bold">
                  Bratislavský {t("SearchBlock-2")}
                </div>
              </div>
            </Link>
            <Link to="/organizations/ke" state={{ region: "košickom" }}>
              <div className="govuk-grid-column-one-quarter org-panel-info ">
                <div className="govuk-!-font-weight-bold">
                  Košický {t("SearchBlock-2")}
                </div>
              </div>
            </Link>
            <Link to="/organizations/nr" state={{ region: "nitrianskom" }}>
              <div className="govuk-grid-column-one-quarter org-panel-info ">
                <div className="govuk-!-font-weight-bold">
                  Nitriansky {t("SearchBlock-2")}
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-full">
            <Link to="/organizations/po" state={{ region: "prešovskom" }}>
              <div className="govuk-grid-column-one-quarter org-panel-info ">
                <div className="govuk-!-font-weight-bold">
                  Prešovský {t("SearchBlock-2")}
                </div>
              </div>
            </Link>
            <Link to="/organizations/tn" state={{ region: "trenčianskom" }}>
              <div className="govuk-grid-column-one-quarter org-panel-info ">
                <div className="govuk-!-font-weight-bold">
                  Trenčiansky {t("SearchBlock-2")}
                </div>
              </div>
            </Link>
            <Link to="/organizations/tt" state={{ region: "trnavskom" }}>
              <div className="govuk-grid-column-one-quarter org-panel-info ">
                <div className="govuk-!-font-weight-bold">
                  Trnavský {t("SearchBlock-2")}
                </div>
              </div>
            </Link>
            <Link to="/organizations/za" state={{ region: "žilinskom" }}>
              <div className="govuk-grid-column-one-quarter org-panel-info ">
                <div className="govuk-!-font-weight-bold">
                  Žilinský {t("SearchBlock-2")}
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBlock;
