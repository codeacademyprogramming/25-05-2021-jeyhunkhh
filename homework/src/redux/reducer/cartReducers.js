import * as type from '../constants/cartConstants'

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case type.CART_ADD_ITEM:
            const item = action.payload
            const existItem = state.cartItems.find((x) => x.id === item.id)

            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) =>
                        x.id === existItem.id ? item : x
                    ),
                }
            } 
            else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item],
                }
            }
        case type.CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter((x) => x.id !== action.payload),
            }
        default:
            return state
    }
}