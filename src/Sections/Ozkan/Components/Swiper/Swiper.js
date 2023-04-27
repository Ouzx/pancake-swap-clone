import React, { useRef, useEffect, useState } from 'react';

const Swiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  const slides = [
    // Add slide contents here
    <div key={1} className="swiper-slide">
      {/* Content of Slide 1 */}
    </div>,
    <div key={2} className="swiper-slide">
      {/* Content of Slide 2 */}
    </div>,
    <div key={3} className="swiper-slide">
      {/* Content of Slide 3 */}
    </div>
    // Add more slides as needed
  ];

  useEffect(() => {
    // Start autoplay interval when the component mounts
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Adjust delay value in milliseconds (ms) as needed

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [slides.length]);

  const handleSlideChange = (index) => {
    // Update active slide index when user clicks on a slide
    setActiveIndex(index);
  };

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`swiper-slide ${
              index === activeIndex ? 'swiper-slide-active' : ''
            }`}
            onClick={() => handleSlideChange(index)}
          >
            {slide}
          </div>
        ))}
      </div>
      {/* Custom pagination bar */}
      <div className="my-custom-pagination">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`my-custom-pagination-bullet ${
              index === activeIndex ? 'my-custom-pagination-bullet-active' : ''
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Swiper;