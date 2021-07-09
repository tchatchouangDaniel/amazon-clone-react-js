import React from "react";
import "./Home.css";
import SimpleRating from "../rating/SimpleRating";
import Product from "../product/Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__banner-image"
          src="https://images-eu.ssl-images-amazon.com/images/G/08/kindle/journeys/YmYzNDNkZGYt/YmYzNDNkZGYt-NDhhOGFmYzMt-w1500._CB665550943_.jpg"
          alt="banner"
        />
        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home__row">
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
