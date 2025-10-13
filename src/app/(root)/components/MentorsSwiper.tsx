"use client";

import Image from "next/image";

import IconMedal from "@/components/svg/icons/IconMedal";
import IconInstagram from "@/components/svg/icons/IconInstagram";
import IconGithub from "@/components/svg/icons/IconGithub";
import IconLinkedin from "@/components/svg/icons/IconLinkedin";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperControlButton from "./SwiperControlButton";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Social {
  platform: string;
  user: string;
  url: string;
}

interface Mentor {
  id: number;
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  socials: Social[];
}

interface MentorsSwiperProps {
  data: Mentor[];
}

const MentorsSwiper: React.FC<MentorsSwiperProps> = ({ data }) => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      className="swiper--mentors"
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        el: ".swiper-pagination",
        clickable: true,
      }}
    >
      {data.map((mentor) => (
        <SwiperSlide key={mentor.id}>
          <div className="lg:flex lg:flex-row lg:justify-center lg:gap-12">
            <div className="mt- relative mx-auto aspect-square w-[248px] overflow-hidden rounded-2xl bg-white shadow-sm lg:mx-0 lg:w-[320px] xl:w-[400px]">
              <Image
                src={mentor.imageUrl}
                alt={mentor.name}
                fill
                className="object-contain object-bottom pt-4"
                sizes="(max-width: 1024px) 248px, (max-width: 1280px) 400px, 320px"
                priority={false}
              />

              <a
                aria-label="Instagram Mentor"
                href={mentor.socials[0].url}
                className="mentor__social-media absolute top-10 left-2 z-20 hidden w-max scale-75 cursor-pointer items-center gap-4 rounded-lg px-2.5 py-2 shadow-md lg:flex"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconInstagram id={mentor.id} />
                <div className="text-white">
                  <p className="text-sm font-semibold">
                    {mentor.socials[0].platform}
                  </p>
                  <p className="text-xs">{mentor.socials[0].user}</p>
                </div>
              </a>
              <a
                aria-label="Github Mentor"
                href={mentor.socials[1].url}
                className="mentor__social-media absolute top-1/2 right-2 z-20 hidden w-max -translate-y-1/2 scale-75 cursor-pointer items-center gap-4 rounded-lg px-2.5 py-2 shadow-md lg:flex"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconGithub />
                <div className="text-white">
                  <p className="text-sm font-semibold">
                    {mentor.socials[1].platform}
                  </p>
                  <p className="text-xs">{mentor.socials[1].user}</p>
                </div>
              </a>
              <a
                aria-label="Linkedin Mentor"
                href={mentor.socials[2].url}
                className="mentor__social-media absolute bottom-8 left-2 z-20 hidden w-max scale-75 cursor-pointer items-center gap-4 rounded-lg px-2.5 py-2 shadow-md lg:flex"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconLinkedin />
                <div className="text-white">
                  <p className="text-sm font-semibold">
                    {mentor.socials[2].platform}
                  </p>
                  <p className="text-xs">{mentor.socials[2].user}</p>
                </div>
              </a>

              <IconMedal id={mentor.id} />
            </div>
            {/* <div className="relative mx-auto h-[260px] w-[248px] overflow-hidden rounded-2xl bg-white shadow-sm lg:mx-0 lg:h-[300px] lg:w-[320px]">
              <Image
                src={mentor.imageUrl}
                alt={mentor.name}
                fill
                className="object-contain object-bottom pt-4"
                sizes="(max-width: 1024px) 248px, 320px"
                priority={false}
              />

              <a
                aria-label="Instagram Mentor"
                href={mentor.socials[0].url}
                className="mentor__social-media absolute top-10 left-2 z-20 hidden w-max scale-75 cursor-pointer items-center gap-4 rounded-lg px-2.5 py-2 shadow-md lg:flex"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconInstagram id={mentor.id} />
                <div className="text-white">
                  <p className="text-sm font-semibold">
                    {mentor.socials[0].platform}
                  </p>
                  <p className="text-xs">{mentor.socials[0].user}</p>
                </div>
              </a>
              <a
                aria-label="Github Mentor"
                href={mentor.socials[1].url}
                className="mentor__social-media absolute top-1/2 right-2 z-20 hidden w-max -translate-y-1/2 scale-75 cursor-pointer items-center gap-4 rounded-lg px-2.5 py-2 shadow-md lg:flex"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconGithub />
                <div className="text-white">
                  <p className="text-sm font-semibold">
                    {mentor.socials[1].platform}
                  </p>
                  <p className="text-xs">{mentor.socials[1].user}</p>
                </div>
              </a>
              <a
                aria-label="Linkedin Mentor"
                href={mentor.socials[2].url}
                className="mentor__social-media absolute bottom-8 left-2 z-20 hidden w-max scale-75 cursor-pointer items-center gap-4 rounded-lg px-2.5 py-2 shadow-md lg:flex"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconLinkedin />
                <div className="text-white">
                  <p className="text-sm font-semibold">
                    {mentor.socials[2].platform}
                  </p>
                  <p className="text-xs">{mentor.socials[2].user}</p>
                </div>
              </a>

              <IconMedal id={mentor.id} />
            </div> */}

            <div className="">
              <div className="text-center lg:text-left">
                <h3 className="mt-7 text-2xl font-semibold text-white">
                  {mentor.name}
                </h3>
                <p className="text-medium mt-1 text-white">{mentor.role}</p>
              </div>
              <div className="mt-4 flex items-center justify-center gap-3 lg:hidden">
                <a
                  aria-label="Instagram Mentor"
                  href={mentor.socials[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconInstagram id={mentor.id} />
                </a>
                <a
                  aria-label="Github Mentor"
                  href={mentor.socials[1].url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconGithub />
                </a>
                <a
                  aria-label="Linkedin Mentor"
                  href={mentor.socials[2].url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconLinkedin />
                </a>
              </div>
              <p className="mentor__description mt-4 text-center text-white lg:text-left">
                {mentor.description}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}

      <div className="mt-7 flex items-center justify-center gap-3">
        <SwiperControlButton direction="prev" />
        <div className="swiper-pagination" />
        <SwiperControlButton direction="next" />
      </div>
    </Swiper>
  );
};

export default MentorsSwiper;
