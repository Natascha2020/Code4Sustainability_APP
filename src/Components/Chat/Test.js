/* const Chat = () => {
    const [messages, setMessages] = useState([]);
  
    const addMessage = (msg) => {
      setMessages((oldMessages) => [...oldMessages, ...(Array.isArray(msg) ? msg.reverse() : [msg])]);
    };
  
    useEffect(() => {
      console.log("A");
      socket.on("latest", (data) => {
        // expect server to send us the latest messages
        addMessage(data);
        console.log("B"); 
      });
      socket.on("message", (msg) => {
        addMessage(msg);
        console.log("C");
      });
  
      socket.connect();
    }, []);
  
    return (
      <div>
        <div id="msgBox">
          {messages.map((msg, index) => (
            <Message msg={msg} />
          ))}
        </div>
        <MessageBox />
      </div>
    );
  }; */
