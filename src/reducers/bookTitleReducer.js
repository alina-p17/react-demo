export const bookTitleReducer = (state = "", action) => {
  if (action.type === "INPUT_BOOK_TITLE") {
    return action.payload;
  } else return state;
};
