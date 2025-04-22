import type { Manga } from "../types/index";

// Sample manga data
const mangas: Manga[] = [
  {
    id: "1",
    title: "Berserk",
    year: 1989,
    rating: 9.4,
    volumes: 41,
    chapters: 364,
    status: "Ongoing",
    genres: [
      "Action",
      "Adventure",
      "Drama",
      "Fantasy",
      "Horror",
      "Supernatural",
    ],
    overview:
      "Guts, a former mercenary now known as the 'Black Swordsman,' is out for revenge. After a tumultuous childhood, he finally finds someone he respects and believes he can trust, only to have everything fall apart when this person takes away everything important to Guts for the purpose of fulfilling his own desires.",
    author: "Kentaro Miura",
    publisher: "Hakusensha",
    coverUrl: "/placeholder.png",
    bannerUrl: "/placeholder.svg?height=1080&width=1920&text=Berserk",
    isAdult: true,
    hasAnime: true,
  },
  {
    id: "2",
    title: "One Piece",
    year: 1997,
    rating: 9.2,
    volumes: 105,
    chapters: 1088,
    status: "Ongoing",
    genres: ["Action", "Adventure", "Comedy", "Fantasy", "Shounen"],
    overview:
      "Gol D. Roger, a man referred to as the 'Pirate King,' is set to be executed by the World Government. But just before his death, he confirms the existence of a great treasure, One Piece, located somewhere within the vast ocean known as the Grand Line. Announcing that One Piece can be claimed by anyone worthy enough to reach it, the Pirate King is executed and the Great Age of Pirates begins.",
    author: "Eiichiro Oda",
    publisher: "Shueisha",
    coverUrl: "/placeholder.png",
    bannerUrl: "/placeholder.svg?height=1080&width=1920&text=One Piece",
    isAdult: false,
    hasAnime: true,
    animeId: "6",
  },
  {
    id: "3",
    title: "Vagabond",
    year: 1998,
    rating: 9.3,
    volumes: 37,
    chapters: 327,
    status: "On Hiatus",
    genres: ["Action", "Adventure", "Drama", "Historical", "Samurai", "Seinen"],
    overview:
      "Growing up in the late 16th century Sengoku era Japan, Shinmen Takezou is shunned by the local villagers as a devil child due to his wild and violent nature. Running away from home with a fellow boy at age 17, Takezou joins the Toyotomi army to fight the Tokugawa clan at the Battle of Sekigahara. However, the Tokugawa win a crushing victory, leading to nearly all of the Toyotomi soldiers being killed.",
    author: "Takehiko Inoue",
    publisher: "Shueisha",
    coverUrl: "/placeholder.png",
    bannerUrl: "/placeholder.svg?height=1080&width=1920&text=Vagabond",
    isAdult: true,
    hasAnime: false,
  },
  {
    id: "4",
    title: "Fullmetal Alchemist",
    year: 2001,
    rating: 9.1,
    volumes: 27,
    chapters: 116,
    status: "Completed",
    genres: ["Action", "Adventure", "Drama", "Fantasy", "Military", "Shounen"],
    overview:
      "After losing their mother, Alphonse and Edward Elric attempt to bring her back using the forbidden science of human alchemy. However, alchemy operates on the theory of equivalent trade, and breaking the human alchemy taboo carries a heavy price. Ed loses his leg, and Al loses his body. Ed sacrifices his arm to seal Al's soul to a suit of armor. To restore what was lost, the brothers seek the Philosopher's Stone.",
    author: "Hiromu Arakawa",
    publisher: "Square Enix",
    coverUrl: "/placeholder.png",
    bannerUrl:
      "/placeholder.svg?height=1080&width=1920&text=Fullmetal Alchemist",
    isAdult: false,
    hasAnime: true,
    animeId: "5",
  },
  {
    id: "5",
    title: "Vinland Saga",
    year: 2005,
    rating: 9.0,
    volumes: 26,
    chapters: 198,
    status: "Ongoing",
    genres: ["Action", "Adventure", "Drama", "Historical", "Seinen"],
    overview:
      "Thorfinn, son of one of the Vikings' greatest warriors, is among the finest fighters in the merry band of mercenaries run by the cunning Askeladd, an impressive feat for a person his age. However, Thorfinn is not part of the group for the plunder it entails—instead, for having caused his family great tragedy, the boy has vowed to kill Askeladd in a fair duel.",
    author: "Makoto Yukimura",
    publisher: "Kodansha",
    coverUrl: "/placeholder.png",
    bannerUrl: "/placeholder.svg?height=1080&width=1920&text=Vinland Saga",
    isAdult: false,
    hasAnime: true,
  },
  {
    id: "6",
    title: "Attack on Titan",
    year: 2009,
    rating: 8.9,
    volumes: 34,
    chapters: 141,
    status: "Completed",
    genres: ["Action", "Drama", "Fantasy", "Horror", "Mystery", "Shounen"],
    overview:
      "Several hundred years ago, humans were nearly exterminated by giants. Giants are typically several stories tall, seem to have no intelligence, devour human beings and, worst of all, seem to do it for the pleasure rather than as a food source. A small percentage of humanity survived by walling themselves in a city protected by extremely high walls, even taller than the biggest of giants.",
    author: "Hajime Isayama",
    publisher: "Kodansha",
    coverUrl: "/placeholder.png",
    bannerUrl: "/placeholder.svg?height=1080&width=1920&text=Attack on Titan",
    isAdult: false,
    hasAnime: true,
    animeId: "1",
  },
  {
    id: "7",
    title: "Chainsaw Man",
    year: 2018,
    rating: 8.8,
    volumes: 14,
    chapters: 129,
    status: "Ongoing",
    genres: ["Action", "Comedy", "Drama", "Horror", "Supernatural", "Shounen"],
    overview:
      "Denji has a simple dream—to live a happy and peaceful life, spending time with a girl he likes. This is a far cry from reality, however, as Denji is forced by the yakuza into killing devils in order to pay off his crushing debts. Using his pet devil Pochita as a weapon, he is ready to do anything for a bit of cash.",
    author: "Tatsuki Fujimoto",
    publisher: "Shueisha",
    coverUrl: "/placeholder.png",
    bannerUrl: "/placeholder.svg?height=1080&width=1920&text=Chainsaw Man",
    isAdult: false,
    hasAnime: true,
    animeId: "8",
  },
  {
    id: "8",
    title: "Jujutsu Kaisen",
    year: 2018,
    rating: 8.7,
    volumes: 22,
    chapters: 230,
    status: "Ongoing",
    genres: ["Action", "Horror", "Supernatural", "Shounen"],
    overview:
      "Yuji Itadori is an unnaturally fit high school student living a normal life, except that his grandfather is on his deathbed. His grandfather's last words were 'always help others' and 'die surrounded by people.' After his grandfather's death, Yuji interprets these words as one statement: everyone deserves 'a proper death.'",
    author: "Gege Akutami",
    publisher: "Shueisha",
    coverUrl: "/placeholder.png",
    bannerUrl: "/placeholder.svg?height=1080&width=1920&text=Jujutsu Kaisen",
    isAdult: false,
    hasAnime: true,
    animeId: "4",
  },
  {
    id: "9",
    title: "Demon Slayer",
    year: 2016,
    rating: 8.6,
    volumes: 23,
    chapters: 207,
    status: "Completed",
    genres: ["Action", "Fantasy", "Historical", "Shounen"],
    overview:
      "Ever since the death of his father, the burden of supporting the family has fallen upon Tanjirou Kamado's shoulders. Though living impoverished on a remote mountain, the Kamado family are able to enjoy a relatively peaceful and happy life. One day, Tanjirou decides to go down to the local village to make a little money selling charcoal. On his way back, night falls, forcing Tanjirou to take shelter in the house of a strange man, who warns him of the existence of flesh-eating demons that lurk in the woods at night.",
    author: "Koyoharu Gotouge",
    publisher: "Shueisha",
    coverUrl: "/placeholder.png",
    bannerUrl: "/placeholder.svg?height=1080&width=1920&text=Demon Slayer",
    isAdult: false,
    hasAnime: true,
    animeId: "2",
  },
  {
    id: "10",
    title: "Spy x Family",
    year: 2019,
    rating: 8.5,
    volumes: 11,
    chapters: 80,
    status: "Ongoing",
    genres: ["Action", "Comedy", "Slice of Life", "Shounen"],
    overview:
      "The story follows a spy who has to 'build a family' to execute a mission, not realizing that the girl he adopts as his daughter is a telepath, and the woman he agrees to be in a marriage with is a skilled assassin.",
    author: "Tatsuya Endo",
    publisher: "Shueisha",
    coverUrl: "/placeholder.png",
    bannerUrl: "/placeholder.svg?height=1080&width=1920&text=Spy x Family",
    isAdult: false,
    hasAnime: true,
    animeId: "7",
  },
  {
    id: "11",
    title: "Monster",
    year: 1994,
    rating: 9.2,
    volumes: 18,
    chapters: 162,
    status: "Completed",
    genres: ["Drama", "Mystery", "Psychological", "Seinen"],
    overview:
      "Dr. Kenzo Tenma, an elite neurosurgeon, finds his life in utter turmoil after getting involved with a former patient who is a dangerous psychopath.",
    author: "Naoki Urasawa",
    publisher: "Shogakukan",
    coverUrl: "/placeholder.png",
    bannerUrl: "/placeholder.svg?height=1080&width=1920&text=Monster",
    isAdult: true,
    hasAnime: true,
  },
  {
    id: "12",
    title: "My Hero Academia",
    year: 2014,
    rating: 8.4,
    volumes: 38,
    chapters: 420,
    status: "Ongoing",
    genres: ["Action", "Comedy", "School", "Shounen", "Superhero"],
    overview:
      "In a world where people with superpowers (known as 'Quirks') are the norm, Izuku Midoriya has dreams of one day becoming a Hero, despite being bullied by his classmates for not having a Quirk. After being the only one to try and save his childhood bully from a villain, Izuku is given a Quirk by the world's greatest Hero, All Might.",
    author: "Kohei Horikoshi",
    publisher: "Shueisha",
    coverUrl: "/placeholder.png",
    bannerUrl: "/placeholder.svg?height=1080&width=1920&text=My Hero Academia",
    isAdult: false,
    hasAnime: true,
    animeId: "3",
  },
];

