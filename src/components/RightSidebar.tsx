import { favoriteAnime, popularAnime } from "../constants/fake-anime-api";
import PopularAnime from "./Animes/PopularAnime";
import FavoriteAnime from "./Animes/FavoriteAnime";

const RightSidebar = () => {
  return (
    <div className="sidebar w-full h-full hidden md:block max-w-[300px] border-l border-l-gray-400/30 bg-[#F9FAFE] relative font-inter">
      <div className="md:px-10 px-4 py-6 flex flex-col justify-center items-center gap-7">
        {/* Popular Animes */}
        <div className="popular-animes w-full">
          <h2 className="text-lg font-bold mb-3 text-neutral-800">
            Popular Animes
          </h2>

          <div className="flex flex-col gap-4">
            {/* Popular anime card */}
            {popularAnime.map((anime) => (
              <PopularAnime
                title={anime.title}
                genres={anime.genres}
                poster={anime.poster}
                rating={anime.rating}
              />
            ))}

            <button className="w-full bg-primary text-white py-2.5 rounded-lg hover:bg-primary/80 transition-all duration-200 cursor-pointer">
              See more
            </button>
          </div>
        </div>

        {/* Favorite Animes */}
        <div className="favorite-animes w-full">
          <h2 className="text-lg font-bold mb-3 text-neutral-800">Favorites</h2>

          <div className="flex flex-col gap-4">
            {favoriteAnime.map((anime) => (
              <FavoriteAnime
                title={anime.title}
                genres={anime.genres}
                poster={anime.poster}
                rating={anime.rating}
              />
            ))}

            <button className="w-full bg-primary text-white py-2.5 rounded-lg hover:bg-primary/80 transition-all duration-200 cursor-pointer">
              See more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
