import React from 'react';
import Cart from './components/Cart';
import Header from './components/Header';
import ShopList from './components/ShopList';
import { Counter } from './features/counter/Counter';
const DB = {
 products :[
  { name: "banana", price: 5, amount: 10 },
  { name: "apple", price: 3, amount: 12 },
],
 cart :[
  { name: "banana", price: 5, amount: 0 },
  { name: "apple", price: 3, amount: 0 },
]}

const checkOut = () =>{}
function App() {
  return (
    <div className="App">
    <Header />
    <ShopList products={DB.products} />
    <Cart cart={DB.cart} checkOutHandler={checkOut}/>
    </div>
  );
}

export default App;