// Update the first 5 mangas with more specific banner URLs
mangas[0].bannerUrl =
  "/placeholder.svg?height=1080&width=1920&text=Berserk Banner";
mangas[1].bannerUrl =
  "/placeholder.svg?height=1080&width=1920&text=One Piece Banner";
mangas[2].bannerUrl =
  "/placeholder.svg?height=1080&width=1920&text=Vagabond Banner";
mangas[3].bannerUrl =
  "/placeholder.svg?height=1080&width=1920&text=Fullmetal Alchemist Banner";
mangas[4].bannerUrl =
  "/placeholder.svg?height=1080&width=1920&text=Vinland Saga Banner";

// Export manga lists
export const featuredMangas = mangas.slice(0, 5);
export const popularMangas = [
  mangas[5],
  mangas[6],
  mangas[7],
  mangas[8],
  mangas[9],
];
export const newReleases = [
  mangas[6],
  mangas[7],
  mangas[9],
  mangas[11],
  mangas[4],
];
export const completedMangas = mangas.filter(
  (manga) => manga.status === "Completed"
);
export const ongoingMangas = mangas.filter(
  (manga) => manga.status === "Ongoing"
);

// Helper functions
export function getMangaById(id: string): Manga | undefined {
  return mangas.find((manga) => manga.id === id);
}

export function getSimilarMangas(id: string): Manga[] {
  const manga = getMangaById(id);
  if (!manga) return mangas.slice(0, 5);

  // Find mangas with similar genres
  return mangas
    .filter(
      (m) => m.id !== id && m.genres.some((g) => manga.genres.includes(g))
    )
    .slice(0, 5);
}

export function getMangasByGenre(genre: string): Manga[] {
  return mangas.filter((manga) => manga.genres.includes(genre));
}

export function getMangasByAuthor(author: string): Manga[] {
  return mangas.filter((manga) => manga.author === author);
}

export function getRelatedAnimeId(mangaId: string): string | undefined {
  const manga = getMangaById(mangaId);
  return manga?.animeId;
}
