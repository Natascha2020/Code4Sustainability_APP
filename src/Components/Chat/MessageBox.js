import React, { useState } from "react";

//state is the current message that is typed into the box
const MessageBox = ({ postMessage }) => {
  const [value, setValue] = useState("");

  return (
    <form onSubmit={(e) => postMessage(e, value)}>
      <input
        type="text"
        className="input"
        placeholder="message"
        value={value}
        onChange={(e) => {
          console.log(e.target.value);
          setValue(e.target.value);
        }}
      />
    </form>
  );
};

export default MessageBox;
