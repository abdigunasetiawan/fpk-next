"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface OfferSwiperProps {
  data: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
}

const OfferSwiper: React.FC<OfferSwiperProps> = ({ data }) => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      className="swiper--offers h-[300px] pb-4 xl:max-w-3xl"
      spaceBetween={16}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        el: ".swiper-pagination-offers",
        clickable: true,
      }}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1280: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      }}
    >
      {data.map((offer, index) => (
        <SwiperSlide key={index}>
          <div className="group relative mx-auto flex h-full cursor-pointer flex-col items-center gap-2 overflow-hidden rounded-[20px] bg-[#D9D9D935] p-6 shadow transition-all duration-300 after:absolute after:inset-0 after:-z-10 after:block after:bg-gradient-to-tr after:from-[#F49D03] after:to-[#FF7E3E] after:opacity-0 after:duration-300 hover:after:opacity-100 hover:after:transition-opacity md:max-w-[328px]">
            {offer.icon}
            <h3 className="text-center text-lg font-semibold text-balance group-hover:text-white">
              {offer.title}
            </h3>
            <p className="text-center text-[#000000]/70 group-hover:text-white">
              {offer.description}
            </p>
          </div>
        </SwiperSlide>
      ))}

      <div className="swiper-pagination-offers swiper-pagination" />
    </Swiper>
  );
};

export default OfferSwiper;
