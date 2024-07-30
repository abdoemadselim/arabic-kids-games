import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#F9BF28] py-4 flex justify-center items-center">
      <h1 className="text-3xl font-bold text-white">
        <Link href="/">العاب اطفال</Link>
      </h1>
    </header>
  );
}
