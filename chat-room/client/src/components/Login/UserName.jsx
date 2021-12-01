export default function UserName(props){
    const reff = props;
    return <input type="text" placeholder="enter username here!" ref={reff}></input>
}