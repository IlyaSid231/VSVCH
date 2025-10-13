import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../img/organik_logo.png";
import cartIcon from "../../img/cort_button_image.png";
import './Header.css'

const Header = () => {

  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Organik Logo" />
        </div>
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
      </div>
    </header>
  );
};

export default Header;