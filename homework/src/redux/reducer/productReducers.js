import * as type from "../constants/productConstants"; 

export const productListReducer = (state = {products:[]}, action) =>{
    switch(action.type){
        case type.PRODUCT_LIST_REQUEST:
            return { loading: true, products: [] }
        case type.PRODUCT_LIST_SUCCESS:
            return { loading: false, products: action.payload}
        case type.PRODUCT_LIST_FAIL:
            return {loading: false, error: action.payload}
        default: 
            return state
    }
}