export default function Content(props){
    const{reff} = props;
    return(
        <textarea 
        ref={reff}
        placeholder="write your massage here" 
        rows={3} 
        cols={50} 
        style={{resize:"none"}}
        />
    )
}