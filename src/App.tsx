import { Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Watchlist from "./pages/Watchlist";
import Animes from "./pages/Animes/Animes";
import Mangas from "./pages/Mangas";

// layouts
import MainLayout from "./layouts/MainLayout";
import AnimeDetails from "./pages/Animes/AnimeDetails";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/animes" element={<Animes />} />
        <Route path="animes/:id" element={<AnimeDetails />} />
        <Route path="/mangas" element={<Mangas />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Route>
    </Routes>
  );
}

export default App;
