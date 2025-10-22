import React from 'react';
import { Grid, Box, Typography, Card, CardMedia, CardContent, Button } from '@mui/material'; // 7 компонентов
import AboutImage from '../../img/third_block_image.png';
import VectorPlate from '../../img/vector_plate.png';
import BoxIcon from '../../img/vector_box.png';
import arrowToButton from '../../img/arrow_to_button.png';
import './AboutSection.css'; // Для no-br

const About = () => {
  return (
    <Grid container spacing={3} sx={{ maxWidth: '1440px', width: '100%', minHeight: '1006px', backgroundColor: '#F9F8F8', justifyContent: 'center', alignItems: 'center' }}>
      <Grid item xs={12} md={6}> {/* Изображение */}
        <CardMedia component="img" image={AboutImage} alt="About" sx={{ maxWidth: '675px', ml: {
          xs: 0,     // Убираем отступ на экранах xs
          sm: 0,     // Убираем отступ на экранах sm
          md: 0,     // Убираем отступ на экранах md
          lg: 0,     // Убираем отступ на экранах lg
          xl: '30px' // Устанавливаем отступ на экранах xl (1440px и выше)
        },
        width:{
          xs: '320px',
          sm: '500px',
          md: 'auto',
          lg: 'auto'
        } }} />
      </Grid>
      <Grid item xs={12} sx={{p: 0}}> {/* Текст */}
        <Box sx={{ maxWidth: '705px', textAlign: 'center', height: '100%', pb: {xs: '50px'} }}>
          <Box sx={{display: 'grid', maxWidth: '705px', rowGap: '20px', mb: '20px'}}> {/* First subsection */}
            <Typography variant="h6" sx={{ fontStyle: 'italic', fontFamily: 'Yellowtail, cursive', fontSize: '2.25rem', color: '#7EB693' }}>About us</Typography>
            <Typography variant="h2" className="base-middle-lable">We believe In Organic Foods For Strong Health</Typography>
            <Typography variant="body1">Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition.</Typography>
          </Box>
          <Grid container spacing={2}> {/* Second subsection */}
            <Grid item xs={12} md={6}> {/* Organic Foods */}
              <Card sx={{ display: 'flex', m: 2, alignItems: 'center' }}> {/* Card для блока */}
                <CardMedia component="img" image={VectorPlate} alt="Plate" sx={{ width: '50px', height: '50px', pl: '5px' }} />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" sx={{ fontStyle: 'italic', fontFamily: 'Yellowtail, cursive', fontSize: '1.25rem', color: '#274C5B', pb: '5px'}}>Organic Foods Only</Typography>
                  <Typography variant="body2">The Product that you ordered will be verified that we have or not if have we will start to move on with the next step.</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}> {/* Quality Standards */}
              <Card sx={{ display: 'flex', m: 2, alignItems: 'center' }}>
                <CardMedia component="img" image={BoxIcon} alt="Box" sx={{ width: '50px', height: '50px', pl: '5px' }} />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" sx={{ fontStyle: 'italic', fontFamily: 'Yellowtail, cursive', fontSize: '1.25rem', color: '#274C5B', pb: '5px' }}>Quality Standards</Typography>
                  <Typography variant="body2">Once your product is packed it will be delivered to your nearby locality you can directly visit the to buy the product.</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            sx={{ mt: 2, backgroundImage: `url(${arrowToButton})`, backgroundSize: 'cover' }}
          >
            Shop Now
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default About;