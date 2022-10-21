import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Books } from "./components/Books";
import BookRecomendations from "./components/BookRecommendations";
import RickAndMorty from "./components/RickAndMorty";
import DrawerAppBar from "./components/AppBar/AppBar";
import RickAndMortyDetail from "./components/RickAndMortyDetail";
import ContactForm from "./components/ContactPageForm";
import ContactPage from "./components/ContactPage";

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
        <Route path="rick&morty" exact element={<RickAndMorty />}></Route>
        <Route path="rick&morty/:id" element={<RickAndMortyDetail />}></Route>
        <Route path="contact" element={<ContactPage />}></Route>
        <Route
          path="*"
          element={<h1 style={{ textAlign: "center" }}>404 NOT FOUND!</h1>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
