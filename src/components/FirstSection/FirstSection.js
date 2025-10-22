import React from 'react';
import image from '../../img/IMAGE.png'
import imageForButton from '../../img/explore_now_button_image.png'
import './FirstSection.css'
import { Button } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';

const FirstSection = () => {
  return (
      <div className="first-block">
        <CardMedia
        component="div"
        sx={{
          height: '120%',
          backgroundImage: `url(${image})`,
          backgroundPosition: 'top',
          backgroundSize: 'cover',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1,
        }} />
        <div className="text-overlay">
          <i>Made with Nature</i>
          <h1>Welcome to the world of nature and organic.</h1>
        <Button
          variant="contained"
          sx={{
            width: '13.6875rem',
            height: '5.125rem',
            backgroundImage: `url(${imageForButton})`,
            backgroundSize: 'cover',
            borderRadius: '0.9375rem',
            fontSize: '1.1875rem',
            textTransform: 'capitalize',
            '&:hover': { backgroundImage: `url(${imageForButton})` }, // Hover из CSS
          }}
        >
          Explore Now
        </Button>
        </div>
      </div>
  );
};

export default FirstSection;