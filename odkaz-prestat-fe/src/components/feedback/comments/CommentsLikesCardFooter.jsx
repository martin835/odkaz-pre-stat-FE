import { useState } from "react";
import CommentsBtn from "./CommentsBtn";
import CommentsList from "./CommentsList";
import Likes from "./Likes";

function CommentsLikesCardFooter(props) {
  const [showComments, setShowComments] = useState(false);
  const [reviewComments, setReviewComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadComments = async () => {
    console.log("i am mounted");

    try {
      let response = await fetch(
        `${process.env.REACT_APP_BE_URL}/reviews/${props.review._id}/comments`,
        {
          method: "GET",

          //credentials: "include",
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        /* console.log(data) */
        /* this.setState({
              bookComments: data,
              isLoading: false
            }); */

        setReviewComments(data);
        setIsLoading(false);
      } else {
        // alert('something went wrong :(')
      }
    } catch (error) {
      console.log(error);
    }
  };

  const unHideComments = () => {
    showComments ? setShowComments(false) : setShowComments(true);
  };

  return (
    <>
      <div id="footer-wrapper" className="d-flex justify-content-between mt-4">
        <Likes
          likes={props.review.likes}
          reviewId={props.review._id}
          userId={props.review.user._id}
          toggleShowLogInInfo={props.toggleShowLogInInfo}
          showLogInInfo={props.showLogInInfo}
          setShowLogInInfo={props.setShowLogInInfo}
        />
        <CommentsBtn
          showComments={showComments}
          setShowComments={setShowComments}
          unHideComments={unHideComments}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          loadComments={loadComments}
        />
      </div>
      <div>
        <CommentsList
          reviewId={props.review._id}
          isLoading={isLoading}
          showComments={showComments}
          loadComments={loadComments}
          reviewComments={reviewComments}
          setReviewComments={setReviewComments}
        />
      </div>
    </>
  );
}

export default CommentsLikesCardFooter;
