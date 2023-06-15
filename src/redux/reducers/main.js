import {combineReducers} from "redux";
import {cartReducer} from "./product";

const rootred = combineReducers ({
    cartReducer
});


export default rootred