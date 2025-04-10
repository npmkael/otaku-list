type Props = {
  title: string;
  genres: string[];
  poster: string;
  rating: number;
};

const FavoriteAnime = ({ title, genres, poster, rating }: Props) => {
  return (
    <div className="flex gap-2">
      <img
        src={`${poster}`}
        alt="solo leveling poster"
        className="h-[80px] w-[55px] object-cover rounded-lg"
        width={60}
        height={120}
      />
      <div className="flex flex-col justify-between">
        <div className="leading-4">
          <h3 className="text-sm font-semibold text-white">
            {title.length > 15 ? title.slice(0, 15) + "..." : title}
          </h3>
          <span className="text-xs text-gray-400">
            {genres.map((genre) => genre).join(", ")}
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <img
            src="/mal-logo.jpg"
            width={55}
            height={20}
            alt="myanimelist logo"
            className="h-[20px] object-cover rounded-md"
          />
          <span className="text-sm text-gray-500 font-semibold">{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default FavoriteAnime;
