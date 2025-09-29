interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="benefit flex flex-col items-center md:max-w-[300px]">
    {icon}
    <h3 className="mt-2 text-lg font-semibold">{title}</h3>
    <p className="mt-1 text-center text-[#000000]/70">{description}</p>
  </div>
);

export default BenefitCard;
