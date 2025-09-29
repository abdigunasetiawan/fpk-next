import Image from "next/image";

import IconTeam from "@/components/svg/icons/IconTeam";
import IconSkill from "@/components/svg/icons/IconSkill";
import IconRelation from "@/components/svg/icons/IconRelation";
import OfferSwiper from "./OfferSwiper";

const offersData = [
  {
    icon: <IconTeam />,
    title: "Akses Terbuka Untuk Semua",
    description:
      "Siapa pun bisa bergabung! Di Forum Programmer Kaputama, kami memberikan akses terbuka untuk semua orang. Tidak peduli dari mana kamu memulai.",
  },
  {
    icon: <IconSkill />,
    title: "Meningkatkan Skill",
    description:
      "Ingin meningkatkan keterampilan? Kami punya materi belajar yang asyik dan mudah dipahami, plus latihan langsung yang bikin kamu makin jago di bidang teknologi.",
  },
  {
    icon: <IconRelation />,
    title: "Menambah Relasi",
    description:
      "Jangan cuma belajar, tapi juga kenalan dengan banyak orang! Di sini, kamu bisa membangun jaringan dengan teman-teman baru dan profesional di dunia teknologi.",
  },
];

const Offers = () => {
  return (
    <section id="offers">
      <div className="container mx-auto px-4 md:px-8 xl:px-16">
        <div className="text-wrapper mt-9 flex flex-col items-center gap-7 text-center lg:mt-28 lg:items-start lg:text-left">
          <h2 className="offers-heading text-2xl font-medium text-balance">
            Penawaran <br className="hidden lg:block" />
            Forum Programmer Kaputama
          </h2>
          <p className="text-[#000000]/70 md:max-w-md xl:max-w-xl">
            Di Forum Programmer Kaputama, ada banyak keuntungan untuk kamu.
            Semua orang bisa bergabung tanpa syarat. Kami bantu kamu tingkatkan
            keterampilan dengan materi yang gampang dipahami, dan juga bikin
            kamu bisa kenalan dengan banyak teman baru dan profesional di bidang
            teknologi.
          </p>
        </div>
        <div className="mt-9 flex items-center justify-between gap-8">
          <div className="hidden shrink-0 lg:block">
            <Image
              width={484}
              height={437}
              className="translate-y-10 lg:w-[400px] xl:w-[484px]"
              src="/images/offer.png"
              alt="Penawaran FPK"
              draggable="false"
              loading="lazy"
            />
          </div>
          <OfferSwiper data={offersData}></OfferSwiper>
        </div>
      </div>
    </section>
  );
};

export default Offers;
