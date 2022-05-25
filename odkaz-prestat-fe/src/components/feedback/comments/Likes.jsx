import React, { useState, useEffect } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { Button } from "react-bootstrap";

export default function Likes(props) {
  localStorage.getItem("accessToken");

  return (
    <div>
      <Button
        //onClick={toggleLike}
        variant={false ? "primary" : "outline-primary"}
      >
        <AiOutlineLike /> {`${props.likes.length}`}
      </Button>{" "}
    </div>
  );
}
