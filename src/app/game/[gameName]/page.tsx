import GameIframe from "@/components/GameIframe";
import SideBar from "@/components/sideBar";
import { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";

type Props = {
  params: {
    gameName: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const gameName = decodeURIComponent(params.gameName.split("-").join(" "));

  return {
    title: gameName,
  };
}

export default async function Game({ params: { gameName } }: Props) {
  const name = decodeURIComponent(gameName.split("-").join(" "));

  return (
    <main className="flex-1 flex relative h-screen bg-gradient-to-br from-[#FFC107] to-[#FF9800] px-6 pt-10">
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-full">
            <Image
              src="/images/loader.svg"
              alt={`Loading ${name} game`}
              width={300}
              height={300}
              priority
            />
          </div>
        }>
        <GameIframe gameName={name} />
      </Suspense>
    </main>
  );
}
