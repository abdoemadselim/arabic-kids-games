import SideBar from "@/components/sideBar";
import { fetchGame } from "@/lib/games";
import { Metadata } from "next";

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
  const { url } = (await fetchGame(name)) as GameType;

  return (
    <div className="flex min-h-screen bg-primary">
      <SideBar hideText={true} />
      <div className="flex flex-1 flex-col items-center justify-center w-full h-full bg-gradient-to-br from-[#FFC107] to-[#FF9800] p-8 md:p-6">
        <h2 className="text-4xl mb-5 font-bold text-right">{name}</h2>
        <iframe src={url} className="w-full h-[700px] d-block" width="100%" />
        {/* <iframe
          src={url}
          className="w-full h-full fixed left-0 top-0 d-block z-50 m-0 p-0 bottom-0 right-0 bg-white"
        /> */}
      </div>
    </div>
  );
}
