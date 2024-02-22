import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import './HeroCarousel.css'; // Custom CSS for styling if needed
import nd1 from '../images/nd1.jpg';
import nd2 from '../images/nd2.jpg';
// import image3 from './images/image3.jpg';

function HeroCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust autoplay speed as needed
  };

  return (
    <div className="hero-carousel">
      <Slider {...settings}>
        <div>
          <img src={nd1} alt="Image 1" />
        </div>
        <div>
          <img src={nd2} alt="Image 2" />
        </div>
        <div>
          {/* <img src={image3} alt="Image 3" /> */}
        </div>
      </Slider>
    </div>
  );
}

export default HeroCarousel;