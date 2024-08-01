import Link from "next/link";
import Image from "next/image";
import SideBarContent from "./SideBarContent";
import { CATEGORIES } from "@/constants/constants";
import { Suspense } from "react";

export default async function SideBar() {
  return (
    <div className="bg-white border-r p-6 hidden md:block">
      <nav className="space-y-2">
        <Suspense
          fallback={
            <div>
              {CATEGORIES?.map((category) => (
                <Link
                  key={category.name}
                  href={`/${
                    category.name === "العاب"
                      ? ""
                      : `العاب-${category.name.split(" ").join("-")}`
                  }`}
                  className="flex items-center gap-3 py-1 text-lg font-medium text-[#333] hover:text-primary transition-colors duration-300 ease-in-out transform hover:scale-105"
                  prefetch={false}>
                  <Image
                    src={category.icon}
                    width={35}
                    height={35}
                    alt={`${category.name} العاب`}
                  />
                  {category.name === "العاب" ? (
                    <span>{category.name}</span>
                  ) : (
                    <span>العاب {category.name}</span>
                  )}
                </Link>
              ))}
            </div>
          }>
          <SideBarContent />
        </Suspense>
      </nav>
    </div>
  );
}
