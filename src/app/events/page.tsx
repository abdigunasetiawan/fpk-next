import "./index.css";

import EventsSection from "./components/EventsSection";
import HeroEvents from "./components/HeroEvents";

export const metadata = {
  title: "Kegiatan & Event | Forum Programmer Kaputama",
  description:
    "Ikuti berbagai event yang diselenggarakan Forum Programmer Kaputama. Dari workshop, seminar, hingga pelatihan intensif, semua dirancang untuk mengasah kemampuan programmer muda di Binjai/Medan.",
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

const EventsPage = () => {
  return (
    <>
      <section id="hero">
        <HeroEvents />
        <EventsSection />
      </section>

      <div className="absolute top-96 -left-44 -z-20 hidden h-[400px] w-[400px] rounded-full bg-[#FF7E3E]/50 blur-[50px] xl:block"></div>
    </>
  );
};

export default EventsPage;
