import AnimeCard from "@/components/Animes/AnimeCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { filterOptions, genres, SortOption, sortOptions } from "@/constants";
import { featuredAnimes, newReleases, popularAnimes } from "@/lib/anime-data";
import { ChevronDown, ChevronLeft, Filter, Search, Star } from "lucide-react";

import { useEffect, useState } from "react";

const animesByGenre: Record<string, typeof featuredAnimes> = {};
genres.slice(0, 6).forEach((genre) => {
  animesByGenre[genre.name] = [
    ...featuredAnimes,
    ...popularAnimes,
    ...newReleases,
  ].filter((anime) => anime.genres.includes(genre.name));
});

const allAnimes = [
  ...new Map(
    [...featuredAnimes, ...popularAnimes, ...newReleases].map((item) => [
      item.id,
      item,
    ])
  ).values(),
];

// Items per page
const ITEMS_PER_PAGE = 12;

const Animes = () => {
  const [currentTab, setCurrentTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredAnimes, setFilteredAnimes] = useState(allAnimes);
  const [currentSort, setCurrentSort] = useState<SortOption>(sortOptions[0]);
  const [currentFilter, setCurrentFilter] = useState(filterOptions[0]);

  useEffect(() => {
    setCurrentPage(1);
  }, [currentTab]);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredAnimes(allAnimes);
    } else {
      const query = searchQuery.toLowerCase();
      setFilteredAnimes(
        allAnimes.filter(
          (anime) =>
            anime.title.toLowerCase().includes(query) ||
            anime.genres.some((genre) => genre.toLowerCase().includes(query)) ||
            anime.studio.toLowerCase().includes(query)
        )
      );
    }
    setCurrentPage(1);
  }, [searchQuery]);

  const getCurrentAnimes = () => {
    let animes: typeof allAnimes = [];

    switch (currentTab) {
      case "all":
        animes = filteredAnimes;
        break;
      case "trending":
        animes = filteredAnimes.filter((anime) =>
          featuredAnimes.some((a) => a.id === anime.id)
        );
        break;
      case "popular":
        animes = filteredAnimes.filter((anime) =>
          popularAnimes.some((a) => a.id === anime.id)
        );
        break;
      case "new":
        animes = filteredAnimes.filter((anime) =>
          newReleases.some((a) => a.id === anime.id)
        );
        break;
      default:
        animes = filteredAnimes.filter((anime) =>
          anime.genres.includes(currentTab)
        );
    }

    // Apply sorting
    animes = [...animes].sort(currentSort.sortFn);

    // Calculate total pages
    const totalPages = Math.ceil(animes.length / ITEMS_PER_PAGE);

    // Get current page items
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedAnimes = animes.slice(
      startIndex,
      startIndex + ITEMS_PER_PAGE
    );

    return { animes: paginatedAnimes, totalPages, totalResults: animes.length };
  };

  const {
    animes: currentAnimes,
    totalPages,
    totalResults,
  } = getCurrentAnimes();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className=" absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage: "url(/banners/solo-leveling-banner-sample.webp",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 py-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2 lg:w-3/5">
              <Badge className="bg-red-500 text-white mb-4">
                Featured Anime
              </Badge>
              <h1 className="text-3xl md:text-6xl font-bold mb-4">
                Solo Leveling
              </h1>
              <div className="flex items-center gap-4 mb-4 text-sm">
                <span className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  8/10
                </span>
                <span>•</span>
                <span>2025</span>
                <span>•</span>
                <span>24 Episodes</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-2xl">
                In a world where hunters — human warriors who possess
                supernatural abilities — must battle deadly monsters to protect
                all mankind from certain annihilation, a notoriously weak hunter
                named Sung Jin-woo finds himself in a seemingly endless struggle
                for survival.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <Badge variant="outline" className="border-gray-700">
                  Adventure
                </Badge>
                <Badge variant="outline" className="border-gray-700">
                  Fantasy
                </Badge>
                <Badge variant="outline" className="border-gray-700">
                  Action
                </Badge>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-red-500 hover:bg-red-600 text-white">
                  <a href="/animes/1">View Details</a>
                </Button>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-2/5 flex justify-center md:justify-end">
              <div className="relative w-64 h-96 shadow-2xl transform md:translate-y-5">
                <img
                  src="/poster/solo-leveling-poster.jpg"
                  className="object-cover rounded-lg h-full"
                  height={450}
                  width={300}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search bar */}
      <div
        className="py-6
      "
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search for anime, genres, studios..."
                className="pl-10 bg-gray-800 border-gray-700 text-white focus-visible:ring-red-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="text-white border-gray-700 hover:bg-gray-900 bg-gray-800"
                  >
                    {currentFilter.label}
                    <ChevronDown className="h-4 w-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="border-gray-700 text-white z-50">
                  {filterOptions.map((option) => (
                    <DropdownMenuItem
                      key={option.value}
                      className={`focus:bg-gray-800 focus:text-white cursor-pointer`}
                      onClick={() => setCurrentFilter(option)}
                    >
                      {option.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="text-white bg-gray-800 border-gray-700 hover:bg-gray-900"
                  >
                    Sort:
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-gray-900 border-gray-700 text-white z-50">
                  {sortOptions.map((option) => (
                    <DropdownMenuItem
                      key={option.value}
                      className={`focus:bg-gray-800 focus:text-white cursor-pointer`}
                    >
                      {option.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div id="results-top" className="container mx-auto px-4 py-10">
        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{currentFilter.label}</h2>
          <div className="text-sm text-gray-400">
            {totalResults} {totalResults === 1 ? "result" : "results"} • Page{" "}
            {currentPage} of {totalPages}
          </div>
        </div>

        {currentAnimes.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grud-cols-4 xl:grid-cols-6 gap-6">
            {currentAnimes.map((anime) => (
              <AnimeCard key={anime.id} anime={anime} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-900/30 rounded-lg">
            <h3 className="text-xl font-medium mb-2">No anime found</h3>
            <p className="text-gray-400 mb-4">
              Try adjusting your search or filters
            </p>
          </div>
        )}

        {/* Pagination buttons */}
        {totalPages > 1 && (
          <div className="mt-10 flex flex-col items-center">
            <div className="text-sm text-gray-400 mb-4">
              Showing {(currentPage - 1) * ITEMS_PER_PAGE + 1} to{" "}
              {Math.min(currentPage * ITEMS_PER_PAGE, totalResults)} of{" "}
              {totalResults} results
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 text-gray-400 border-gray-700"
                onClick={() => console.log("previous page button")}
              >
                <ChevronLeft className="h-5 w-5" />
                <span className="sr-only">Previous page</span>
              </Button>

              {/* and so on */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Animes;
