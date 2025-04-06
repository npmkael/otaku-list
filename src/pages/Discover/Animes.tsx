import { ChevronRight, Plus } from "lucide-react";

const Animes = () => {
  return (
    <section className="animes font-inter">
      <div className="featured-animes relative w-full h-full">
        <div className="flex transition-transform duration-500 ease-in h-full overflow-hidden ">
          <div className="featured-anime relative min-w-full h-[520px]">
            <img
              src="/solo-leveling-banner-sample.webp"
              alt=""
              className="h-full w-full object-cover rounded-2xl"
            />

            <div className="absolute bottom-10 left-10 z-10">
              <div>
                <h2 className="text-white font-semibold text-4xl">
                  Solo Leveling
                </h2>
                <p className="genres text-white/50 text-xs">
                  Action, Fantasy, Adventure
                </p>
              </div>
              <div className="flex gap-4 mt-4">
                <button className="px-6 py-2 bg-red-600 text-white flex justify-center items-center rounded-xl cursor-pointer hover:shadow-xl transition-all duration-300">
                  Watch
                </button>
                <button className="p-2 bg-neutral-400/30 backdrop-blur-2xl text-white flex justify-center items-center rounded-xl cursor-pointer hover:shadow-xl transition-all duration-300">
                  <Plus />
                </button>
              </div>
            </div>

            <div className="absolute right-10 top-1/2 translate-y-[-50%] z-10">
              <button>
                <ChevronRight className="text-white" />
              </button>
            </div>

            <div className="absolute bottom-0 bg-gradient-to-b from-transparent to-black/75 w-full h-4/5 rounded-br-2xl rounded-bl-2xl" />
          </div>
          <div className="featured-anime relative min-w-full h-[520px]">
            <img
              src="/one-piece-banner-poster.avif"
              alt=""
              className="h-full w-full object-cover rounded-2xl"
            />

            <div className="absolute bottom-10 left-10 z-10">
              <div>
                <h2 className="text-white font-semibold text-4xl">One Piece</h2>
                <p className="genres text-white/50 text-xs">
                  Action, Adventure, Fantasy
                </p>
              </div>
              <div className="flex gap-4 mt-4">
                <button className="px-6 py-2 bg-red-600 text-white flex justify-center items-center rounded-xl cursor-pointer hover:shadow-xl transition-all duration-300">
                  Watch
                </button>
                <button className="p-2 bg-neutral-400/30 backdrop-blur-2xl text-white flex justify-center items-center rounded-xl cursor-pointer hover:shadow-xl transition-all duration-300">
                  <Plus />
                </button>
              </div>
            </div>

            <div className="absolute bottom-0 bg-gradient-to-b from-transparent to-black/75 w-full h-4/5 rounded-br-2xl rounded-bl-2xl" />
          </div>

          {/* Feature anime */}
        </div>
      </div>
    </section>
  );
};

export default Animes;
