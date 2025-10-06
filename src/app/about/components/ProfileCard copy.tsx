import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";

interface ProfileCardProps {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  socials: {
    instagram: string;
    github: string;
    linkedIn: string;
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
    <div className="mx-4 w-md overflow-hidden rounded-3xl bg-white p-4 shadow-sm">
      <div className="aspect-square w-max overflow-hidden rounded-[24px+16px]">
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
        <div className="mt-2.5 flex gap-2">
          <Link
            href="https://www.instagram.com/citrapratiwi/"
            target="_blank"
            className="flex items-center gap-1 rounded-lg bg-slate-100 p-1 text-sm hover:underline"
          >
            <IconBrandInstagram stroke={2} />
            {socials.instagram}
          </Link>
          <Link
            href="https://www.instagram.com/citrapratiwi/"
            target="_blank"
            className="flex items-center gap-1 rounded-lg bg-slate-100 p-1 text-sm hover:underline"
          >
            <IconBrandGithub stroke={2} />
            {socials.github}
          </Link>
          <Link
            href="https://www.instagram.com/citrapratiwi/"
            target="_blank"
            className="flex items-center gap-1 rounded-lg bg-slate-100 p-1 text-sm hover:underline"
          >
            <IconBrandLinkedin stroke={2} />
            {socials.linkedIn}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
