import React from 'react';
import {useParams} from "react-router-dom";
import data from '../data';




 function ProductScreen() {
   const {productId} = useParams();
   console.log(productId,data);

   const thisProduct = data.find((prod) => prod.id == productId);
   console.log(thisProduct);
  
   
   return (
       <div>
         <h1>{thisProduct.name}</h1>
         <p>Price: ${thisProduct.price}</p>
         <p>{thisProduct.description}</p> 
       </div>
   )
}

export default ProductScreen;




