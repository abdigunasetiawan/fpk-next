import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrowser,
  IconWorld,
} from "@tabler/icons-react";

interface ProfileCardProps {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  socials: {
    instagram: {
      label: string;
      url: string;
    };
    github: {
      label: string;
      url: string;
    };
    linkedIn: {
      label: string;
      url: string;
    };
    portfolio: {
      label: string;
      url: string;
    };
  };
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  id,
  name,
  role,
  imageUrl,
  socials,
}) => {
  return (
    <div className="mx-4 w-[252px] overflow-hidden rounded-3xl bg-white px-2 pt-2 pb-2 shadow-sm md:w-md">
      <div className="aspect-square w-full overflow-hidden rounded-[calc(24px-8px)]">
        <Image
          src={imageUrl}
          width={400}
          height={400}
          alt="profile"
          className="h-full w-full object-cover"
        ></Image>
      </div>
      <div className="mt-2">
        <div className="">
          <h3 className="font-semibold">{name}</h3>
          <p className="">{role}</p>
        </div>
        <div className="mt-2.5 grid gap-2 md:grid-cols-2">
          <Link
            href={socials.instagram.url}
            target="_blank"
            className="flex items-center gap-1 rounded-lg bg-slate-100 p-1 text-sm hover:underline"
          >
            <IconBrandInstagram stroke={2} />
            {socials.instagram.label}
          </Link>
          <Link
            href={socials.github.url}
            target="_blank"
            className="flex items-center gap-1 rounded-lg bg-slate-100 p-1 text-sm hover:underline"
          >
            <IconBrandGithub stroke={2} />
            {socials.github.label}
          </Link>
          <Link
            href={socials.linkedIn.url}
            target="_blank"
            className="flex items-center gap-1 rounded-lg bg-slate-100 p-1 text-sm hover:underline"
          >
            <IconBrandLinkedin stroke={2} />
            {socials.linkedIn.label}
          </Link>
          <Link
            href={socials.portfolio.url}
            target="_blank"
            className="flex items-center gap-1 rounded-lg bg-slate-100 p-1 text-sm hover:underline"
          >
            <IconWorld stroke={1.7} />
            {socials.portfolio.label || "Portfolio"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
