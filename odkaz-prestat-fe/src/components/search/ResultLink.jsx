import { Link } from "react-router-dom";

function ResultLink({ clientCenter }) {
  return (
    <div className="idsk-card idsk-card-basic-variant govuk-!-display-block">
      <div className="idsk-card-content idsk-card-content-basic-variant">
        <div className="idsk-heading idsk-heading-basic-variant">
          <Link
            to={`/feedback/${clientCenter.district.toLowerCase()}`}
            state={{ clientCenter: clientCenter }}
            className="idsk-card-title govuk-link"
            title={clientCenter.name}
          >
            {clientCenter.name}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ResultLink;
