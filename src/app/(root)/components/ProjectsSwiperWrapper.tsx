"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ProjectsSwiper from "./ProjectsSwiper";

const ProjectsSwiperWrapper = () => {
  return (
    <div className="relative">
      <button
        aria-label="Previous Slide"
        id="swiper--projects__navigator--prev"
        className="group absolute top-1/2 -left-2 z-20 -translate-y-1/2 cursor-pointer transition-transform duration-100 active:scale-90 md:block lg:-left-6"
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

      <ProjectsSwiper></ProjectsSwiper>

      <button
        aria-label="Next Slide"
        id="swiper--projects__navigator--next"
        className="group absolute top-1/2 -right-2 z-20 -translate-y-1/2 cursor-pointer transition-transform duration-100 active:scale-90 md:block lg:-right-6"
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
    </div>
  );
};

export default ProjectsSwiperWrapper;
