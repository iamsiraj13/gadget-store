import React, { useState } from "react";
import "./styles.css";
const OurSlide = () => {
  const img = [
    { url: "https://swiperjs.com/demos/images/nature-1.jpg" },
    { url: "https://swiperjs.com/demos/images/nature-2.jpg" },
    { url: "https://swiperjs.com/demos/images/nature-3.jpg" },
    { url: "https://swiperjs.com/demos/images/nature-4.jpg" },
    { url: "https://swiperjs.com/demos/images/nature-5.jpg" },
    { url: "https://swiperjs.com/demos/images/nature-6.jpg" },
    { url: "https://swiperjs.com/demos/images/nature-7.jpg" },
    { url: "https://swiperjs.com/demos/images/nature-8.jpg" },
    { url: "https://swiperjs.com/demos/images/nature-9.jpg" },
    { url: "https://swiperjs.com/demos/images/nature-10.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? img.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === img.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToslide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="container">
        <div className="slider">
          <div className="left-arrow" onClick={goToPrev}>
            Left
          </div>
          <div className="right-arrow" onClick={goToNext}>
            Right
          </div>
          <div className="slide">
            <img src={img[currentIndex].url} alt="" />
          </div>
          <div className="dot">
            {img.map((image, index) => (
              <div
                className={` ${
                  index === currentIndex ? "active dotnew" : "dotnew"
                }`}
                onClick={() => {
                  goToslide(index);
                }}
              ></div>
            ))}
          </div>
          <div className="number">
            <p className="">
              {currentIndex + 1}/{img.length}
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default OurSlide;
