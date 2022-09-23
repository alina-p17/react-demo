import React, { useState, useRef } from "react";

export const BookRecomendations = () => {
  const [bookRec, setBookRec] = useState("");

  const ref = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const userInput = document.createElement("p");
    userInput.innerHTML = bookRec;
    ref.current.appendChild(userInput);
  };

  return (
    <form onSubmit={submitHandler}>
      <label>Recommend me a book: </label>
      <input
        type="text"
        onChange={(event) => {
          setBookRec(event.target.value);
        }}
      ></input>
      <button type="submit">Submit</button>
      <h3>Your recommendation:</h3>
      <div ref={ref}></div>
    </form>
  );
};
