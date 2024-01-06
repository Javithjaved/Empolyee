import { constants } from "../constants/constants.js";
const initialState = {
  products: [],
  products_list: {},
};
const reducerslist = (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.SET_PRODUCTS:
      return { ...state, products: payload }

    case constants.SET_PRODUCTS_POST:
      return { ...state, products: payload }

    case constants.SET_PRODUCTS_LIST:
      return { ...state, products_list: payload }

    case constants.SET_PRODUCTS_DELETE:
      return { ...state, products: payload }

    default:
      return state;
  }
};
export default reducerslist;