import { fetchCategories } from "@/lib/games";
import Image from "next/image";
import Link from "next/link";

export default async function SideBarContent() {
  const categories = await fetchCategories();

  return (
    <div>
      {categories?.map((category) => (
        <Link
          key={category.name}
          href={`/${
            category.name === "العاب"
              ? ""
              : `العاب-${category.name.split(" ").join("-")}`
          }`}
          className="flex items-center gap-3 py-1 text-lg font-medium text-[#333] hover:text-primary transition-colors duration-300 ease-in-out transform hover:scale-105"
          prefetch={false}>
          <Image
            src={category.icon}
            width={35}
            height={35}
            alt={`${category.name} العاب`}
          />
          {category.name === "العاب" ? (
            <span>{category.name}</span>
          ) : (
            <span>العاب {category.name}</span>
          )}
        </Link>
      ))}
    </div>
  );
}
