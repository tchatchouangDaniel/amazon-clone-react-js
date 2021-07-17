import React from "react";
import "./CartProductList.css";
import { useStateValue } from "../../StateProvider";
import CartProduct from "../CartProduct/CartProduct";

function CartProductList() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="product-wrapper">
      {basket.map(({ id, title, image, price, rating, qty }) => {
        return (
          <CartProduct
            key={id}
            id={id}
            title={title}
            image={image}
            price={price}
            rating={rating}
            qty={qty}
          />
        );
      })}
    </div>
  );
}

export default CartProductList;
