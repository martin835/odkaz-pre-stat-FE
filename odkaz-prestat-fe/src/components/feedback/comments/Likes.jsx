import React, { useState, useEffect } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Likes(props) {
  const loggedUser = useSelector((state) => state.loggedUser);
  const [likeClicked, setLikeClicked] = useState(false);
  const [updatedReview, setUpdatedReview] = useState(null);
  let checkIfLikesContainLoggedUser = props.likes.filter(
    (obj) => obj.userId === loggedUser._id
  );

  useEffect(() => {
    if (!loggedUser) return;
    console.log(checkIfLikesContainLoggedUser.length > 0);
    if (checkIfLikesContainLoggedUser.length > 0) {
      setLikeClicked(true);
    } else {
      setLikeClicked(false);
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

  return (
    <div>
      <Button
        onClick={() => {
          postLike();
          setLikeClicked(!likeClicked);
        }}
        variant={likeClicked ? "primary" : "outline-primary"}
      >
        <AiOutlineLike />{" "}
        {likeClicked || checkIfLikesContainLoggedUser.length > 0
          ? `${updatedReview?.likes.length}`
          : `${props.likes.length}`}
      </Button>{" "}
    </div>
  );
}
