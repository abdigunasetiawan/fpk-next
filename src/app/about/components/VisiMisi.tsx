const visiText =
  "Menjadi komunitas terdepan di STMIK Kaputama yang mendorong inovasi dan kreativitas di bidang teknologi, serta membentuk generasi programmer dan desainer web yang kompeten dan siap bersaing di dunia industri.";

const misiText = [
  "Menyelenggarakan pelatihan dan workshop secara rutin untuk meningkatkan keterampilan anggota dalam web development dan web design.",
  "Membentuk jaringan antaranggota untuk berkolaborasi dalam proyek-proyek nyata dan memperluas relasi di dunia teknologi",
  "Mendorong anggota untuk mengembangkan proyek-proyek kreatif yang dapat memberikan manfaat nyata bagi masyarakat.",
  "Membangun komunitas yang solid, saling mendukung, dan selalu siap membantu dalam setiap tantangan teknologi yang dihadapi.",
];

const VisiMisi = () => {
  return (
    <section id="visi-misi" className="">
      <div className="container mx-auto mt-9 flex flex-col gap-8 px-4 py-8 md:px-8 lg:flex-row lg:justify-between lg:gap-16 xl:px-16">
        <div className="visi md:mx-auto md:max-w-xl lg:max-w-md xl:max-w-lg">
          <h2 className="relative text-center text-2xl font-bold text-[#FF7E3E] after:absolute after:bottom-[-8px] after:left-1/2 after:block after:h-1 after:w-14 after:-translate-x-1/2 after:bg-[#FF7E3E]">
            Visi
          </h2>
          <p className="mt-7 text-center text-[#000000]/70">{visiText}</p>
        </div>
        <div className="misi md:mx-auto md:max-w-xl">
          <h2 className="relative text-center text-2xl font-bold text-[#FF7E3E] after:absolute after:bottom-[-8px] after:left-1/2 after:block after:h-1 after:w-14 after:-translate-x-1/2 after:bg-[#FF7E3E]">
            Misi
          </h2>
          <ul className="mt-7 flex list-decimal flex-col gap-2 pl-4 text-[#000000]/70">
            {misiText.map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default VisiMisi;
