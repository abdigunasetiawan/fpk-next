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

const ProfileCard2: React.FC<ProfileCardProps> = ({
  id,
  name,
  role,
  imageUrl,
  socials,
}) => {
  return (
    <div className="relative mx-4 w-md overflow-hidden rounded-3xl bg-white p-2 shadow-sm">
      <div className="aspect-square w-full overflow-hidden rounded-[calc(24px-8px)]">
        <Image
          src={imageUrl}
          width={400}
          height={400}
          alt="profile"
          className="h-full w-full object-cover"
        ></Image>
      </div>

      {/* <div className="absolute bottom-2 left-2 h-32 w-[calc(100%-16px)] rounded-[calc(24px-8px)] bg-linear-to-t from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.0025)] backdrop-blur-md"></div> */}
      <div className="absolute top-2 bottom-2 left-2 w-[calc(100%-16px)] rounded-[calc(24px-8px)] bg-linear-to-t from-[rgb(0,0,0)] to-[rgba(255,255,255,0.0)]"></div>
      {/* <div className="bg-[rgba(255, 255, 255, 0.2)] absolute bottom-2 left-2 h-full w-[calc(100%-16px)] rounded-[calc(24px-8px)] backdrop-blur-md"></div> */}

      <div className="absolute bottom-2 z-10 mt-2 w-[calc(100%-16px)] p-4">
        <div className="">
          <h3 className="font-semibold">{name}</h3>
          <p className="">{role}</p>
        </div>
        <div className="mt-2.5 flex gap-2 text-black">
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

export default ProfileCard2;
