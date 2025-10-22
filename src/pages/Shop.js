import React from 'react';
import { Grid, Box } from '@mui/material';
import Products from '../components/Products/Products';
import OfferProducts from '../components/OfferProducts/OfferProducts';

const Shop = () => {
  return (
    <Box sx={{ width: '100%', display: 'block' }}>
      <Grid container justifyContent={'center'}>
        <Grid item xs={12}><Products /></Grid>
        <Grid item xs={12}><OfferProducts /></Grid>
      </Grid>
    </Box>
  );
};

export default Shop;