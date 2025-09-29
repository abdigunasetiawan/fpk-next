import MentorsSwiper from "./MentorsSwiper";

const mentorsData = [
  {
    id: 1,
    name: "Risky Firmansyah Manik",
    role: "Mentor Front End Developer",
    description:
      "Bagi kamu yang ingin jadi Front End Developer, kak Risky akan ngebantu belajar kamu sebagai Front End Developer sampai kamu bisa menjadi web developer.",
    imageUrl: "/images/mentors/mentor1.png",
    socials: [
      {
        platform: "Instagram",
        user: "riskymanik__",
        url: "https://www.instagram.com/riskymanik__/",
      },
      {
        platform: "Github",
        user: "Risky Manik",
        url: "https://github.com/riskimanik",
      },
      {
        platform: "LinkedIn",
        user: "Risky Manik",
        url: "https://www.linkedin.com/in/risky-manik-845084296/",
      },
    ],
  },
  {
    id: 2,
    name: "Muhammad Hiszat",
    role: "Mentor Back End Developer",
    description:
      "Bagi kamu yang ingin jadi Back End Developer, kak Izat akan ngebantu belajar kamu sebagai Back End Developer sampai kamu bisa menjadi web developer.",
    imageUrl: "/images/mentors/mentor2.png",

    socials: [
      {
        platform: "Instagram",
        user: "@iz_zzt",
        url: "https://www.instagram.com/iz_zzt/",
      },
      {
        platform: "Github",
        user: "Muhammad Hiszat",
        url: "https://github.com/Hiszat",
      },
      {
        platform: "LinkedIn",
        user: "Muhammad Hiszat",
        url: "https://www.linkedin.com/in/muhammad-hiszat/",
      },
    ],
  },
  {
    id: 3,
    name: "M. Dzikri Kesuma",
    role: "Mentor UI/UX Designer",
    description:
      "Kamu ga bisa ngoding? tapi pengen jadi bagian dari Web Developer? Pengen Join FPK Juga? tenang belajar kamu akan di bantu kak Zikri menjadi UI/UX DESIGNER.",
    imageUrl: "/images/mentors/mentor3.png",

    socials: [
      {
        platform: "Instagram",
        user: "@sayazk.k",
        url: "https://www.instagram.com/sayazk.k/",
      },
      {
        platform: "Github",
        user: "@DzikriKesuma",
        url: "https://github.com/dzikrikesuma",
      },
      {
        platform: "LinkedIn",
        user: "M Dzikri Kesuma",
        url: "https://www.linkedin.com/in/m-dzikri-kesuma-8a618137a/",
      },
    ],
  },
];

const Mentors = () => {
  return (
    <section id="mentors">
      <div className="wrapper mt-9 px-4 py-16 md:px-8 xl:px-16">
        <div className="">
          <h2 className="text-center text-2xl font-semibold text-white">
            Mentor Terbaik <br className="hidden md:block" />
            Forum Programmer Kaputama
          </h2>
          <div className="content mt-6">
            <MentorsSwiper data={mentorsData}></MentorsSwiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentors;
