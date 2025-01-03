// import React, { useRef, useState } from 'react';
// // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../css/swiper.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaJs } from "react-icons/fa6";

export default function SwiperTop() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper">
        <SwiperSlide>
          <div className="content_slide">
            <p className="title_big">132</p>
            <p className="title_small">Litres of monster consumed this year</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="content_slide">
            <p className="title_big">657k</p>
            <p className="title_small">Total lines of code written</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="content_slide">
            <p className="title_big">1320</p>
            <p className="title_small">Critical bugs fixed ...and counting</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="content_slide">
            <p className="title_big">20+</p>
            <p className="title_small">Major projects delivered successfully</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="content_slide">
            <p className="title_big">2+</p>
            <p className="title_small">Major contributions to <FaJs /> ecosystem</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
