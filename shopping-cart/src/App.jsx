import React, { useState } from 'react'
import Header from './components/Header';
import Homepage from './components/Homepage';
import Catalog from './components/Catalog';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './components/Cart';
import Footer from './components/Footer';
import { Background, theme } from './styles'
import data from './data/products'

export default function App() {

  const [cartState, setcartState] = useState(false);

  const toggleCart = () => {
    setcartState(!cartState);
}



  // const addToCart = (product) => {
  //   const exist = cartItems.find((x) => x.id === product.id);
  //   setcartState(true);
  //   if (exist) {
  //     setCartItems(cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x))
  //   }
  //   else {
  //     setCartItems([...cartItems, { ...product, qty: 1 }])
  //   }
  // }

  // const removeCart = (product) => {
  //   const exist = cartItems.find((x) => x.id === product.id);
  //   if (exist.qty === 1) {
  //     setCartItems(cartItems.filter((x) => (x.id !== product.id)));
  //   }
  //   else {
  //     setCartItems(cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x))
  //   }
  // }

 

  return (
    <BrowserRouter>
      <Header toggleCart={toggleCart} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/catalog" element={<Catalog products={data}/>} />
      </Routes>
      {cartState ? <Cart toggleCart={toggleCart}/> : <> </>}
    </BrowserRouter>
  )
}
