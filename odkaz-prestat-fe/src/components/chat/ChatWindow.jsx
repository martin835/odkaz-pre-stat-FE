import { useState } from "react";
import ChatWindowActive from "./ChatWindowActive";
import ChatWindowClosed from "./ChatWindowClosed";
import useDidUpdateEffect from "../../utils/useDidUpdateEffect";

function ChatWindow() {
  const [chatOpened, setChatOpened] = useState(false);

  //useDidUpdateEffect(() => {}, [chatOpened]);

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
