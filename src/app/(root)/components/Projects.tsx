import ProjectsSwiperWrapper from "./ProjectsSwiperWrapper";
import SectionsButtonNavigator from "./SectionsButtonNavigator";

const Projects = () => {
  return (
    <section id="projects" className="bg-[#D9D9D920]">
      <div className="container mx-auto mt-9 px-4 pt-16 pb-8 md:px-8 xl:px-16">
        <div className="lg:flex lg:items-end lg:justify-between">
          <div className="text-center lg:text-left">
            <h2 className="projects-heading text-2xl font-semibold">
              Project Terbaru Dari
              <br />
              Forum Programmer Kaputama
            </h2>
            <p className="mx-auto mt-7 max-w-md text-[#000000]/70 lg:mx-0 xl:max-w-xl">
              Eksplorasi proyek website dan desain dari Forum Programmer
              Kaputama di sini. Setiap karya menunjukkan dedikasi dan
              kreativitas anggota kami dalam menciptakan solusi digital yang
              menarik.
            </p>
          </div>

          <SectionsButtonNavigator href="/projects" isMobile={false} />
        </div>

        <ProjectsSwiperWrapper />

        <SectionsButtonNavigator href="/projects" isMobile={true} />
      </div>
    </section>
  );
};

export default Projects;
