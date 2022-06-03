import { useEffect } from "react";
import { useState } from "react";
import { ListGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { CloseButton } from "react-bootstrap";
import { FaChevronDown, FaTimes, FaRegCommentDots } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { useSelector } from "react-redux";
import "./chat.css";

function ChatActive(props) {
  const loggedUser = useSelector((state) => state.loggedUser);

  return (
    <>
      <div className="chat-opened">
        <div className="chat-head d-flex justify-content-between align-items-center p-2">
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
              onClick={() => props.setChatClosed(true)}
            >
              <FaChevronDown className="mb-1" />
            </button>
            <button
              className="chat-button "
              onClick={() => props.setChatActive(false)}
            >
              <FaTimes className="mb-1" />
            </button>
          </div>
        </div>
        <div className="chat-active-body  ">
          <ListGroup className="">
            <ListGroup.Item className="">
              <span>🟢 message 123</span>
            </ListGroup.Item>
          </ListGroup>

          <div className="chat-active-footer  d-flex ">
            <Form.Control
              type="text"
              placeholder="Normal text"
              className="w-75"
            />{" "}
            <button className="chat-button ml-2 ">
              <FiSend />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatActive;
