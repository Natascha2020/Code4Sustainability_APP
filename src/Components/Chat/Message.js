import React from "react";
import "./Message.css";
// returns date and formatted content of message
const Message = (props) => {
  const { msg, chatPartnerData } = props;

  return (
    <div>
      {chatPartnerData._id === msg.id_user ? (
        <div className="msg chatPartner">
          <div className="msgWrapper">
            <div className="msgDatePartner"> {new Date(msg.date).toLocaleDateString()} </div>
            <div className="msgPersonPartner">{chatPartnerData.name}</div>
          </div>
          <div className="msgContent">{msg.content}</div>
        </div>
      ) : (
        <div className="msg chatMe">
          <div className="msgWrapper">
            <div className="msgPersonMe">Me</div>
            <div className="msgDateMe"> {new Date(msg.date).toLocaleDateString()} </div>
          </div>
          <div className="msgContent">{msg.content}</div>
        </div>
      )}
    </div>
  );
};

export default Message;
