import { combineReducers } from "redux";
import reducerslist from "../reducers/reducers";
const reducers = combineReducers({
  productList: reducerslist, 
});
export default reducers;
