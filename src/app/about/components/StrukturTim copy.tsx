const TeamStructureDecoration = () => (
  <svg
    className="absolute top-1/2 hidden w-[500px] -translate-y-[calc(50%+150px)] xl:block"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 856 455"
  >
    <path
      stroke="url(#a)"
      strokeWidth="5"
      d="M1 3c131.171 34.71 6.928 179.105 112.697 292.955 105.768 113.85 252.181-12.033 417.531 103.206 165.35 115.238 228.627 0 323.772 39.801"
    />
    <defs>
      <linearGradient
        id="a"
        x1="519.5"
        x2="742.285"
        y1="239.5"
        y2="478.349"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".3" stopColor="#FF7E3E" />
        <stop offset=".6" stopColor="#FA8E21" />
        <stop offset=".9" stopColor="#fff" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

const StrukturTim = () => {
  return (
    <section id="team" className="relative">
      <div className="container mx-auto px-4 py-16 md:px-8 xl:px-16">
        <h2 className="text-center text-2xl font-semibold text-black">
          Tim Kami
        </h2>
        <picture>
          <source
            media="(min-width:1024px)"
            srcSet="/images/svg/about-team-structure-desktop-1.svg"
          />
          <img
            className="mx-auto mt-9 w-full lg:max-w-xl xl:max-w-3xl"
            src="/images/svg/about-team-structure-mobile-1.svg"
            alt="Struktur Tim FPK Bagian 1"
          />
        </picture>
        <picture>
          <source
            media="(min-width:1024px)"
            srcSet="/images/svg/about-team-structure-desktop-2.svg"
          />
          <img
            className="mx-auto mt-32 w-full lg:max-w-xl xl:max-w-3xl"
            src="/images/svg/about-team-structure-mobile-2.svg"
            alt="Struktur Tim FPK Bagian 2"
          />
        </picture>
      </div>
      <TeamStructureDecoration />
    </section>
  );
};

export default StrukturTim;
