import IconFrontend from "@/components/svg/icons/IconFrontend";
import IconBackend from "@/components/svg/icons/IconBackend";
import IconUiUx from "@/components/svg/icons/IconUiUx";
import ProgramCard from "./ProgramCard";

const programsData = [
  {
    icon: IconFrontend,
    title: "Front End Developer",
    description:
      "Ingin tahu cara membuat halaman web? Program ini mengajarkan cara merancang dan membangun website yang menarik.",
  },
  {
    icon: IconBackend,
    title: "Back End Developer",
    description:
      "Tertarik dengan logika dan data? Pelajari cara mengelola server dan database serta membuat aplikasi berjalan dengan baik.",
  },
  {
    icon: IconUiUx,
    title: "UI/UX Designer",
    description:
      "Tidak mau ngoding? Pelajari cara mendesain antarmuka website yang menarik dan mudah digunakan.",
  },
];

const Programs = () => {
  return (
    <section id="programs" className="">
      <div className="container mx-auto px-4 md:px-8 xl:px-16">
        <div className="mt-9 flex flex-col gap-9 lg:mt-28">
          <div className="flex flex-col gap-7 text-center md:items-center lg:flex-row lg:items-start lg:justify-between lg:text-left">
            <h2 className="programs-heading text-2xl font-medium text-balance">
              Pilihan Program <br className="hidden lg:block" />
              Belajar yang ada di FPK
            </h2>
            <p className="text-[#000000]/70 md:max-w-md xl:max-w-xl">
              Bergabunglah dengan program-program kami. Setiap program dirancang
              untuk mengasah skill, menyediakan dukungan dari mentor, dan
              memberikan pengalaman proyek yang mempersiapkanmu untuk industri
              teknologi.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:justify-center">
            {programsData.map((program, index) => (
              <ProgramCard
                key={index}
                icon={program.icon}
                title={program.title}
                description={program.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
