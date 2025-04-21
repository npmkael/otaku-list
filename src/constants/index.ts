export type SortOption = {
  label: string;
  value: string;
  sortFn: (a: any, b: any) => number;
};

export const sortOptions: SortOption[] = [
  {
    label: "Rating (High to Low)",
    value: "rating-desc",
    sortFn: (a, b) => b.rating - a.rating,
  },
  {
    label: "Rating (Low to High)",
    value: "rating-asc",
    sortFn: (a, b) => a.rating - b.rating,
  },
  {
    label: "Year (Newest)",
    value: "year-desc",
    sortFn: (a, b) => b.year - a.year,
  },
  {
    label: "Year (Oldest)",
    value: "year-asc",
    sortFn: (a, b) => a.year - b.year,
  },
  {
    label: "Title (A-Z)",
    value: "title-asc",
    sortFn: (a, b) => a.title.localeCompare(b.title),
  },
  {
    label: "Title (Z-A)",
    value: "title-desc",
    sortFn: (a, b) => b.title.localeCompare(a.title),
  },
  {
    label: "Episodes (Most)",
    value: "episodes-desc",
    sortFn: (a, b) => b.episodes - a.episodes,
  },
  {
    label: "Episodes (Least)",
    value: "episodes-asc",
    sortFn: (a, b) => a.episodes - b.episodes,
  },
];

export const genres = [
  {
    id: "action",
    name: "Action",
    imageUrl: "/placeholder.svg?height=300&width=500&text=Action",
    animeCount: 245,
  },
  {
    id: "adventure",
    name: "Adventure",
    imageUrl: "/placeholder.svg?height=300&width=500&text=Adventure",
    animeCount: 198,
  },
  {
    id: "comedy",
    name: "Comedy",
    imageUrl: "/placeholder.svg?height=300&width=500&text=Comedy",
    animeCount: 320,
  },
  {
    id: "drama",
    name: "Drama",
    imageUrl: "/placeholder.svg?height=300&width=500&text=Drama",
    animeCount: 278,
  },
  {
    id: "fantasy",
    name: "Fantasy",
    imageUrl: "/placeholder.svg?height=300&width=500&text=Fantasy",
    animeCount: 210,
  },
  {
    id: "horror",
    name: "Horror",
    imageUrl: "/placeholder.svg?height=300&width=500&text=Horror",
    animeCount: 89,
  },
  {
    id: "mecha",
    name: "Mecha",
    imageUrl: "/placeholder.svg?height=300&width=500&text=Mecha",
    animeCount: 112,
  },
  {
    id: "mystery",
    name: "Mystery",
    imageUrl: "/placeholder.svg?height=300&width=500&text=Mystery",
    animeCount: 156,
  },
  {
    id: "psychological",
    name: "Psychological",
    imageUrl: "/placeholder.svg?height=300&width=500&text=Psychological",
    animeCount: 98,
  },
  {
    id: "romance",
    name: "Romance",
    imageUrl: "/placeholder.svg?height=300&width=500&text=Romance",
    animeCount: 187,
  },
  {
    id: "sci-fi",
    name: "Sci-Fi",
    imageUrl: "/placeholder.svg?height=300&width=500&text=Sci-Fi",
    animeCount: 143,
  },
  {
    id: "slice-of-life",
    name: "Slice of Life",
    imageUrl: "/placeholder.svg?height=300&width=500&text=Slice of Life",
    animeCount: 165,
  },
  {
    id: "sports",
    name: "Sports",
    imageUrl: "/placeholder.svg?height=300&width=500&text=Sports",
    animeCount: 78,
  },
  {
    id: "supernatural",
    name: "Supernatural",
    imageUrl: "/placeholder.svg?height=300&width=500&text=Supernatural",
    animeCount: 201,
  },
  {
    id: "thriller",
    name: "Thriller",
    imageUrl: "/placeholder.svg?height=300&width=500&text=Thriller",
    animeCount: 124,
  },
];

// Filter options
export const filterOptions = [
  { label: "All Anime", value: "all" },
  { label: "Trending", value: "trending" },
  { label: "Popular", value: "popular" },
  { label: "New Releases", value: "new" },
  ...genres
    .slice(0, 6)
    .map((genre) => ({ label: genre.name, value: genre.name })),
];
