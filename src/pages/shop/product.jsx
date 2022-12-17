import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
export const Product = (props) => {
  const { id, title, price, image, description } = props.Data;

  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return (
    <div className="my-3">
      <div
        className="card shadow-sm p-3 mb-5 bg-body rounded"
        style={{ width: "100%", height: "450px" }}
      >
        <img src={image} className="card-img-top" height="200px" alt="..." />
        <div className="card-body">
          <div style={{ height: "150px" }}>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">${price}</p>
          </div>
          {/* <a href="#" className="btn btn-primary">Buy</a> */}
          <button
            className="btn btn-outline-dark"
            onClick={() => addToCart(id)}
          >
            Add to Cart{cartItemAmount > 0 && <>({cartItemAmount})</>}
          </button>
        </div>
      </div>
    </div>
  );
};
