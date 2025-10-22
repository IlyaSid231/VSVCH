import React, { useState } from 'react';
import { Box, Divider, Avatar, IconButton } from '@mui/material';
import logo from "../../img/organik_logo.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PatreonIcon from '@mui/icons-material/Adb';
import './Footer.css'

const Footer = () => {
  const [socialIcons] = useState([
    { icon: <FacebookIcon />, alt: "facebook", title: "Facebook" },
    { icon: <TwitterIcon />, alt: "twitter", title: "Twitter" },
    { icon: <InstagramIcon />, alt: "instagram", title: "Instagram" },
    { icon: <PatreonIcon />, alt: "patreon", title: "Patreon" },
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
          <Divider orientation="vertical" sx={{ height: '23.0625rem', backgroundColor: '#D5D5D5', display: { xs: 'none', sm: 'block' }}} flexItem />
          <div className="contacts-second-column">
            <img className="organic_logo" src={logo} alt="Organik" />
            <p>We are a popular and farming company aspiring to be a leader <br/> in the Organic food industry.</p>

            <Box sx={{ display: 'flex', gap: '1.25rem', justifyContent: 'center'}}> {/* Icons */}
            {socialIcons.map((icon, index) => (
              <IconButton key={index} sx={{ width: '3.75rem', height: '3.75rem', backgroundColor: '#EFF6F1', borderRadius: '6.25rem' }}>
                <Avatar sx={{ width: '1.5rem', height: '1.5rem',  color: '#000', backgroundColor: 'transparent', }}>{icon.icon}</Avatar>
              </IconButton>
            ))}
            </Box>

          </div>
          <Divider orientation="vertical" sx={{ height: '23.0625rem', backgroundColor: '#D5D5D5', display: { xs: 'none', lg: 'block' } }} flexItem />
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
          <Divider sx={{ width: '100%', height: '0.0625rem', mt: '9.18rem', mb: '1.4rem', backgroundColor: '#D5D5D5' }} />
          <p>Copyright © Organick | Designed by VictorFlow - Powered by WebFlow</p>
        </div>
      </footer>
    );
};

export default Footer;