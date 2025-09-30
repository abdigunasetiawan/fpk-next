import Image from "next/image";

interface EventCardProps {
  event: {
    id: number;
    type: string;
    img_path: string;
    title: string;
    description: string;
  };
}

const EventCard: React.FC<EventCardProps> = ({
  event: { type, img_path, title, description },
}) => {
  return (
    <a
      href="#"
      className="card__event group relative mx-auto block aspect-[2/3] w-[256px] overflow-hidden rounded-lg shadow-xl xl:w-[300px]"
    >
      <Image
        width={300}
        height={450}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        src={img_path}
        alt={title}
      />
      <div className="absolute bottom-5 left-2.5 z-50 w-[calc(100%-20px)] lg:left-4 lg:w-[calc(100%-32px)]">
        <p className="max-w-max rounded-lg bg-[#D9D9D990] px-2 py-1 text-xs text-white uppercase">
          {type}
        </p>
        <p className="mt-4 font-bold text-white">{title}</p>
        <p className="mt-1 text-sm text-balance text-white">{description}</p>
      </div>
    </a>
  );
};

export default EventCard;
