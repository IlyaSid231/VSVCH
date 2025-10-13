import React, { useContext, useState }from 'react'
import { AppContext } from '../../context/AppContext';
import fiveStar from "../../img/five_star.png"
import arrowToButton from "../../img/arrow_to_button.png"
import './OfferProducts.css'

const OfferProducts = () =>{
  const { products, toggleSelect, openModal } = useContext(AppContext);

  console.log(products)
  const offers = products.filter(product => product.newPrice <= product.oldPrice);
console.log("Offers" + offers)
  // Открытие модального окна
  const handleDetailsClick = (product) => {
    openModal({
      type: 'product',
      content: {
        id: product.id,
        name: product.name,
        description: product.description,
        image: product.image,
        category: product.category,
        oldPrice: product.oldPrice,
        newPrice: product.newPrice,
      },
    });

  };
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
        {offers.map((offer) => (
            <div key={offer.id}
              className={`base-rectangle hoverable ${offer.className} `}
              onClick={() => toggleSelect(offer.id, 'product')}
              title={`Выбрать ${offer.name}`}
            >
              <img src={offer.image} alt={offer.name} className="product-image" />

              <p className="product_category">{offer.category}</p>

              <p className="product_name">{offer.name}</p>

              <div className="rectangle-line"></div>

              <p className="price-line-through">{offer.oldPrice}</p>
              <p className="current-price">{offer.newPrice}</p>
              <img src={fiveStar} className="five-star-image" alt="five_star" />
              <button className='offer-detail-button'
              onClick={() => handleDetailsClick(offer)} title="Подробнее о продукте">
                Подробнее
              </button>
            </div>
          ))}
        </div>
         
      </div>
    );
  };

export default OfferProducts;