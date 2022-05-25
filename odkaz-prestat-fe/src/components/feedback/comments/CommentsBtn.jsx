import { Button } from "react-bootstrap";
import { BiCommentDots } from "react-icons/bi";

const CommentsBtn = (props) => {
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
        <BiCommentDots className="mr-2" />
        Komentáre
      </Button>
    </div>
  );
};

export default CommentsBtn;
