import { createStore } from "redux";
import rootred from "./redux/reducers/main";

const Store = createStore (rootred);


export default Store;