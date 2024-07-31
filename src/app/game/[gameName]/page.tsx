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
    <div className="flex h-full bg-primary">
      <SideBar hideText={true} />
      <main className="w-full relative h-[100%] bg-gradient-to-br from-[#FFC107] to-[#FF9800] px-6 pt-10">
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-64">
              <Image
                src="/images/loader.svg"
                alt={`Loading ${name} game`}
                width={200}
                height={200}
                priority
              />
            </div>
          }>
          <h2 className="text-4xl mb-5 pb-4 font-bold text-right">{name}</h2>
          <GameIframe gameName={name} />
        </Suspense>
      </main>
    </div>
  );
}
