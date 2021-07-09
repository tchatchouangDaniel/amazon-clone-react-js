import React from "react";
import "./Option.css";
import Cart from "../cart/Cart";

function Option(props) {
  return (
    <>
      {!props.haveIcon ? (
        <div className="header__option">
          <span className="header__option-line-one">{props.lineOne}</span>
          <span className="header__option-line-two">{props.lineTwo}</span>
        </div>
      ) : (
        <div className="header__option header__option--cart">
          <Cart />
        </div>
      )}
    </>
  );
}

export default Option;
