import "./App.css";
import { Books } from "./components/Books";
import { BookRecomendations } from "./components/BookRecommendations";
import { ApiCall } from "./components/ApiCall";

function App() {
  return (
    <div>
      <Books></Books>
      <BookRecomendations></BookRecomendations>
      <ApiCall></ApiCall>
    </div>
  );
}

export default App;
