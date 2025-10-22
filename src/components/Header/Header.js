import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material'; // 4 компонента
import { Link } from 'react-router-dom';
import logo from "../../img/organik_logo.png";
import cartIcon from "../../img/cort_button_image.png";
import './Header.css'

const Header = () => {
  return (
    <AppBar position="static" color="default" sx={{ height: '152px', backgroundColor: '#ffffff', paddingTop: '1.3125rem' }}>
      <Toolbar disableGutters={true} sx={{ height: '80%', width: '100%', maxWidth: '1440px', display: 'flex', alignItems: 'center', pl: '1.875rem',
    pt: '0.5625rem' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', maxWidth: '13.888%', height: '56px', mr: '11.9375rem' }}> {/* Logo */}
          <img src={logo} alt="Organik Logo" />
        </Box>
        <input type="checkbox" id="menu-toggle"></input>
        <label class="menu-icon active-burger-menu" for="menu-toggle">
                <span></span>
        </label>
        <div class="contacts active-burger-menu">
          <nav>
            <Link to="/" className="contacts-home-button">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/news">News</Link>
          </nav>
        </div>
        <div className="cart">
          <div className="cart-dark-round">
            <img src={cartIcon} alt="Cart" />
          </div>
          <a href="#">Cart 0</a>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;