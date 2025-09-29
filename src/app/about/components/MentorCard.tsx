import Image from "next/image";

interface MentorCardProps {
  image: string;
  name: string;
  role: string;
  major: string;
  translateY?: boolean;
}

const MentorCard: React.FC<MentorCardProps> = ({
  image,
  name,
  role,
  major,
  translateY = false,
}) => (
  <div
    className={`card w-[252px] shadow md:w-[300px] ${translateY ? "xl:translate-y-32" : ""}`}
  >
    <div className="relative h-40 rounded-t-xl bg-white">
      <Image
        width={252}
        height={270}
        loading="lazy"
        className="absolute bottom-0 left-1/2 h-[240px] w-[70%] -translate-x-1/2 bg-cover object-cover drop-shadow-xl md:h-[270px]"
        src={image}
        alt={name}
      />
    </div>
    <div className="rounded-b-xl bg-gray-100 px-4 py-4">
      <h4 className="font-semibold">{name}</h4>
      <p className="text-sm font-medium text-[#F49D03]">{role}</p>
      <p className="text-xs text-pretty">{major}</p>
    </div>
  </div>
);

export default MentorCard;
