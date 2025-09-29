import Company from "./components/Company";
import Decorations from "./components/Decorations";
import Events from "./components/Events";
import Hero from "./components/Hero";
import Mentors from "./components/Mentors";
import Offers from "./components/Offers";
import Programs from "./components/Programs";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";

import "./style.css";

export const metadata = {
  title: "Forum Programmer Kaputama (FPK) | Komunitas Teknologi & Kreativitas",
  description:
    "Forum Programmer Kaputama adalah wadah mahasiswa Kaputama yang mengembangkan keterampilan pemrograman, desain, dan inovasi digital. Berbasis di Binjai/Medan, FPK berkomitmen membangun ekosistem teknologi yang kolaboratif.",
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

const RootPage = () => {
  return (
    <div>
      <Hero></Hero>
      <Company></Company>
      <Programs></Programs>
      <Offers></Offers>
      <Mentors></Mentors>
      <Events></Events>
      <Projects></Projects>
      <Testimonials></Testimonials>
      <Decorations></Decorations>
    </div>
  );
};

export default RootPage;
