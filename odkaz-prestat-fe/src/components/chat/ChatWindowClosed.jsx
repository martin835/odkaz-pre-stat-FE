import { useState } from "react";
import { CloseButton } from "react-bootstrap";
import { FaChevronUp, FaTimes, FaRegCommentDots } from "react-icons/fa";
import { useSelector } from "react-redux";

function ChatWindowClosed(props) {
  const loggedUser = useSelector((state) => state.loggedUser);

  return (
    <>
      <div
        className={
          props.chatClosed
            ? "chat-closed d-flex justify-content-between align-items-center p-2"
            : "d-none"
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
            onClick={
              (() => props.setChatOpened(true),
              () => console.log("PING"),
              () => props.setChatClosed(false))
            }
          >
            <FaChevronUp className="mb-1" />
          </button>
          <button
            className="chat-button "
            onClick={() => props.setChatClosed(true)}
          >
            <FaTimes className="mb-1" />
          </button>
        </div>
      </div>
    </>
  );
}

export default ChatWindowClosed;
