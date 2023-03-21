import React from "react";
import mobile from "../assets/images/latestproduct/mobile.png";
import compare from "../assets/images/icons/compare.svg";
import heart from "../assets/images/icons/heart.svg";
import cart from "../assets/images/icons/cart.svg";
import smartwatch from "../assets/images/latestproduct/smartwatch.png";
import thumb1 from "../assets/images/latestproduct/thumb1.png";
import thumb2 from "../assets/images/latestproduct/thumb2.png";
import thumb3 from "../assets/images/latestproduct/thumb3.png";
const LatestProduct = () => {
  return (
    <div className="latest-product-section">
      <div className="container">
        <div className="latest-product-wrapper">
          {/* latest product left column */}
          <div className="product-left">
            <div className="l-product-left">
              <div className="l-product-left-img">
                <img src={mobile} alt="" />
              </div>
              <div className="l-product-left-content">
                <h3 className="p-title">smart phone</h3>
                <p>
                  {" "}
                  <span>sale off :</span>
                  <span> $ 200.00 </span>
                  <span> $250.00 </span>
                </p>

                {/* product sale bar  */}
                <div className="sale-bar">
                  <p>
                    <span>already sold 19</span> <span>available 5</span>
                  </p>
                  <div className="bar">
                    <div className="bar-inner"></div>
                  </div>
                </div>

                {/* timer  */}
                <div className="l-product-left-icons">
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
          </div>
          {/* latest product right column   */}
          <div className="product-right">
            <div className="r-product-top">
              <div className="l-product-img">
                <img src={smartwatch} alt="" />
                <div className="l-product-img-thumb">
                  <span>
                    <img src={thumb1} alt="" />
                  </span>
                  <span>
                    <img src={thumb2} alt="" />
                  </span>
                  <span>
                    <img src={thumb3} alt="" />
                  </span>
                </div>
              </div>
              <div className="r-product-content">
                <p>watch</p>
                <h3 className="p-title">smart watch</h3>
                <p>
                  <span>price</span> $ 200.00
                </p>
                <ul>
                  <li>Windows 10</li>
                  <li>Inter Quad Core Processor</li>
                  <li>NVIDIA GeForce RTX 3050ti</li>
                </ul>
                <div className="r-product-left-icons">
                  <span className="bg-red">
                    <img src={compare} alt="" />
                  </span>
                  <span className="bg-red">
                    <img src={heart} alt="" />
                  </span>
                  <span className="bg-orange">
                    <img src={cart} alt="" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProduct;
