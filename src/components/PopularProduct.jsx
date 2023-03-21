import React from "react";
import product1 from "../assets/images/popular-products/product1.png";
import product2 from "../assets/images/popular-products/product2.png";
import product3 from "../assets/images/popular-products/product3.png";
import product4 from "../assets/images/popular-products/product4.png";
import product5 from "../assets/images/popular-products/product5.png";
import product6 from "../assets/images/popular-products/product6.png";
import product7 from "../assets/images/popular-products/product7.png";
const PopularProduct = () => {
  return (
    <div className="popular-products">
      <div className="container">
        <div className="section-title">
          <h2>popular product</h2>
        </div>
        <div className="p-products">
          <div className="p-product-single span-2 ">
            <div className="p-product-img">
              <img src={product1} alt="" />
            </div>
            <div className="p-product-content">
              <h3 className="p-title">smart watch</h3>
              <p>
                price: <span>$200.00</span>
              </p>
              <ul>
                <li>Windows 10</li>
                <li>Intel Quat Core Processor</li>
                <li>NVIDIA GeForce RTX 3050</li>
              </ul>
            </div>
          </div>
          <div className="p-product-single">
            <div className="p-product-img">
              <img src={product2} alt="" />
            </div>
            <div className="p-product-content">
              <h3 className="p-title">smart watch</h3>
              <p>
                price: <span>$200.00</span>
              </p>
              <ul>
                <li>Windows 10</li>
                <li>Intel Quat Core Processor</li>
                <li>NVIDIA GeForce RTX 3050</li>
              </ul>
            </div>
          </div>
          <div className="p-product-single">
            <div className="p-product-img">
              <img src={product3} alt="" />
            </div>
            <div className="p-product-content">
              <h3 className="p-title">smart watch</h3>
              <p>
                price: <span>$200.00</span>
              </p>
              <ul>
                <li>Windows 10</li>
                <li>Intel Quat Core Processor</li>
                <li>NVIDIA GeForce RTX 3050</li>
              </ul>
            </div>
          </div>
          <div className="p-product-single">
            <div className="p-product-img">
              <img src={product5} alt="" />
            </div>
            <div className="p-product-content">
              <h3 className="p-title">smart watch</h3>
              <p>
                price: <span>$200.00</span>
              </p>
              <ul>
                <li>Windows 10</li>
                <li>Intel Quat Core Processor</li>
                <li>NVIDIA GeForce RTX 3050</li>
              </ul>
            </div>
          </div>
          <div className="p-product-single">
            <div className="p-product-img">
              <img src={product6} alt="" />
            </div>
            <div className="p-product-content">
              <h3 className="p-title">smart watch</h3>
              <p>
                price: <span>$200.00</span>
              </p>
              <ul>
                <li>Windows 10</li>
                <li>Intel Quat Core Processor</li>
                <li>NVIDIA GeForce RTX 3050</li>
              </ul>
            </div>
          </div>
          <div className="p-product-single">
            <div className="p-product-img">
              <img src={product7} alt="" />
            </div>
            <div className="p-product-content">
              <h3 className="p-title">smart watch</h3>
              <p>
                price: <span>$200.00</span>
              </p>
              <ul>
                <li>Windows 10</li>
                <li>Intel Quat Core Processor</li>
                <li>NVIDIA GeForce RTX 3050</li>
              </ul>
            </div>
          </div>
          <div className="p-product-single">
            <div className="p-product-img">
              <img src={product4} alt="" />
            </div>
            <div className="p-product-content">
              <h3 className="p-title">smart watch</h3>
              <p>
                price: <span>$200.00</span>
              </p>
              <ul>
                <li>Windows 10</li>
                <li>Intel Quat Core Processor</li>
                <li>NVIDIA GeForce RTX 3050</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProduct;
