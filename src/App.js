import React from 'react';
import Header from './components/Header';
import FirstSection from './components/FirstSection';
import PromoSection from './components/PromoSection';
import AboutSection from './components/AboutSection';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import OfferProducts from './components/OfferProducts';
import EcoFriendly from './components/EcoFriendly';
import Categories from './components/Categories';
import News from './components/News';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <FirstSection />
        <PromoSection />
        <AboutSection />
        <Products />
        <Testimonials />
        <OfferProducts />
        <EcoFriendly />
        <Categories />
        <News />
        <Footer />
      </div>
    );
  }
}

export default App;
