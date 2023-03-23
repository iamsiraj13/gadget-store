import React from "react";
import product1 from "../../assets/images/bestseller/product1.png";
import product2 from "../../assets/images/bestseller/product2.png";
import product3 from "../../assets/images/bestseller/product3.png";
import icon1 from "../../assets/images/bestseller/icon1.svg";
import icon2 from "../../assets/images/bestseller/icon2.svg";
import icon3 from "../../assets/images/bestseller/icon3.svg";
import "./bestseller.css";
const BestSellerSlider = () => {
  const menus = [
    "top 10",
    "headphone",
    "laptop & PC",
    "smartwatch",
    "smartphone",
  ];
  return (
    <div className="best-sell-producs bg-img">
      <div className="container ">
        {/*---------------- section title -------- */}
        <div className="bestsell-section-header">
          <div className="bestsell-section-title">
            <h2>best sellers</h2>
          </div>
          <div className="bestsell-menu">
            <ul className="menu">
              {menus.map((menu) => (
                <li>{menu}</li>
              ))}
            </ul>
          </div>
        </div>

        {/*----------- best sell product area ------ */}

        <div className="products-container">
          {/*---- best seller slider left  -------*/}
          <div className="slider-element">
            <div className="slider-length">
              <span>02</span>
              <span>/03</span>
            </div>
            <div className="slider-dot">dot</div>
          </div>

          {/*----- best seller slider right ----- */}
          <div className="bestsell-products">
            <div className="first-card">
              <img src={icon1} alt="" className="icon1" />
              <div className="first-card-img">
                <img src={product1} alt="" />
              </div>
              <div className="first-card-content">
                <h2 className="p-title">headphone</h2>
                <p className="p-price">
                  price : <span>$ 200.00</span>
                </p>
                <ul className="p-list">
                  <li>Windows 10</li>
                  <li>Inter Quat Core Processor</li>
                  <li>NVIDIA GeForce RTX 305ti</li>
                </ul>
              </div>
            </div>

            <div className="second-card">
              <img src={icon2} alt="" className="icon2" />
              <div className="card-img">
                <img src={product2} alt="" />
              </div>
              <div className="second-card-content">
                <h2 className="p-title">smart watch</h2>
                <p className="p-price">
                  price : <span>$ 200.00</span>
                </p>
                <ul className="p-list">
                  <li>Windows 10</li>
                  <li>Inter Quad Core Processor</li>
                  <li>NVIDIA GeForce RTX 3050ti</li>
                </ul>
              </div>
              .
            </div>
            <div className="second-card">
                <img src={icon3} alt=""  className="icon3"/>
              <div className="card-img">
                <img src={product3} alt="" />
              </div>
              <div className="second-card-content">
                <h2 className="p-title">smart watch</h2>
                <p className="p-price">
                  price : <span>$ 200.00</span>
                </p>
                <ul className="p-list">
                  <li>Windows 10</li>
                  <li>Inter Quad Core Processor</li>
                  <li>NVIDIA GeForce RTX 3050ti</li>
                </ul>
              </div>
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellerSlider;
