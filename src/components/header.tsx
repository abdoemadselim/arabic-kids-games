import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#F9BF28] py-1">
      <div className="container mx-auto px-4">
        <nav className="flex justify-center items-center">
          <Link href="/" className="text-blue-950 flex items-center">
            <Image
              src="/images/icon.png"
              width={100}
              height={100}
              alt="العاب اطفال - Kids Games Logo"
              priority
            />
            <h1 className="text-4xl font-bold ml-2">
              <span className="sr-only">العاب اطفال - Kids Games</span>
              العاب اطفال
            </h1>
          </Link>
        </nav>
      </div>
    </header>
  );
}