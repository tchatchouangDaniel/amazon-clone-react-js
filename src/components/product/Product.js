import React from "react";
import SimpleRating from "../rating/SimpleRating";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>The lean startup</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product__rating">
          <SimpleRating rating={4} />
        </div>
      </div>
      <img
        src="https://m.media-amazon.com/images/I/418BWH1NFIL._AC_SY200_.jpg"
        alt="product"
      />

      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
