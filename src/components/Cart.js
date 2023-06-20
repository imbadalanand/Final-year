import React, { createContext, useEffect, useReducer } from "react";
import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import data from "../data";
import ContextCart from "./ContextCart";
import { reducer } from "../redux/reducers/cart";

// import { useDispatch } from "react-redux";
// import { UpdatedCartProduct } from "../redux/actions/action"

export const CartContext = createContext();

const Cart = () => {
  // const [item, setItems] = useState(Product);
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart);


  
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

