import Image from "next/image";

interface TestimonialCardProps {
  testimonial: {
    quote: string;
    name: string;
    role: string;
    image: string;
  };
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial: { quote, name, role, image },
}) => {
  return (
    // Kelas card__testimonial ini penting untuk dekorasi dari CSS
    <div className="card__testimonial rounded-2xl md:mx-auto md:max-w-md lg:p-0 lg:shadow-none">
      <p className="indent-8 font-medium">{quote}</p>
      <div className="mt-4 flex max-w-max items-center gap-4">
        <div className="h-12 w-12 overflow-hidden rounded-full">
          <Image
            width={100}
            height={100}
            loading="lazy"
            className="h-full w-full object-cover"
            src={image}
            alt={name}
          />
        </div>
        <div className="">
          <h4 className="font-semibold text-[#FF7E3E]">{name}</h4>
          <p className="text-sm text-[#000000]/70">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
