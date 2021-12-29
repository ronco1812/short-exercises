import { useContext, useState } from "react"
import nameContext from "../contexts/name/context"

export default function Login(){
    const [name,setName] = useState("")
    const {dispatch} = useContext(nameContext)
    const handleLogin = () =>{
        if(!name)return
        dispatch({type:"SET_NAME", name})
        
     
    }
    const changeName =({target: {value}}) =>{
       setName(value)
    }
    return(
        <div>
            <label htmlFor="name">please enter your name to Login</label>
            <br/>
            <input id="name" type="text" placeholder="name" value={name} onChange={changeName}/>
            <button type="button" onClick={handleLogin}>enter chat</button>
        </div>
    )
}