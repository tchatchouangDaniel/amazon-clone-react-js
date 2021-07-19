import React, { useState } from "react";
import "./CartProductUp.css";
import { useStateValue } from "../../StateProvider";

function CartProductUp({ id, title, image, price, qty }) {
  const [state, dispatch] = useStateValue();
  const modifyQty = (e) => {
    // dispatch the item into the data layer
    console.log(Number(e.target.value));
    dispatch({
      type: "CHANGE_QTY",
      item: {
        id,
        qty: Number(e.target.value),
      },
    });
  };

  const removeProduct = () => {
    dispatch({
      type: "REMOVE_PRODUCT",
      item: { id },
    });
  };

  return (
    <div className="cart-product">
      <img src={image} alt="product" className="cart-product__image" />
      <div className="cart-product__details">
        <h3 className="cart-product__detail">{title}</h3>
        <p className="cart-product__stock stock-in">En stock</p>
        <div className="gift-box">
          <input type="checkbox" name="" id="gift" />
          <label for="gift">This is a gift</label>
        </div>
        <div className="card-product__option">
          <select
            onChange={modifyQty}
            value={qty}
            className="card-product__select"
            name="qty"
            id="qty"
          >
            <option label={`Quantity : ${qty}`}>Qty : {qty}</option>
            <option value={0}>0 (remove)</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <button
            onClick={removeProduct}
            href="#"
            className="btn-action bordered"
          >
            Remove from cart
          </button>
        </div>
      </div>
      <div className="price-box">
        <p className="item-price">{price * qty}$</p>
      </div>
    </div>
  );
}

export default CartProductUp;
