import { combineReducers } from "redux";
import reducerslist from "../reducers/reducers.js";
const reducers = combineReducers({
  productList: reducerslist, 
});
export default reducers;
