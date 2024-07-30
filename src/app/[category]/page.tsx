import GamesSection from "@/components/GamesSection";
import SearchInput from "@/components/SearchInput";
import SideBar from "@/components/sideBar";
import { fetchCategoryGames } from "@/lib/games";
import { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";

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
  let decodedString: string[] = decodeURIComponent(category).split("-");
  decodedString.shift();
  return (
    <div className="flex min-h-screen bg-primary">
      <Suspense
        fallback={
          <Image
            src="/images/loader.svg"
            alt="loader"
            width={200}
            height={200}
          />
        }>
        <SideBar />
      </Suspense>
      <div className="flex-1 p-6">
        <div className="flex flex-col mb-6">
          <h2 className="text-4xl font-bold text-white">
            العاب {decodeURIComponent(decodedString.join(" "))}
          </h2>
          <SearchInput />
        </div>
        <Suspense
          fallback={
            <Image
              src="/images/loader.svg"
              alt="loader"
              width={200}
              height={200}
            />
          }>
          <GamesSection
            fetchHandler={fetchCategoryGames}
            category={decodedString.join(" ")}
          />
        </Suspense>
      </div>
    </div>
  );
}
