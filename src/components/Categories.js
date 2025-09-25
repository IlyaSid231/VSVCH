import React from 'react';
import fruitJuice from "../img/fruit_juice.png"
import nutsCookies from "../img/nuts-cookies.png"
import organicFood from "../img/organic_food.png"

class Categories extends React.Component {
  render() {
    return (
      <div className="eighth-block">
        <div class="eighth-block-fruit-juice" style={{backgroundImage: `url(${fruitJuice})`}}>
                <p>Fruit Juice</p>
            </div>
            <div class="eighth-block-organic-food" style={{backgroundImage: `url(${nutsCookies})`}}>
                <p>Organic Food</p>
            </div>
            <div class="eighth-block-nuts-cookies" style={{backgroundImage: `url(${organicFood})`}}>
                <p>Nuts Cookies</p>
            </div>
      </div>
    );
  }
}

export default Categories;
