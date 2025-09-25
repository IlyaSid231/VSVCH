import React from 'react';
import image from '../img/IMAGE.png'
import imageForButton from '../img/explore_now_button_image.png'

class FirstSection extends React.Component {
  render() {
    return (
      <div className="first-block">
        <div 
          className="first-block-bg-image"
          style={{ backgroundImage: `url(${image})`,
          backgroundPosition: 'top',
          backgroundSize: 'cover',}}>
        </div>
        <div className="text-overlay">
          <i>Made with Nature</i>
          <h1>Welcome to the world of nature and organic.</h1>
          <button 
            className="yellow-button" 
            style={{ backgroundImage: `url(${imageForButton})` }}>
            Explore Now
          </button>
        </div>
      </div>
    );
  }
}

export default FirstSection;
