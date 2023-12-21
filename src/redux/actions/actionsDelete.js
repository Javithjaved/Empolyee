import axios from "axios";
import { constants } from "../constants/constants.js";
export const actionsDelete = async (dispatch) => {
    try {
        const { data } = await axios.delete(`https://fakestoreapi.com/products/1`);
        dispatch({
            type: constants.SET_PRODUCTS,
            payload:  { data },
        });
    }
    catch (error) {
        console.log(error);
    }

}