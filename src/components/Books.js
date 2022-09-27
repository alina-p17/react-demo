import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Book } from "./Book";

const books = [
  {
    title: "The Girl With the Dragon Tattoo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://images.penguinrandomhouse.com/cover/9780307950635",
    rating: 4.5,
    reviews: 1023,
  },
  {
    title: "Atomic Habits",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://cdn.dc5.ro/img-prod/186099920-0.jpeg",
    rating: 4.5,
    reviews: 223,
  },
  {
    title: "The Secret Life",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://images-na.ssl-images-amazon.com/images/I/71a9mbyTyWL.jpg",
    rating: 3.5,
    reviews: 453,
  },
  {
    title: "Verity",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://images-na.ssl-images-amazon.com/images/I/91SukbcXCpL.jpg",
    rating: 4.5,
    reviews: 456,
  },
  {
    title: "The Kite Runner",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image:
      "https://litvox.com/wp-content/uploads/2021/08/Khaled-Hosseini-The-Kite-Runner.jpg",
    rating: 4.6,
    reviews: 654,
  },
];

export const Books = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h2" component="h1" mb={3} mt={2}>
        Top 5 Books to Read in 2022
      </Typography>
      {books.map((book) => {
        return (
          <Book
            title={book.title}
            description={book.description}
            image={book.image}
            reviews={book.reviews}
            rating={book.rating}
            key={book.title}
          ></Book>
        );
      })}
    </Container>
  );
};
