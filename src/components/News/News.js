import React from 'react';
import peopleIcon from "../../img/people_icon.png"
import arrowToButton from "../../img/arrow_to_button.png"
import sorrelImage from "../../img/sorrel_image.png"
import tomatoImage from "../../img/tomato_image.png"
import lastPicture from "../../img/last_picture.png"
import './News.css'

const ItemComponent = ({ item }) => {
  return (
    <p className="quote-text" dangerouslySetInnerHTML={{ __html: item.text }} />
  );
};

const News = () => {
    const news = [
      {
      id: 1,
      image: peopleIcon,
      author: "Kristina Castle",
      title: "Everything You Need to Know About Organic",
      text: 'Organic farming is the only way that you still can <br class="no-br"> experience the real world.',
      link: "#"
    },
    {
      id: 2,
      image: peopleIcon, 
      author: "Alex Louis",
      title: "Organic Fruits: Surprising Benefits and Facts",
      text: 'The world of nature has grown on the principles of <br class="no-br"> health, ecology, and care.',
      link: "#"
    }
  ];

    return (
      <div className="ninth-block">
        <div className="ninth-block-label">
            <div className="ninth-block-label-text">
                    <i>News</i>
                    <h2>Discover The recent content about organic products</h2>
            </div>
          <button 
            className="ninth-block-label-button"
            style={{backgroundImage: `url(${arrowToButton})`}}>
            More News
          </button>
        </div>


        <div className="ninth-block-second-section">
          {news.map((item, index) => (

            <div key={item.id} className={`ninth-block-${item.id === 1 ? 'first' : 'second'}-picture`} 
            style={{backgroundImage: `url(${item.id === 1 ? sorrelImage : tomatoImage})`}}>

              <div className="ninth-block-content-overlay">
                <img 
                  src={item.image} 
                  className="ninth-block-people-icon" 
                  alt="people_icon" 
                />
                <p className="author-name">{item.author}</p>
                <h3>{item.title}</h3>

                <ItemComponent item = {item} />

                <div className="view-more-block">
                  <a href={item.link}>View More</a>
                  <img src={arrowToButton} alt="arrow_to_button" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="ninth-block-subscribe-our-newsletter"
          style={{backgroundImage: `url(${lastPicture})`}}
        >
                <div className="content-overlay">
                    <h2>Subscribe our <br className="no-br"/> Newsletter</h2>
                    <p>Enter your email address</p>
                    <button       
                      className="subscribe-button"
                      style={{backgroundImage: `url(${arrowToButton})`}}>
                      Subscribe
                    </button>
                </div>
            </div>
      </div>
    );
}

export default News;