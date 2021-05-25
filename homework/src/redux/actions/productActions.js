import { productService } from '../../modules/Products/service';
import * as type from "../constants/productConstants"; 

export const listProducts = (dispatch) => {
    try {
        dispatch({ type: type.PRODUCT_LIST_REQUEST })
        
        productService.getProducts().then(({data})=>{
            dispatch({
                type: type.PRODUCT_LIST_SUCCESS,
                payload: data
            })
        })  
    } catch (error) {
        dispatch({
            type: type.PRODUCT_LIST_FAIL,
            payload: error.message
        })
    }
}