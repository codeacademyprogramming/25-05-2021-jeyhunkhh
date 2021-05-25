import { createStore, combineReducers, applyMiddleware } from "redux";
import { productListReducer } from "./reducer/productReducers";
import { cartReducer } from './reducer/cartReducers'
import reduxThunkMiddleware from "redux-thunk";

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

const logger = storeAPI => next => action =>{
    console.log("Store before action dispatch:", storeAPI.getState());
    console.log("Action dispatch:",action);
    const result = next(action)
    console.log("Store before action dispatch", storeAPI.getState());
    return result
}

const middleware = applyMiddleware(
    logger,
    reduxThunkMiddleware
)

const store = createStore(reducer,initialState,middleware);

export default store;
