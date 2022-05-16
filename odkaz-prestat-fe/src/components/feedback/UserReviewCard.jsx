import yoda from "../../assets/images/yoda-plh.jpg";
import "../../styles/userReviewCard.css";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function UserReviewCard() {
  return (
    <div className="govuk-width-container govuk-!-margin-top-8 ">
      <h2 className="govuk-heading-m govuk-!-margin-bottom-7">
        Naposledy hodnotili:
      </h2>
      {/* ROW START */}
      <div className="govuk-grid-row ">
        {/* ONE THIRD START */}
        <div className="govuk-grid-column-one-third">
          <div className="idsk-card idsk-card-secondary ">
            <div className="d-flex align-items-center">
              <div>
                <img
                  className="card-img-user"
                  width="100%"
                  src={yoda}
                  alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                  aria-hidden="true"
                />
              </div>
              <div className="d-flex w-50 justify-content-around">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
                <BsStar />
              </div>
            </div>

            <div className="idsk-card-content idsk-card-content-secondary">
              <div className="idsk-card-meta-container govuk-!-margin-top-3 ">
                <span className="idsk-card-meta idsk-card-meta-date">
                  <strong>Lukáš Jurena</strong>
                </span>{" "}
                <span className="idsk-card-meta  idsk-card-meta-date ">
                  15. 5. 2022 hodnotil
                </span>
                <span className="idsk-card-meta ">
                  <strong>Klientské centrum Kežmarok</strong>
                </span>
              </div>

              <p className="idsk-body idsk-body-secondary">
                "Perfektné, najlepšie miesto na svete! "
              </p>
            </div>
          </div>
        </div>
        {/* ONE THIRD END */}

        {/* ONE THIRD START */}
        <div className="govuk-grid-column-one-third">
          <div className="idsk-card idsk-card-secondary">
            <div className="d-flex align-items-center">
              <div>
                <img
                  className="card-img-user"
                  width="100%"
                  src={yoda}
                  alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                  aria-hidden="true"
                />
              </div>
              <div className="d-flex w-50 justify-content-around">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
                <BsStar />
              </div>
            </div>

            <div className="idsk-card-content idsk-card-content-secondary">
              <div className="idsk-card-meta-container govuk-!-margin-top-3">
                <span className="idsk-card-meta idsk-card-meta-date">
                  <strong>Lukáš Jurena</strong>
                </span>{" "}
                <span className="idsk-card-meta idsk-card-meta-date">
                  15. 5. 2022 hodnotil
                </span>
                <span className="idsk-card-meta ">
                  <strong>Klientské centrum Kežmarok</strong>
                </span>
              </div>

              <p className="idsk-body idsk-body-secondary">
                "Úplne celé zle... In publishing and graphic design, Lorem ipsum
                is a placeholder text commonly used to demonstrate the visual
                form of a document or a typeface without relying on meaningful
                content. "
              </p>
            </div>
          </div>
        </div>
        {/* ONE THIRD END */}
        {/* ONE THIRD START */}
        <div className="govuk-grid-column-one-third">
          <div className="idsk-card idsk-card-secondary">
            <div className="d-flex align-items-center">
              <div>
                <img
                  className="card-img-user"
                  width="100%"
                  src={yoda}
                  alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                  aria-hidden="true"
                />
              </div>
              <div className="d-flex w-50 justify-content-around">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
                <BsStar />
              </div>
            </div>

            <div className="idsk-card-content idsk-card-content-secondary">
              <div className="idsk-card-meta-container govuk-!-margin-top-3">
                <span className="idsk-card-meta idsk-card-meta-date">
                  <strong>Lukáš Jurena</strong>
                </span>{" "}
                <span className="idsk-card-meta idsk-card-meta-date">
                  15. 5. 2022 hodnotil
                </span>
                <span className="idsk-card-meta idsk-card-meta-date">
                  <strong>Klientské centrum Kežmarok</strong>
                </span>
              </div>

              <p className="idsk-body idsk-body-secondary">
                "Úplne celé zle... "
              </p>
            </div>
          </div>
        </div>
        {/* ONE THIRD END */}
      </div>
      {/* ROW START */}
      {/* ROW END */}
      <div className="govuk-grid-row ">
        {/* ONE THIRD START */}
        <div className="govuk-grid-column-one-third">
          <div className="idsk-card idsk-card-secondary ">
            <div className="d-flex align-items-center">
              <div>
                <img
                  className="card-img-user"
                  width="100%"
                  src={yoda}
                  alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                  aria-hidden="true"
                />
              </div>
              <div className="d-flex w-50 justify-content-around">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
                <BsStar />
              </div>
            </div>

            <div className="idsk-card-content idsk-card-content-secondary">
              <div className="idsk-card-meta-container govuk-!-margin-top-3 ">
                <span className="idsk-card-meta idsk-card-meta-date">
                  <strong>Lukáš Jurena</strong>
                </span>{" "}
                <span className="idsk-card-meta idsk-card-meta-date">
                  15. 5. 2022 hodnotil
                </span>
                <span className="idsk-card-meta idsk-card-meta-date">
                  <strong>Klientské centrum Kežmarok</strong>
                </span>
              </div>

              <p className="idsk-body idsk-body-secondary">
                "Perfektné, najlepšie miesto na svete! "
              </p>
            </div>
          </div>
        </div>
        {/* ONE THIRD END */}

        {/* ONE THIRD START */}
        <div className="govuk-grid-column-one-third">
          <div className="idsk-card idsk-card-secondary">
            <div className="d-flex align-items-center">
              <div>
                <img
                  className="card-img-user"
                  width="100%"
                  src={yoda}
                  alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                  aria-hidden="true"
                />
              </div>
              <div className="d-flex w-50 justify-content-around">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
                <BsStar />
              </div>
            </div>

            <div className="idsk-card-content idsk-card-content-secondary">
              <div className="idsk-card-meta-container govuk-!-margin-top-3">
                <span className="idsk-card-meta idsk-card-meta-date">
                  <strong>Lukáš Jurena</strong>
                </span>{" "}
                <span className="idsk-card-meta idsk-card-meta-date">
                  15. 5. 2022 hodnotil
                </span>
                <span className="idsk-card-meta idsk-card-meta-date">
                  <strong>Klientské centrum Kežmarok</strong>
                </span>
              </div>

              <p className="idsk-body idsk-body-secondary">
                "Úplne celé zle... In publishing and graphic design, Lorem ipsum
                is a placeholder text commonly used to demonstrate the visual
                form of a document or a typeface without relying on meaningful
                content. "
              </p>
            </div>
          </div>
        </div>
        {/* ONE THIRD END */}
        {/* ONE THIRD START */}
        <div className="govuk-grid-column-one-third">
          <div className="idsk-card idsk-card-secondary">
            <div className="d-flex align-items-center">
              <div>
                <img
                  className="card-img-user"
                  width="100%"
                  src={yoda}
                  alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
                  aria-hidden="true"
                />
              </div>
              <div className="d-flex w-50 justify-content-around">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
                <BsStar />
              </div>
            </div>

            <div className="idsk-card-content idsk-card-content-secondary">
              <div className="idsk-card-meta-container govuk-!-margin-top-3">
                <span className="idsk-card-meta idsk-card-meta-date">
                  <strong>Lukáš Jurena</strong>
                </span>{" "}
                <span className="idsk-card-meta idsk-card-meta-date">
                  15. 5. 2022 hodnotil
                </span>
                <span className="idsk-card-meta idsk-card-meta-date">
                  <strong>Klientské centrum Kežmarok</strong>
                </span>
              </div>

              <p className="idsk-body idsk-body-secondary">
                "Úplne celé zle... "
              </p>
            </div>
          </div>
        </div>
        {/* ONE THIRD END */}
      </div>
      {/* ROW END */}
    </div>
  );
}

export default UserReviewCard;
