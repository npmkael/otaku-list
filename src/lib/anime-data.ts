import type { Anime, Character } from "../types/index";

// Sample anime data
const animes: Anime[] = [
  {
    id: "1",
    title: "Solo Leveling Season 1",
    year: 2025,
    rating: 9.0,
    episodes: 24,
    status: "Completed",
    genres: ["Adventure", "Action", "Fantasy"],
    overview:
      "Follows the adventures of Sung Jinwoo in a world that is constantly threatened by monsters and evil forces. In his battles Sung transforms himself from the weakest hunter of all mankind to one of the strongest hunters in existence.",
    studio: "MAPPA",
    season: "Fall 2024",
    voiceActors: ["Yuki Kaji", "Yui Ishikawa", "Marina Inoue"],
    posterUrl: "/banners/solo-leveling-banner-sample.webp",
    backdropUrl: "/poster/solo-leveling-poster.jpg",
  },
  {
    id: "2",
    title: "The Apothecary Diaries",
    year: 2019,
    rating: 8.7,
    episodes: 44,
    status: "Ongoing",
    genres: ["Action", "Dark Fantasy", "Martial Arts"],
    overview:
      "An apothecary's daughter, who is sold into servitude at the Imperial Palace after being kidnapped and uses her medical knowledge to solve mysteries in the inner court, eventually catching the eye of a powerful eunuch. ",
    studio: "ufotable",
    season: "Spring 2019",
    voiceActors: ["Natsuki Hanae", "Akari Kitō", "Hiro Shimono"],
    posterUrl: "/banners/apothecary-poster-banner.jpg",
    backdropUrl: "/poster/apothecary-poster.webp",
  },
  {
    id: "3",
    title: "My Hero Academia",
    year: 2016,
    rating: 8.4,
    episodes: 138,
    status: "Ongoing",
    genres: ["Action", "Superhero", "School"],
    overview:
      "In a world where people with superpowers (known as 'Quirks') are the norm, Izuku Midoriya has dreams of one day becoming a Hero, despite being bullied by his classmates for not having a Quirk. After being the only one to try and save his childhood bully from a villain, Izuku is given a Quirk by the world's greatest Hero, All Might.",
    studio: "Bones",
    season: "Spring 2016",
    voiceActors: ["Daiki Yamashita", "Kenta Miyake", "Nobuhiko Okamoto"],
    posterUrl: "/poster/hero-academia-poster.webp",
    backdropUrl: "/poster/hero-academia-poster.webp",
  },
  {
    id: "4",
    title: "Jujutsu Kaisen",
    year: 2020,
    rating: 8.6,
    episodes: 48,
    status: "Ongoing",
    genres: ["Action", "Dark Fantasy", "Supernatural"],
    overview:
      "Yuji Itadori, a kind-hearted teenager, joins his school's Occult Club for fun, but discovers that its members are actual sorcerers who can manipulate the energy between beings for their own use. He hears about a cursed object - a rotting finger, and its owner, a demon named Sukuna Ryoumen, 'the King of Curses'.",
    studio: "MAPPA",
    season: "Fall 2020",
    voiceActors: ["Junya Enoki", "Yuma Uchida", "Asami Seto"],
    posterUrl: "/banners/jujutsu-kaisen-banner.jpg",
    backdropUrl: "/poster/jjk-poster.webp",
  },
  {
    id: "5",
    title: "One Piece",
    year: 1999,
    rating: 8.9,
    episodes: 1000,
    status: "Ongoing",
    genres: ["Action", "Adventure", "Fantasy"],
    overview:
      "Follows the adventures of Monkey D. Luffy and his pirate crew in order to find the greatest treasure ever left by the legendary Pirate, Gold Roger. The famous mystery treasure named 'One Piece'.",
    studio: "Toei Animation",
    season: "Fall 1999",
    voiceActors: ["Mayumi Tanaka", "Kazuya Nakai", "Akemi Okamura"],
    posterUrl: "/banners/one-piece-banner-poster.webp",
    backdropUrl: "/poster/one-piece-poster.jpg",
  },
  {
    id: "6",
    title: "Fullmetal Alchemist: Brotherhood",
    year: 2009,
    rating: 9.1,
    episodes: 64,
    status: "Completed",
    genres: ["Action", "Adventure", "Dark Fantasy"],
    overview:
      "After a failed alchemical ritual leaves brothers Edward and Alphonse Elric with severely damaged bodies, they begin searching for the Philosopher's Stone to restore what they've lost.",
    studio: "Bones",
    season: "Spring 2009",
    voiceActors: ["Romi Park", "Rie Kugimiya", "Shinichiro Miki"],
    posterUrl: "/poster/fullmetal-alchemist.jpg",
    backdropUrl: "/poster/fullmetal-alchemist.jpg",
  },
  {
    id: "7",
    title: "Spy x Family",
    year: 2022,
    rating: 8.6,
    episodes: 25,
    status: "Ongoing",
    genres: ["Action", "Comedy", "Spy"],
    overview:
      "A spy on an undercover mission gets married and adopts a child as part of his cover. His wife and daughter have secrets of their own, and all three must strive to keep together.",
    studio: "Wit Studio & CloverWorks",
    season: "Spring 2022",
    voiceActors: ["Takuya Eguchi", "Atsumi Tanezaki", "Saori Hayami"],
    posterUrl: "/placeholder.svg?height=450&width=300&text=Spy x Family",
    backdropUrl: "/poster/spyfamily-poster.jpg",
  },
  {
    id: "8",
    title: "Chainsaw Man",
    year: 2022,
    rating: 8.5,
    episodes: 12,
    status: "Ongoing",
    genres: ["Action", "Dark Fantasy", "Supernatural"],
    overview:
      "Denji has a simple dream—to live a happy and peaceful life, spending time with a girl he likes. This is a far cry from reality, however, as Denji is forced by the yakuza into killing devils in order to pay off his crushing debts.",
    studio: "MAPPA",
    season: "Fall 2022",
    voiceActors: ["/chainsawman.jpg"],
    backdropUrl: "/poster/chainsawman.jpg",
  },
  {
    id: "9",
    title: "Death Note",
    year: 2006,
    rating: 9.0,
    episodes: 37,
    status: "Completed",
    genres: ["Mystery", "Psychological", "Supernatural"],
    overview:
      "An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it.",
    studio: "Madhouse",
    season: "Fall 2006",
    voiceActors: ["Mamoru Miyano", "Kappei Yamaguchi", "Shido Nakamura"],
    posterUrl: "/placeholder.svg?height=450&width=300&text=Death Note",
    backdropUrl: "/poster/death-note.jpg",
  },
  {
    id: "10",
    title: "Violet Evergarden",
    year: 2018,
    rating: 8.9,
    episodes: 13,
    status: "Completed",
    genres: ["Drama", "Fantasy", "Slice of Life"],
    overview:
      "In the aftermath of a great war, Violet Evergarden, a young female ex-soldier, gets a job at a writers' agency and goes on assignments to create letters that can connect people.",
    studio: "Kyoto Animation",
    season: "Winter 2018",
    voiceActors: ["Yui Ishikawa", "Daisuke Namikawa", "Takehito Koyasu"],
    posterUrl: "/placeholder.svg?height=450&width=300&text=Violet Evergarden",
    backdropUrl: "/poster/violet-evergarden.jpg",
  },
];

