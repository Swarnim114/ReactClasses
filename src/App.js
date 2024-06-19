import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import { a, b } from './Components/Products/Products';  // Correct path for named imports
import Products from './Components/Products/Products';  // Correct path for default import
import EffectTest from './Components/Effect/testing';  // Correct path and naming convention

function App() {
  const [cart, setCart] = useState({});

  function increaseQuantity(Products){
     const newCart = {...cart};
     if(!newCart[Products.id]){
         newCart[Products.id] ={
          id: Products.id,
          title : Products.title,
          price : Products.price,
          qty : 1
         }

        }  
        else{
          newCart[Products.id].qty += 1;
        }
        setCart(newCart);
    

  }

  function decreaseQuantity(Products){
    setCart(cart => {
      let newCart = {...cart};
      if(newCart[Products.id]){
        newCart[Products.id].qty -= 1;
        if(newCart[Products.id].qty === 0){
          delete newCart[Products.id];
        }
      } 
      return newCart;
    })

  } 

  
  return (
    <div className="App">
      <Products />
      <EffectTest />
    </div>
  );
}



export default App;
