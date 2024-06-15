import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Card from "../Card/Card";
import CardTwo from "../Card/CardTwo";
import TestimonialCard from "../Card/TestimonialCard";
const Testimonial = () => {
  return (
    <>
      <div class="container">
        <div class="row">
          <div className="col-lg-12">
            <>
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <TestimonialCard />
                </SwiperSlide>
                <SwiperSlide>
                  <TestimonialCard />
                </SwiperSlide>
                <SwiperSlide>
                  <TestimonialCard />
                </SwiperSlide>
                <SwiperSlide>
                  <TestimonialCard />
                </SwiperSlide>
                <SwiperSlide>
                  <TestimonialCard />
                </SwiperSlide>
              
              </Swiper>
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
