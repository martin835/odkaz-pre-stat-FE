import yoda from "../../assets/images/yoda-plh.jpg";
import "../../styles/userReviewCard.css";

function UserReviewCard() {
  return (
    <div className="govuk-width-container govuk-!-margin-top-6 ">
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-one-third">
          <div className="idsk-card idsk-card-secondary">
            <div className="govuk-grid-row">
              <div className="govuk-grid-column-one-third">
                <img
                  className="card-img-user"
                  width="100%"
                  src={yoda}
                  alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                  aria-hidden="true"
                />
              </div>
            </div>

            <div className="idsk-card-content idsk-card-content-secondary">
              <div className="idsk-card-meta-container">
                <span className="idsk-card-meta idsk-card-meta-date">
                  <a
                    href="#"
                    className="govuk-link"
                    title="Pridané dňa: 1.7.2020"
                  >
                    1.7.2020
                  </a>
                </span>{" "}
                <span className="idsk-card-meta idsk-card-meta-tag">
                  <a href="#" className="govuk-link" title="Tag 1">
                    Tag 1
                  </a>
                </span>
                <span className="idsk-card-meta idsk-card-meta-tag">
                  <a href="#" className="govuk-link" title="Tag 2">
                    Tag 2
                  </a>
                </span>
              </div>

              <div className="idsk-heading idsk-heading-secondary">
                <a
                  href="#"
                  className="idsk-card-title govuk-link"
                  title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </a>
              </div>

              <p className="idsk-body idsk-body-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserReviewCard;
