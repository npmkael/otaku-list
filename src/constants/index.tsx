import { Compass, Heart, Settings, Square } from "lucide-react";

export const navLinks = [
  {
    category: "Menu",
    subCat: [
      {
        name: "Discover",
        path: "/discover",
        Icon: Compass,
      },
      {
        name: "Watchlist",
        path: "/watchlist",
        Icon: Heart,
      },
      {
        name: "Mangalist",
        path: "/mangalist",
        Icon: Square,
      },
    ],
  },
  {
    category: "General",
    subCat: [
      {
        name: "Settings",
        path: "/settings",
        Icon: Settings,
      },
    ],
  },
];
