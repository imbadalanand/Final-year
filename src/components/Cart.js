import React, { createContext, useEffect, useReducer } from "react";
import "./cart.css";
import data  from "../data";
import ContextCart from "./ContextCart";
import { reducer } from "../redux/reducers/reducer";
// import { useDispatch } from "react-redux";
// import { UpdatedCartProduct } from "../redux/actions/action"


export const CartContext = createContext();

const initialState = {
  item: data,
  totalAmount: 0,
  totalItem: 0,
};

const Cart = () => {
  // const [item, setItems] = useState(Product);
  const [state, dispatch] = useReducer(reducer, initialState);


  //to delete the items from cart

  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };
  // clear the cart

  const clearCart = () => {
    return dispatch({ type: "CLEAR_CART" });
  };

  //increment the item
  const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };

  //decrement the item
  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };

  // use the useEffect to update the data

  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
      // console.log('harsh');
  }, [state.item]);

  return (
    <CartContext.Provider
      value={{ ...state, removeItem, clearCart, increment, decrement }}
    >
      <ContextCart />
    </CartContext.Provider>
  );
};

export default Cart ;
