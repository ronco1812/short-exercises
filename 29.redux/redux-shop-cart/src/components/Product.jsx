export default function Product({item , addHandler}){
    const {name , amount , price} = item;
    return(
        <div id="name">
            <p>
                {name} - $ {amount} x {price}
            </p>
            <button 
            type="button" 
            id="add-btn" 
            onClick={() => {
                addHandler(name)
            }}
            > 
                add to cart
            </button>
            <br/>
            _________
        </div>
    )

}