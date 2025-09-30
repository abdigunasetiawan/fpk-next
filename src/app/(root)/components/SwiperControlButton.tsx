import { useSwiper } from "swiper/react";

interface SwiperControlButtonProps {
  direction: "next" | "prev";
}

const SwiperControlButton: React.FC<SwiperControlButtonProps> = ({
  direction,
}) => {
  const swiper = useSwiper();

  return (
    <button
      onClick={() =>
        direction === "next" ? swiper.slideNext() : swiper.slidePrev()
      }
      aria-label={direction === "next" ? "Next Slide" : "Previous Slide"}
    >
      <svg
        className="group w-12 cursor-pointer transition-all duration-100 active:scale-90"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 49 49"
      >
        <rect
          className="fill-[#D9D9D970] group-hover:fill-[#fff]"
          width={49}
          height={49}
          rx="24.5"
        />
        <path
          className="stroke-[#989696] group-hover:stroke-[#FF7E3E]"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M22.917 32.5 15 24.5m0 0 7.917-8M15 24.5h19"
          transform={direction === "next" ? "rotate(180 24.5 24.5)" : undefined}
        />
      </svg>
    </button>
  );
};

export default SwiperControlButton;
