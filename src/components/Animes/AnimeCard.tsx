import { Anime } from "@/types";
import { Play, Plus, Star } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

type AnimeCardProps = {
  anime: Anime;
};

const AnimeCard = ({ anime }: AnimeCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative rounded-lg overflow-hidden transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href="#">
        <div className="aspect-[2/3] relative overflow-hidden">
          <img
            src="/kobayashi-dragon-maid-poster.jpg"
            alt=""
            className="object-cover h-full transition-transform duration-300 group-hover:scale-105"
          />

          {/* Gradient Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity ${
              isHovered && "opacity-100"
            }`}
          />

          {isHovered && (
            <div className="absolute bottom-0 left-0 right-0 p-3 flex flex-col gap-2 transform transition-transform duration-300">
              <h3 className="font-bold text-white line-clamp-1">
                {anime.title}
              </h3>

              <div className="flex items-center gap-2 text-sm text-gray-300">
                <span className="flex items-center">
                  <Star className="h-3.5 w-3.5 text-yellow-500 mr-1 fill-yellow-500" />
                  {anime.rating}
                </span>
                <span>•</span>
                <span>{anime.year}</span>
                <span>•</span>
                <span>{anime.episodes} eps</span>
              </div>

              <div className="flex gap-2 mt-1">
                <Button
                  size="sm"
                  className="flex-1 bg-primary hover:bg-primary/50 text-white"
                >
                  <Play className="h-3.5 w-3.5 mr-1" /> Watch
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="p-0 text-black hover:bg-white/80 "
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </a>

      <div className="p-2">
        <h3 className="font-medium text-sm line-clamp-1">{anime.title}</h3>
        <div className="flex items-center gap-1 text-xs text-gray-400">
          <img
            src="/mal-logo.jpg"
            width={55}
            height={20}
            alt="myanimelist logo"
            className="h-[20px] object-cover rounded-md"
          />
          {anime.rating}
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
