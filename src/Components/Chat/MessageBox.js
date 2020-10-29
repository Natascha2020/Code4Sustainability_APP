import React, { useState } from "react";
import socketIoClient from "socket.io-client";

const socket = socketIoClient("http://localhost:4004", { autoConnect: false });

//state is the current message that is typed into the box
const MessageBox = ({ postMessage }) => {
  const [value, setValue] = useState("");

  /* const postMessage = (e) => {
    e.preventDefault();
    console.log(value);

    if (!value) return;

    socket.emit("newMessage", value);

    setValue("");
  }; */

  return (
    <form onSubmit={(e) => postMessage(e, value)}>
      <input type="text" className="input" placeholder="message" value={value} onChange={(e) => setValue(e.target.value)} />
    </form>
  );
};

export default MessageBox;
