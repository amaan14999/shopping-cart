import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, title, price, image, description } = props.Data;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  return (
    <div className="cart-container">
      <div className="cart-box align-items-center my-4 shadow-sm p-3 mb-5 bg-white rounded">
        <div className="flex-shrink-0">
          <img src={image} width="100px" alt="..." />
        </div>
        <div className="flex-grow-1">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">${price}</p>
          <div>
            <button
              className="btn btn-outline-dark"
              onClick={() => removeFromCart(id)}
            >
              {" "}
              -{" "}
            </button>
            <span className="qty"> {cartItems[id]} </span>
            <button
              className="btn btn-outline-dark"
              onClick={() => addToCart(id)}
            >
              {" "}
              +{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
