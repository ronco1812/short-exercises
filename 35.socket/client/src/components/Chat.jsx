import TextField from "@material-ui/core/TextField";
import React, {useContext, useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import { nanoid } from "nanoid";
import notyf from "../notyf";
import nameContext from "../contexts/name/context";


function Chat() {
  const {name} = useContext(nameContext)
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io.connect("http://localhost:4000");

    socketRef.current.on("messageBack", ({ name, message }) => {
      setChat((prevState) => {
        return [...prevState, { name, message }];
      });
    });

    // return () => socketRef.current.disconnect();
  }, []);

  const onTextChange = ({target: {value}}) => {
    setMessage(value);
  };

  const onMessageSubmit = (e) => {
    e.preventDefault();
    if(!message){
      notyf.error("please make sure you enter content")
    }
    socketRef.current.emit("message", { name, message });
    setMessage("");
  };

  const renderChat = () => {
    return chat.map(({ name, message }) => (
      <div key={nanoid()}>
        <h3>
          {name}: <span>{message}</span>
        </h3>
      </div>
    ));
  };

  return (
    <div className="card">
      <form onSubmit={onMessageSubmit}>
        <h1>Messenger</h1>
        <div>
          <TextField
            name="message"
            onChange={onTextChange}
            value={message}
            id="outlined-multiline-static"
            variant="outlined"
            label="Message"
          />
        </div>
        <button>Send Message</button>
      </form>
      <div className="render-chat">
        <h1>Chat Log</h1>
        {renderChat()}
      </div>
    </div>
  );
}

export default Chat;