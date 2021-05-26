import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import { listProducts } from "../../redux/actions/productActions";
import { Cart } from "../Cart";
import { Product } from "./Product";

export const Products = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const cart = useSelector(state => state.cart)
  const { loading, products } = productList;

  const [addLocal, setAddLocal] = useState(false)
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  console.log(productList);
 
  const handleAddBasket = useCallback(
    (e,id,qty) =>{
      e.preventDefault();
      setAddLocal(false)
      addToCart(id, qty, dispatch, setAddLocal)
    },
    [dispatch],
  )
  
  if(addLocal){
    localStorage.setItem('cartItems', JSON.stringify(cart.cartItems))
  }
  

  return (
    <section id="popular-products">
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <div className="col-lg-4 text-center">
            <div className="header">
              <h2>Popular dishes</h2>
            </div>
          </div>
        </div>
        <div className="product">
          <div className="row">
            {loading ? (
              <div className="d-flex justify-content-center">
                <div className="spinner-border text-danger" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              products.map((product) => (
                <div key={product.id} className="col-lg-3 mb-5">
                  <Product product={product} handleAddBasket={handleAddBasket}/>
                </div>
              ))
            )}
          </div>
        </div>
        <Cart />
      </div>
    </section>
  );
};
