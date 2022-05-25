import { Component } from "react";
import {
  ListGroup,
  Button,
  ListGroupItem,
  Form,
  Spinner,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import CommentsList from "./CommentsList";

const Comments = (props) => {
  return (
    <div>
      <Button
        variant="link"
        className="mb-2 "
        onClick={() => {
          props.unHideComments();
          props.loadComments();
        }}
      >
        <i className="bi bi-list mr-2"></i>Komentáre
      </Button>
    </div>
  );
};

export default Comments;
