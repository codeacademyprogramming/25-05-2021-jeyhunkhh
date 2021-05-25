import { createStore, combineReducers } from "redux";
import { productListReducer } from "./reducer/productReducers";
import { cartReducer } from './reducer/cartReducers'

const reducer = combineReducers({
    productList: productListReducer,
    cart: cartReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : []

const initialState = {
    cart: { cartItems: cartItemsFromStorage },
}

const store = createStore(reducer,initialState);

export default store;
