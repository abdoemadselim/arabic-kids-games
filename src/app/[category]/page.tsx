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
  );
}