// Export anime lists
export const featuredAnimes = animes.slice(0, 5);
export const popularAnimes = [
  animes[5],
  animes[6],
  animes[7],
  animes[8],
  animes[9],
];
export const newReleases = [
  animes[1],
  animes[3],
  animes[6],
  animes[7],
  animes[2],
];

const characters: Character[] = [
  {
    id: "1",
    name: "Eren Yeager",
    animeFrom: "Attack on Titan",
    animeId: "1",
    voiceActor: "Yuki Kaji",
    role: "Protagonist",
    description:
      "A young man who swears vengeance on the Titans after they destroy his hometown and kill his mother. Later discovers he has the ability to transform into a Titan.",
    imageUrl: "/characters/eren-jaeger.webp",
  },
  {
    id: "2",
    name: "Mikasa Ackerman",
    animeFrom: "Attack on Titan",
    animeId: "1",
    voiceActor: "Yui Ishikawa",
    role: "Main Character",
    description:
      "Eren's adoptive sister and one of the most skilled soldiers. She is extremely protective of Eren and has exceptional combat abilities.",
    imageUrl: "/characters/mikasa-ackerman.webp",
  },
  {
    id: "3",
    name: "Tanjiro Kamado",
    animeFrom: "Demon Slayer",
    animeId: "2",
    voiceActor: "Natsuki Hanae",
    role: "Protagonist",
    description:
      "A kind-hearted young man who becomes a demon slayer after his family is slaughtered and his sister Nezuko is turned into a demon.",
    imageUrl: "/characters/tanjiro.webp",
  },
  {
    id: "4",
    name: "Nezuko Kamado",
    animeFrom: "Demon Slayer",
    animeId: "2",
    voiceActor: "Akari Kitō",
    role: "Main Character",
    description:
      "Tanjiro's younger sister who was turned into a demon but still retains some human emotions and thoughts. She travels with Tanjiro in a special box during the day.",
    imageUrl: "/characters/nezuko.jpg",
  },
  {
    id: "5",
    name: "Izuku Midoriya",
    animeFrom: "My Hero Academia",
    animeId: "3",
    voiceActor: "Daiki Yamashita",
    role: "Protagonist",
    description:
      "A boy born without a Quirk in a world where most people have superpowers. After meeting his idol All Might, he inherits his Quirk and enters U.A. High School to become a hero.",
    imageUrl: "/characters/izuku-midoriya.webp",
  },
  {
    id: "6",
    name: "Katsuki Bakugo",
    animeFrom: "My Hero Academia",
    animeId: "3",
    voiceActor: "Nobuhiko Okamoto",
    role: "Deuteragonist",
    description:
      "Izuku's childhood friend and rival with an explosive personality to match his Quirk. Despite his aggressive nature, he aims to become the number one hero.",
    imageUrl: "/characters/katsuki-bakugo.jpg",
  },
  {
    id: "7",
    name: "Yuji Itadori",
    animeFrom: "Jujutsu Kaisen",
    animeId: "4",
    voiceActor: "Junya Enoki",
    role: "Protagonist",
    description:
      "A high school student with impressive physical abilities who joins the Occult Research Club for fun. After swallowing a cursed object, he becomes the host of Sukuna, the King of Curses.",
    imageUrl: "/placeholder.svg?height=400&width=300&text=Yuji Itadori",
  },
  {
    id: "8",
    name: "Megumi Fushiguro",
    animeFrom: "Jujutsu Kaisen",
    animeId: "4",
    voiceActor: "Yuma Uchida",
    role: "Main Character",
    description:
      "A serious and strong-willed jujutsu sorcerer who can summon various shikigami (familiars) using his shadow technique. He's the one who first encounters Yuji.",
    imageUrl: "/placeholder.svg?height=400&width=300&text=Megumi Fushiguro",
  },
  {
    id: "9",
    name: "Edward Elric",
    animeFrom: "Fullmetal Alchemist: Brotherhood",
    animeId: "5",
    voiceActor: "Romi Park",
    role: "Protagonist",
    description:
      "A young alchemical prodigy who lost his arm and leg in a failed human transmutation attempt to revive his mother. He becomes a State Alchemist to find the Philosopher's Stone.",
    imageUrl: "/placeholder.svg?height=400&width=300&text=Edward Elric",
  },
  {
    id: "10",
    name: "Alphonse Elric",
    animeFrom: "Fullmetal Alchemist: Brotherhood",
    animeId: "5",
    voiceActor: "Rie Kugimiya",
    role: "Deuteragonist",
    description:
      "Edward's younger brother whose entire body was lost in the failed transmutation. His soul is bound to a suit of armor, and he travels with Edward to find a way to restore their bodies.",
    imageUrl: "/placeholder.svg?height=400&width=300&text=Alphonse Elric",
  },
  {
    id: "11",
    name: "Monkey D. Luffy",
    animeFrom: "One Piece",
    animeId: "6",
    voiceActor: "Mayumi Tanaka",
    role: "Protagonist",
    description:
      "A cheerful young man whose body gained the properties of rubber after unintentionally eating a Devil Fruit. His dream is to find the One Piece treasure and become the Pirate King.",
    imageUrl: "/placeholder.svg?height=400&width=300&text=Monkey D. Luffy",
  },
  {
    id: "12",
    name: "Anya Forger",
    animeFrom: "Spy x Family",
    animeId: "7",
    voiceActor: "Atsumi Tanezaki",
    role: "Main Character",
    description:
      "A telepathic young girl adopted by Loid Forger as part of his cover. She's aware of both her adoptive parents' secret identities but keeps this knowledge to herself.",
    imageUrl: "/placeholder.svg?height=400&width=300&text=Anya Forger",
  },
];

export const popularCharacters = characters.slice(0, 6);

// Helper functions
export function getAnimeById(id: string): Anime | undefined {
  return animes.find((anime) => anime.id === id);
}

export function getSimilarAnimes(id: string): Anime[] {
  const anime = getAnimeById(id);
  if (!anime) return animes.slice(0, 5);

  // Find animes with similar genres
  return animes
    .filter(
      (a) => a.id !== id && a.genres.some((g) => anime.genres.includes(g))
    )
    .slice(0, 5);
}
