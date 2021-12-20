import MsgArea from "./message/MsgArea";
import OnlineList from "./onlineUsers/OnlineList";
import TextArea from "./TextArea/TextArea";
import axios from "axios";
import { useState } from "react";

export default function Chat(){
    const[messages, setMessages] = useState([])
    const getMessages = async() =>{
        try {
            const {data} = axios.get("http://localhost:8080/send/message")
            setMessages(data);
        } catch (error) {
             setMessages([]);
        }
    }
    return(
        <div>
            <span>
              <MsgArea />
              <OnlineList />
            </span>
            <TextArea />
        </div>
    )
}