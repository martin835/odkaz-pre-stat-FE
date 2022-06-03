import { useEffect } from "react";
import { useState } from "react";
import { ListGroup } from "react-bootstrap";
import { CloseButton } from "react-bootstrap";
import { FaChevronDown, FaTimes, FaRegCommentDots } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { useSelector } from "react-redux";
import "./chat.css";

function ChatWindowOpened(props) {
  const loggedUser = useSelector((state) => state.loggedUser);

  return (
    <>
      <div className={props.chatActive ? "d-none" : "chat-opened"}>
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
              onClick={() => props.setChatOpened(false)}
            >
              <FaChevronDown className="mb-1" />
            </button>
            <button
              className="chat-button "
              onClick={() => props.setChatClosed(true)}
            >
              <FaTimes className="mb-1" />
            </button>
          </div>
        </div>
        <div className="chat-opened-body">
          <ListGroup>
            {props.adminsOnline?.map((admin) => (
              <ListGroup.Item
                key={admin._id}
                className="chat-contact-card"
                onClick={() => props.setChatActive(true)}
              >
                <img
                  className="card-img-user-comment"
                  src={admin.avatar}
                  alt="profile imange"
                />{" "}
                <span>🟢 {admin.name} je online</span>
              </ListGroup.Item>
            ))}
          </ListGroup>

          {/* <div className="chat-opened-footer d-flex">
            <Form.Control
              type="text"
              placeholder="Normal text"
              className="w-75"
            />{" "}
            <button className="chat-button ml-2">
              <FiSend />
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default ChatWindowOpened;
