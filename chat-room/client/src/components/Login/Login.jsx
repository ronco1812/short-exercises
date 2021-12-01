import { useRef } from "react"


export default function Login(props){
    const {clickHandler} = props;
    const username = useRef(null);
    return (
    <div>
        <input type="text" placeholder="enter username here!" ref={username} required />
        <button
            onClick={()=>{
            clickHandler(username.current.value)
            }}
        >
        click here to Login!
        </button>
    </div>
    )
}