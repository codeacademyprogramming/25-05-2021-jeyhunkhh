import React from 'react'

export const CartItem = ({item, handleRemove}) => {
    return (
        <div className="cart-item d-flex">
          <div className="image">
            <img src={item.image} className="img-fluid" alt="" />
          </div>
          <div className="d-flex align-items-center">
            <strong className="me-3">{item.qty}x</strong>
            <div className="text" style={{ width: "150px" }}>
              <h6 className="mb-0">{item.name}</h6>
            </div>
            <strong>
              {item.price * item.qty} <sup>$</sup>
            </strong>
          </div>
          <button onClick={(e)=>handleRemove(e,item.id)} className="btn btn-success h-50">x</button>
        </div>     
    )
}
