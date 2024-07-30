import Image from "next/image";
import Link from "next/link";

type Props = {
  game: {
    name: string;
    image: string;
  };
};

export default function GameCard({ game: { name, image } }: Props) {
  return (
    <Link
      href={`/game/${name.split(" ").join("-")}`}
      className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-500 hover:scale-110 block"
      prefetch={false}>
      <Image
        src={image}
        alt={name}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
      </div>
    </Link>
  );
}
