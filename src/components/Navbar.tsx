import { useState } from "react";
import { Menu, X, Search, Bell, User } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Navbar = () => {
  return (
    <header className="bg-black/80 backdrop-blur-md border-b border-gray-800 sticky top-0 z-40">
      <div className="coontainer mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <a href="/" className="text-2xl font-bold text-white font-poppins">
              OtakuList
              <span className="text-red-500">.</span>
            </a>

            {/* Navigation for desktop */}
            <nav className="hidden md:flex items-center gap-6">
              <a
                href="/"
                className="text-sm text-white hover:text-red-500 transition-colors"
              >
                Home
              </a>
              <a
                href="/"
                className="text-sm text-white hover:text-red-500 transition-colors"
              >
                Animes
              </a>
              <a
                href="/"
                className="text-sm text-white hover:text-red-500 transition-colors"
              >
                Manga
              </a>
              <a
                href="/"
                className="text-sm text-white hover:text-red-500 transition-colors"
              >
                Characters
              </a>
            </nav>
          </div>

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
                className="bg-gray-900 text-white border-gray-800"
              >
                <nav className="flex flex-col gap-4 mt-8">
                  <a
                    href="/"
                    className="text-lg hover:text-red-500 transitions-colors"
                  >
                    Home
                  </a>
                  <a
                    href="/"
                    className="text-lg hover:text-red-500 transitions-colors"
                  >
                    Anime
                  </a>
                  <a
                    href="/"
                    className="text-lg hover:text-red-500 transitions-colors"
                  >
                    Manga
                  </a>
                  <a
                    href="/"
                    className="text-lg hover:text-red-500 transitions-colors"
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
