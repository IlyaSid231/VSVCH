import React from 'react'
import cornImg from '..//img/fresh-corn.jpg'
import tomatoImg from '..//img/vegan_red_tomato.jpg'
import almondsImg from '..//img/organic_almonds.jpg'
import fiveStar from "../img/five_star.png"
import arrowToButton from "../img/arrow_to_button.png"

class OfferProducts extends React.Component {
  constructor(props) {
    super(props);
    this.offers = [
      {
        category: 'Vegetable',
        className: "Vegan-Red-Tomato",
        name: 'Vegan Red Tomato',
        oldPrice: '$ 14.00 USD',
        newPrice: '$ 9.37 USD',
        image: tomatoImg
      },
      {
        category: 'Fruits',
        className: "organic-almonds",
        name: 'Organic Almonds',
        oldPrice: '$ 21.00 USD',
        newPrice: '$ 18.00 USD',
        image: almondsImg,
      },
      {
        category: 'Vegetable',
        className: "Fresh-Corn",
        name: 'Fresh Corn',
        oldPrice: '$ 21.23 USD',
        newPrice: '$ 18.00 USD',
        image: cornImg,
      },
    ];
  }

  render() {
    return (
      <div className="sixth-block">
        <div className="sixth-section-label">
              <div className="sixth-section-label-text">
                  <i>Offer Products</i>
                  <h3>We Offer Organic <br className="no-br"/> for You</h3>
              </div>
              <button className="view-all-products-button"
              style={{backgroundImage: `url({${arrowToButton}})`}}
              >View All Products</button>
          </div>
        
        <div className="sixth-block-products-list">
          {this.offers.map((offer, index) => (
            <div key={index} className={`base-rectangle ${offer.className}`}>

              <img src={offer.image} alt={offer.name} className="product-image" />
              
              <p className="product_category">{offer.category}</p>

              <p className="product_name">{offer.name}</p>

              <div className="rectangle-line"></div>

              <p className="price-line-through">{offer.oldPrice}</p>
              <p className="current-price">{offer.newPrice}</p>
              
              <img src={fiveStar} class="five-star-image" alt="five_star"></img>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default OfferProducts;
