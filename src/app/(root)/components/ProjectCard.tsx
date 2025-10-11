import Image from "next/image";

interface ProjectCardProps {
  project: {
    url: string;
    category: string;
    type: string;
    img_path: string;
    title: string;
    description: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project: { url, type, img_path, title, description },
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="card__project group relative mx-auto block aspect-video w-full overflow-hidden rounded-lg shadow-md"
    >
      <Image
        width={680}
        height={383}
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
        {/* <p className="mt-1 text-sm text-white">{description}</p> */}
      </div>
    </a>
  );
};

export default ProjectCard;
