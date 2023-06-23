import { React, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './productscreen.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from "../redux/actions/cart";



function ProductScreen() {
   const { productId } = useParams();
   const [thisProduct, setProducts] = useState([]);
   const dispatch = useDispatch()

   useEffect((props) => {
      fetch(`http://localhost:5000/products/${productId}`)
         .then(response => response.json())
         .then(data => setProducts(data))
         .catch(error => console.error(error));
   }, []);

   const handleAddToCart = (e, product) => {

      // setCart((prev) => [...prev, product])
      dispatch(addToCart(product))
      // setCart([...cart , product ])
      // setCart([product])

   }


   return (
      <>
         <header style={{ display: "flex", justifyContent: "space-between" }} >
            <div className='continue-shopping' style={{ display: "flex" }} >
               <Link to="/" ><i className="fa-solid fa-arrow-left" style={{ margin: "10px 10px", color: "black" }} ></i></Link>
               <h3>Continue Shopping</h3>
            </div>
            <div className='cart-icon'>
               <Link to="/Cart" ><i className="fa-solid fa-cart-shopping" style={{ margin: "0px 50px", color: "black" }} ></i></Link>
            </div>
         </header>
         <hr />

         <div className="maincontainer">
            <div className='image-buy'>

               <div className='image'>
                  <img src={thisProduct.image} alt={thisProduct.name} />
               </div>
               <br />
               <br />
               <div className='buy-cart'>
                  <div className='btn btn-primary' onClick={(e) => handleAddToCart(e, thisProduct)}>
                     <i className="fa-solid fa-cart-shopping"></i>
                     Add to Cart
                  </div>
               </div>
            </div>


            <div className="productdetails">
               <div className="namepd">
                  <h2>{thisProduct.name}</h2>

                  <p className='p-author'>By: {thisProduct.author} (Author) | Publisher: {thisProduct.publisher} </p>
                  <div className='rateing'>
                     <p className='p-rating'>&nbsp;{thisProduct.rating}&nbsp;<i className="fa-solid fa-star"></i>&nbsp; </p> |
                     <p style={{ marginLeft: "10px" }}>5 Review(s) |</p>
                     <Link className='review' to="/Review" style={{ marginLeft: "10px" }} > Write a Review </Link>

                  </div>
                  <hr />
                  <p>Price: <i className="fa-solid fa-indian-rupee-sign"></i>{thisProduct.price}</p>
                  <p>Available</p>
                  <p>Ship in Between 4-5 Business days</p>
                  <p><u className='text-primary'> About The Book: </u> <br /><br />  {thisProduct.description}</p>

               </div>
            </div>
         </div>

      </>
   )
}

export default ProductScreen;




