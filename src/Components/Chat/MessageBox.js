import React, { useState } from "react";
import "./MainChat.css";

//state is the current message that is typed into the box
const MessageBox = ({ postMessage, value, setValue }) => {
  /* const [value, setValue] = useState(""); */

  return (
    <form onSubmit={(e) => postMessage(e, value)}>
      <input
        type="text"
        className="inputChat"
        placeholder="New message"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </form>
  );
};

export default MessageBox;
