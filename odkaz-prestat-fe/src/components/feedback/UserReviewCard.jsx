import { format, parseISO } from "date-fns";
import { useEffect, useState } from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../../styles/userReviewCard.css";
import Likes from "./comments/Likes";
import Comments from "./comments/CommentsBtn";
import CommentsLikesCardFooter from "./comments/CommentsLikesCardFooter";
import { Toast } from "react-bootstrap";

function UserReviewCard(props) {
  const [service, setservice] = useState(null);
  const [showLogInInfo, setShowLogInInfo] = useState(false);

  useEffect(() => {
    fetchProvider();
  }, []);

  const toggleShowLogInInfo = () => setShowLogInInfo(!showLogInInfo);

  //In reality I am fetching a service here,  but service has a provider in it's model.
  const fetchProvider = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BE_URL}/services/${props.review.service._id}`,
        {
          method: "GET",
          //   headers: {
          //     "Content-type": "application/json",
          //     Authorization: "Bearer " + localStorage.getItem("accessToken"),
          //   },
        }
      );
      if (response.ok) {
        const data = await response.json();
        //console.log(data);
        setservice(data);
      } else {
        console.log("error on fetching users");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
            {props.review.rating === 1 && (
              <>
                <BsStarFill /> <BsStar /> <BsStar /> <BsStar /> <BsStar />
              </>
            )}
            {props.review.rating === 2 && (
              <>
                <BsStarFill /> <BsStarFill />
                <BsStar /> <BsStar /> <BsStar />
              </>
            )}
            {props.review.rating === 3 && (
              <>
                <BsStarFill />
                <BsStarFill /> <BsStarFill /> <BsStar /> <BsStar />
              </>
            )}
            {props.review.rating === 4 && (
              <>
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStar />
              </>
            )}
            {props.review.rating === 5 && (
              <>
                <BsStarFill /> <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
              </>
            )}
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
              {format(parseISO(props.review.createdAt), "PP")} hodnotil
            </span>
            <span className="idsk-card-meta ">
              <Link
                to={`/provider/${service?.provider._id}`}
                className="govuk-link"
              >
                <strong>{service?.provider.name}</strong>
              </Link>{" "}
              službu <strong>{props.review.service.type}</strong>
            </span>
          </div>
          <h3 className="govuk-heading-s">
            {" "}
            {props.review.rating === 1 && "Veľmi nespokojný"}
            {props.review.rating === 2 && "Nespokojný"}
            {props.review.rating === 3 && "Ani spokojný ani nespokojný"}
            {props.review.rating === 4 && "Spokojný"}
            {props.review.rating === 5 && "Veľmi spokojný"}
          </h3>
          <p className="idsk-body idsk-body-secondary">
            {props.review.review && '"'}
            {props.review.review}
            {props.review.review && '"'}
          </p>
        </div>
        <div
          className={showLogInInfo ? "d-block p-3" : "d-none p-3"}
          position="top-center"
        >
          <Toast show={showLogInInfo} onClose={toggleShowLogInInfo}>
            <Toast.Header>
              <strong className="mr-auto">Musíte sa prihlásiť</strong>
            </Toast.Header>
            <Toast.Body>
              Aby ste mohhli pridávať páčiky, komentáre a hodnotenia, musíte sa
              prihlásiť.
            </Toast.Body>
          </Toast>
        </div>

        <CommentsLikesCardFooter
          review={props.review}
          toggleShowLogInInfo={toggleShowLogInInfo}
          showLogInInfo={showLogInInfo}
          setShowLogInInfo={setShowLogInInfo}
        />
      </div>
    </div>
  );
}

export default UserReviewCard;
