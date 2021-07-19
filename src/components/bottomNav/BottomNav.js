import React from "react";
import { Link } from "react-router-dom";
import "./BottomNav.css";

function BottomNav() {
  return (
    <div className="bottom-nav">
      <div className="bottom-nav__categories">
        <ul className="bottom-nav__categories-list">
          <li className="botton-nav__item">
            <Link href="#" className="bottom-nav__link">
              Ebook Kindle
            </Link>
          </li>
          <li className="botton-nav__item">
            <Link href="#" className="bottom-nav__link">
              Acheter à nouveau
            </Link>
          </li>
          <li className="botton-nav__item">
            <Link href="#" className="bottom-nav__link">
              Idées cadeau
            </Link>
          </li>
          <li className="botton-nav__item">
            <Link href="#" className="bottom-nav__link">
              Coupons
            </Link>
          </li>
          <li className="botton-nav__item">
            <Link href="#" className="bottom-nav__link">
              Chèques-cadeaux
            </Link>
          </li>
          <li className="botton-nav__item">
            <Link href="#" className="bottom-nav__link">
              Amazon Basics
            </Link>
          </li>
          <li className="botton-nav__item">
            <Link href="#" className="bottom-nav__link">
              Beauté
            </Link>
          </li>
          <li className="botton-nav__item">
            <Link href="#" className="bottom-nav__link">
              Livraison Gratuite
            </Link>
          </li>
        </ul>
      </div>
      <div className="bottom-nav__prime">
        <Link href="#" className="bottom-nav__link bottom-nav__link--img">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/08/FR-hq/2021/img/Prime/XCM_Manual_1312877_1608688_fr_gw_pc_swm_400x39_30958eb5-ed24-4262-b607-734306a65ebe._CB657953403_.jpg"
            alt="prime banner"
            className="bottom-nav__img"
          />
        </Link>
      </div>
    </div>
  );
}

export default BottomNav;
