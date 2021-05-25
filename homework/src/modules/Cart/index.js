import React, { useCallback, useEffect, useState } from "react";
import { CartItem } from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/actions/cartActions";

export const Cart = () => {
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const [removeItem, setRemoveItem] = useState(false);
  const handleShowCart = useCallback(() => {
    setShowCart(!showCart);
  }, [showCart]);

  const handleRemove = useCallback(
    (e, id) => {
      setRemoveItem(false);
      e.preventDefault();
      removeFromCart(id, dispatch, setRemoveItem);
    },
    [dispatch]
  );

  const totaPrice = (cartItems) => cartItems.reduce((acc,cur)=>(
    acc = acc + cur.price * cur.qty
  ),0)

  useEffect(() => {
    if (removeItem) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems,removeItem])

  

  return (
    <div className="cart">
      <div className="basket-icon">
        <span
          className="bagge text-center text-white rounded-pill bg-success"
          style={{
            width: "20px",
            height: "20px",
            lineHeight: "20px",
            display: "inline-block",
          }}
        >
          {cartItems.length}
        </span>
        <button
          className="basket-btn"
          onClick={() => handleShowCart()}
          type="button"
        >
          <i className="fas fa-shopping-bag"></i>
        </button>
      </div>
      <div className={`cart-content ${showCart ? "active" : ""}`}>
        <h4>Your Cart</h4>
        {cartItems.map((item) => {
          return (
            <CartItem item={item} handleRemove={handleRemove} key={item.id} />
          );
        })}
        <p>Total price: {totaPrice(cartItems)}</p>
      </div>
    </div>
  );
};
