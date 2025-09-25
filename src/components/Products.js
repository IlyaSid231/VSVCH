import React from 'react';
import broccoliImg from '../img/calabrese_broccoli.jpg';
import cornImg from '..//img/fresh-corn.jpg';
import pistachioImg from '..//img/dried_pistachio.jpg';
import tomatoImg from '..//img/vegan_red_tomato.jpg';
import almondsImg from '..//img/organic_almonds.jpg';
import hazelnutImg from '..//img/brown_hazelnut.jpg';

class Products extends React.Component {
  constructor(props){
    super(props)
  
    this.products = [
      {
        category: 'Vegetable',
        name: 'Calabrese Broccoli',
        oldPrice: '$ 25.00 USD',
        newPrice: '$ 21.00 USD',
        image: broccoliImg,
      },
      {
        category: 'Vegetable',
        name: 'Fresh Corn',
        oldPrice: '$ 21.23 USD',
        newPrice: '$ 18.00 USD',
        image: cornImg,
      },
      {
        category: 'Mill',
        name: 'Dried Pistachio',
        oldPrice: '$ 61.00 USD',
        newPrice: '$ 48.00 USD',
        image: pistachioImg,
      },
      {
        category: 'Vegetable',
        name: 'Vegan Red Tomato',
        oldPrice: '$ 14.00 USD',
        newPrice: '$ 9.37 USD',
        image: tomatoImg
      },
      {
        category: 'Fru',
        name: 'Organic Almonds',
        oldPrice: '$ 21.00 USD',
        newPrice: '$ 18.00 USD',
        image: almondsImg,
      },
      {
        category: 'Mill',
        name: 'Brown Hazelnut',
        oldPrice: '$ 43.00 USD',
        newPrice: '$ 34.00 USD',
        image: hazelnutImg,
      },
    ];
  }

  render() {
    return (
      <div className="fourth-block">
        <div className="our-products-label">
          <i>Organic</i>
          <h1>Our Products</h1>
        </div>
        <div className="list-of-products">
          {this.products.map((product, index) => (
            <div key={index} className="base-rectangle">
              <img className="product-image" src={product.image} alt={product.name} />
              <div className="product_category">{product.category}</div>
              <h3 className="product_name">{product.name}</h3>
              <div className="rectangle-line"></div>
              <span className="price-line-through">{product.oldPrice}</span>
              <span className="current-price">{product.newPrice}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Products;
