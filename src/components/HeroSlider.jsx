import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Thumbs } from "swiper";
import "swiper/css/bundle";
import headphone from "../assets/images/hero/headphone.png";
import btncar from "../assets/images/hero/btncar.svg";
import thumbheadphone from "../assets/images/hero/thumb-headphone.svg";
import thumbdesktop from "../assets/images/hero/thumb-desktop.svg";
import thumbwatch from "../assets/images/hero/thumb-mobile.svg";
import thumbmobile from "../assets/images/hero/thumb-mobile.svg";
// import thumbsearch from "../assets/images/hero/thumb-search.svg";
const HeroSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  console.log(thumbsSwiper);

  return (
    <section className="slider-section">
      <div className="container">
        <div>
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            // onSwiper={setThumbsSwiper}
            loop={true}
            slidesPerView={4}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <img src={thumbheadphone} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={thumbdesktop} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={thumbmobile} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={thumbwatch} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="slider-container">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            thumbs={{ swiper: thumbsSwiper }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: false,
            }}
            navigation={false}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div
                className="slider-inner"
                style={{
                  backgroundImage: `url(${headphone})`,
                  backgroundPosition: "bottom center",
                }}
              >
                <div className="slider-content">
                  <h2>headphone</h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nobis.
                  </p>
                  <button>
                    buy now{" "}
                    <span>
                      <img src={btncar} alt="" />
                    </span>{" "}
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="slider-inner"
                style={{
                  backgroundImage: `url(${headphone})`,
                  backgroundPosition: "bottom center",
                }}
              >
                <div className="slider-content">
                  <h2>headphone</h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nobis.
                  </p>
                  <button>
                    buy now{" "}
                    <span>
                      <img src={btncar} alt="" />
                    </span>{" "}
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="slider-inner"
                style={{
                  backgroundImage: `url(${headphone})`,
                  backgroundPosition: "bottom center",
                }}
              >
                <div className="slider-content">
                  <h2>headphone</h2>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nobis.
                  </p>
                  <button>
                    buy now{" "}
                    <span>
                      <img src={btncar} alt="" />
                    </span>{" "}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
