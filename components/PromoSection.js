import React from 'react';
import secondBlockPicture from '../img/natural_image.png'
import secondBlockSecondPicture from '../img/other_image.png'

class PromoSections extends React.Component {
  render() {
    return (
      <div className="second-block">
        <div 
        className="second-block-first-picture"
        style = {{backgroundImage: `url(${secondBlockPicture})`}}
        >
          <div className="second-block-text-overlay">
            <i>Natural!!</i>
            <h1>Get Garden Fresh Fruits</h1>
          </div>
        </div>
        <div 
        className="second-block-second-picture"
        style={{backgroundImage: `url(${secondBlockSecondPicture})`}}
        >
          <div className="second-block-text-overlay">
            <i>Offer!!</i>
            <h1>Get 10% off on Vegetables</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default PromoSections;