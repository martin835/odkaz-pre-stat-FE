import { useState } from "react";
import { CloseButton } from "react-bootstrap";
import { FaChevronUp, FaTimes, FaRegCommentDots } from "react-icons/fa";
import { useSelector } from "react-redux";

function ChatWindowClosed(props) {
  const [chatClosed, setChatClosed] = useState(false);
  const loggedUser = useSelector((state) => state.loggedUser);

  return (
    <>
      <div
        className={
          chatClosed
            ? "d-none"
            : "chat-closed d-flex justify-content-between align-items-center p-2"
        }
      >
        <div>
          {" "}
          <img
            src={loggedUser?.avatar}
            alt=""
            className="card-img-user-comment mr-1"
          />{" "}
          <strong>
            Chat s adminom <FaRegCommentDots />
          </strong>
        </div>
        <div className="">
          <button
            className="chat-button"
            onClick={() => props.setChatOpened(false)}
          >
            <FaChevronUp className="mb-1" />
          </button>
          <button
            className="chat-button "
            onClick={() => {
              console.log("ping");
              setChatClosed(true);
            }}
          >
            <FaTimes className="mb-1" />
          </button>
        </div>
      </div>
    </>
  );
}

export default ChatWindowClosed;
