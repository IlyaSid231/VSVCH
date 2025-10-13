import React from 'react';
import FirstSection from '../components/FirstSection/FirstSection';
import PromoSection from '../components/PromoSection/PromoSection';
import About from '../components/AboutSection/AboutSection';
import EcoFriendly from '../components/EcoFriendly/EcoFriendly';
import Categories from '../components/Categories/Categories';
import Testimonials from '../components/Testimonials/Testimonials';

const Home = () => (
  <>
    <FirstSection />
    <PromoSection />
    <About />
    <EcoFriendly />
    <Categories />
    <Testimonials />
  </>
);

export default Home;