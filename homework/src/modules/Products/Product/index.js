import React, { useCallback, useState } from "react";

export const Product = ({product, handleAddBasket}) => {
  const [showSize, setShowSize] = useState(false);
  const [qty] = useState(1)

  const handleShowSize = useCallback(() => {
    setShowSize(!showSize);
  }, [showSize]);

  const handleCloseSize = useCallback((e) => {
    setShowSize(false);
  }, []);

  return (
    <div className="card">
      <img
        src={product.image}
        className="ml-3 card-img-top"
        alt="..."
      />
      <div className="card-body pt-0">
        <h5 className="card-title d-inline mb-3">{product.name}</h5>
        <span className="float-end">32cm</span>
        <p className="card-text">{product.topping.map(x=> x + " ")}</p>
        <span className="price float-center mb-4 d-block text-center">
          {product.price} $
        </span>
        <div className="add-basket">
          <button onClick={() => handleShowSize()} type="button">
            <i className="fas fa-shopping-bag"></i>
          </button>
        </div>
      </div>
      <div className={`size ${showSize ? "active" : ""} `}>
        <form action="#">
          <h5>Sizes:</h5>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              small - 20cm
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              medium - 25cm
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault3"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault4">
              big - 32cm
            </label>
          </div>
          <button onClick={((e)=>handleAddBasket(e,product.id, qty))} type="submit" className="btn mt-3 w-100 btn-orange">
            Add to basket
          </button>
          <button onClick={(e)=>(handleCloseSize(e))} type="button" className="btn mt-3 w-100 btn-orange">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};
