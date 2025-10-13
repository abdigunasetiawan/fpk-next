"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconWorld,
} from "@tabler/icons-react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface ProfileCardProps {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
  socials: {
    instagram: { label: string; url: string };
    github: { label: string; url: string };
    linkedIn: { label: string; url: string };
    portfolio: { label: string; url: string };
  };
  isLoading?: boolean;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  role,
  imageUrl,
  socials,
  isLoading = false,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const showSkeleton = isLoading || !imageLoaded;

  return (
    <div className="mx-4 w-[252px] overflow-hidden rounded-3xl bg-white px-2 pt-2 pb-2 shadow-sm md:w-md">
      <div className="relative aspect-square w-full overflow-hidden rounded-[calc(24px-8px)]">
        {showSkeleton && (
          <Skeleton height="100%" width="100%" borderRadius={16} />
        )}

        {!isLoading && (
          <Image
            src={imageUrl}
            width={400}
            height={400}
            alt={name}
            onLoad={() => {
              setImageLoaded(true);
            }}
            className={`absolute top-0 left-0 h-full w-full object-cover transition-opacity duration-500 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
      </div>

      <div className="mt-2">
        {showSkeleton ? (
          <div>
            <Skeleton height={20} width="80%" />
            <Skeleton height={14} width="50%" className="mt-2" />
          </div>
        ) : (
          <>
            <h3 className="font-semibold">{name}</h3>
            <p>{role}</p>
          </>
        )}

        <div className="mt-2.5 grid gap-2 md:grid-cols-2">
          {showSkeleton
            ? Array(4)
                .fill(null)
                .map((_, i) => (
                  <Skeleton key={i} height={28} borderRadius={8} />
                ))
            : Object.entries(socials).map(([key, social]) => (
                <Link
                  key={key}
                  href={social.url}
                  // href="https://github.com/FPK-Project"
                  target="_blank"
                  className="flex items-center gap-1 rounded-lg bg-slate-100 p-1 text-sm hover:underline"
                >
                  {key === "instagram" && <IconBrandInstagram stroke={2} />}
                  {key === "github" && <IconBrandGithub stroke={2} />}
                  {key === "linkedIn" && <IconBrandLinkedin stroke={2} />}
                  {key === "portfolio" && <IconWorld stroke={1.7} />}
                  {social.label}
                </Link>
              ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
