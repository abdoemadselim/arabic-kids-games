import { fetchGame } from "@/lib/games";

type Props = {
  gameName: string;
};

export default async function GameIframe({ gameName }: Props) {
  const { url } = (await fetchGame(gameName)) as GameType;

  return <iframe src={url} className="w-full h-[700px] d-block" width="100%" />;
}
