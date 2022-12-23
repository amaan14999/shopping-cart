import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";
export const Product = (props) => {
  const { id, title, price, image, description, rating} = props.Data;

  const { addToCart, cartItems,addToWishList ,wish} = useContext(ShopContext);

  const cartItemAmount = cartItems[id];
  const wishItem = wish[id];

  return (
    <div className="my-3">
      <div
        className="card shadow-sm p-3 mb-5 bg-body rounded"
        style={{  height: "500px" }}
      >
        <img src={image} className="card-img-top" height="200px" alt="..." />
        <div className="card-body">
          {/* <div style={{ height: "150px" }}> */}
            <h5 className="card-title">{title}</h5>
            <p>${price}</p>
            <div>
            <Link to={`/product/${id}`}> know more </Link>
            </div>
            
          {/* </div> */}

          <button
            className="btn btn-outline-dark btn-sm"
            onClick={() => addToCart(id)}
          >
            Add to Cart{cartItemAmount > 0 && <>({cartItemAmount})</>}
          </button>

          <button
            className="btn btn-outline-dark my-3 btn-sm mx-2"
            onClick={() => addToWishList(id)}
          >
            {wishItem===false ? <>Add to Wishlist</> : <>Remove from Wishlist</>}
          </button>

        </div>
      </div>
    </div>
  );
};
