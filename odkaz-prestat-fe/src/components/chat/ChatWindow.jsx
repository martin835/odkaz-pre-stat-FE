import { useState } from "react";
import ChatWindowOpened from "./ChatWindowOpened";
import ChatWindowClosed from "./ChatWindowClosed";
import useDidUpdateEffect from "../../utils/useDidUpdateEffect";
import io from "socket.io-client";
import { useMemo } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import ChatActive from "./ChatActive";

const ADDRESS = process.env.REACT_APP_BE_ADDRESS || "http://localhost:3001";

function ChatWindow() {
  const [chatOpened, setChatOpened] = useState(false);
  const [chatClosed, setChatClosed] = useState(false);
  const [chatActive, setChatActive] = useState(false);
  const loggedUser = useSelector((state) => state.loggedUser);
  const [adminsOnline, setAdminsOnline] = useState([]);
  const [usersOnline, setUsersOnline] = useState([]);

  const socket = useMemo(() => {
    if (localStorage.getItem("accessToken") && loggedUser) {
      //console.log("ONLY WHEN I AM LOGGED!!!");
      return io(ADDRESS, {
        transports: ["websocket"],
        auth: {
          withCredentials: true,
          token: localStorage.getItem("accessToken"),
        },
      });
    }
  }, [loggedUser]);

  useEffect(() => {
    if (socket) {
      socket.on("connect", () => {
        console.log(" 🔛 connected with socket id", socket.id);

        socket.on("onlineAdmins", (onlineAdmins) => {
          console.log("ADMINS ONLINE: ");
          console.table(onlineAdmins);
          setAdminsOnline(onlineAdmins);
        });

        socket.on("onlineUsers", (onlineUsers) => {
          console.log("USERS ONLINE: ");
          console.table(onlineUsers);
          setUsersOnline(onlineUsers);
        });
      });

      //🚩🚩🚩 ➡️⬇️⬇️⬇️ Not sure if this "disconnection" mechanism is working correctly ?!
      // console.log(!localStorage.getItem("accessToken"));
      // console.log(!loggedUser);
      if (!localStorage.getItem("accessToken") && !loggedUser) {
        socket.disconnect();
        console.log("disconnected ?");
      }
    }
  }, [socket]);

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
        <ChatWindowOpened
          chatOpened={chatOpened}
          setChatOpened={setChatOpened}
          setChatClosed={setChatClosed}
          chatClosed={chatClosed}
          adminsOnline={adminsOnline}
          setChatActive={setChatActive}
          chatActive={chatActive}
        />
      ) : (
        <ChatWindowClosed
          chatOpened={chatOpened}
          setChatOpened={setChatOpened}
          setChatClosed={setChatClosed}
          chatClosed={chatClosed}
          chatActive={chatActive}
        />
      )}

      <>
        {chatActive && (
          <ChatActive
            setChatActive={setChatActive}
            setChatClosed={setChatClosed}
            setChatOpened={setChatOpened}
            chatClosed={chatClosed}
          />
        )}
      </>
    </>
  );
}

export default ChatWindow;
