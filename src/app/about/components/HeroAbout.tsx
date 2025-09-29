const HeroAbout = () => {
  return (
    <section id="hero">
      <main className="mt-14 lg:mt-16">
        <div className="relative container mx-auto flex h-[350px] items-center px-4 md:px-8 lg:h-[450px] xl:px-16">
          <div className="absolute left-4 z-10 w-[calc(100%-32px)] rounded-lg bg-black/40 p-4 md:relative md:left-0 md:max-w-lg">
            <h1 className="text-xl font-bold text-white lg:text-3xl">
              Tentang Kami
            </h1>
            <p className="mt-2 text-white">
              Forum Programmer Kaputama (FPK) adalah organisasi mahasiswa dari
              kampus Kaputama yang didedikasikan untuk membangun masa depan
              teknologi. Kami menawarkan pelatihan dalam web development dan
              desain UI/UX, dengan fokus pada pengembangan keterampilan praktis
              dan kolaborasi.
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default HeroAbout;
