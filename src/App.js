import React from 'react';
import ClientLogo from './components/ClientLogo';
import Footer from './components/Footer';
import HeroSlider from './components/HeroSlider';
import LatestProduct from './components/LatestProduct';
import PopularProduct from './components/PopularProduct';
import ProductList from './components/ProductList';

const App = () => {
  return (
    < > 
      <HeroSlider/>
      <LatestProduct/>
      <PopularProduct/>
      <ProductList/>
      <ClientLogo/>
      <Footer/>
    </>
  ); 
};
 
export default App;