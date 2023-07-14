import {combineReducers} from "redux";
import {cartReducer} from "./product";
import {cart} from "./cart";

const rootred = combineReducers ({
    cartReducer,
    cart
});


export default rootred