"use client";

import { useRouter } from "next/navigation";
import SearchIcon from "./searchIcon";
import { Input } from "./ui/input";
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";

export default function SearchInput({ wrapperStyle, inputStyle }: { wrapperStyle?: string, inputStyle?: string }) {
  const router = useRouter();
  const [searchText, setSearchText] = useState<string>("");

  const handleSearch = (event: FormEvent) => {
    event.preventDefault();

    if (searchText == "") {
      return router.push("/");
    }

    router.push(`/?text=${searchText}`);
  };

  return (
    <form
      action={`?${searchText}`}
      onSubmit={handleSearch}
      className="flex items-center relative my-5">
      <div className={`w-md-1/4 ${wrapperStyle}`}>
        <SearchIcon className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          onChange={(e) => setSearchText(e.target.value)}
          type="search"
          placeholder="ابحث عن لعبة ..."
          className={`ps-8 pr-4 w-full rounded-md bg-muted text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary ${inputStyle} `}
        />
      </div>
      <Button className="bg-yellow-400 text-black hover:text-white font-semibold ms-6 hover:bg-orange-700">
        ابحث
      </Button>
    </form>
  );
}
