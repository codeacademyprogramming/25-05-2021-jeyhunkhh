import { productService } from '../../modules/Products/service';
import * as type from "../constants/productConstants"; 

export const listProducts = () => async (dispatch) => {
    try {
        dispatch({ type: type.PRODUCT_LIST_REQUEST })
        let productsData = []
        await productService.getProducts().then(({data})=>{ productsData = data })  
        
        dispatch({
            type: type.PRODUCT_LIST_SUCCESS,
            payload: productsData
        })
    } catch (error) {
        dispatch({
            type: type.PRODUCT_LIST_FAIL,
            payload: error.message
        })
    }
}