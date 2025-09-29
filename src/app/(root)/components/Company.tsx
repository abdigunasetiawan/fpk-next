import Image from "next/image";
import Link from "next/link";

const companys = [
  {
    imgUrl: "/images/companys/stmik-kaputama.png",
    altText: "Stmik Kaputama",
    width: 60,
    height: 40,
    url: "https://kaputama.ac.id/",
    sizes: "(max-width: 1279px) 42px, 60px",
  },
  {
    imgUrl: "/images/companys/kampus-merdeka.png",
    altText: "Kampus Merdeka",
    width: 75,
    height: 40,
    url: "",
    sizes: "(max-width: 1279px) 53px, 75px",
  },
  {
    imgUrl: "/images/companys/tut-wuri-handayani.png",
    altText: "Tut Wuri Handayani",
    width: 45,
    height: 40,
    url: "",
    sizes: "(max-width: 1279px) 28px, 39px",
  },
  {
    imgUrl: "/images/companys/dicoding.png",
    altText: "Dicoding",
    width: 158,
    height: 40,
    url: "https://www.dicoding.com/",
    sizes: "(max-width: 1279px) 111px, 158px",
  },
];

const Company = () => {
  return (
    <section id="company">
      <div className="flex justify-center gap-16 bg-[#FF7E3E] px-4 py-4 md:gap-16 md:py-6 xl:gap-24">
        {companys.map((company) => (
          <Link key={company.altText} href={company.url} target="_blank">
            <Image
              className="h-7 md:h-10"
              src={company.imgUrl}
              alt={company.altText}
              width={company.width}
              height={company.height}
              sizes={company.sizes}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Company;
