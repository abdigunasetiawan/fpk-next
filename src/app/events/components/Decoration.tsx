// Komponen Dekorasi
const Decoration = () => (
  <svg
    className="hidden w-16 lg:block"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 67 64"
  >
    <circle cx="21.484" cy="42.31" r="20.984" stroke="#FF7E3E" />
    <circle cx="42.968" cy="24.467" r="24.033" fill="url(#event-page-decor)" />
    <defs>
      <linearGradient
        id="event-page-decor"
        x1="42.968"
        x2="42.968"
        y1=".435"
        y2="48.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF7E3E" />
        <stop offset="1" stopColor="#F49D03" />
      </linearGradient>
    </defs>
  </svg>
);

export default Decoration;
