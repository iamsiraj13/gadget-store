import React, { useEffect, useRef, useState } from "react";

import headphone from "../assets/images/hero/headphone.png";
import btncar from "../assets/images/hero/btncar.svg";
import desktop from "../assets/images/hero/desktop.png";
import mobile from "../assets/images/hero/phone.png";
import watch from "../assets/images/hero/watch.png";
import thumbheadphone from "../assets/images/hero/thumb-headphone.svg";
import thumbdesktop from "../assets/images/hero/thumb-desktop.svg";
import thumbwatch from "../assets/images/hero/thumb-watch.svg";
import thumbmobile from "../assets/images/hero/thumb-mobile.svg";
import larrow from "../assets/images/hero/larrow.svg";
import rarrow from "../assets/images/hero/rarrow.svg";
// import thumbsearch from "../assets/images/hero/thumb-search.svg";
import { BsChevronLeft, BsChevronRight, BsSlashLg } from "react-icons/bs";
const HeroSlider = () => {
  const slides = [
    {
      img: headphone,
      title: "headphone",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis.",
    },
    {
      img: desktop,
      title: "smart tv",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis.",
    },
    {
      img: watch,
      title: "smart watch",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis.",
    },
    {
      img: mobile,
      title: "mobile",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  // const goToslide = (index) => {
  //   setCurrentIndex(index);
  // };
  const thumb = (id) => {
    setCurrentIndex(id);
  };

  useEffect(() => {
    const timeslide = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(timeslide);
  });

  return (
    <section className="slider-section">
      <div className="container">
        <div className="slider-container">
          <div className="slider-thumb">
            <div
              className={`${
                currentIndex === 0 ? "thumb thumb-active" : "thumb"
              }`}
              onClick={() => thumb(0)}
            >
              <img src={thumbheadphone} alt="" />
            </div>
            <div
              className={`${
                currentIndex === 1 ? "thumb thumb-active" : "thumb"
              }`}
              onClick={() => thumb(1)}
            >
              <img src={thumbdesktop} alt="" />
            </div>
            <div
              className={`${
                currentIndex === 2 ? "thumb thumb-active" : "thumb"
              }`}
              onClick={() => thumb(2)}
            >
              <img src={thumbwatch} alt="" />
            </div>
            <div
              className={`${
                currentIndex === 3 ? "thumb thumb-active" : "thumb"
              }`}
            >
              <img src={thumbmobile} alt="" onClick={() => thumb(3)} />
            </div>
          </div>
          {/*---------- slider content-------- */}
          <div className="slider ">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`${
                  currentIndex === index
                    ? "slider-inner animate__animated animate__zoomIn animate-duration-5s animate__slower"
                    : "d-none slider-inner"
                } `}
                style={{
                  backgroundImage: `url(${slides[currentIndex].img})`,
                }}
              >
                <div className="slider-content">
                  <h2
                    className={`${
                      currentIndex === index
                        ? "animate__animated animate__fadeInUp animation-duration-2s animate__delay-1s slider-content"
                        : " "
                    } `}
                  >
                    {slide.title}
                  </h2>
                  <p
                    className={`${
                      currentIndex === index
                        ? "animate__animated animate__fadeInUp animation-duration-2s animate__delay-2s "
                        : " "
                    } `}
                  >
                    {slide.desc}
                  </p>
                  <button
                    className={`${
                      currentIndex === index
                        ? "animate__animated animate__fadeInUp animation-duration-2s animate__delay-3s  "
                        : " "
                    } `}
                  >
                    buy now{" "}
                    <span>
                      <img src={btncar} alt="" />
                    </span>{" "}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="slider-right">
            {/*-------- slider number -------- */}
            <div className="slider-number">
              <h4>
                <span>0{currentIndex + 1}</span> <span>/0{slides.length}</span>
              </h4>
            </div>

            {/* slider dot  */}
            {/* <ul className="dot">
              {slides.map((slide, index) => (
                <li className="dot-box"></li>
              ))}
            </ul> */}
            {/*------- slider arrow -------- */}
            <div className="slider-arrow">
              <div className="left">
                <button onClick={goToPrev}>
                  <BsChevronLeft />
                </button>
              </div>
              <div className="slash">
                <BsSlashLg />
              </div>
              <div className="right">
                <button onClick={goToNext}>
                  <BsChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
