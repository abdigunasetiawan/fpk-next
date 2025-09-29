import MentorCard from "./MentorCard";
import mentors from "@/json/mentors";

const Mentors = () => {
  return (
    <section id="mentor" className="min-h-24 bg-[#E9B838]/10">
      <div className="relative container mx-auto mt-9 px-4 pt-16 pb-16 md:px-8 xl:px-16 xl:pb-48">
        <h2 className="text-center text-2xl font-semibold text-white">
          Mentor Terbaik FPK
        </h2>
        <div className="wrapper mt-[108px] flex flex-col items-center gap-y-28 md:mt-[138px] md:flex-row md:flex-wrap md:justify-center md:gap-x-8 md:gap-y-40 lg:gap-x-14">
          {mentors.map((mentor, index) => (
            <MentorCard key={index} {...mentor} />
          ))}
        </div>
        <div className="absolute bottom-80 left-0 hidden h-80 w-80 -translate-x-1/2 rounded-full bg-[#E9C638]/50 blur-[50px] xl:block"></div>
      </div>
    </section>
  );
};

export default Mentors;
