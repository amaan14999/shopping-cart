import React, { useContext } from 'react'
import {ShopContext} from '../../context/shop-context';
import { WishListItem } from './wishListItem';
 export const Wishlist = () => {
  const{ wish,data } =useContext(ShopContext)

  return (
    <div className='container'>
      <div>
        <h1>Your Wish List Items</h1>
      </div>
      <div>
      {data.map((item) => {
           if (wish[item.id] !== false){
            return <WishListItem Data = {item}/>
           } 
          })}
      </div>
    </div>
  )
}


