import React, { useContext } from 'react';
import { CartContext } from './Cart';
import { useDispatch, useSelector } from "react-redux";
import { removeItem, increment, decrement } from "../redux/actions/cart";

const Items = ({ id, name, image, price, author, quantity}) => {
  const dispatch = useDispatch()

  
  return (
    <>
     <div className='items-info'>
            <div className='product-img'>
              <img src={image} alt="img" />
 
            </div>
            <div className='title'>
              <h2>{name}</h2>
              <p>{author}</p>
            </div>

            <div className='add-minus-quantity'>
              <i className='fas fa-minus minus'onClick={()=> dispatch(decrement(id))}></i>
              <input type="text" placeholder={quantity}/>
              <i className='fas fa-plus add ' onClick={()=> dispatch(increment(id))}></i>
              </div>

              <div className='price'>
                <h3>{price}</h3>
              </div>

              <div className='remove-item'>
              <i className='fas fa-trash-alt remove'onClick={() =>dispatch(removeItem(id))}></i>

              </div>

          </div>

          <hr />
         

    </>
  )
}

export default Items