import React from "react";
// returns date and formatted content of message
const Message = (props) => {
  console.log("p", props);
  const { msg } = props;
  console.log(msg);

  let dataMsg = msg[0].message[0];

  return (
    <div className="msg">
      {/*   {msg && msg.length ? msg.map(element) : null} */}
      <span> {new Date(dataMsg.date).toLocaleDateString()} </span>
      <span> {dataMsg.content} </span>
    </div>
  );
};

export default Message;
