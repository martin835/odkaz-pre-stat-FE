import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import "../../styles/organizations.css";

function SearchBlock() {
  return (
    <>
      {" "}
      <div data-module="idsk-intro-block">
        <div className="idsk-intro-block ">
          <div className="govuk-grid-row ">
            <div className="govuk-grid-column-full govuk-width-container">
              <h1 className="govuk-heading-xl heading-bigger-margin govuk-!-margin-bottom-6">
                Ohodnoďte prácu klientského centra vo Vašom kraji.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="govuk-width-container">
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-full"></div>
          <Link to="/organizations/bb" state={{ region: "banskobystrickom" }}>
            <div className="govuk-grid-column-one-quarter org-panel-info ">
              <div className="govuk-!-font-weight-bold">
                Banskobystrický kraj
              </div>
            </div>
          </Link>
          <Link to="/organizations/ba" state={{ region: "bratislavskom" }}>
            <div className="govuk-grid-column-one-quarter org-panel-info ">
              <div className="govuk-!-font-weight-bold">Bratislavský kraj</div>
            </div>
          </Link>
          <Link to="/organizations/ke" state={{ region: "košickom" }}>
            <div className="govuk-grid-column-one-quarter org-panel-info ">
              <div className="govuk-!-font-weight-bold">Košický kraj</div>
            </div>
          </Link>
          <Link to="/organizations/nr" state={{ region: "nitrianskom" }}>
            <div className="govuk-grid-column-one-quarter org-panel-info ">
              <div className="govuk-!-font-weight-bold">Nitriansky kraj</div>
            </div>
          </Link>
        </div>
        <div className="govuk-grid-row">
          <Link to="/organizations/po" state={{ region: "prešovskom" }}>
            <div className="govuk-grid-column-one-quarter org-panel-info ">
              <div className="govuk-!-font-weight-bold">Prešovský kraj</div>
            </div>
          </Link>
          <Link to="/organizations/tn" state={{ region: "trenčianskom" }}>
            <div className="govuk-grid-column-one-quarter org-panel-info ">
              <div className="govuk-!-font-weight-bold">Trenčiansky kraj</div>
            </div>
          </Link>
          <Link to="/organizations/tt" state={{ region: "trnavskom" }}>
            <div className="govuk-grid-column-one-quarter org-panel-info ">
              <div className="govuk-!-font-weight-bold">Trnavský kraj</div>
            </div>
          </Link>
          <Link to="/organizations/za" state={{ region: "žilinskom" }}>
            <div className="govuk-grid-column-one-quarter org-panel-info ">
              <div className="govuk-!-font-weight-bold">Žilinský kraj</div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SearchBlock;
