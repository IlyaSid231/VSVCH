import React from 'react';
import AboutImage from "../../img/third_block_image.png"
import VectorPlate from "../../img/vector_plate.png"
import BoxIcon from "../../img/vector_box.png"
import arrowToButton from "../../img/arrow_to_button.png"
import './AboutSection.css'


const About = () => {
    return (
      <div className="third-block">
        <img className="third_block_image" src={AboutImage} alt="About" />
        <div className="third-block-text-sections">
          <div className="first-subsection hoverable">
            <i>About us</i>
            <h1 className="base-middle-lable">We believe In Organic <br class="h1-no-br"/> Foods For Strong Health</h1>
            <h2>Welcome to the world of natural and organic. Here you can discover the <br class="h2-no-br"/> bounty of nature. We have grown on the principles of health, and care. We <br class="h2-no-br"/> aim to give our customers a healthy chemical-free meal for perfect nutrition.</h2>
          </div>
          <div className="second-subsection">
            <div className="organic-foods hoverable">
              <div className="white_rect">
                <img className="vector_plate" src={VectorPlate} alt="Plate" />
              </div>
              <div className="organic-food-text">
                <h3>Organic Foods Only</h3>
                <p>The Product that you ordered will be verified that we have or <br class="p-no-br"/> not if have we will start to move on with the next step.</p>
              </div>
            </div>
            <div className="quality-standards">
              <div className="white_rect">
                <img className="vector_box" src={BoxIcon} alt="Box" />
              </div>
              <div className="quality-standards-text">
                <h3>Quality Standards</h3>
                <p>Once your product is packed it will be delivered to your <br class="p-no-br"/> nearby locality you can directly visit the to buy the product.</p>
              </div>
            </div>
            <button 
            className="shop-now-button"
            style={{backgroundImage: `url(${arrowToButton})`}}
            >Shop Now</button>
          </div>
        </div>
      </div>
    );
};

export default About;