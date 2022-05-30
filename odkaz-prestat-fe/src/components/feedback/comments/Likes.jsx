import React, { useState, useEffect } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { Button, Toast } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Likes(props) {
  const loggedUser = useSelector((state) => state.loggedUser);
  const [likeClicked, setLikeClicked] = useState(false);
  const [updatedReview, setUpdatedReview] = useState(null);

  useEffect(() => {
    if (!loggedUser) return;

    if (loggedUser) {
      let checkIfLikesContainLoggedUser = props.likes.filter(
        (obj) => obj.userId === loggedUser._id
      );

      // console.log(checkIfLikesContainLoggedUser.length > 0);
      if (checkIfLikesContainLoggedUser.length > 0) {
        setLikeClicked(true);
      } else {
        setLikeClicked(false);
      }
    }
  }, [props.likes]);

  const postLike = async () => {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_BE_URL}/reviews/${props.reviewId}/likes`,
        {
          method: "POST",
          body: JSON.stringify({ userId: loggedUser._id }),
          //credentials: "include",
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("RESPONSE AFTER CLICKING LIKE: ", data);
        setUpdatedReview(data);
      } else {
        console.log("login failed");
        if (response.status === 400) {
          console.log("bad request");
        }
        if (response.status === 404) {
          console.log("page not found");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfUserIsLogged = () => {
    if (loggedUser) {
      postLike();
      setLikeClicked(!likeClicked);
    } else {
      props.setShowLogInInfo(true);
    }
  };

  return (
    <>
      <div>
        <Button
          onClick={() => checkIfUserIsLogged()}
          variant={likeClicked ? "primary" : "outline-primary"}
        >
          <AiOutlineLike />{" "}
          {loggedUser && (
            <>
              {likeClicked ||
              props.likes.filter((obj) => obj.userId === loggedUser._id)
                .length > 0
                ? updatedReview
                  ? `${updatedReview?.likes.length}`
                  : `${props.likes.length}`
                : `${props.likes.length}`}
            </>
          )}
          {!loggedUser && `${props.likes.length}`}
        </Button>{" "}
      </div>
    </>
  );
}
