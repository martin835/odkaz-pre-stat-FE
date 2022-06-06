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
  const [text, setText] = useState("");
  const [media, setMedia] = useState("");
  const [messages, setMessages] = useState([]);

  const chat = props.chat; //props.chat wouldn't work in socket.emit()

  const handleMessage = (e) => {
    e.preventDefault();
    // console.log("handleMessage", text);
    // console.log("props.socket: ", props.socket);

    const data = {
      content: { text: text, media: media },
      //timestamp is added by DB
      //not sending "sender" at all - this will be retrieved at the backend from cookie
    };

    props.socket.emit("outgoingMessage", { data, chat });

    console.log({ data, chat });
    setMessages((m) => [...m, data]);

    setText("");
  };

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
            {props.chatMessages?.map((message) => (
              <ListGroup.Item className="">
                <span>{message.content.text}</span>
              </ListGroup.Item>
            ))}
          </ListGroup>

          <div className="chat-active-footer   ">
            <Form className="d-flex" onSubmit={(e) => handleMessage(e)}>
              <Form.Control
                type="text"
                placeholder="Normal text"
                className="w-75"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />

              <button className="chat-button ml-2" type="submit">
                <FiSend />
              </button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatActive;
