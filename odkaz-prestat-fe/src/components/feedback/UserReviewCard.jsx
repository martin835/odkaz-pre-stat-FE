import yoda from "../../assets/images/yoda-plh.jpg";
import "../../styles/userReviewCard.css";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

function UserReviewCard(props) {
  return (
    <div className="govuk-grid-column-one-third">
      <div className="idsk-card idsk-card-secondary ">
        <div className="d-flex align-items-center">
          <div>
            <img
              className="card-img-user"
              width="100%"
              src={props.review.user.avatar}
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
              <strong>
                {props.review.user.name} {props.review.user.surname}
              </strong>
            </span>{" "}
            <span className="idsk-card-meta  idsk-card-meta-date ">
              {props.review.createdAt} hodnotil
            </span>
            <span className="idsk-card-meta ">
              <strong>Klientské centrum Kežmarok</strong>
            </span>
          </div>

          <p className="idsk-body idsk-body-secondary">
            "{props.review.review}"
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserReviewCard;
