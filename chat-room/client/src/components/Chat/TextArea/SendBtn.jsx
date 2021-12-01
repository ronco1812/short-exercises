export default function SendBtn(props){
    const {clickHandler} = props;
   return(
   <button
     onClick={clickHandler} 
     type="button"
    >
     send
    </button>
    ) 
}