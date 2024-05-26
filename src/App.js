import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Chat from "./pages/chat";
import PropertiesPage from "./pages/properties";
import FavoritesPage from "./pages/favorites";
import InfoPage from "./pages/info";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/properties" element={<PropertiesPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/listing" element={<InfoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
