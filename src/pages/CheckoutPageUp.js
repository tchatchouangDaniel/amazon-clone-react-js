import React from "react";
import "./CheckoutPageUp.css";
import Subtotal from "../components/Subtotal/Subtotal";
import Header from "../components/header/Header";
import CartProductUp from "../components/CartProductUp/CartProductUp";
import { useStateValue } from "../StateProvider";

function CheckoutPageUp() {
  const [{ basket, user }, dispatch] = useStateValue();
  const totalPrice = basket.reduce(function (total, currentElement) {
    return total + currentElement.price * currentElement.qty;
  }, 0);
  const removeAll = () => {
    // dispatch the item into the data layer

    dispatch({
      type: "REMOVE_ALL",
    });
  };
  return (
    <div className="checkoutUp">
      <Header />
      <div className="checkoutUp-wrapper">
        <section className="section-checkout">
          <div className="carting">
            <div className="carting__welcome checkout-box">
              <button className="btn-more">Voir</button>
              <p className="welcome-text">
                Hello{user?.email ? ` ${user.email}` : ""}, offrez l'embarras du
                choix avec les chèques-cadeaux Amazon utilisables pour l'achat
                de millions d'articles sur Amazon.fr.
              </p>
              <div className="gift-container">
                <img
                  src="https://images-na.ssl-images-amazon.com/images/G/08/gc/2021/GC_MAPLE/FRITES_GC_MAPLE_icon._CB411077447_.jpg"
                  alt="gift card image"
                  className="gift"
                />
              </div>
            </div>
            <div className="carting__cart checkout-box">
              <h2>Your Cart</h2>

              {basket.length === 0 ? (
                <h3 className="cart-product__detail">Empty basket</h3>
              ) : (
                <>
                  <button onClick={removeAll} className="btn-action">
                    remove all items in cart
                  </button>
                  <div className="price-text">
                    <p>price</p>
                  </div>
                </>
              )}
              {basket.map(({ id, title, image, rating, price, qty }) => {
                return (
                  <CartProductUp
                    key={id}
                    id={id}
                    title={title}
                    image={image}
                    rating={rating}
                    price={price}
                    qty={qty}
                  />
                );
              })}
              <div className="sub-total">
                <p className="sub-total-text">
                  Subtotal({basket.length} items) : <span>{totalPrice} $</span>
                </p>
              </div>
            </div>
            <div className="carting__articles checkout-box"></div>
          </div>
          <div className="pricing">
            <Subtotal />
          </div>
        </section>
        <section className="section-products"></section>
      </div>
    </div>
  );
}

export default CheckoutPageUp;
