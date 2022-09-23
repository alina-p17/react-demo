import axios from "axios";
import { useEffect, useState } from "react";

export const ApiCall = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );

      setCharacters(response.data.results);
    })();
  }, []);

  return (
    <div>
      <h1>
        For all Rick & Morty fans - a list of their favorite sitcome characters
      </h1>

      {characters.map((character) => {
        return (
          <div
            key={character.id}
            style={{
              border: "1px solid green",
              marginBottom: "30px",
              width: "500px",
            }}
          >
            <h3>
              {character.id}: {character.name}
            </h3>
            <p>Gender: {character.gender}</p>
            <p>Species: {character.species}</p>
            <p>Status: {character.status}</p>
            <img src={character.image} />
          </div>
        );
      })}
    </div>
  );
};
