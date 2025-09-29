"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import TestimonialCard from "./TestimonialCard";

import testimonials from "@/json/testimonials";

const TestimonialsSwiper = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      className="swiper--testimonials relative lg:mt-8"
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      slidesPerView={1}
      spaceBetween={32}
      pagination={{
        el: ".swiper-pagination-testimonials",
        clickable: true,
      }}
      breakpoints={{
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <TestimonialCard testimonial={testimonial} />
        </SwiperSlide>
      ))}
      <div className="swiper-pagination-testimonials swiper-pagination" />
    </Swiper>
  );
};

export default TestimonialsSwiper;
