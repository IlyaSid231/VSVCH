import React from 'react';
import logo from "../img/organik_logo.png"
import facebook_icon  from "../img/facebook_icon.png"
import  twitter_icon from "../img/twitter_icon.png"
import  instagram_icon from "../img/instagram_icon.png"
import  patreon_icon from "../img/patreon_icon.png"

class Footer extends React.Component {
  render() {
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
              <div class="icon-group-round">
                        <img src={facebook_icon} alt="facebook_icon"/>
                    </div>
                    <div class="icon-group-round">
                        <img src={twitter_icon} alt="twitter_icon"/>
                    </div>
                    <div class="icon-group-round">
                        <img src={instagram_icon} alt="instagram_icon"/>
                    </div>
                    <div class="icon-group-round">
                        <img src={patreon_icon} alt="patreon_icon"/>
                    </div>
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
  }
}

export default Footer;