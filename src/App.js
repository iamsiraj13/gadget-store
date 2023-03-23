import React from "react";
import ClientLogo from "./components/ClientLogo";
import Footer from "./components/Footer";
import HeroSlider from "./components/HeroSlider";
import LatestProduct from "./components/LatestProduct"; 
import PopularProduct from "./components/PopularProduct";
import ProductList from "./components/ProductList";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles 
import BestSellerSlider from "./components/BestSeller/BestSellerSlider";
import Header from "./components/Header";
// ..

const App = () => {
  AOS.init();
  AOS.refresh();
  return (
    <>   
      <Header/>
      <HeroSlider />
      <LatestProduct />
      <PopularProduct />
      <BestSellerSlider/>
      <ProductList />
      <ClientLogo />
      <Footer /> 
    </>
  );
};

export default App;
