import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Chat from "./pages/chat";
import PropertiesPage from "./pages/properties";
import FavoritesPage from "./pages/favorites";
import Profile from "./pages/profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/properties" element={<PropertiesPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
