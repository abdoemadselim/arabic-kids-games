import GamesSection from "@/components/GamesSection";
import SearchInput from "@/components/SearchInput";
import SideBar from "@/components/sideBar";
import { fetchGames } from "@/lib/games";
import Image from "next/image";
import { Suspense } from "react";

type Props = {
  searchParams: {
    text: string;
  };
};

export default async function Home({ searchParams }: Props) {
  return (
    <div className="flex min-h-screen bg-primary">
      <SideBar />
      <div className="flex-1 p-6">
        <div className="flex flex-col mb-6">
          <h2 className="text-4xl font-bold text-white">
            {searchParams.text
              ? `تبحث عن: ${searchParams.text}`
              : "العاب اطفال"}
          </h2>
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
            fetchHandler={fetchGames}
            searchText={searchParams.text}
          />
        </Suspense>
      </div>
    </div>
  );
}
