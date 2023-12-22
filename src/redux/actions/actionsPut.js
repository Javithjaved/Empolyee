import axios from "axios";
import { constants } from "../constants/constants.js";
export const actionsPut = async (dispatch) => { 
    try {
        const { data } = await axios.put("https://fakestoreapi.com/products/1");
        dispatch({
            type: constants.SET_PRODUCTS,
            payload:  { data },
        });
    }
    catch (error) {
        console.log(error);
    }
}
