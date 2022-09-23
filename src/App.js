import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Books } from "./components/Books";
import { BookRecomendations } from "./components/BookRecommendations";
import { ApiCall } from "./components/ApiCall";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Books />} />
        <Route
          path="book-recommendations"
          element={<BookRecomendations />}
        ></Route>
        <Route path="api-call" element={<ApiCall />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
