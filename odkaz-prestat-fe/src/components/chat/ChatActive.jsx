import { useEffect } from "react";
import { useState } from "react";
import { ListGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { format } from "date-fns";
import { CloseButton } from "react-bootstrap";
import { FaChevronDown, FaTimes, FaRegCommentDots } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { useSelector } from "react-redux";
import "./chat.css";

function ChatActive(props) {
  const loggedUser = useSelector((state) => state.loggedUser);
  const [text, setText] = useState("");
  const [media, setMedia] = useState("");

  const chat = props.chat; //props.chat wouldn't work in socket.emit()
  const recipient = props.chatRecipient; // same problem as above
  const handleMessage = (e) => {
    e.preventDefault();
    // console.log("handleMessage", text);
    // console.log("props.socket: ", props.socket);

    const data = {
      content: { text: text, media: media },
      //timestamp is added by DB
      //not sending "sender" at all - this will be retrieved at the backend from cookie
    };

    props.socket.emit("outgoingMessage", { data, chat, recipient });

    console.log({ data, chat, recipient });
    //props.setChatMessages((chatMessages) => [...chatMessages, newMessage]);

    setText("");
  };

  return (
    <>
      {props.chatActive && (
        <div className="chat-opened">
          <div className="chat-head d-flex justify-content-between align-items-center p-2">
            <div>
              {" "}
              <img
                src={
                  props.chatMembers.filter(
                    (member) => member?._id !== loggedUser?._id
                  )[0]?.avatar
                }
                alt=""
                className="card-img-user-comment mr-1"
                referrerPolicy="no-referrer"
              />{" "}
              <strong>
                {
                  props.chatMembers.filter(
                    (member) => member?._id !== loggedUser?._id
                  )[0]?.name
                }{" "}
                <FaRegCommentDots className="ml-2" />
              </strong>
            </div>
            <div className="">
              <button
                className="chat-button"
                onClick={() => {
                  props.setChatClosed(true);
                  props.setChatActive(false);
                }}
              >
                <FaChevronDown className="mb-1" />
              </button>
              <button
                className="chat-button "
                onClick={() => {
                  props.setChatActive(false);
                  props.setChatOpened(true);
                }}
              >
                <FaTimes className="mb-1" />
              </button>
            </div>
          </div>
          <div className="chat-active-body  ">
            <div
              className="card border-0 m-0 p-0 position-relative bg-transparent"
              style={{ overflowY: "auto", height: "100vh" }}
            >
              {/* MESSAGES ARE FOR SOME REASON RENDERING TWICE OR THREE TIMES. With this filter method, I am simply filtering out duplicate values: https://stackoverflow.com/questions/2218999/how-to-remove-all-duplicates-from-an-array-of-objects#:~:text=How%20it%20works%3A-,Array.,duplicates%2C%20it%20is%20using%20Array.  */}
              {props.chatMessages
                ?.filter(
                  (message, index, self) =>
                    index === self.findIndex((m) => m._id === message._id)
                )
                .map((message) =>
                  message.sender === loggedUser?._id ? (
                    //this is me so text right
                    <div
                      key={message._id}
                      className="balon1 p-2 m-0 position-relative"
                      data-is={`You - ${format(
                        new Date(message.createdAt),
                        "p"
                      )} `}
                    >
                      <span className="float-right">
                        {message.content.text}
                      </span>
                    </div>
                  ) : (
                    <div
                      key={message._id}
                      className="balon2 p-2 m-0 position-relative"
                      data-is={`${
                        props.chatMembers.filter(
                          (member) => member?._id !== loggedUser?._id
                        )[0]?.name
                      } - ${format(new Date(message.createdAt), "p")} `}
                    >
                      <span className="float-left">{message.content.text}</span>
                    </div>
                  )
                )}
            </div>

            <div className="chat-active-footer   ">
              <Form className="d-flex" onSubmit={(e) => handleMessage(e)}>
                <Form.Control
                  type="text"
                  placeholder="Type message"
                  className="w-75 pl-2 ml-2"
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
      )}
    </>
  );
}

export default ChatActive;
