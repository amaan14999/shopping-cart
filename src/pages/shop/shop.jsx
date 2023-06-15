import React, { useContext } from "react";
import { Product } from "./product";
import { ShopContext } from "../../context/shop-context";

export const Shop = () => {
  const { data } = useContext(ShopContext);

  return (
    <div>
      <div>
        <div className="container-sm my-3">
          <div className="row">
            {data.map((item) => (
              <div className="col-md-4 col-sm-6">
                <Product Data={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
