import { useState } from "react";
import ChatWindowActive from "./ChatWindowActive";
import ChatWindowClosed from "./ChatWindowClosed";
import useDidUpdateEffect from "../../utils/useDidUpdateEffect";
import io from "socket.io-client";
import { useMemo } from "react";
import { useEffect } from "react";

const ADDRESS = process.env.REACT_APP_BE_ADDRESS || "http://localhost:3001";

function ChatWindow() {
  const [chatOpened, setChatOpened] = useState(false);

  const socket = useMemo(() => {
    if (localStorage.getItem("accessToken")) {
      io(ADDRESS, {
        transports: ["websocket"],
        auth: {
          withCredentials: true,
          token: localStorage.getItem("accessToken"),
        },
      });
    }
  }, []);
  // useEffect(() => {
  //   socket.on("connect", () => {
  //     console.log(" 🔛 connected with socket id", socket.id);

  //     socket.on("incomingMessage", ({ newMessage }) => {
  //       console.table({ newMessage });
  //       // setMessages((messages) => [...messages, newMessage]);
  //       // setSocketMess(newMessage);
  //     });
  //   });
  // }, [socket]);

  //CODE HERE:
  //https://github.com/martin835/chatApp-FE/blob/main/src/pages/Homepage.jsx

  //  const handleMessage = (e) => {
  //    e.preventDefault();
  //    console.log("handleMessage", text);
  //    const data = {
  //      content: { text: text, media: media },
  //      //timestamp is added by DB
  //      //not sending "sender" at all - this will be retrieved at the backend from cookie
  //    };

  //    socket.emit("outgoingMessage", { data, chat });

  //    console.log({ data, chat });
  //    setMessages((m) => [...m, data]);
  //    setSocketMess(undefined);

  //    setText("");
  //  };

  return (
    <>
      {chatOpened ? (
        <ChatWindowActive
          chatOpened={chatOpened}
          setChatOpened={setChatOpened}
        />
      ) : (
        <ChatWindowClosed
          chatOpened={chatOpened}
          setChatOpened={setChatOpened}
        />
      )}
    </>
  );
}

export default ChatWindow;
