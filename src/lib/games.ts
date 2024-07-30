import { supabase } from "@/utils/supabase/config";

export async function fetchGames(query?: string) {
  const { data: games } = (await supabase
    .from("games")
    .select("name, id, thumbnail")
    .ilike("name", query ? `%${query}%` : "%")) as {
    data: Partial<GameType>[];
  };

  return attachImages(games);
}

export async function fetchGame(name: string) {
  const { data: games } = (await supabase
    .from("games")
    .select("url")
    .eq("name", name)
    .limit(1)) as { data: Partial<GameType>[] };

  return games[0];
}

function attachImages(games: Partial<GameType>[]) {
  const gamesWithImages = games?.map((game) => {
    const {
      data: { publicUrl },
    } = supabase.storage.from("games").getPublicUrl(game.thumbnail || "") as {
      data: FileType;
    };

    return {
      ...game,
      image: publicUrl,
    };
  });

  return gamesWithImages;
}

export async function fetchCategoryGames(category: string) {
  const { data: games } = (await supabase
    .from("games")
    .select(
      `name, id, thumbnail,
      games_categories!inner(
        categories!inner(
          name
        )
      )
    `
    )
    .eq("games_categories.categories.name", category)) as {
    data: Partial<GameType>[];
  };

  return attachImages(games);
}

export async function fetchCategories() {
  const { data: categories } = await supabase
    .from("categories")
    .select("name, icon")
    .order("id");

  const categoriesWithIcons = categories?.map((category) => {
    const {
      data: { publicUrl },
    } = supabase.storage.from("games").getPublicUrl(category.icon) as {
      data: FileType;
    };

    return {
      ...category,
      icon: publicUrl,
    };
  });

  return categoriesWithIcons;
}
