import { combineReducers } from "redux";
import { fetchCharactersReducer } from "./sitcomeCharactersReducer";
import { selectedCharacterReducer } from "./sitcomeCharactersReducer";
import { bookTitleReducer } from "./bookTitleReducer";
export default combineReducers({
  sitcomeCharacters: fetchCharactersReducer,
  selectedCharacter: selectedCharacterReducer,
  bookTitle: bookTitleReducer,
});
