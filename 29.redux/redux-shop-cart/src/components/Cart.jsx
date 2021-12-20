export default function Cart({cart}){
let counter = 0;
return (
    <div>
        <p> your Cart :</p>
        
        <div>
        {cart.map((item) => {
            const {name , price ,amount} = item;
            counter+=(price*amount);
            if(!amount)return<></>
            return (
                <div>
                   {name}  - $ {price}  - {amount} 
                </div>
            )
        })} 
        {!counter && <p>please select items for your Cart</p>}
        </div>

        <p>total price: $ {counter}</p>
    </div>
)
}