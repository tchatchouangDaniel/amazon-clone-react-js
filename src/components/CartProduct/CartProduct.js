import React from "react";
import "./CartProduct.css";
import SimpleRating from "../rating/SimpleRating";
import { useStateValue } from "../../StateProvider";

function CartProduct({ id, title, image, rating, price, qty }) {
  const [state, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      item: {
        id,
      },
    });
  };
  return (
    <div className="card-product">
      <img
        className="card-product__image"
        src={image}
        alt={`product ${title}`}
      />
      <div className="card-product__data">
        <h3 className="card-product__title">{title}</h3>
        <p className="card-product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className="card-product__quantity">
          <small>Quantity : </small>
          <strong>{qty}</strong>
        </p>
        <div className="card-product__rating">
          <SimpleRating rating={rating} />
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CartProduct;
