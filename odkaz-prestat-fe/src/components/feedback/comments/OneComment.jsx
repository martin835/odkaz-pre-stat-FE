import { useEffect } from "react";
import { useState } from "react";
import { ListGroup } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { BiCommentDots } from "react-icons/bi";

const OneComment = (props) => {
  const [commentAuthor, setCommentAuthor] = useState(null);

  useEffect(() => {
    loadCommentAuthor();
  }, []);

  const loadCommentAuthor = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BE_URL}/users/${props.comment.userId}`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setCommentAuthor(data);
      } else {
        console.log("error on fetching users");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Row className="mt-3">
        <Col xs={2}>
          <img
            src={commentAuthor?.avatar}
            alt=""
            className="card-img-user-comment"
            referrerpolicy="no-referrer"
          />{" "}
        </Col>

        <Col xs={10}>
          <div className="comment-content-width text-wrap">
            {" "}
            {props.comment.comment}
          </div>
          {/* <Button
            variant="link"
            className="float-right"
            id={props.comment._id}
            onClick={props.deleteComment}
          >
            <i className="bi bi-trash3"></i>Delete
          </Button> */}
        </Col>
      </Row>
    </div>
  );
};

export default OneComment;
