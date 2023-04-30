import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ResponsiveSlider = ({ slides }) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
   
  };

  return (
    <div className=' w-80 md:w-96 text-white text-center'>
      
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <h3 className=' text-start text-3xl font-lato font-bold'>{slide.title}</h3>
            <img src={slide.image} alt={slide.title} className=' w-80 md:w-96 my-6' />
            
            <p className=' text-primary-50'>{slide.description}</p>
            <a href={slide.link}>Learn more</a>
          </div>
        ))}
      </Slider>
      
    </div>
  );
};

export default ResponsiveSlider;
