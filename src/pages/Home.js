import React from 'react';
import { Box } from '@mui/material';
import FirstSection from '../components/FirstSection/FirstSection';
import PromoSection from '../components/PromoSection/PromoSection';
import About from '../components/AboutSection/AboutSection';
import EcoFriendly from '../components/EcoFriendly/EcoFriendly';
import Categories from '../components/Categories/Categories';
import Testimonials from '../components/Testimonials/Testimonials';

const Home = () => {
  return(
    <Box sx={{ width: '100%' }}> {/* Только Box, без Grid */}
      <FirstSection />
      <PromoSection />
      <About />
      <EcoFriendly />
      <Categories />
      <Testimonials />
    </Box>
  );
};

export default Home;