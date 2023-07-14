import React, {useEffect, useState} from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux"; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


function Checkout()
{ 
    const usenavigate = useNavigate()

   const dispatch = useDispatch()
  const cart = useSelector(state => state.cart);
    
  if(!localStorage.getItem("user")){
    usenavigate('/');
    toast.warning("Please Login to goto in Checkout");
  }
    
    useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
    // console.log('harsh');
  }, [cart.cart]);
  console.log(cart);

  


   
      return(
          <>
        <div>
            <div className="py-3 bg-warning">
                <div className="container">
                    <h6>Home / Checkout</h6>
                </div>
            </div>

            <div className="py-4">
                <div className="container">
                    <div className="row">

                        <div className="col-md-7">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Basic Information</h4>
                                </div>
                                <div className="card-body">

                                    <div className="row">
                                      <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label> First Name</label>
                                            <input type="text" name="firstname" className="form-control"/>
                                        </div>
                                        </div>  

                                        <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label> Last Name</label>
                                            <input type="text" name="lastname" className="form-control"/>
                                        </div>
                                        </div>  

                                        <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label> Phone Number</label>
                                            <input type="text" name="phone" className="form-control"/>
                                        </div>
                                        </div> 

                                        <div className="col-md-6">
                                        <div className="form-group mb-3">
                                            <label> Email Address</label>
                                            <input type="text" name="email" className="form-control"/>
                                        </div>
                                        </div>

                                        <div className="col-md-12">
                                        <div className="form-group mb-3">
                                            <label> Full Address</label>
                                            <textarea rows="3" className="form-control"></textarea>
                                        </div>
                                        </div> 

                                        <div className="col-md-4">
                                        <div className="form-group mb-3">
                                            <label> City</label>
                                            <input type="text" name="city" className="form-control"/>
                                        </div>
                                        </div>  

                                        <div className="col-md-4">
                                        <div className="form-group mb-3">
                                            <label> State</label>
                                            <input type="text" name="state" className="form-control"/>
                                        </div>
                                        </div> 

                                        <div className="col-md-4">
                                        <div className="form-group mb-3">
                                            <label> Zip Code</label>
                                            <input type="text" name="zipcode" className="form-control"/>
                                        </div>
                                        </div>  

                                        <div className="col-md-12">
                                            <div className="form-group text-end">
                                                <button type="button" className="btn btn-primary">Place Order</button>
                                            </div>
                                            </div>     
                                        

                                    </div>
                                </div>
                            </div>
                       </div>
                       
                       <div className="col-md-5">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                  <th width="50%">Product</th>
                                  <th>Price</th>
                                  <th>Quantity</th>
                                  <th>Total</th>  
                                </tr>
                            </thead>
                            <tbody>
                               {cart.cart.map( (item, idx) => {
                                
                                return(
                                <tr key={idx}>
                                    
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.price * item.quantity}</td>
                                </tr>
                                )
                               })}
                               <tr>
                                <td colSpan="2 " className="text-end">Grand Total</td>
                                <td colSpan="2 " className="text-end">{cart.cart.reduce((total, item)=>total+(item.price*item.quantity),0)}</td>
                                
                               </tr>
                            </tbody>
                        </table>

                       </div>

                    </div>
                </div>
            </div>
        </div>
        <ToastContainer/>
        </>
    )

}
export default Checkout;