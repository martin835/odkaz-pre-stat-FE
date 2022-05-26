import { useState } from "react";
import CommentsBtn from "./CommentsBtn";
import CommentsList from "./CommentsList";
import Likes from "./Likes";

function CommentsLikesCardFooter(props) {
  const [showComments, setShowComments] = useState(false);
  const [bookComments, setBookComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadComments = async () => {
    console.log("i am mounted");
    let albumId = props.albumId;

    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + albumId,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNjQ0NTgyZWExZDAwMTViYjAzZWEiLCJpYXQiOjE2NTM0NzAwOTksImV4cCI6MTY1NDY3OTY5OX0.6azm4qJ7UiFPjEXdeuv4UD-uENL1VfUmpGsVBMcp1js",
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

        setBookComments(data);
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
          isLoading={isLoading}
          showComments={showComments}
          loadComments={loadComments}
        />
      </div>
    </>
  );
}

export default CommentsLikesCardFooter;
