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
