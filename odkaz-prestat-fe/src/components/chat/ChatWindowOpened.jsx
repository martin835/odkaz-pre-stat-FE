import { useEffect } from "react";
import { useState } from "react";
import { ListGroup } from "react-bootstrap";
import { ListGroupItem } from "react-bootstrap";
import { CloseButton } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FaChevronDown, FaTimes, FaRegCommentDots } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./chat.css";

function ChatWindowOpened(props) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const loggedUser = useSelector((state) => state.loggedUser);
  const adminsOnline = useSelector((state) => state.adminsOnline);
  const usersOnline = useSelector((state) => state.usersOnline);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    if (loggedUser && loggedUser.role === "admin") {
      loadChats();
    }
  }, []);

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
        //console.log("CHAT FROM RESPONSE: ", Array.isArray(data));

        if (Array.isArray(data)) {
          props.setChat(data[0]._id);
          loadMessages(data[0]._id);
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

  const loadMessages = async (chatId) => {
    try {
      let response = await fetch(
        `${process.env.REACT_APP_BE_URL}/chats/${chatId}`,
        {
          method: "GET",

          //credentials: "include",
          headers: {
            "Content-type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("MESSAGES FOR THIS CHAT: ", data);
        props.setChatMessages(data.messages);
        props.setChatMembers(data.members);
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

  const loadChats = async () => {
    //user._id -> admin id  is getting retrieved from the token at the backend
    try {
      let response = await fetch(`${process.env.REACT_APP_BE_URL}/chats`, {
        method: "GET",
        //credentials: "include",
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("CHATS FOR THIS ADMIN: ", data);
        setChats(data);
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
      <div className={props.chatOpened ? "chat-opened" : "d-none"}>
        <div className="chat-head d-flex justify-content-between align-items-center p-2">
          <div>
            {" "}
            <img
              src={loggedUser?.avatar}
              alt=""
              className="card-img-user-comment mr-1"
            />{" "}
            <strong>
              {t("Chat-1")} <FaRegCommentDots />
            </strong>
          </div>
          <div className="">
            <button
              className="chat-button"
              onClick={() => {
                props.setChatOpened(false);
                props.setChatClosed(true);
              }}
            >
              <FaChevronDown className="mb-1" />
            </button>
            {/*  <button
              className="chat-button "
              onClick={() => props.setChatClosed(true)}
            >
              <FaTimes className="mb-1" />
            </button> */}
          </div>
        </div>
        <div className="chat-opened-body">
          {!loggedUser && (
            <div>
              <button
                type="button"
                className="idsk-button idsk-header-web__main--login-loginbtn"
                onClick={() => {
                  navigate("/login");
                  props.setChatOpened(false);
                  props.setChatClosed(true);
                }}
              >
                {t("log_in")}
              </button>
            </div>
          )}

          {loggedUser?.role === "basicUser" && (
            <ListGroup>
              {adminsOnline.length > 0 &&
                adminsOnline
                  ?.filter((admin) => admin._id !== loggedUser._id)
                  .map((admin) => (
                    <ListGroup.Item
                      key={admin._id}
                      className="chat-contact-card"
                      onClick={(e) => {
                        props.setChatActive(true);
                        props.setChatOpened(false);
                        props.setChatRecipient(admin._id);
                        createChat(e, admin._id);
                      }}
                    >
                      <img
                        className="card-img-user-comment"
                        src={admin.avatar}
                        alt="profile imange"
                      />{" "}
                      <span>
                        🟢 {admin.name} {t("Chat-2")}
                      </span>
                    </ListGroup.Item>
                  ))}

              {adminsOnline.length === 0 && (
                <h5 className="p-4 mt-5">{t("Chat-3")} 🤷‍♀️</h5>
              )}
            </ListGroup>
          )}

          {loggedUser?.role === "admin" && (
            <ListGroup>
              {chats.map((chat) => (
                <ListGroup.Item
                  key={chat._id}
                  className="chat-contact-card"
                  onClick={(e) => {
                    props.setChatActive(true);
                    props.setChatOpened(false);
                    loadMessages(chat._id);
                    props.setChat(chat._id);
                  }}
                >
                  <img
                    className="card-img-user-comment"
                    src={
                      chat.members.filter(
                        (member) => member._id !== loggedUser._id
                      )[0].avatar
                    }
                    alt="profile imange"
                  />{" "}
                  <span>
                    {usersOnline.filter(
                      (user) =>
                        user._id ===
                        chat.members.filter(
                          (member) => member._id !== loggedUser._id
                        )[0]._id
                    ).length
                      ? "🟢"
                      : "🟠"}{" "}
                    chat with{" "}
                    {
                      chat.members.filter(
                        (member) => member._id !== loggedUser._id
                      )[0].name
                    }{" "}
                  </span>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </div>
      </div>
    </>
  );
}

export default ChatWindowOpened;
