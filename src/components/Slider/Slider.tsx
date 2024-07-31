import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css';

import { sliderSettings } from './sliderSettings';
import { Key } from 'react';
import { Link } from 'react-router-dom';

interface Place {
  imgURL: string;
  imgAlt: string;
  name: string;
  link: string;
  descption: string;
}

const SliderComponent = ({ places }: { places: Place[] }) => {
  return (
    <Slider {...sliderSettings}>
      {places.map(
        ({ imgURL, imgAlt, name, link, descption }: any, index: Key | null | undefined) => (
          <div className="card" key={index}>
            {link === '/' ? (
              <div className="image-container">
                <img src={imgURL} alt={imgAlt} />
                <div className="overlay">
                  <h3 className="slider-title">{name}</h3>
                  <p className="slider-desc">{descption}</p>
                </div>
              </div>
            ) : (
              <Link to={`/places/${link}`} className="slider-link">
                <div className="image-container">
                  <img src={imgURL} alt={imgAlt} />
                  <div className="overlay">
                    <h3 className="slider-title">{name}</h3>
                    <p className="slider-desc">{descption}</p>
                  </div>
                </div>
              </Link>
            )}
          </div>
        ),
      )}
    </Slider>
  );
};

export default SliderComponent;
