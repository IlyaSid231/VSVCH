import React, { useState } from 'react';
import logo from "../../img/organik_logo.png"
import facebook_icon  from "../../img/facebook_icon.png"
import twitter_icon from "../../img/twitter_icon.png"
import instagram_icon from "../../img/instagram_icon.png"
import patreon_icon from "../../img/patreon_icon.png"
import './Footer.css'

const Footer = () => {
  const [socialIcons] = useState([
    { src: facebook_icon, alt: "facebook", title: "Facebook" },
    { src: twitter_icon, alt: "twitter", title: "Twitter" },
    { src: instagram_icon, alt: "instagram", title: "Instagram" },
    { src: patreon_icon, alt: "patreon", title: "Patreon" },
  ]);
    return (
      <footer>
        <div className="contacts">
          <div className="contacts-first-column">
            <h2>Contact Us</h2>
            <h3>Email</h3>
            <p>needhelp@organick.com</p>
            <h3>Phone</h3>
            <p>123 (1254) 1452</p>
            <h3>Address</h3>
            <p>88 Road, Brooklyn Street, USA</p>
          </div>
          <div className="vertical-line first-vertical-line"></div>
          <div className="contacts-second-column">
            <img className="organic_logo" src={logo} alt="Organik" />
            <p>We are a popular and farming company aspiring to be a leader <br/> in the Organic food industry.</p>
            <div className="icon-group">

                {socialIcons.map((icon, index) => (
                <div key={index} className="icon-group-round hoverable">
                  <img src={icon.src} alt={icon.alt} title={icon.title} />
                </div>
                ))}
                
            </div>
          </div>
          <div className="vertical-line second-vertical-line"></div>
          <div className="contacts-third-column">
            <h2>Utility Pages</h2>
            <p>Style Guide</p>
            <p>Protected</p>
            <p>Page Not Found</p>
            <p>Changelog</p>
            <p>Licenses</p>
          </div>
        </div>
        <div className="copyright">
          <div className="full-line"></div>
          <p>Copyright © Organick | Designed by VictorFlow - Powered by WebFlow</p>
        </div>
      </footer>
    );
};

export default Footer;