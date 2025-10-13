"use client";

import events from "@/json/events";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import EventCard from "./EventCard";

const EventsSwiper = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      slidesPerView={1}
      spaceBetween={16}
      navigation={{
        prevEl: "#swiper--events__navigator--prev",
        nextEl: "#swiper--events__navigator--next",
      }}
      pagination={{
        el: ".swiper-pagination-events",
        clickable: true,
      }}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {events.map((event) => (
        <SwiperSlide key={event.id}>
          <EventCard event={event} />
        </SwiperSlide>
      ))}

      <div className="swiper-pagination-events swiper-pagination" />
    </Swiper>
  );
};

export default EventsSwiper;
