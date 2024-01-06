import axios from "axios";
import { constants } from "../constants/constants.js";
export const actionsDelete = async (dispatch,productid) => {
    try {
       const {data} =     await axios.delete(`https://fakestoreapi.com/products/${productid}`);
        // dispatch({
        //     type: constants.SET_PRODUCTS,
        //     payload:  { data },
        // });
        return{
            type:constants.SET_PRODUCTS_DELETE,
            payload:{data}
        }
    } 
    catch (error) {
        console.log(error);
    }

}