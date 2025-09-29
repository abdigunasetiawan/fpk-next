import BenefitCard from "./BenefitCard";

const benefitsData = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="83"
        height="63"
        fill="none"
        viewBox="0 0 83 63"
      >
        <rect width="83" height="63" fill="#FF7E3E" rx="7" />
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
          d="M26 44.625c0 1.16.467 2.273 1.297 3.094A4.456 4.456 0 0 0 30.43 49H57V14H30.429c-1.175 0-2.301.46-3.132 1.281A4.349 4.349 0 0 0 26 18.375v26.25Zm0 0c0-1.16.467-2.273 1.297-3.094a4.456 4.456 0 0 1 3.132-1.281H57m-22.143-17.5h13.286"
        />
      </svg>
    ),
    title: "Akses ke Sumber Belajar",
    description:
      "Dapatkan akses ke berbagai materi belajar berkualitas yang disusun oleh para ahli. Mulai dari tutorial hingga dokumentasi, semua disediakan untuk mendukung perjalanan belajarmu.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="83"
        height="63"
        fill="none"
        viewBox="0 0 83 63"
      >
        <rect width="83" height="63" fill="#FF7E3E" rx="7" />
        <path
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
          d="M46.326 22.062a4.558 4.558 0 1 1-9.116-.008 4.558 4.558 0 0 1 9.116.008Zm.146 11.276h-9.4a6.084 6.084 0 0 0 0 12.162h9.4a6.084 6.084 0 0 0 0-12.162v0Zm11.382-7.79a3.486 3.486 0 1 1-6.972-.004 3.486 3.486 0 0 1 6.972.004v0Zm-32.708-.001a3.486 3.486 0 1 0 6.972 0 3.486 3.486 0 0 0-6.972 0v0Z"
          clipRule="evenodd"
        />
        <path
          fill="#fff"
          d="M55.352 32.678a2 2 0 0 0 0 4v-4Zm2.614 2 .041-2h-.041v2Zm0 9.302v2h.041l-.041-2Zm-2.614-2a2 2 0 1 0 0 4v-4Zm-27.704-5.302a2 2 0 1 0 0-4v4Zm-2.614-2v-2h-.042l.042 2Zm0 9.302-.042 2h.042v-2Zm2.614 2a2 2 0 1 0 0-4v4Zm27.704-9.302h2.614v-4h-2.614v4Zm2.573 0a2.652 2.652 0 0 1 2.597 2.65h4a6.652 6.652 0 0 0-6.515-6.65l-.082 4Zm2.597 2.65a2.652 2.652 0 0 1-2.597 2.652l.082 4a6.652 6.652 0 0 0 6.515-6.651h-4Zm-2.556 2.652h-2.614v4h2.614v-4Zm-30.318-9.302h-2.614v4h2.614v-4Zm-2.656 0a6.652 6.652 0 0 0-6.514 6.65h4a2.652 2.652 0 0 1 2.597-2.65l-.083-4Zm-6.514 6.65a6.652 6.652 0 0 0 6.514 6.651l.083-3.999a2.652 2.652 0 0 1-2.597-2.651h-4Zm6.556 6.652h2.614v-4h-2.614v4Z"
        />
      </svg>
    ),
    title: "Mentoring dari Ahli",
    description:
      "Dapatkan bimbingan langsung dari para ahli di bidangnya. Mentor kami siap membantu dan memberikan wawasan yang mendalam untuk mempercepat perkembanganmu.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={83}
        height={63}
        fill="none"
        viewBox="0 0 83 63"
      >
        <rect className="fill-[#FF7E3E]" width={83} height={63} rx={7} />
        <path
          className="stroke-[#fff]"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="m26.5 39 8.4-8.077 7.2 6.923L56.5 24m0 0H45.7m10.8 0v10.385"
        />
      </svg>
    ),
    title: "Meningkatkan Keahlian Anda",
    description:
      "Tingkatkan keterampilanmu dengan materi yang dirancang khusus untuk pengembangan keahlian. Belajar dengan cara yang praktis dan langsung terapkan dalam proyek nyata.",
  },
];

const Benefit = () => {
  return (
    <section id="benefit">
      <div className="relative container mx-auto mt-9 px-4 py-16 md:px-6 xl:px-16">
        <h2 className="text-center text-2xl font-semibold">
          Benefit <br /> Bergabung Dengan FPK
        </h2>
        <div className="mt-16 flex flex-col gap-y-8 md:flex-row md:flex-wrap md:justify-center md:gap-12 xl:gap-24">
          {benefitsData.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefit;
