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

  const createChat = async (e, recipientId) => {
    e.preventDefault();
    try {
      let response = await fetch(`${process.env.REACT_APP_BE_URL}/chats`, {
        method: "POST",
        body: JSON.stringify({ recipient: recipientId }),
        //credentials: "include",
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      });
      if (response.ok) {
        const data = await response.json();
        //If new chat is created I am getting back object with that chat
        //If there is existing chat (or chats) I am getting back array of chats
        //In this case, we shouldn't have more than 1 chat in the array (...but in the future it could be - e.g. group chats).
        console.log("CHAT FROM RESPONSE: ", Array.isArray(data));

        if (Array.isArray(data)) {
          props.setChat(data[0]._id);
        } else {
          props.setChat(data._id);
        }
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
                onClick={(e) => {
                  props.setChatActive(true);
                  props.setChatRecipient(admin._id);
                  createChat(e, admin._id);
                }}
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
