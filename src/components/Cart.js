import React, { createContext, useEffect } from "react";
import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import ContextCart from "./ContextCart";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { reducer } from "../redux/reducers/cart";

// import { useDispatch } from "react-redux";
// import { UpdatedCartProduct } from "../redux/actions/action"

export const CartContext = createContext();

const Cart = () => {
  // const [item, setItems] = useState(Product);
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart);
  const navigate = useNavigate();


  if(! (localStorage.getItem("user"))){
    navigate("/Login")
    toast.error("User Login to View Cart");
  }


  
  // use the useEffect to update the data

  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
    // console.log('harsh');
  }, [cart.cart]);

  console.log(cart);

  return (

   
      <ContextCart
        cart={cart}
      />
  );
};

export default Cart;

