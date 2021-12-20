import React from 'react';
import Cart from './components/Cart';
import Header from './components/Header';
import ShopList from './components/ShopList';
import { Counter } from './features/counter/Counter';

const products = [
  { name: "banana", price: 5, amount: 10 },
  { name: "apple", price: 3, amount: 12 },
];
const cart =[
  { name: "banana", price: 5, amount: 0 },
  { name: "apple", price: 3, amount: 0 },
];


function App() {
  return (
    <div className="App">
    <Header />
    <ShopList products={products} />
    <Cart cart={cart} />
    </div>
  );
}

export default App;
