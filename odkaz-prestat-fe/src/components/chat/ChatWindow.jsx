import { useState } from "react";
import ChatWindowActive from "./ChatWindowActive";
import ChatWindowClosed from "./ChatWindowClosed";
import useDidUpdateEffect from "../../utils/useDidUpdateEffect";
import io from "socket.io-client";
import { useMemo } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const ADDRESS = process.env.REACT_APP_BE_ADDRESS || "http://localhost:3001";

function ChatWindow() {
  const [chatOpened, setChatOpened] = useState(false);
  const loggedUser = useSelector((state) => state.loggedUser);

  const socket = useMemo(() => {
    if (localStorage.getItem("accessToken") && loggedUser) {
      //console.log("ONLY WHEN I AM LOGGED!!!");
      io(ADDRESS, {
        transports: ["websocket"],
        auth: {
          withCredentials: true,
          token: localStorage.getItem("accessToken"),
        },
      });
    }
  }, [loggedUser]);

  useEffect(() => {
    console.log("socket: ", socket);
    if (socket) {
      socket.on("connect", () => {
        console.log(" 🔛 connected with socket id", socket.id);

        // socket.on("onlineAdmins", (onlineAdmins) => {
        //   console.table(onlineAdmins);
        // });
      });
    }
  }, [loggedUser]);

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
