import { constants } from "../constants/constants";
const initialState = {
  products: [],
};
const reducerslist = (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export default reducerslist;

