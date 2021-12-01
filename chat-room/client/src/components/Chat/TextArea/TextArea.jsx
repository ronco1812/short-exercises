import { useRef } from "react";
import Content from "./Content";
import SendBtn from "./SendBtn";
import axios from "axios";
import getTimeStamp from "../../../helpers/timeStamp";
import {Notyf} from "notyf";
const toast = new  Notyf({dismissible:true, duration:2000})

export default function TextArea(props){
    const contentRef = useRef(null);
    sendMsg = async() =>{
        const {current} = contentRef;
        if(!current.value)return;
        try {
            const { data } = await axios.post("http://localhost:8080/send/message", {
                username,
                content: current.value,
                date: getTimeStamp(),
              }); 
              current.value = "";
        } catch (error) {
            toast.error("massage has not been send....  \n please try again")
        }
      
    }
return(
    <span>
        <Content reff={contentRef}/>
        <SendBtn clickHandler={sendMsg} />
    </span>
)
}
