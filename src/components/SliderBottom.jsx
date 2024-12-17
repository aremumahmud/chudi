// import React, { useRef, useState } from 'react';
// // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import openSource from "../data/openSource.jsx";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../css/swiper.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaAws, FaGit, FaGithub, FaNodeJs, FaPython, FaReact } from "react-icons/fa6";
// import {B} from 'react-icons/bi'

export default function SwiperBottom({light}) {
  return (
    <div className={!light?"swiper-bottom":'swiper-bottom_light'}  >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper" >{
          openSource && openSource.map((data, i)=>{
            return  <SwiperSlide key={i}>
              <div className="content_slide">
            <p className="title_big">{data.icon}</p>
            <p className="title_small">{data.text}</p>
          </div>
        </SwiperSlide>
          })
        }
      </Swiper>
    </div>
  );
}
