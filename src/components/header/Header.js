import React from "react";
import Option from "../option/Option";
import "./Header.css";
import TopSearchBar from "../headerSearchBar/TopSearchBar";

function Header() {
  return (
    <div className="header">
      <img
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="logo"
        className="header__logo"
      />
      <TopSearchBar />
      <div className="header__nav">
        <Option haveIcon={false} lineOne="Hello User" lineTwo="Sign In" />
        <Option haveIcon={false} lineOne="Returns" lineTwo="& Orders" />
        <Option haveIcon={false} lineOne="Your" lineTwo="Prime" />
        <Option haveIcon={true} />
      </div>
    </div>
  );
}

export default Header;
