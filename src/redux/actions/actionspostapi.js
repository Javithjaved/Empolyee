import axios from "axios";
import { constants } from "../constants/constants.js";
 export const actionspostapi = async (dispatch,userInputValue) => {
    console.log(userInputValue);
    try {
        const { data } = await axios.post(`https://fakestoreapi.com/products`,userInputValue);
        dispatch({
            type: constants.SET_PRODUCTS_POST,
            payload:  { data },
            
        });
        console.log("post",);
    }
    catch (error) {
        console.log(error);
    }

}