import sitcomeCharacters from "../apis/sitcomeCharacters";

const fetchCharacters = () => async (dispatch) => {
  const response = await sitcomeCharacters.get("/character");
  dispatch({ type: "FETCH_CHARACTERS", payload: response.data.results });
};

const selectCharacter = (character) => {
  return {
    type: "CHARACTER_SELECTED",
    payload: character,
  };
};

const inputBookTitle = (bookTitle) => {
  return {
    type: "INPUT_BOOK_TITLE",
    payload: bookTitle,
  };
};

export { fetchCharacters, selectCharacter, inputBookTitle };
