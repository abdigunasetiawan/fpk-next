import "./index.css";
import HeroProjects from "./components/HeroProjects";
import ProjectSection from "./components/ProjectSection";

export const metadata = {
  title: "Proyek | Forum Programmer Kaputama",
  description:
    "Kumpulan karya inovatif Forum Programmer Kaputama, mulai dari website, aplikasi, hingga desain UI/UX. Project ini lahir dari kolaborasi mahasiswa yang ingin memberikan dampak nyata dalam dunia teknologi.",
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

const ProjectsPage = () => {
  return (
    <>
      <HeroProjects />
      <ProjectSection />
    </>
  );
};

export default ProjectsPage;
