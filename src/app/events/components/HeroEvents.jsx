const HeroEvents = () => {
  return (
    <div className="mt-14 bg-[url('/images/event2.webp')] bg-cover bg-center lg:mt-16">
      <div className="relative container mx-auto flex h-[350px] items-center px-4 md:px-8 lg:h-[450px] lg:justify-start lg:gap-8 xl:gap-24 xl:px-16">
        <h1 className="text-center text-3xl font-bold text-white lg:left-8 lg:max-w-md lg:translate-x-0 lg:text-left lg:text-3xl">
          Dokumentasi Kegiatan Kami Selama Berjalannya Forum Programmer Kaputama
        </h1>

        <svg
          className="absolute -top-2 -left-2 w-16 xl:w-24"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 172 229"
        >
          <rect
            width="115"
            height="115"
            x="14"
            fill="#F7C71B"
            fillOpacity=".3"
            rx="10"
          />
          <rect
            width="100"
            height="100"
            x="72"
            y="57"
            fill="#CDFD30"
            fillOpacity=".3"
            rx="10"
          />
          <rect
            width="100"
            height="100"
            y="129"
            fill="#F7C71B"
            fillOpacity=".3"
            rx="10"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroEvents;
