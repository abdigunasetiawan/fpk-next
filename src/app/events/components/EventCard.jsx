import Image from "next/image";

const EventCard = ({ event: { type, img_path, title, description } }) => {
  console.log(event);

  return (
    <div className="card w-full md:w-80 lg:w-72 xl:w-[48%]">
      <div className="group overflow-hidden rounded-lg shadow-lg">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Image
            width={736}
            height={352}
            loading="lazy"
            className="h-80 w-full object-cover transition-transform duration-300 group-hover:scale-110"
            src={img_path}
            alt={title}
          />
        </a>
      </div>
      <div className="mt-2 inline-block rounded-lg bg-black/5 p-2 px-3">
        <p className="text-sm font-semibold">{type}</p>
      </div>
      <h1 className="mt-2 text-xl font-bold">{title}</h1>
      <div className="flex items-center justify-between">
        <p className="mt-1 text-black/70 xl:max-w-[70%]">{description}</p>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <svg
            className="hidden w-16 xl:block"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 63 64"
          >
            <rect
              width="63"
              height="63"
              y=".106"
              fill="url(#event-card-arrow)"
              rx="31.5"
              transform="matrix(-1 0 0 1 63 0)"
            />
            <path
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="4"
              d="m33.083 39.606 7.917-8m0 0-7.917-8m7.917 8H22"
            />
            <defs>
              <linearGradient
                id="event-card-arrow"
                x1="31.5"
                x2="31.5"
                y1="0"
                y2="63"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF7E3E" />
                <stop offset="1" stopColor="#F49D03" />
              </linearGradient>
            </defs>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default EventCard;
