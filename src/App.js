import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Books } from "./components/Books";
import { BookRecomendations } from "./components/BookRecommendations";
import { RickAndMorty } from "./components/RickAndMorty";
import DrawerAppBar from "./components/AppBar/AppBar";

function App() {
  return (
    <BrowserRouter>
      <DrawerAppBar />
      <Routes>
        <Route index element={<Books />} />
        <Route
          path="book-recommendations"
          element={<BookRecomendations />}
        ></Route>
        <Route path="rick&morty" element={<RickAndMorty />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
