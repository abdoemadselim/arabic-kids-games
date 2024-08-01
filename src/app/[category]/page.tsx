import GamesSection from "@/components/GamesSection";
import SearchInput from "@/components/SearchInput";
import SideBar from "@/components/sideBar";
import { fetchCategoryGames } from "@/lib/games";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { CATEGORIES } from "@/constants/constants";

type Props = {
  params: {
    category: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const categoryName = decodeURIComponent(params.category.split("-").join(" "));

  return {
    title: categoryName,
  };
}

export default async function GamesCategory({ params: { category } }: Props) {
  const decodedCategory = decodeURIComponent(category)
    .split("-")
    .slice(1)
    .join(" ");
  const pageTitle = `العاب ${decodedCategory}`;

  return (
    <div className="flex min-h-screen bg-primary">
      <Suspense
        fallback={
          <div className="bg-white border-r p-6 hidden md:block">
            <nav className="space-y-2">
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
            </nav>
          </div>
        }>
        <SideBar />
      </Suspense>
      <main className="flex-1 p-6">
        <div className="flex flex-col mb-6">
          <h2 className="text-4xl font-bold text-white">{pageTitle}</h2>
          <SearchInput />
        </div>
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-64">
              <Image
                className="text-center absolute"
                src="/images/loader.svg"
                alt="Loading games"
                width={200}
                height={200}
                priority
              />
            </div>
          }>
          <GamesSection
            fetchHandler={fetchCategoryGames}
            category={decodedCategory}
          />
        </Suspense>
      </main>
    </div>
  );
}
