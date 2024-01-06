import axios from "axios";
import { constants } from "../constants/constants.js";
export const singleproductlist = async (productid,dispatch) => {
    try {
        const  data  = await axios.get(`https://fakestoreapi.com/products/${productid}`);
        dispatch({
          type: constants.SET_PRODUCTS_LIST,
          payload:  data ,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    }