import Product from "./Product"


export default function ShopList({products}){
    const adder = () =>{}
    return(
        <div id="shop-list">
            <p>Products :</p>
            {products.map((product) => {
                return <Product key={product.name} item={product} addHandler={adder} />
            })}

        </div>
    )
}