import { Link } from "react-router-dom";
import "../../styles/organizations.css";

function OrganizationWithServices() {
  return (
    <div className="govuk-width-container">
      <div className="gem-c-title govuk-!-margin-top-8 govuk-!-margin-bottom-8">
        <h1 className="gem-c-title__text govuk-heading-xl">
          Elektronicke služby Ministerstva vnútra SR
        </h1>
      </div>

      {/* One  Card Start */}
      <div className="idsk-card idsk-card-basic-variant govuk-!-display-block">
        <div className="idsk-card-content idsk-card-content-basic-variant">
          <div className="idsk-heading idsk-heading-basic-variant">
            <Link
              to="/organizations/minv/feedback/novy-pas"
              className="idsk-card-title govuk-link"
              title="Vybavenie nového pasu"
            >
              Vybavenie nového pasu
            </Link>
          </div>
        </div>
      </div>
      {/* One  Card End */}
      {/* One  Card Start */}
      <div className="idsk-card idsk-card-basic-variant govuk-!-display-block">
        <div className="idsk-card-content idsk-card-content-basic-variant">
          <div className="idsk-heading idsk-heading-basic-variant">
            <Link
              to="/organizations/minv"
              className="idsk-card-title govuk-link"
              title="Registrácia auta"
            >
              Registrácia auta
            </Link>
          </div>
        </div>
      </div>
      {/* One  Card End */}
      {/* One  Card Start */}
      <div className="idsk-card idsk-card-basic-variant govuk-!-display-block">
        <div className="idsk-card-content idsk-card-content-basic-variant">
          <div className="idsk-heading idsk-heading-basic-variant">
            <Link
              to="/organizations/minv"
              className="idsk-card-title govuk-link"
              title="Nahlásenie straty občianskeho preukazu"
            >
              Nahlásenie straty občianskeho preukazu
            </Link>
          </div>
        </div>
      </div>
      {/* One  Card End */}
    </div>
  );
}

export default OrganizationWithServices;
