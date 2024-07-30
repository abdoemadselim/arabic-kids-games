import Link from "next/link";
import { Input } from "./ui/input";
import { fetchCategories } from "@/lib/games";
import Image from "next/image";
import SearchInput from "./SearchInput";

export default async function Footer() {
  const categories = (await fetchCategories()) as CategoryType[];
  return (
    <footer>
      <div className="bg-muted border-t px-4 md:px-6 py-8 md:py-12">
        <div className="container ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="text-2xl font-bold">
                العاب اطفال
              </Link>
              <div className="grid grid-cols-2 md:grid-cols-3 mt-4 gap-4">
                {categories?.map((category) => (
                  <Link
                    key={category.name}
                    href={`/${
                      category.name === "العاب" ? "" : `العاب ${category.name}`
                    }`}
                    className="bg-background rounded-md px-4 py-2 text-sm font-medium hover:bg-primary hover:text-white transition-colors"
                    prefetch={false}>
                    {category.name === "العاب" ? (
                      <span>{category.name}</span>
                    ) : (
                      <span>العاب {category.name}</span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">ابحث عن لعبة</h3>
              <SearchInput wrapperStyle="w-full" inputStyle="bg-white" />
            </div>
          </div>
          <div className="bg-muted w-full text-muted-foreground px-4 md:px-6 pt-20 flex items-center justify-between">
            <p className="text-sm">
              &copy; 2024 العاب اطفال. All rights reserved
            </p>
            <p className=" text-end">
              تم بواسطة
              <Link
                href="mailto:abdulrahman3mad@gmail.com"
                className="ps-2 text-primary">
                عبدالرحمن عماد
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
