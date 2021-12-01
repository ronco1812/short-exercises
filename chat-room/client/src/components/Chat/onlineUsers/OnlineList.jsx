import UserTag from "./UserTag";

export default function OnlineList(props){
    const {onlineUsers} = props;
    return (
    <div>
        <ul>
            {onlineUsers.map((user) => <UserTag username = {user}/>)}
        </ul>
        <small>{onlineUsers.length} online</small>
    </div>    
        )
}