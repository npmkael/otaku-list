import { useState, useEffect } from "react";
import { Anime } from "../../types";
import { ChevronLeft, ChevronRight, Play, Plus } from "lucide-react";
import { Button } from "../ui/button";

type AnimeCarouselProps = {
  animes: Anime[];
};

const AnimeCarousel = ({ animes }: AnimeCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setCurrentIndex((prevIndex) =>
      prevIndex === animes.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? animes.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  const currentAnime = animes[currentIndex];

  return (
    <div className="relative h-[70vh] bg-gradient-to-b from-black/20 to-black rounded-2xl overflow-hidden">
      {animes.map((anime, index) => (
        <div
          key={anime.id}
          className={`absolute inset-0 bg-cover z-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${anime.posterUrl})`,
            backgroundPosition: "center 20%",
          }}
        />
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />

      <div className="relative z-20 container mx-auto px-8 h-full flex flex-col justify-center">
        {animes.map((anime, index) => (
          <div
            key={anime.id}
            className={`transition-all duration-500 absolute bottom-10 w-full ${
              index === currentIndex
                ? "opacity-100 translate-x-0"
                : index < currentIndex ||
                  (currentIndex === 0 && index === animes.length - 1)
                ? "opacity-0 -translate-x-full"
                : "opacity-0 translate-x-full"
            }`}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-2 text-white">
              {anime.title}
            </h1>
            <p className="text-sm md:text-sm text-gray-300 mb-6 max-w-2xl">
              {anime.overview.length > 150
                ? anime.overview.substring(0, 150) + "..."
                : anime.overview}
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary hover:bg-primary/80 text-white flex  items-center px-4 py-2 rounded-md transition duration-300 cursor-pointer">
                {" "}
                <Play className="h-4 w-4 mr-2" /> Watch Now{" "}
              </button>
              <button className="bg-primary hover:bg-primary/80 text-white flex  items-center px-4 py-2 rounded-md transition duration-300 cursor-pointer">
                <Plus className="h-4 w-4 mr-2" /> Add to Watchlist
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 h-12 w-12 rounded-full bg-black/30 hover:bg-black/50 text-white"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous</span>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 h-12 w-12 rounded-full bg-black/30 hover:bg-black/50 text-white"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next</span>
      </Button>
    </div>
  );
};

export default AnimeCarousel;
