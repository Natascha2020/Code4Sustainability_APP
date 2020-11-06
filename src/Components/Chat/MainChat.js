import React, { useState, useEffect } from "react";
import socketIoClient from "socket.io-client";
import Message from "./Message";
import MessageBox from "./MessageBox";
import "./MainChat.css";

const socket = socketIoClient(process.env.REACT_APP_CHAT_URL, { autoConnect: false });

const Chat = (props) => {
  const { idUser, typeOfUser, projectData } = props;
  const [messages, setMessages] = useState([]);
  const [latestMessages, setLatestMessages] = useState([]);
  const [value, setValue] = useState("");

  const chatPartnerId = projectData._id;

  useEffect(() => {
    socket.connect();
    socket.emit("connection", { idUser: idUser, chatPartnerId: chatPartnerId, typeOfUser: typeOfUser });
    socket.on("latestMessages", (latestMessages) => {
      setLatestMessages(latestMessages.textMessages);
    });

    socket.on("addedMessage", (addedMessage) => {
      console.log("new message incoming");
      messages.push(addedMessage);
      setMessages([...messages]);
    });
  }, []);

  const postMessage = (e, value) => {
    e.preventDefault();

    if (!value) return;
    socket.emit("newMessage", { content: value, idUser: idUser, chatPartnerId: chatPartnerId, typeOfUser: typeOfUser });
    setValue("");
  };

  return (
    <div className="chat">
      <div className="chatBackground">
        <div className="scrollField">
          {latestMessages && latestMessages.length
            ? latestMessages.map((message, index) => <Message key={`mess-${index}`} msg={message} chatPartnerData={projectData} />)
            : null}
          {messages && messages.length
            ? messages.map((message, index) => <Message key={`mess-${index}`} msg={message} chatPartnerData={projectData} />)
            : null}
        </div>
        <MessageBox postMessage={postMessage} value={value} setValue={setValue} />
      </div>
    </div>
  );
};

export default Chat;
