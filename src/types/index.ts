export interface Anime {
  id: string;
  title: string;
  year: number;
  rating: number;
  episodes: number;
  status: string;
  genres: string[];
  overview: string;
  studio: string;
  season: string;
  voiceActors: string[];
  posterUrl?: string;
  backdropUrl?: string;
}

export interface Character {
  id: string;
  name: string;
  animeFrom: string;
  animeId: string;
  voiceActor: string;
  role: string;
  description: string;
  imageUrl?: string;
}

export interface Manga {
  id: string;
  title: string;
  year: number;
  rating: number;
  volumes: number;
  chapters: number;
  status: string;
  genres: string[];
  overview: string;
  author: string;
  publisher: string;
  coverUrl?: string;
  bannerUrl?: string;
  isAdult: boolean;
  hasAnime: boolean;
  animeId?: string;
}
