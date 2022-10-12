export const fetchCharactersReducer = (state = [], action) => {
  if (action.type === "FETCH_CHARACTERS") {
    return action.payload;
  } else return state;
};

export const selectedCharacterReducer = (selectedCharacter = null, action) => {
  if (action.type === "CHARACTER_SELECTED") {
    return action.payload;
  }
  return selectedCharacter;
};
