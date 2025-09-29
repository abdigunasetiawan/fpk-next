import Image from "next/image";

interface ProjectCardProps {
  project: {
    id?: string | number;
    title: string;
    description: string;
    img_path: string;
    url: string;
    type: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project: { url, type, img_path, title, description },
}) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="card__project group relative block w-full overflow-hidden rounded-lg shadow-md sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
  >
    <div className="aspect-video">
      <Image
        width={441}
        height={248}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        src={img_path}
        alt={title}
      />
    </div>
    <div className="bottom-0 left-0 z-50 w-full p-4 backdrop-blur-xs">
      {/* <div className="absolute bottom-0 left-0 z-50 w-full bg-gradient-to-t from-[rgba(0,0,0,0.9)] to-[rgba(0,0,0,0.05)] p-4 backdrop-blur-xs"> */}
      {/* <div className="absolute bottom-0 left-0 z-50 w-full bg-gradient-to-t from-[rgba(0,0,0,0.9)] to-[rgba(255,255,255,0)] p-4 backdrop-blur-xs"> */}
      <p className="max-w-max rounded-lg bg-[#D9D9D990] px-2 py-1 text-xs text-black uppercase">
        {type}
      </p>
      <h4 className="mt-2 font-bold text-black">{title}</h4>
      <p className="mt-1 text-sm text-black">{description}</p>
    </div>
  </a>
);

export default ProjectCard;
