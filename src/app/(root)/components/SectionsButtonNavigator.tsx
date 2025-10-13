"use client";

import clsx from "clsx";
import { useRouter } from "next/navigation";

interface SectionsButtonNavigatorProps {
  isMobile?: boolean;
  href: string;
}

const SectionsButtonNavigator: React.FC<SectionsButtonNavigatorProps> = ({
  isMobile,
  href,
}) => {
  const { push } = useRouter();
  return (
    <button
      className={clsx(
        "relative cursor-pointer rounded-lg border-4 border-[#FF7E3E] px-4 py-2 font-bold text-[#FF7E3E] shadow-lg transition-all duration-300 hover:bg-[#FF7E3E] hover:text-white hover:duration-300 active:scale-90 md:hidden lg:block xl:px-6 xl:py-2.5",
        isMobile ? "mx-auto block lg:hidden" : "hidden",
      )}
      onClick={() => push(href)}
    >
      Lihat Semua
    </button>
  );
};

export default SectionsButtonNavigator;
