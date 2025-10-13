import Image from "next/image";

const Hero = () => {
  const members = [
    {
      imgUrl: "/images/members/member-1.webp",
      altText: "Anggota FPK 1",
    },
    {
      imgUrl: "/images/members/member-2.webp",
      altText: "Anggota FPK 2",
    },
    {
      imgUrl: "/images/members/member-3.webp",
      altText: "Anggota FPK 3",
    },
  ];

  return (
    <section id="hero" className="mt-14 xl:mt-16">
      <div className="container mx-auto flex flex-col px-4 pt-9 md:px-8 lg:flex-row lg:items-center lg:justify-between xl:px-16 xl:pt-28">
        <div className="text-center lg:max-w-[550px] lg:text-left xl:max-w-xl">
          <h1 className="hero-heading text-3xl font-bold text-[#FE5611] md:mx-auto md:max-w-sm lg:mx-0 lg:max-w-md lg:font-medium lg:text-black xl:text-4xl">
            Langkah Demi Langkah Menuju Sukses Digital
          </h1>
          <p className="mt-4 text-[#000000]/70 md:mx-auto md:max-w-md lg:mx-0 lg:max-w-md xl:mt-6 xl:text-xl">
            #fromzerotohero bersama Forum Programmer Kaputama ayo tingkatkan
            skill pengalaman karir impian kamu.
          </p>
          <div className="flex flex-col items-center gap-7 lg:mt-7 lg:flex-row lg:gap-4">
            <a
              href="https://chat.whatsapp.com/HKzXt0AK84nKU3RHzxGV7V"
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-2 flex h-[54px] w-[200px] items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-[#F49D03] to-[#FF7E3E] font-bold text-white shadow-xl transition-all duration-300 after:absolute after:inset-0 after:block after:bg-[#FF7E3E] after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100 active:scale-95 lg:mt-0 lg:h-14 lg:w-[205px]"
            >
              <span className="absolute z-10 block">Gabung Sekarang</span>
            </a>
            <div className="hidden h-8 w-[2px] rounded-full bg-[#00000020] lg:block" />
            <div className="mx-auto flex flex-col items-center lg:mx-0 lg:items-start">
              <div className="flex -space-x-2">
                {members.map((member) => (
                  <Image
                    key={member.altText}
                    width={40}
                    height={40}
                    className="w-10 rounded-full border-2 border-white shadow-sm lg:w-9"
                    src={member.imgUrl}
                    alt={member.altText}
                    sizes="(max-width: 1024px) 36px, 40px"
                  ></Image>
                ))}
              </div>
              <p className="mt-1 text-sm text-[#000000]/70">
                Lebih dari <span className="text-[#000000]/80">200+ Orang</span>{" "}
                bergabung di FPK
              </p>
            </div>
          </div>
        </div>
        <div className="mt-9 lg:mt-auto">
          <Image
            className="mx-auto h-auto w-[252px] lg:w-[400px] xl:w-[500px]"
            src="/images/hero.png"
            alt="Hero Image"
            draggable="false"
            width={680}
            height={558}
            sizes="(max-width: 1024px) 400px, (max-width: 1280px) 680px, 400px"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
