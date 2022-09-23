import { Book } from "./Book";

const books = [
  { title: "The Girl With the Dragon Tattoo", description: "lorem ipsum" },
  { title: "Atomic Habits", description: "lorem ipsum " },
  { title: "The Secret Life", description: "lorem ipsum " },
  { title: "All the Light We Cannot See", description: "lorem ipsum " },
  { title: "The Kite Runner", description: "lorem ipsum " },
];

export const Books = () => {
  return (
    <div>
      <h1>This is Maria's top 5 books to read in 2022</h1>
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
