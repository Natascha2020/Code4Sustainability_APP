import React from "react";
// returns date and formatted content of message
const Message = (props) => {
  console.log("p", props);
  const { msg } = props;
  console.log(msg);

  let dataMsg = "";
  msg.isArray ? (dataMsg = msg[0]) : (dataMsg = msg);
  console.log(dataMsg);

  return (
    <div className="msg">
      {/*   {msg && msg.length ? msg.map(element) : null} */}
      {/* <span> {new Date(dataMsg.date).toLocaleDateString()} </span>
      <span> {dataMsg.content} </span> */}
      <span> {dataMsg} </span>
    </div>
  );
};

export default Message;
