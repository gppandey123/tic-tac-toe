import { createStore } from "redux";
import  increamentReducer  from "./reducer/index";

const store = createStore(increamentReducer);

export default store;