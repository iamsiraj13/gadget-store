import React from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div className="product-list">
      <div className="container">
        <div className="product-container">
          {/* featured product */}
          <div className="featured-products">
            <h2>Featured product</h2>
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          {/* top review */}
          <div className="top-review">
            <h2>top review</h2>
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          {/* popular */}
          <div className="popular">
            <h2>popular product</h2>
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
