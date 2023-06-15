import React, { useContext } from 'react';
import { CartContext } from './Cart';

const Items = ({ id, name, image, price, author, quantity}) => {
   
  const { removeItem, increment, decrement } = useContext(CartContext);
  
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
              <i className='fas fa-minus minus'onClick={()=> decrement(id)}></i>
              <input type="text" placeholder={quantity}/>
              <i className='fas fa-plus add ' onClick={()=> increment(id)}></i>
              </div>

              <div className='price'>
                <h3>{price}</h3>
              </div>

              <div className='remove-item'>
              <i className='fas fa-trash-alt remove'onClick={() =>removeItem(id)}></i>

              </div>

          </div>

          <hr />
         

    </>
  )
}

export default Items