import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../StateProvider";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const totalPrice = basket.reduce(function (total, currentElement) {
    return total + currentElement.price * currentElement.qty;
  }, 0);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items) :{" "}
              <strong>{totalPrice === 0 ? 0 : `${totalPrice} $`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button className="subtotal__btn">Go to checkout</button>
    </div>
  );
}

export default Subtotal;
