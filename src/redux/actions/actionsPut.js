import axios from "axios";
import { constants } from "../constants/constants.js";
export const actionsPut = async (productid) => { 
    try {
      const {data}= await axios.put(`https://fakestoreapi.com/products/${productid}`);
        // dispatch({
        //     type: constants.SET_PRODUCTS,
        //     payload:  { data },
        // });
        return{
            type:constants.SET_PRODUCTS_PUT,
            payload:{data}
        }
    }
    catch (error) {
        console.log(error);
    }
}
