import { productService } from '../../modules/Products/service'
import * as type from '../constants/cartConstants'

export const addToCart = async (id, qty, dispatch,setAddLocal) => {
    const data = await productService.getProductsById(id)
    let localData = {}
    if(localStorage.getItem("cartItems")!==null){
        let localdatas = JSON.parse(localStorage.getItem("cartItems"))
        localData = localdatas.find((e)=>e.id === id) 
    };

    dispatch({
        type: type.CART_ADD_ITEM,
        payload: {
            id: data.id,
            name: data.name,
            image: data.image,
            price: data.price,
            qty: localStorage.getItem("cartItems")!==null ? (localData !== undefined ? localData.qty + 1 : qty) : qty,
        },
    })
    
    setAddLocal(true)
}

export const removeFromCart = (id, dispatch, setRemoveItem) => {
    // console.log(id);
    dispatch({
        type: type.CART_REMOVE_ITEM,
        payload: id,
    })

    setRemoveItem(true)
}