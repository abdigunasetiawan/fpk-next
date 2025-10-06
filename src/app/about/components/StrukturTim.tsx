import Marquee from "react-fast-marquee";
import ProfileCard from "./ProfileCard";

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

const teamsData = {
  mainTeam: [
    {
      id: 1,
      name: "Riski Firmansyah Manik",
      role: "Ketua",
      imageUrl: "/images/profile/riski-firmansyah-manik.jpg",
      socials: {
        instagram: {
          label: "Riski Firmansyah Manik",
          url: "https:instagram.com",
        },
        github: {
          label: "Riski Firmansyah Manik",
          url: "https:github.com",
        },
        linkedIn: {
          label: "Riski Firmansyah Manik",
          url: "https:linkedin.com",
        },
        portfolio: {
          label: "Riski Dev",
          url: "https:portfolio.com",
        },
      },
    },
    {
      id: 2,
      name: "Abdi Guna Setiawan",
      role: "Wakil Ketua",
      imageUrl: "/images/profile/abdi-guna-setiawan.jpg",
      socials: {
        instagram: {
          label: "Abdi Guna Setiawan",
          url: "https:instagram.com",
        },
        github: {
          label: "Abdi Guna Setiawan",
          url: "https:github.com",
        },
        linkedIn: {
          label: "Abdi Guna Setiawan",
          url: "https:linkedin.com",
        },
        portfolio: {
          label: "Abdi Dev",
          url: "https:portfolio.com",
        },
      },
    },
    {
      id: 3,
      name: "Ade Aulia Dharma",
      role: "Sekretaris",
      imageUrl: "/images/profile/ade-aulia-dharma.jpg",
      socials: {
        instagram: {
          label: "Ade Aulia Dharma",
          url: "https:instagram.com",
        },
        github: {
          label: "Ade Aulia Dharma",
          url: "https:github.com",
        },
        linkedIn: {
          label: "Ade Aulia Dharma",
          url: "https:linkedin.com",
        },
        portfolio: {
          label: "Ade Aulia Dharma",
          url: "https:portfolio.com",
        },
      },
    },
    {
      id: 4,
      name: "Nazwa Intan Sari",
      role: "Wakil Sekretaris",
      imageUrl: "/images/profile/nazwa-intan-sari.jpg",
      socials: {
        instagram: {
          label: "Nazwa Intan Sari",
          url: "https:instagram.com",
        },
        github: {
          label: "Nazwa Intan Sari",
          url: "https:github.com",
        },
        linkedIn: {
          label: "Nazwa Intan Sari",
          url: "https:linkedin.com",
        },
        portfolio: {
          label: "Nazwa Intan Sari",
          url: "https:portfolio.com",
        },
      },
    },
    {
      id: 5,
      name: "Reyva Ryo Al Hafiz",
      role: "Ketua Bendahara",
      imageUrl: "/images/profile/reyva-ryo-al-hafiz.jpg",
      socials: {
        instagram: {
          label: "Reyva Ryo Al Hafiz",
          url: "https:instagram.com",
        },
        github: {
          label: "Reyva Ryo Al Hafiz",
          url: "https:github.com",
        },
        linkedIn: {
          label: "Reyva Ryo Al Hafiz",
          url: "https:linkedin.com",
        },
        portfolio: {
          label: "Reyva Ryo Al Hafiz",
          url: "https:portfolio.com",
        },
      },
    },
    {
      id: 6,
      name: "Citra Pratiwi",
      role: "Wakil Bendahara",
      imageUrl: "/images/profile/citra.jpg",
      socials: {
        instagram: {
          label: "Citra Pratiwi",
          url: "https:instagram.com",
        },
        github: {
          label: "Citra Pratiwi",
          url: "https:github.com",
        },
        linkedIn: {
          label: "Citra Pratiwi",
          url: "https:linkedin.com",
        },
        portfolio: {
          label: "Citra Pratiwi",
          url: "https:portfolio.com",
        },
      },
    },
  ],
  divisionTeam: [
    {
      id: 1,
      name: "Mhd. Jeffry Fadhil",
      role: "Ketua Kader",
      imageUrl: "/images/profile/mhd-jeffry-fadhil.jpg",
      socials: {
        instagram: {
          label: "Mhd. Jeffry Fadhil",
          url: "https:instagram.com",
        },
        github: {
          label: "Mhd. Jeffry Fadhil",
          url: "https:github.com",
        },
        linkedIn: {
          label: "Mhd. Jeffry Fadhil",
          url: "https:linkedin.com",
        },
        portfolio: {
          label: "Mhd. Jeffry Fadhil",
          url: "https:portfolio.com",
        },
      },
    },
    {
      id: 2,
      name: "Audi Putri Sadiwa",
      role: "Kader",
      imageUrl: "/images/profile/audi-putri-sadiwa.png",
      socials: {
        instagram: {
          label: "Audi Putri Sadiwa",
          url: "https:instagram.com",
        },
        github: {
          label: "Audi Putri Sadiwa",
          url: "https:github.com",
        },
        linkedIn: {
          label: "Audi Putri Sadiwa",
          url: "https:linkedin.com",
        },
        portfolio: {
          label: "Audi Putri Sadiwa",
          url: "https:portfolio.com",
        },
      },
    },
    {
      id: 3,
      name: "Farhan Ahmad",
      role: "Kader",
      imageUrl: "/images/profile/farhan-ahmad.jpg",
      socials: {
        instagram: {
          label: "Farhan Ahmad",
          url: "https:instagram.com",
        },
        github: {
          label: "Farhan Ahmad",
          url: "https:github.com",
        },
        linkedIn: {
          label: "Farhan Ahmad",
          url: "https:linkedin.com",
        },
        portfolio: {
          label: "Farhan Ahmad",
          url: "https:portfolio.com",
        },
      },
    },
    {
      id: 4,
      name: "Muhammad Gifary",
      role: "Ketua Media Kreatif",
      imageUrl: "/images/profile/muhammad-gifary.jpg",
      socials: {
        instagram: {
          label: "Muhammad Gifary",
          url: "https:instagram.com",
        },
        github: {
          label: "Muhammad Gifary",
          url: "https:github.com",
        },
        linkedIn: {
          label: "Muhammad Gifary",
          url: "https:linkedin.com",
        },
        portfolio: {
          label: "Muhammad Gifary",
          url: "https:portfolio.com",
        },
      },
    },
    {
      id: 5,
      name: "Syarifa Ade Mastura",
      role: "Media Kreatif",
      imageUrl: "/images/profile/syarifa-ade-mastura.jpg",
      socials: {
        instagram: {
          label: "Syarifa Ade Mastura",
          url: "https:instagram.com",
        },
        github: {
          label: "Syarifa Ade Mastura",
          url: "https:github.com",
        },
        linkedIn: {
          label: "Syarifa Ade Mastura",
          url: "https:linkedin.com",
        },
        portfolio: {
          label: "Syarifa Ade Mastura",
          url: "https:portfolio.com",
        },
      },
    },
    {
      id: 6,
      name: "Mutia Zahra Nasution",
      role: "Media Kreatif",
      imageUrl: "/images/profile/mutia-zahra-nasution.jpg",
      socials: {
        instagram: {
          label: "Mutia Zahra Nasution",
          url: "https:instagram.com",
        },
        github: {
          label: "Mutia Zahra Nasution",
          url: "https:github.com",
        },
        linkedIn: {
          label: "Mutia Zahra Nasution",
          url: "https:linkedin.com",
        },
        portfolio: {
          label: "Mutia Zahra Nasution",
          url: "https:portfolio.com",
        },
      },
    },
    {
      id: 7,
      name: "Novenda Sitepu",
      role: "Ketua Humas",
      imageUrl: "/images/profile/novenda-sitepu.jpg",
      socials: {
        instagram: {
          label: "Novenda Sitepu",
          url: "https:instagram.com",
        },
        github: {
          label: "Novenda Sitepu",
          url: "https:github.com",
        },
        linkedIn: {
          label: "Novenda Sitepu",
          url: "https:linkedin.com",
        },
        portfolio: {
          label: "Novenda Sitepu",
          url: "https:portfolio.com",
        },
      },
    },
    {
      id: 8,
      name: "Regiba Fihi",
      role: "Humas",
      imageUrl: "/images/profile/regiba-fihi.jpg",
      socials: {
        instagram: {
          label: "Regiba Fihi",
          url: "https:instagram.com",
        },
        github: {
          label: "Regiba Fihi",
          url: "https:github.com",
        },
        linkedIn: {
          label: "Regiba Fihi",
          url: "https:linkedin.com",
        },
        portfolio: {
          label: "Regiba Fihi",
          url: "https:portfolio.com",
        },
      },
    },
  ],
};

const StrukturTim = () => {
  return (
    <section id="team" className="relative">
      <div className="container mx-auto px-4 py-16 md:px-8 xl:px-16">
        <h2 className="text-center text-2xl font-semibold text-black">
          Tim Kami
        </h2>
        <div className="mt-6">
          <Marquee
            play={true}
            speed={50}
            gradient={true}
            gradientWidth={10}
            className="overflow-hidden py-2"
          >
            {teamsData.mainTeam.map((team) => (
              <ProfileCard
                key={team.id}
                id={team.id}
                name={team.name}
                role={team.role}
                imageUrl={team.imageUrl}
                socials={team.socials}
              />
            ))}
          </Marquee>

          <Marquee
            play={true}
            speed={50}
            gradient={true}
            gradientWidth={10}
            className="overflow-hidden py-2"
          >
            {teamsData.divisionTeam.map((team) => (
              <ProfileCard
                key={team.id}
                id={team.id}
                name={team.name}
                role={team.role}
                imageUrl={team.imageUrl}
                socials={team.socials}
              />
            ))}
          </Marquee>
        </div>
      </div>
      {/* <TeamStructureDecoration /> */}
    </section>
  );
};

export default StrukturTim;
