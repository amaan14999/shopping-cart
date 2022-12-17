import React, { useContext } from 'react'
import {ShopContext} from '../../context/shop-context';

export const CartItem = (props) => {
    const {id,title,price,image,description} = props.Data;
    const{ cartItems,addToCart,removeFromCart} =useContext(ShopContext)

  return (
    // <div style={{width:"50%" , margin:"auto"}}>
    <div>
      <div className="d-flex align-items-center my-4 shadow p-3 mb-5 bg-body rounded" >
        <div className="flex-shrink-0">
          <img src={image} height="100px" width="100px" alt="..." />
        </div>
        <div className="flex-grow-1 ms-3">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">${price}</p>
          <div>
            <button className="btn btn-outline-dark" onClick={()=>removeFromCart(id)}>-</button>
              <span>  {cartItems[id]}  </span>
            <button className="btn btn-outline-dark" onClick={()=>addToCart(id)}>+</button>
          </div>
        </div>
      </div>
    </div>
  )
}

