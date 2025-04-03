import { Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

// layouts
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
    </Routes>
  );
}

export default App;
