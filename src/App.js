import React from "react";
// import ClientLogo from "./components/ClientLogo";
// import Footer from "./components/Footer";
import HeroSlider from "./components/HeroSlider";
// import LatestProduct from "./components/LatestProduct";
// import MySlider from "./components/MySlider";
import OurSlide from "./components/OurSlide";
// import PopularProduct from "./components/PopularProduct";
// import ProductList from "./components/ProductList";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

const App = () => {
  AOS.init();
  AOS.refresh();
  return (
    <>
      {/* <MySlider /> */}
      {/* <OurSlide /> */}
      <HeroSlider />
      {/* <LatestProduct />
      <PopularProduct />
      <ProductList />
      <ClientLogo />
      <Footer /> */}
    </>
  );
};

export default App;
