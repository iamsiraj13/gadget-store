import React from "react";
import product1 from "../assets/images/productlist/product1.png";
import compare from "../assets/images/icons/compare.svg";
import heart from "../assets/images/icons/heart.svg";
import cart from "../assets/images/icons/cart.svg";
import "./productcard.css";
const ProductCard = () => {
  return (
    <div className="product">
      <div className="product-img">
        <img src={product1} alt="" />
      </div>
      <div className="product-content">
        <h5>watch</h5>
        <h3 className="p-title">BOSS HUGO Quartaz Aviator Watch</h3>
        <p>
          price <span>$ 200.00</span>
        </p>
        <div className="product-icons">
          <span>
            <img src={compare} alt="" />
          </span>
          <span>
            <img src={heart} alt="" />
          </span>
          <span>
            <img src={cart} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
