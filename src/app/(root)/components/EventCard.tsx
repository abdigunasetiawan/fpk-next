import Image from "next/image";
import { useState } from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface EventCardProps {
  event: {
    id: number;
    type: string;
    img_path: string;
    title: string;
    description: string;
  };
}

const EventCard: React.FC<EventCardProps> = ({
  event: { type, img_path, title, description },
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const showSkeleton = !imageLoaded;

  return (
    <a
      href="#"
      className="card__event group relative mx-auto block aspect-[2/3] w-[calc(100%-32px)] overflow-hidden rounded-lg shadow-xl md:w-full"
    >
      {showSkeleton && <Skeleton height="100%" width="100%"></Skeleton>}

      <Image
        width={500}
        height={650}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        src={img_path}
        alt={title}
        sizes="(min-width: 1279px) 3000px, 300px"
        onLoadingComplete={() => setImageLoaded(true)}
      />
      <div className="absolute bottom-5 left-2.5 z-50 w-[calc(100%-20px)] lg:left-4 lg:w-[calc(100%-32px)] xl:w-[calc(100%-32px)] xl:p-4">
        {showSkeleton ? (
          <Skeleton width="40%" height={14}></Skeleton>
        ) : (
          <p className="max-w-max rounded-lg bg-[#D9D9D990] px-2 py-1 text-xs text-white uppercase">
            {type}
          </p>
        )}

        {showSkeleton ? (
          <Skeleton width="100%" height={24}></Skeleton>
        ) : (
          <p className="mt-4 font-bold text-pretty text-white xl:text-3xl">
            {title}
          </p>
        )}

        <div className="flex items-end gap-x-2">
          {showSkeleton ? (
            <Skeleton width="100px" height="24px"></Skeleton>
          ) : (
            <p className="mt-1 text-sm text-balance text-white">
              {description}
            </p>
          )}

          {showSkeleton ? (
            <Skeleton width="24px" height="24px"></Skeleton>
          ) : (
            <svg
              className="h-6 w-6 shrink-0 md:h-11 md:w-11"
              xmlns="http://www.w3.org/2000/svg"
              width={44}
              height={44}
              fill="none"
              viewBox="0 0 44 44"
            >
              <rect
                width={43}
                height={43}
                fill="url(#a)"
                rx="21.5"
                transform="matrix(-1 0 0 1 43.555 .5)"
              />
              <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={4}
                d="m23.638 30 7.917-8m0 0-7.917-8m7.917 8h-19"
              />
              <defs>
                <linearGradient
                  id="a"
                  x1="21.5"
                  x2="21.5"
                  y1={0}
                  y2={43}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF7E3E" />
                  <stop offset={1} stopColor="#F49D03" />
                </linearGradient>
              </defs>
            </svg>
          )}
        </div>
      </div>
    </a>
  );
};

export default EventCard;
