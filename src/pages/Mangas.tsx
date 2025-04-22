import MangaCard from "@/components/Manga/MangaCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { featuredMangas } from "@/lib/manga-data";
import { BookOpen, ChevronRight, Star } from "lucide-react";

const Mangas = () => {
  return (
    <div className="min-h-screen bg-black font-inter">
      <section className="bg-gradient-to-b from-red-500/30 to-black py-16">
        <div className="container mx-auto px-4 relative z-10 py-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2 lg:w-3/5">
              <Badge className="bg-white text-black mb-4">Featured Manga</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                On the Way to Meet Mom
              </h1>
              <div className="flex items-center gap-4 mb-4 text-sm">
                <span className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  10/10
                </span>
                <span>•</span>
                <span>2025</span>
                <span>•</span>
                {/* TODO: Change this when it is only 1 volume it shouldn't have 's' */}
                <span>1 Volumes</span>
                <span>•</span>
                <span>Ongoing</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-2xl">
                Mori, a child found by a rescue team in an abandoned house,
                wakes up in a shelter. While adapting to an unfamiliar life, one
                day, he begins to be looked after with unconditional love from a
                mysterious sponsor... And then Mori learns about the existence
                of a "mom" when a close friend leaves with hers. The child
                starts to wonder about the sponsor: "Could this person... be my
                mom?" This is the story of Mori's long and challenging journey
                to find his mom.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <Badge variant="outline" className="border-gray-700">
                  Action
                </Badge>
                <Badge variant="outline" className="border-gray-700">
                  Adventure
                </Badge>
                <Badge variant="outline" className="border-gray-700">
                  Slice of Life
                </Badge>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-red-500 hover:bg-red-600 text-white">
                  <BookOpen className="h-4 w-4 mr-2" /> Read Now
                </Button>
                <Button
                  variant="outline"
                  className="text-white border-white hover:bg-white/10"
                >
                  More Info
                </Button>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-2/5 flex justify-center md:justify-end">
              <div className="relative w-64 h-96 shadow-2xl transform md:translate-y-8">
                <img
                  src="/poster/on-the-way-to-meet-mom.webp"
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Featured Manga</h2>
            <a href="/manga/all" className="text-sm flex items-center">
              View All <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {featuredMangas.map((manga) => (
              <MangaCard key={manga.id} manga={manga} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Popular Manga</h2>
            <a href="/manga/all" className="text-sm flex items-center">
              View All <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {featuredMangas.map((manga) => (
              <MangaCard key={manga.id} manga={manga} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mangas;
