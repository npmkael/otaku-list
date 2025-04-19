import { Play, Plus, Star } from "lucide-react";
import { useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TabsContent, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AnimeDetails = () => {
  const { id } = useParams();

  return (
    <div className="relative min-h-[70vh]">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url(/banners/one-piece-banner-poster.webp",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />

      <div className="relative z-20 container mx-auto px-4 pt-10">
        {/* Some link */}

        <div className="flex flex-col md:flex-row gap-8 py-10">
          <div className="w-full md:w-1/3 lg:w-1/4 flex-shrink-0">
            <div className="aspect-[2/3] relative rounded-lg overflow-hidden">
              <img
                src="/poster/one-piece-poster.jpg"
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="flex-1">
            <h1 className="text-3xl md:text-5xl font-bold mb-2 text-white">
              One Piece
            </h1>

            <div className="flex flex-warp items-center gap-3 text-sm text-gray-300 mb-4">
              <span className="flex items-center">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
              </span>
              <span>•</span>
              <span>1998</span>
              <span>•</span>
              <span className="flex items-center">1125 Episodes</span>
              <span>•</span>
              <span>Ongoing</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              <Badge
                variant="outline"
                className="text-xs border-gray-300 text-white"
              >
                Action
              </Badge>
              <Badge
                variant="outline"
                className="text-xs border-gray-300 text-white"
              >
                Adventure
              </Badge>
              <Badge
                variant="outline"
                className="text-xs border-gray-300 text-white"
              >
                Fantasy
              </Badge>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button className="bg-red-500 hover:bg-red-500/90 text-white">
                <Play className="h-4 w-4 mr-2" />
                Watch Now
              </Button>
              <Button className="bg-white text-black hover:bg-white/80">
                <Plus className="h-4 w-4 mr-2" /> Add to Watchlist
              </Button>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-3 text-white/80">Synopsis</h2>
              <p className="text-gray-300 leading-relaxed">
                Follows Monkey D. Luffy's journey to become the Pirate King by
                finding the legendary treasure, "One Piece," and assembling a
                crew of like-minded individuals to achieve his dream. Luffy,
                after eating a Devil Fruit, gains rubber-like abilities and
                embarks on a grand adventure across the Grand Line, facing
                challenges and forming bonds with his crew, the Straw Hat
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-gray-400 text-sm mb-1">Studio</h3>
                <p className="text-white">A1 Pictures</p>
              </div>
              <div>
                <h3 className="text-gray-400 text-sm mb-1">Season</h3>
                <p className="text-white">Summer 2025</p>
              </div>
              <div>
                <h3 className="text-gray-400 text-sm mb-1">Voice Actors</h3>
                <p className="text-white">Yuji</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="container mx-auto px-4 py-10">
          <Tabs defaultValue="characters" className="w-full">
            <TabsList className="grid w-full md:w-auto grid-cols-3 h-auto bg-gray-900">
              <TabsTrigger value="characters" className="py-3">
                Characters
              </TabsTrigger>
              <TabsTrigger value="episodes" className="py-3">
                Episodes
              </TabsTrigger>
              <TabsTrigger value="similar" className="py-3">
                Similar Anime
              </TabsTrigger>
            </TabsList>

            <TabsContent value="characters" className="pt-6">
              <span>Characters</span>
            </TabsContent>

            <TabsContent value="episodes" className="pt-6">
              <span>Episodes</span>
            </TabsContent>

            <TabsContent value="similar" className="pt-6">
              <span>Similar</span>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetails;
