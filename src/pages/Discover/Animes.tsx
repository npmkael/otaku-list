import AnimeCard from "@/components/Animes/AnimeCard";
import AnimeCarousel from "../../components/Animes/AnimeCarousel";
import { featuredAnimes } from "../../lib/anime-data";

const Animes = () => {
  return (
    <div className="animes font-inter">
      {/* Featured Anime Carousel */}
      <AnimeCarousel animes={featuredAnimes} />

      {/* Featured Anime */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Featured Anime</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {featuredAnimes.map((anime) => (
              <AnimeCard key={anime.id} anime={anime} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Animes;
