import React from 'react';
import bgImage from "../../img/fifth_block_background_image.png"
import womanImage from "../../img/woman_image.png"
import starImage from "../../img/five_star_2.png"
import './Testimonials.css'

const Testimonials = () => {
    return (

      <div className="fifth-block"
      style={{backgroundImage: `url(${bgImage})`,
      backgroundPosition: 'top',
      backgroundSize: 'cover',
      }}>
        
        <div className="fifth-block-first-section-overlay">
          <i>Testimonial</i>
          <h3>What Our Customer Saying?</h3>
        </div>
        <div class="fifth-block-second-section-overlay">
                <img src={womanImage} class="fifth-block-woman-image" alt="woman_image"/>
                <img src={starImage} class="fifth-block-five-star-image" alt="five_star_image"/>
                <p class="fifth-block-quote">The quality of organic produce is extremely high, the service is second to none and the taste of the food<br class="p-no-br"/>
                    takes me back to my childhood when we were growing our own.</p>
                <h3>Sara Taylor</h3>
                <p class="fifth-block-consumer">Consumer</p>
        </div>
        <div class="fifth-block-line"></div>
        <div class="fifth-block-round-group">
                <div class="outer-round">
                    <div class="base-round first-round">
                        <h3>100%</h3>
                        <p>Organic</p>
                    </div>
                </div>
                <div class="outer-round">
                    <div class="base-round second-round">
                        <h3>285</h3>
                        <p>Active Product</p>
                    </div>
                </div>
                <div class="outer-round">
                    <div class="base-round third-round">
                        <h3>385+</h3>
                        <p>Organic Orchads</p>
                    </div>
                </div>
                <div class="outer-round">
                    <div class="base-round fourth-round">
                        <h3>25+</h3>
                        <p>Years of Farming</p>
                    </div>
                </div>
            </div>

      </div>
    );
};

export default Testimonials;