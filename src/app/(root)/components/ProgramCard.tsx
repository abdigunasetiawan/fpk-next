interface ProgramCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="group relative flex cursor-pointer flex-col items-center gap-2 overflow-hidden rounded-[20px] bg-[#D9D9D935] p-6 shadow transition-all duration-300 after:absolute after:inset-0 after:-z-10 after:block after:bg-gradient-to-tr after:from-[#F49D03] after:to-[#FF7E3E] after:opacity-0 after:duration-300 hover:after:opacity-100 hover:after:transition-opacity md:max-w-[328px]">
      <Icon />
      <h3 className="text-lg font-semibold group-hover:text-white">{title}</h3>
      <p className="text-center text-[#000000]/70 group-hover:text-white">
        {description}
      </p>
    </div>
  );
};

export default ProgramCard;
