import GameIframe from "@/components/GameIframe";
import SideBar from "@/components/sideBar";
import { fetchGame } from "@/lib/games";
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
    <div className="flex min-h-screen bg-primary">
      <SideBar hideText={true} />
      <div className="flex flex-1 flex-col items-center justify-center w-full relative h-full min-h-[760px] bg-gradient-to-br from-[#FFC107] to-[#FF9800] p-8 md:p-6">
        <Suspense
          fallback={
            <Image
              className="text-center absolute top-72 "
              src="/images/loader.svg"
              alt="loader"
              width={200}
              height={200}
            />
          }>
                    <h2 className="text-4xl mb-5 font-bold text-right">{name}</h2>

          <GameIframe gameName={name} />
        </Suspense>
      </div>
    </div>
  );
}
