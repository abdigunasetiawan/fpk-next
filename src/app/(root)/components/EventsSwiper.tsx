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
      <button
        id="swiper--events__navigator--prev"
        className="group absolute top-1/2 left-2 z-20 -translate-y-1/2 cursor-pointer transition-transform duration-100 active:scale-90"
      >
        <svg
          className="drop-shadow-lg"
          xmlns="http://www.w3.org/2000/svg"
          width={48}
          height={48}
          fill="none"
          viewBox="0 0 48 48"
        >
          <rect
            className="fill-[#DCDCDC] transition-colors duration-100 group-hover:fill-[#FF7E3E]"
            width={48}
            height={48}
            fill="#DCDCDC"
            rx={24}
            transform="matrix(1 0 0 -1 0 48)"
          />
          <path
            className="stroke-[#989696] transition-colors duration-100 group-hover:stroke-[#fff]"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
            d="M22 12 12 24m0 0 10 12M12 24h24"
          />
        </svg>
      </button>

      {events.map((event) => (
        <SwiperSlide key={event.id}>
          <EventCard event={event} />
        </SwiperSlide>
      ))}

      <div className="swiper-pagination-events swiper-pagination" />

      <button
        id="swiper--events__navigator--next"
        className="group absolute top-1/2 right-2 z-20 -translate-y-1/2 cursor-pointer transition-transform duration-100 active:scale-90"
      >
        <svg
          className="drop-shadow-lg"
          xmlns="http://www.w3.org/2000/svg"
          width={48}
          height={48}
          fill="none"
          viewBox="0 0 48 48"
        >
          <rect
            className="fill-[#DCDCDC] transition-colors duration-100 group-hover:fill-[#FF7E3E]"
            width={48}
            height={48}
            rx={24}
            transform="matrix(-1 0 0 1 48 0)"
          />
          <path
            className="stroke-[#989696] transition-colors duration-100 group-hover:stroke-[#fff]"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
            d="m26 36 10-12m0 0L26 12m10 12H12"
          />
        </svg>
      </button>
    </Swiper>
  );
};

export default EventsSwiper;
