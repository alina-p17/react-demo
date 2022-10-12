import React, { useRef } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { connect } from "react-redux";
import { inputBookTitle } from "../actions";

const BookRecomendations = (props) => {
  const ref = useRef();

  const handleTextFieldChange = (event) => {
    event.preventDefault();
    props.inputBookTitle(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const userInput = document.createElement("p");
    userInput.innerHTML = `&#x2022; ${props.bookTitle}`;
    ref.current.appendChild(userInput);
  };

  return (
    <Container
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="h2" component="h2" mb={6} mt={5}>
        Recommend Me a Book
      </Typography>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginBottom: "40px" }}
      >
        <TextField
          label="Book title"
          variant="filled"
          onChange={handleTextFieldChange}
        />
        <Button
          variant="contained"
          onClick={submitHandler}
          sx={{ marginLeft: "40px" }}
        >
          Submit
        </Button>
      </Box>
      <Box>
        <Typography variant="h4" component="p">
          Your recommendation:
        </Typography>
        <Typography
          ref={ref}
          variant="h6"
          component="p"
          sx={{ fontStyle: "italic" }}
        ></Typography>
      </Box>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    bookTitle: state.bookTitle,
  };
};
export default connect(mapStateToProps, { inputBookTitle })(BookRecomendations);
