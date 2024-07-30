import GameCard from "./gameCard";

export default async function GamesSection({
  category,
  searchText,
  fetchHandler,
}: {
  category?: string;
  searchText?: string,
  fetchHandler: Function;
}) {
  const games = (await fetchHandler(
    category ? decodeURIComponent(category) : searchText
  )) as GameType[];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {games?.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}
