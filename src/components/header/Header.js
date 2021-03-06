import React from "react";
import { Link } from "react-router-dom";
import Option from "../option/Option";
import "./Header.css";
import TopSearchBar from "../headerSearchBar/TopSearchBar";
import BottomNav from "../bottomNav/BottomNav";
import { useStateValue } from "../../StateProvider";

function Header() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header">
      <div className="header-top">
        <Link to="/">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="logo"
            className="header__logo"
          />
        </Link>
        <TopSearchBar />
        <div className="header__nav">
          <Option
            authLink={true}
            haveIcon={false}
            lineOne={`Hello ${user ? user.email : "Guest"}`}
            lineTwo={user ? "Sign Out" : "Sign In"}
          />
          <Option haveIcon={false} lineOne="Returns" lineTwo="& Orders" />
          <Option haveIcon={false} lineOne="Your" lineTwo="Prime" />
          <Link to="/checkout-up">
            <Option haveIcon={true} />
          </Link>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}

export default Header;
