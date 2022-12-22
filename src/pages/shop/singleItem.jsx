import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { useParams, useNavigate } from "react-router-dom";
export const SingleItem = () => {
  const navigate = useNavigate();
  const { data } = useContext(ShopContext);
  const { productId } = useParams();
  const product = data.find((product)=>product.title===productId)
  console.log(product)
  return (
    <div>
      <h2>{productId}</h2>
      <button onClick={() => navigate("/")} className="btn btn-outline-info ">
        Continue shopping
      </button>
    </div>
  );
};
