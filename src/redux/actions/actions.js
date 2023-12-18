import axios from "axios";
import { constants } from "../constants/constants.js";
export const product_actions = async (dispatch) => {
    console.log('dsvwe');
    try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        dispatch({
            type: constants.SET_PRODUCTS,
            payload:  {data },
        });
    }
    catch (error) {
        console.log(error);
    }
}
