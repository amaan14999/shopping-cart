import React, { createContext, useState ,useEffect } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < 21; i++) {
    cart[i] = 0;
  }
  return cart;
};

const getDefaultWish = () =>{
  let Wlist = {};
  for (let i = 1; i < 21; i++) {
    Wlist[i] = false;
  }
  return Wlist;
}


export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const [wish , setWish] = useState(getDefaultWish());

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const totAmount = ()=>{
    let tot = 0;
    for(const item in cartItems){
      if(cartItems[item]>0){
        let itemInfo = data.find((product)=>product.id===Number(item));
        tot += cartItems[item] * itemInfo.price
      }
    }
    return tot;
  }
  

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const addToWishList = (itemId) =>{
    setWish((prev) => ({...prev , [itemId]: !prev[itemId]}));
  }

  const contextValue = { cartItems, addToCart, removeFromCart,data,totAmount,addToWishList,wish};

  // console.log(cartItems)
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
