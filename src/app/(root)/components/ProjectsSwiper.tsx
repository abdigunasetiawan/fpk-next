"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ProjectCard from "./ProjectCard";

import projects from "@/json/projects";

const ProjectsSwiper = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      className="swiper--projects relative"
      loop={true}
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      slidesPerView={1}
      spaceBetween={16}
      navigation={{
        prevEl: "#swiper--projects__navigator--prev",
        nextEl: "#swiper--projects__navigator--next",
      }}
      pagination={{
        el: ".swiper-pagination-projects",
        clickable: true,
      }}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
      }}
    >
      <button
        id="swiper--projects__navigator--prev"
        className="group absolute top-1/2 left-2 z-20 hidden -translate-y-1/2 cursor-pointer transition-transform duration-100 active:scale-90 md:block"
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

      {projects.map((project) => (
        <SwiperSlide key={project.url}>
          <ProjectCard project={project} />
        </SwiperSlide>
      ))}

      <div className="swiper-pagination-projects swiper-pagination" />

      <button
        id="swiper--projects__navigator--next"
        className="group absolute top-1/2 right-2 z-20 hidden -translate-y-1/2 cursor-pointer transition-transform duration-100 active:scale-90 md:block"
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

export default ProjectsSwiper;
