export default function Cart({cart, checkOutHandler}){
let counter = 0;
return (
    <div>
        <p> your Cart :</p>
        
        <div>
        {cart.map((item) => {
            const {name , price ,amount} = item;
            counter+=(price*amount);
            return !!amount ? (
                <div key={name + "-cart"}>
                   {name}  - $ {price}  - {amount} 
                </div>
            ) : null
        })} 
        {!counter && <p>please select items for your Cart</p>}
        <button type="button" id="checkout-btn" onClick={checkOutHandler} disabled={!counter}>checkout</button>
        </div>

        <p>total price: $ {counter}</p>
    </div>
)
}