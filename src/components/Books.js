import { Book } from "./Book";

const books = [
  {
    title: "The Girl With the Dragon Tattoo",
    description: "Lorem ipsum ",
  },
  {
    title: "Atomic Habits",
    description: "Lorem ipsum",
  },
  {
    title: "The Secret Life",
    description: "Lorem ipsum  ",
  },
  {
    title: "All the Light We Cannot See",
    description: "Lorem ipsum ",
  },
  {
    title: "The Kite Runner",
    description: "Lorem ipsum ",
  },
];

export const Books = () => {
  return (
    <div>
      <h1> Top 5 books to read in 2022</h1>
      {books.map((book) => {
        return (
          <Book
            title={book.title}
            description={book.description}
            key={book.title}
          ></Book>
        );
      })}
    </div>
  );
};
