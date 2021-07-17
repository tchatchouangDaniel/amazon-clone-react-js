import React from "react";
import Product from "../product/Product";

function ProductList() {
  return (
    <>
      <Product
        id={1}
        title="Architecture orianté service"
        rating={4}
        price={29.99}
        image={"https://m.media-amazon.com/images/I/418BWH1NFIL._AC_SY200_.jpg"}
      />
      <Product
        id={2}
        title="Controller"
        rating={3}
        price={29.99}
        image={"https://m.media-amazon.com/images/I/41Y15o6btZL._AC_SY200_.jpg"}
      />
      <Product
        id={3}
        title="Xbox Wireless Controller - Black"
        rating={5}
        price={49.99}
        image={"https://m.media-amazon.com/images/I/41LO2OX6pRL._AC_SY200_.jpg"}
      />
    </>
  );
}

export default ProductList;
