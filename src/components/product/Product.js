import React from "react";
import SimpleRating from "../rating/SimpleRating";
import "./Product.css";
import { useStateValue } from "../../StateProvider";

function Product({ id, title, image, rating, price }) {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
        qty: 1,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          <SimpleRating rating={rating} />
        </div>
      </div>
      <img src={image} alt="product" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
