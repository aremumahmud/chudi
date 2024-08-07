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
import { FaAws, FaGit, FaGithub, FaNodeJs, FaPython, FaReact } from "react-icons/fa6";
// import {B} from 'react-icons/bi'

export default function SwiperBottom() {
  return (
    <div className="swiper-bottom">
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
            <p className="title_big"><FaNodeJs /></p>
            <p className="title_small">Creating efficient and scalable API solutions in Nodejs</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="content_slide">
            <p className="title_big"><FaReact /></p>
            <p className="title_small">Crafting responsive and intuitive UI designs with ReactJS </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="content_slide">
            <p className="title_big"><FaPython /></p>
            <p className="title_small">AI integration and crafting of computational heavy solutions</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="content_slide">
            <p className="title_big"><FaGithub /></p>
            <p className="title_small">Version control, CI/CD pipelines with Git & Github</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="content_slide">
            <p className="title_big"><FaAws /></p>
            <p className="title_small">Cloud computing & Devops with amazon web services</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
