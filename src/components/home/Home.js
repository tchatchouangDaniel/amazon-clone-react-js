import React from "react";
import "./Home.css";
import Product from "../product/Product";
import ProductList from "../product-list/ProductList";

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
          <ProductList />
        </div>
        <div className="home__row">
          <Product
            title="Acer EI1 49 Widescreen Monitor DFHD 3840 x 1080 4ms GTG 144 Hz 32:9 400 Nit VA (Renewed)"
            rating={4}
            price={669.99}
            image={
              "https://m.media-amazon.com/images/I/81Pu2xvPgfL._AC_UY218_.jpg"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
