import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, title, price, image, description, rating } = props.Data;

  const { addToCart, cartItems, addToWishList, wish } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];
  const wishItem = wish[id];

  return (
    <div className="my-3">
      <div
        className="card shadow-sm p-3 mb-5 bg-body rounded"
        style={{ height: "100%" }}
      >
        <div className="image-container">
          <img src={image} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p>${price}</p>
          <div>
            <Link to={`/product/${id}`}> Details </Link>
          </div>
          <button
            className="card-btn btn btn-outline-dark btn-sm"
            onClick={() => addToCart(id)}
          >
            Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
          </button>
        </div>
      </div>
    </div>
  );
};
