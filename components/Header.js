import React from 'react'
import logo from "../img/organik_logo.png"
import cartIcon from "../img/cort_button_image.png"

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="container">
          <div className="logo">
            <img src={logo} alt="Organik Logo" />
          </div>
          <div className="contacts">
            <nav>
              <a href="#" className="contacts-home-button">Home</a>
              <a href="#">About Us</a>
              <a href="#">Shop</a>
              <a href="#">Pages</a>
              <a href="#">Contact Us</a>
            </nav>
          </div>
          <div className="cart">
            <div className="cart-dark-round">
              <img src={cartIcon} alt="Cart" />
            </div>
            <a href="#">Cart 0</a>
          </div>
          {/* Гамбургер-меню для мобильной версии (логика в CSS)
          <label htmlFor="menu-toggle" className="menu-icon">
            <span></span>
          </label>
          <input type="checkbox" id="menu-toggle" /> */}
        </div>
      </header>
    );
  }
}

export default Header;