import AnimeCard from "@/components/Animes/AnimeCard";
import AnimeCarousel from "../../components/Animes/AnimeCarousel";
import {
  featuredAnimes,
  newReleases,
  popularAnimes,
} from "../../lib/anime-data";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Animes = () => {
  return (
    <div className="animes font-inter mt-5">
      {/* Featured Anime Carousel */}
      <AnimeCarousel animes={featuredAnimes} />

      {/* Search Bar */}
      <div className="bg-black py-6 sticky top-0 z-30">
        <div className="container mx-auto px-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search for anime, manga, characters..."
              className="pl-10 bg-gray-900 border-gray-700 text-white focus-visible:ring-purple-500"
            />
          </div>
        </div>
      </div>

      {/* Featured Anime */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-white">Featured Anime</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {featuredAnimes.map((anime) => (
              <AnimeCard key={anime.id} anime={anime} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Animes */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-white">Popular Anime</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {popularAnimes.map((anime) => (
              <AnimeCard key={anime.id} anime={anime} />
            ))}
          </div>
        </div>
      </section>

      {/* New Releases */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-white">New Releases</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {newReleases.map((anime) => (
              <AnimeCard key={anime.id} anime={anime} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Animes;
