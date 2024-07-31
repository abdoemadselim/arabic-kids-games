import { fetchGame } from "@/lib/games";

type Props = {
  gameName: string;
};

export default async function GameIframe({ gameName }: Props) {
  const { url } = (await fetchGame(gameName)) as GameType;

  return (
    <div className="game-container relative pb-[56.25%] h-0 overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-full h-[1000px] border-0"
        title={`Play ${gameName}`}
        allow="fullscreen; encrypted-media"
        src={url}
      />
    </div>
  );
}
