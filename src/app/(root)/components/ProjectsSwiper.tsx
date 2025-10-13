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
        },
      }}
    >
      {projects.map((project) => (
        <SwiperSlide key={project.url}>
          <ProjectCard project={project} />
        </SwiperSlide>
      ))}

      <div className="swiper-pagination-projects swiper-pagination" />
    </Swiper>
  );
};

export default ProjectsSwiper;
