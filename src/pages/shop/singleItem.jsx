import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { useParams, useNavigate } from "react-router-dom";
import { SingleItemData } from "./singleItemData";
export const SingleItem = () => {
  const navigate = useNavigate();
  const { data, cartItems, addToCart, removeFromCart } =
    useContext(ShopContext);
  const { productId } = useParams();
  return (
    <div className="container-sm my-5">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4" >
            <img
              src={data[productId - 1].image}
              className="img-fluid rounded-start"
              
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{data[productId - 1].title}</h5>
              <p className="card-text">{data[productId - 1].description}</p>
              <p className="card-text">
                <small className="text-muted">
                  Price : ${data[productId - 1].price}
                </small>
              </p>
              <p className="card-text">
                <small className="text-muted">
                  Rating : {data[productId - 1].rating.rate}/5(
                  {data[productId - 1].rating.count})
                </small>
              </p>
              <div>
                <h5>Add to Cart</h5>
                <button
                  className="btn btn-outline-dark"
                  onClick={() => removeFromCart(productId)}
                >
                  -
                </button>
                <span> {cartItems[productId]} </span>
                <button
                  className="btn btn-outline-dark"
                  onClick={() => addToCart(productId)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => navigate("/")} className="btn btn-outline-info ">
        Continue shopping
      </button>
    </div>
  );
};
