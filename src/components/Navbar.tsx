import { Menu, X, Search, Bell, User } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-black/80 backdrop-blur-md sticky top-0 z-40">
      <div className="coontainer mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-white font-poppins">
              OtakuList
              <span className="text-red-500">.</span>
            </a>

            {/* Navigation for desktop */}
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-md text-white hover:text-red-500 transition-colors uppercase font-poppins "
            >
              Home
            </Link>
            <Link
              to="/animes"
              className="text-md text-white hover:text-red-500 transition-colors uppercase font-poppins "
            >
              Animes
            </Link>
            <Link
              to="/mangas"
              className="text-md text-white hover:text-red-500 transition-colors uppercase font-poppins "
            >
              Manga
            </Link>
            <Link
              to="/characters"
              className="text-md text-white hover:text-red-500 transition-colors uppercase font-poppins "
            >
              Characters
            </Link>
          </nav>

          {/* Search and User Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white"
            >
              <Bell className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white"
            >
              <User className="h-5 w-5" />
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-gray-400 hover:text-white"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="bg-neutral-800 text-white border-gray-800"
              >
                <nav className="flex flex-col gap-4 mt-8 justify-center items-center">
                  <a
                    href="/"
                    className="text-lg hover:text-red-500 transition-colors"
                  >
                    Home
                  </a>
                  <a
                    href="/"
                    className="text-lg hover:text-red-500 transition-colors"
                  >
                    Anime
                  </a>
                  <a
                    href="/"
                    className="text-lg hover:text-red-500 transition-colors"
                  >
                    Manga
                  </a>
                  <a
                    href="/"
                    className="text-lg hover:text-red-500 transition-colors"
                  >
                    Characters
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
