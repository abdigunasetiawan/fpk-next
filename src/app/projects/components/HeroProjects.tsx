const HeroProjects = () => {
  return (
    <section id="hero">
      <div className="jumbotron relative mt-14 h-[350px] lg:mt-16 lg:h-[450px]">
        <div className="relative container mx-auto flex h-full items-center md:px-8 xl:px-16">
          <div className="absolute left-4 w-[calc(100%-32px)] rounded-lg bg-black/40 p-4 md:relative md:left-0 md:max-w-lg">
            <h1 className="text-xl font-bold text-white lg:text-3xl">
              Project Member FPK
            </h1>
            <p className="mt-2 text-white">
              Inilah proyek yang menjadi bukti kemampuan member FPK dalam
              menciptakan website dan desain yang menarik dan fungsional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroProjects;
