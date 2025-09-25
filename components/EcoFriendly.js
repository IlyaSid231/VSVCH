import React from 'react';
import ecoImage from "../img/eco_image.png"

class EcoFriendly extends React.Component {
  render() {
    return (
      <div className="seventh-block"
        style={{ backgroundImage: `url(${ecoImage})`}}
      >
       <div class="seventh-block-white-rectangle">
                <i>Eco Friendly</i>
                <h2>From our Farm <br/>To your Home.</h2>
                <h3>Choose Your Products</h3>
                <p>In our listing, we have several collections of organic products. This is <br/>
                     the place where you need to choose the product you want.</p>
                <h3>Farmers will produce it</h3>  
                <p>The Product that you ordered will be verified that we have or not if <br/>
                     have we will start to move on with the next step.</p>   
                <h3>We Can Delivery too</h3>
                <p>If you are not comfortable going to the nearby market place we also <br/>
                    will deliver your product to your doorstep.</p>
            </div>
      </div>
    );
  }
}

export default EcoFriendly;