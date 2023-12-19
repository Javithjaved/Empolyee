import axios from "axios";
import { constants } from "../constants/constants.js";
export const singleproductlist = async (dispatch) => {
    console.log('dsvwdqqe');
    try {
        const { data } = await axios.get("https://fakestoreapi.com/products/1");
        dispatch({
            type: constants.SET_PRODUCTS_LIST,
            payload:  { data },
        });
    }
    catch (error) {
        console.log(error);
    }
}