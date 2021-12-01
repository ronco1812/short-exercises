import MsgArea from "./massage/MsgArea";
import OnlineList from "./onlineUsers/OnlineList";
import TextArea from "./TextArea/TextArea";
export default function Chat(){
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