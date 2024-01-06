import axios from "axios";
import { constants } from "../constants/constants.js";
 export const actionspostapi = async (userInputValue) => {
    console.log(userInputValue,"ytyfyt  ");
    try {
         const {data} = await axios.post(`https://fakestoreapi.com/products`,userInputValue);
        return{
            type: constants.SET_PRODUCTS_POST,
              payload:  { data },
        } 
    }
    catch (error) {
        console.log(error);
    }

}   