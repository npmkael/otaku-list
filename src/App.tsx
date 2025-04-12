import { Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Discover from "./pages/Discover/Discover";
import Watchlist from "./pages/Watchlist";
import Animes from "./pages/Discover/Animes/Animes";
import Mangas from "./pages/Discover/Mangas";

// layouts
import MainLayout from "./layouts/MainLayout";
import AnimeDetails from "./pages/Discover/Animes/AnimeDetails";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/discover" element={<Discover />}>
          <Route path="animes" element={<Animes />} />
          <Route path="animes/:id" element={<AnimeDetails />} />
          <Route path="mangas" element={<Mangas />} />
        </Route>
        <Route path="/watchlist" element={<Watchlist />} />
      </Route>
    </Routes>
  );
}

export default App;
