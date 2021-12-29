import { useState } from "react";
import TextField from "@material-ui/core/TextField";

export default function TextArea({submitHandler}){
    const [message, setMessage] = useState("")

    const onTextChange = ({ target: { value } }) => {
        setMessage(value);
      };

    const onMessageSubmit = (e) =>{
        submitHandler(e,message)
        setMessage("")
    }

    return(
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
    )
}