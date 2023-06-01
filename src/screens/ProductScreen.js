import React from 'react';
import {useParams} from "react-router-dom";
import data from '../data';
import './productscreen.css';




 function ProductScreen() {
   const {productId} = useParams();
   console.log(productId,data);

   const thisProduct = data.find((prod) => prod.id == productId);
   console.log(thisProduct);
  
   
   return (
      <div className="maincontainer">
         <div className='image-buy'>
           
            <div className='image'>
               <img src={thisProduct.image} alt={thisProduct.name} />
            </div>

            <div className='buy-cart'>
               <div className="buy-cart1">  

                  <ul className='row'> 
                     <ul className='btn btn-primary'>
                      <i class="fa-solid fa-cart-shopping"></i>
                        Add to Cart
                     </ul>
                     <ul className='btn btn-primary'>
                      <i class="fa-solid fa-bolt" ></i>
                      Buy Now
                     </ul>
                  </ul>
               </div>
            </div>
         </div>




         <div className="productdetails">
            <div className="namepd">
               <h2>{thisProduct.name}</h2>

            
               <p className='p-rating'>&nbsp;{thisProduct.rating}&nbsp;<i class="fa-solid fa-star"></i>&nbsp;</p>
               <p>Price: <i class="fa-solid fa-indian-rupee-sign"></i>{thisProduct.price}</p>
            </div>
            
            <p>{thisProduct.description}</p> 
            </div>
            
         
       </div>
   )
}

export default ProductScreen;




