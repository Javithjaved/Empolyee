import axios from "axios";
import {constants} from "../constants/constants";
const actions =()=> async (dispatch)=>{
    try{
        const {data} = await axios.get(`https://fakestoreapi.com/products`,data);
        dispatch ({
            type :constants.SET_PRODUCTS,
            payload :data,
        });
        console.log(data);
    }catch(error){

    }
}
export default actions;