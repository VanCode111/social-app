import React, { useEffect } from "react";
import "./Messenger.scss";
import Messages from "../../components/Messenger/Messages/Messages";

function Messenger() {
  useEffect(() => {
    document.title = "Сообщения";
  });
  return (
    <div className="messenger">
      <Messages />
    </div>
  );
}

export default Messenger;
