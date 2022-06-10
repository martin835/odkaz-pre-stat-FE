import { useState } from "react";
import ChatWindowOpened from "./ChatWindowOpened";
import ChatWindowClosed from "./ChatWindowClosed";
import useDidUpdateEffect from "../../utils/useDidUpdateEffect";
import io from "socket.io-client";
import { useMemo } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import ChatActive from "./ChatActive";
import { useDispatch } from "react-redux";
import {
  setOnlineAdmins,
  setOnlineUsers,
  setSocket,
} from "../../redux/actions";

const ADDRESS = process.env.REACT_APP_BE_ADDRESS || "http://localhost:3001";

function ChatWindow() {
  const [chatOpened, setChatOpened] = useState(false);
  const [chatClosed, setChatClosed] = useState(true);
  const [chatActive, setChatActive] = useState(false);
  const loggedUser = useSelector((state) => state.loggedUser);
  // const socketInRedux = useSelector((state) => state.socket);
  const dispatch = useDispatch();
  // const adminsOnline = useSelector((state) => state.adminsOnline);
  //const [adminsOnline, setAdminsOnline] = useState([]);
  //const [usersOnline, setUsersOnline] = useState([]);
  // 👇👇👇chatRecipient => the one who is supposed to received the message => admin in our case.
  //chatRecipient is set onClick and used in ChatWindowOpened.jsx and used in ChatActive.jsx
  // On the other end chatInitiatior  initiates the chat =>  basicUser.
  const [chatRecipient, setChatRecipient] = useState(null);
  const [chat, setChat] = useState("");
  const [chatMembers, setChatMembers] = useState([]);
  const [chatMessages, setChatMessages] = useState([]);

  const socket = useMemo(() => {
    //console.log("ONLY WHEN I AM LOGGED!!!");
    return io(ADDRESS, {
      transports: ["websocket"],
      auth: {
        withCredentials: true,
        token: localStorage.getItem("accessToken"),
      },
    });
  }, [loggedUser]);

  useEffect(() => {
    console.log("🎬 USE EFFECT!");
    console.log("Logged user: ", loggedUser);
    console.log("Socket ID: ", socket.id);
    if (loggedUser && socket) {
      socket.on("connect", () => {
        console.log(" 🔛 connected with socket id", socket.id);

        dispatch(setSocket(socket));

        socket.on("onlineAdmins", (onlineAdmins) => {
          console.log("ADMINS ONLINE: ");
          console.table(onlineAdmins);
          //setAdminsOnline(onlineAdmins);
          dispatch(setOnlineAdmins(onlineAdmins));
        });

        socket.on("onlineUsers", (onlineUsers) => {
          console.log("USERS ONLINE: ");
          console.table(onlineUsers);
          dispatch(setOnlineUsers(onlineUsers));
        });

        socket.on("incomingMessage", ({ newMessage }) => {
          console.table({ newMessage });
          //console.log("BEFORE SETTING: ", chatMessages);
          if (chatMessages.length > 0) {
            setChatMessages((chatMessages) => [
              ...chatMessages.filter(
                (message, index, self) =>
                  index === self.findIndex((m) => m._id === message._id)
              ),
              newMessage,
            ]);
          } else if (chatMessages.length === 0) {
            setChatMessages((chatMessages) => [...chatMessages, newMessage]);
          }
        });
      });
    } //🚩🚩🚩 ➡️⬇️⬇️⬇️ Not sure if this "disconnection" mechanism is working correctly ?!
    else if (!loggedUser && socket) {
      socket.disconnect();
      console.log(`❌ socket ${socket.id} disconnected`);
    }
    //console.log("AFTER SETTING: ", chatMessages);
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
          setChatActive={setChatActive}
          chatActive={chatActive}
          chat={chat}
          setChat={setChat}
          setChatRecipient={setChatRecipient}
          chatRecipient={chatRecipient}
          setChatMessages={setChatMessages}
          setChatMembers={setChatMembers}
        />
      ) : (
        <ChatWindowClosed
          chatOpened={chatOpened}
          setChatOpened={setChatOpened}
          setChatClosed={setChatClosed}
          chatClosed={chatClosed}
          chatActive={chatActive}
          chatMessages={chatMessages}
        />
      )}

      <>
        {chatActive && (
          <ChatActive
            setChatActive={setChatActive}
            setChatClosed={setChatClosed}
            setChatOpened={setChatOpened}
            chatClosed={chatClosed}
            chatActive={chatActive}
            socket={socket}
            chat={chat}
            setChatRecipient={setChatRecipient}
            chatMessages={chatMessages}
            setChatMessages={setChatMessages}
            chatMembers={chatMembers}
          />
        )}
      </>
    </>
  );
}

export default ChatWindow;
