import React, { useContext } from 'react'
import {ShopContext} from '../../context/shop-context';
import { CartItem } from "./cartItem";
// import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const{ cartItems , data,totAmount} =useContext(ShopContext)
  const navigate = useNavigate()
  return (
    <div className='container-sm'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div>
      {data.map((item) => {
           if (cartItems[item.id] !== 0){
            return <CartItem Data = {item}/>
           } 
          })}
      </div>
      {totAmount()>0?
      <div className="bottom ">
      <div className="subtotal">
        <h4>Subtotal Amount : $  {Math.round(totAmount()*100)/100}   </h4>
      </div>
      <div className="my-5 pb-5">
        <button onClick={()=>navigate("/")} className="btn btn-outline-info ">Continue shopping</button>
        <button className="btn btn-outline-info mx-5">Checkout</button>
      </div>
      </div>
      : <p>Your cart is empty</p>}

    </div>
  );
};
