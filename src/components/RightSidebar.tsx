import { Search } from "lucide-react";

const RightSidebar = () => {
  return (
    <div className="sidebar w-full h-full md:max-w-[300px] max-w-[90px] border-l border-l-gray-400/30 bg-[#F9FAFE] relative font-inter">
      <div className="md:px-10 px-4 py-4 flex flex-col gap-5">
        <div className="h-[120px] flex items-center justify-center">
          <div className="p-2.5 border border-gray-300 rounded-full flex items-center bg-white gap-1.5">
            <Search className="text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="outline-none focus:outline-none"
            />
          </div>
        </div>

        {/* Popular Animes */}
        <div className="popular-animes">
          <h2 className="text-lg font-bold mb-3">Popular Animes</h2>

          <div className="flex flex-col gap-4">
            {/* Popular anime card */}
            <div className="flex gap-2">
              <img
                src="/solo-leveling-poster.jpg"
                alt="solo leveling poster"
                className="h-[95px] object-cover rounded-lg"
                width={60}
                height={120}
              />
              <div className="flex flex-col justify-between">
                <div className="leading-5">
                  <h3 className="text-md font-semibold">Solo Leveling</h3>
                  <span className="text-xs text-gray-400">
                    Action, Adventure
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
                  <span className="text-sm text-gray-500 font-semibold">
                    8.6
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <img
                src="/solo-leveling-poster.jpg"
                alt="solo leveling poster"
                className="h-[95px] object-cover rounded-lg"
                width={60}
                height={120}
              />
              <div className="flex flex-col justify-between">
                <div className="leading-5">
                  <h3 className="text-md font-semibold">Solo Leveling</h3>
                  <span className="text-xs text-gray-400">
                    Action, Adventure
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
                  <span className="text-sm text-gray-500 font-semibold">
                    8.6
                  </span>
                </div>
              </div>
            </div>

            <button>See more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
