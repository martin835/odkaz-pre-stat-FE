import { useState } from "react";
import {
  Button,
  Form,
  ListGroup,
  ListGroupItem,
  Spinner,
} from "react-bootstrap";
import { MdOutlineSentimentDissatisfied } from "react-icons/md";
import { BiCommentAdd } from "react-icons/bi";
import { RiMailSendLine } from "react-icons/ri";
import { useSelector } from "react-redux";

function CommentsList(props) {
  const [showAddComment, setShowAddComment] = useState(false);
  const loggedUser = useSelector((state) => state.loggedUser);
  const [newComment, setNewComment] = useState({
    comment: "",
    userId: loggedUser?._id,
    commentDate: new Date(),
  });
  const postComment = async (e) => {
    e.preventDefault();
    console.log("I post");

    console.log(newComment);
    try {
      let response = await fetch(
        `${process.env.REACT_APP_BE_URL}/reviews/${props.reviewId}/comments`,
        {
          method: "POST",
          body: JSON.stringify(newComment),
          //credentials: "include",
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        props.loadComments();
        /* this.setState({ showAddComment: false }); */
        setShowAddComment(false);
      } else {
        // alert('something went wrong :(')
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteComment = async (e) => {
    e.preventDefault();
    console.log("I DELETE");
    console.log(e.target.id);

    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + e.target.id,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNjQ0NTgyZWExZDAwMTViYjAzZWEiLCJpYXQiOjE2NTM0NzAwOTksImV4cCI6MTY1NDY3OTY5OX0.6azm4qJ7UiFPjEXdeuv4UD-uENL1VfUmpGsVBMcp1js",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        props.loadComments();
      } else {
        // alert('something went wrong :(')
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {props.showComments && (
        <ListGroup>
          {props.isLoading && <Spinner animation="border" variant="primary" />}
          {props.reviewComments == 0 ? (
            <ListGroup.Item>
              Žiadne komentáre pre toto hodnotenie{" "}
              <MdOutlineSentimentDissatisfied />{" "}
            </ListGroup.Item>
          ) : (
            props.reviewComments.map((comment) => (
              <ListGroup.Item key={comment._id}>
                <i>"{comment.comment}"</i>
                <Button variant="link" id={comment._id} onClick={deleteComment}>
                  <i className="bi bi-trash3"></i>Delete
                </Button>
              </ListGroup.Item>
            ))
          )}
          <ListGroupItem>
            <Button
              variant="link"
              onClick={() =>
                showAddComment
                  ? setShowAddComment(false)
                  : setShowAddComment(true)
              }
            >
              <BiCommentAdd className="mr-2" /> Pridať komentár
            </Button>
          </ListGroupItem>
          {showAddComment && (
            <ListGroupItem className="px-0">
              <Form onSubmit={postComment}>
                <Form.Group className="mb-3 px-2" controlId="commentValue">
                  <Form.Label>Napíšte komentár: </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={newComment.comment}
                    onChange={(e) =>
                      setNewComment({ ...newComment, comment: e.target.value })
                    }
                  />
                </Form.Group>
                <Button variant="link" type="submit">
                  <RiMailSendLine className="mr-2" />
                  Publikovať komentár
                </Button>
              </Form>
            </ListGroupItem>
          )}
        </ListGroup>
      )}
    </>
  );
}

export default CommentsList;
