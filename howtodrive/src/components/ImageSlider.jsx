import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PauseOnHover() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    arrows: false,
    dots: true,
    fade: true,
  };

  const slides = [
    { src: "http://howtodrive.lk/images/003.jpg", caption: "Learn to Drive Safely" },
    { src: "http://howtodrive.lk/images/AC0I9784.JPG", caption: "Expert Instructors" },
    { src: "http://howtodrive.lk/images/CommercialVehicles.jpg", caption: "Commercial Vehicle Training" },
    { src: "http://howtodrive.lk/images/AC0I9828.JPG", caption: "On-Road Practice" },
    { src: "http://howtodrive.lk/images/002.jpg", caption: "Confidence Behind the Wheel" },
  ];

  return (
    <div className="slider-container w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img
              className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105"
              src={slide.src}
              alt={`slide-${index}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end justify-start p-6">
              <h2 className="text-white text-2xl md:text-4xl font-bold drop-shadow-lg">
                {slide.caption}
              </h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default PauseOnHover;
