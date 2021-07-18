import React from "react";
import { Link } from "react-router-dom";
import "./Option.css";
import Cart from "../cart/Cart";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";

function Option(props) {
  const [{ user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <>
      {!props.haveIcon ? (
        <div className="header__option">
          <span className="header__option-line-one">{props.lineOne}</span>
          {props.authLink ? (
            <Link
              onClick={handleAuthentication}
              className="header__option-link"
              to={!user && "/login"}
            >
              <span className="header__option-line-two">{props.lineTwo}</span>
            </Link>
          ) : (
            <span className="header__option-lin e-two">{props.lineTwo}</span>
          )}
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
