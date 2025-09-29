import ContactHeader from "./components//ContactHeader";
import ContactForm from "./components//ContactForm";
import Decorations from "./components/Decorations";

export const metadata = {
  title: "Kontak | Forum Programmer Kaputama",
  description:
    "Hubungi Forum Programmer Kaputama untuk pertanyaan, kerja sama, atau informasi kegiatan komunitas. Kami siap terhubung dengan mahasiswa, praktisi, maupun penggiat teknologi di Binjai dan Medan.",
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

const ContactPage = () => {
  return (
    <main className="mt-14 lg:mt-16">
      <ContactHeader />
      <ContactForm />
      <Decorations></Decorations>
    </main>
  );
};

export default ContactPage;
