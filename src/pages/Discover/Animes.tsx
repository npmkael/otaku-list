import AnimeCarousel from "../../components/Animes/AnimeCarousel";
import { featuredAnimes } from "../../lib/anime-data";

const Animes = () => {
  return (
    <section className="animes font-inter">
      <AnimeCarousel animes={featuredAnimes} />
    </section>
  );
};

export default Animes;
