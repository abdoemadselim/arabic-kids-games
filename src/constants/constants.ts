const CATEGORY_ICONS_PATH = "/images/categories/";

const CATEGORIES_ICONS_MAP = {
  kids: CATEGORY_ICONS_PATH + "kids.png",
  girls: CATEGORY_ICONS_PATH + "girl.png",
  boys: CATEGORY_ICONS_PATH + "boys.png",
  puzzle: CATEGORY_ICONS_PATH + "puzzle.png",
  cars: CATEGORY_ICONS_PATH + "cars.png",
  war: CATEGORY_ICONS_PATH + "war.png",
  football: CATEGORY_ICONS_PATH + "football.png",
  action: CATEGORY_ICONS_PATH + "sword.png",
  clothing: CATEGORY_ICONS_PATH + "skirt.png",
};


export const CATEGORIES = [
    {
      name: "العاب",
      icon: CATEGORIES_ICONS_MAP["kids"],
      slug: "/",
    },
    {
      name: "بنات",
      icon: CATEGORIES_ICONS_MAP["girls"],
      slug: "/العاب-بنات",
    },
    {
      name: "اولاد",
      icon: CATEGORIES_ICONS_MAP["boys"],
      slug: "/العاب-أولاد",
    },
    {
      name: "ذكاء",
      icon: CATEGORIES_ICONS_MAP["puzzle"],
      slug: "/العاب-ذكاء",
    },
    {
      name: "سيارات 3d",
      icon: CATEGORIES_ICONS_MAP["cars"],
      slug: "/العاب-سيارات-3d",
    },
    {
      name: "حرب",
      icon: CATEGORIES_ICONS_MAP["war"],
      slug: "/العاب-حرب",
    },
    {
      name: "كرة قدم",
      icon: CATEGORIES_ICONS_MAP["football"],
      slug: "/العاب-كرة-قدم",
    },
    {
      name: "اكشن",
      icon: CATEGORIES_ICONS_MAP["action"],
      slug: "/العاب-اكشن",
    },
    {
      name: "تلبيس",
      icon: CATEGORIES_ICONS_MAP["clothing"],
      slug: "/العاب-تلبيس",
    },
  ];