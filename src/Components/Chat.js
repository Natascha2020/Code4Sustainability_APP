import React from "react";
import "../Styles/Chat.css";

const Chat = () => {
  return (
    <div>
      <h3>Chat</h3>
      <ul id="messages"></ul>
      <form action="">
        <input id="m" autocomplete="off" />
        <button>Send</button>
      </form>
    </div>
  );
};

export default Chat;
