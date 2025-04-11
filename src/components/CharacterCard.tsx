import { useState } from "react";
import { Character } from "@/types";
import { Button } from "./ui/button";

type CharacterCardProps = {
  character: Character;
};

const CharacterCard = ({ character }: CharacterCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative rounded-lg overflow-hidden transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href="#">
        <div className="aspect-[3/4] relative overflow-hidden">
          <img
            src={character.imageUrl}
            alt={character.name}
            className="object-cover transition-transform duration-300 group-hover:scale-105 h-full w-full"
          />

          {/* Gradient Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 transition-opacity duration-300 ${
              isHovered && "opacity-100"
            }`}
          />

          {isHovered && (
            <div className="absolute bottom-0 left-0 right-0 p-3 flex flex-col gap-2 transform transition-transform duration-300">
              <h3 className="font-bold text-white line-clamp-1">
                {character.name}
              </h3>
              <p className="text-sm text-gray-300 line-clamp-1">
                {character.animeFrom}
              </p>

              <div className="text-xs text-gray-400 line-clamp-2 mb-2 ">
                {character.description.substring(0, 80)}...
              </div>

              <Button
                size="sm"
                className="w-full bg-red-500 hover:bg-red-500 text-white"
              >
                View Details
              </Button>
            </div>
          )}
        </div>
      </a>

      <div className="p-2">
        <h3 className="font-medium text-sm line-clamp-1 text-white">
          {character.name}
        </h3>
        <p className="text-xs text-gray-400 line-clamp-1">
          {character.animeFrom}
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;
