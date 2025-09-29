import Benefit from "./components/Benefit";
import Decorations from "./components/Decorations";
import HeroAbout from "./components/HeroAbout";
import Mentors from "./components/Mentors";
import StrukturTim from "./components/StrukturTim";
import VisiMisi from "./components/VisiMisi";

import "./style.css";

export const metadata = {
  title: "Tentang Kami | Forum Programmer Kaputama",
  description:
    "Kenali lebih dekat Forum Programmer Kaputama (FPK), komunitas mahasiswa yang berfokus pada teknologi, pemrograman, dan desain. Kami hadir untuk mendukung generasi muda Binjai dan Medan agar siap bersaing di dunia digital.",
  openGraph: {
    title: "Forum Programmer Kaputama",
    description:
      "Forum Programmer Kaputama (FPK) adalah organisasi mahasiswa dari kampus Kaputama yang didedikasikan untuk membangun masa depan teknologi. Kami menawarkan pelatihan dalam web development dan desain UI/UX, dengan fokus pada pengembangan keterampilan praktis dan kolaborasi.",
    url: "https://forumprogrammerkaputama.vercel.app",
    siteName: "Forum Programmer Kaputama",
    images: [
      {
        url: "https://forumprogrammerkaputama.vercel.app/images/og.png",
        width: 1200,
        height: 630,
        alt: "Hero Section Forum Programmer Kaputama",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

const AboutPage = () => {
  return (
    <div>
      <HeroAbout />
      <VisiMisi />
      <Benefit />
      <Mentors />
      <StrukturTim />
      <Decorations></Decorations>
    </div>
  );
};

export default AboutPage;
