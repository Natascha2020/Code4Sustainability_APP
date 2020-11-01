import React, { useState, useEffect } from "react";
import socketIoClient from "socket.io-client";
import Message from "./Message";
import MessageBox from "./MessageBox";
import "./MainChat.css";

const socket = socketIoClient("http://localhost:4004", { autoConnect: false });

const Chat = (props) => {
  const { userId, typeOfUser, card } = props;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    console.log("use effect is called again");
    socket.connect();
    socket.on("message", (newMessage) => {
      console.log(newMessage);
      messages.push(newMessage);
      setMessages([...messages]);
    });
  }, []);

  console.log("combined outside useEffect", messages);

  const postMessage = (e, value) => {
    e.preventDefault();
    console.log("in post Message");
    console.log(value);

    if (!value) return;

    socket.emit("newMessage", value);
    /*  setValue(""); */
  };

  return (
    <div className="wholeChat">
      <div id="msgBox">{messages && messages.length ? messages.map((message, index) => <Message key={`mess-${index}`} msg={message} />) : null}</div>
      <MessageBox postMessage={postMessage} />
    </div>
  );
};

export default Chat;
