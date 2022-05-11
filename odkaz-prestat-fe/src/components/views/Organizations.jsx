import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../styles/organizations.css";

function Organizations(props) {
  const { region, numberOfCenters } = useLocation().state;

  return (
    <>
      <div className="govuk-width-container">
        {/* <div className="gem-c-title govuk-!-margin-top-8 govuk-!-margin-bottom-8">
          <h1 className="gem-c-title__text govuk-heading-xl">
            Orgány verejnej moci poskytuce elektronické služby
          </h1>
        </div> */}
        {/* ROW START */}
        <div className="govuk-grid-row ">
          <div className="govuk-grid-column-one-third">
            <h2 className="gem-c-heading gem-c-heading--font-size-27" id="bb">
              Klienstké centrá v {region} kraji
            </h2>
            <div
              className="gem-c-big-number govuk-!-margin-bottom-3"
              aria-hidden="true"
            >
              <span className="gem-c-big-number__value">{numberOfCenters}</span>
            </div>
          </div>
          <div className="govuk-grid-column-two-thirds">
            {/* One Org Card Start */}
            <div className="idsk-card idsk-card-basic-variant govuk-!-display-block">
              <div className="idsk-card-content idsk-card-content-basic-variant">
                <div className="idsk-heading idsk-heading-basic-variant">
                  <Link
                    to="/feedback/ba"
                    state={{ provider: "klientske centrum Bratislava" }}
                    className="idsk-card-title govuk-link"
                    title="Klientske centrum Bratislava"
                  >
                    Klientske centrum Bratislava
                  </Link>
                </div>
              </div>
            </div>
            {/* One Org Card End */}
            {/* One Org Card Start */}
            <div className="idsk-card idsk-card-basic-variant govuk-!-display-block">
              <div className="idsk-card-content idsk-card-content-basic-variant">
                <div className="idsk-heading idsk-heading-basic-variant">
                  <Link
                    to="/feedback/sc"
                    state={{ provider: "klientske centrum Senec" }}
                    className="idsk-card-title govuk-link"
                    title="Klientske centrum Senec"
                  >
                    Klientske centrum Senec
                  </Link>
                </div>
              </div>
            </div>
            {/* One Org Card End */}
            {/* One Org Card Start */}
            <div className="idsk-card idsk-card-basic-variant govuk-!-display-block">
              <div className="idsk-card-content idsk-card-content-basic-variant">
                <div className="idsk-heading idsk-heading-basic-variant">
                  <Link
                    to="/feedback/ma"
                    state={{ provider: "klientske centrum Malacky" }}
                    className="idsk-card-title govuk-link"
                    title="Klientske centrum Malacky"
                  >
                    Klientske centrum Malacky
                  </Link>
                </div>
              </div>
            </div>
            {/* One Org Card End */}

            {/* One Org Card Start */}
            <div className="idsk-card idsk-card-basic-variant govuk-!-display-block">
              <div className="idsk-card-content idsk-card-content-basic-variant">
                <div className="idsk-heading idsk-heading-basic-variant">
                  <Link
                    to="/feedback/pk"
                    state={{ provider: "okresný úrad Pezinok" }}
                    className="idsk-card-title govuk-link"
                    title="Okresný úrad Pezinok"
                  >
                    Okresný úrad Pezinok
                  </Link>
                </div>
              </div>
            </div>
            {/* One Org Card End */}
          </div>
        </div>
        {/* ROW END */}
      </div>
    </>
  );
}

export default Organizations;
