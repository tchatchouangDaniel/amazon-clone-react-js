import React from "react";
import SimpleRating from "../rating/SimpleRating";
import "./Product.css";

function Product({ title, image, rating, price }) {
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

      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
