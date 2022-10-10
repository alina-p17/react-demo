import axios from "axios";
import { useEffect, useState } from "react";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const RickAndMorty = () => {
  const [characters, setCharacters] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(0);

  const handleOpen = (index) => {
    setSelectedPost(index);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );

      setCharacters(response.data.results);
    })();
  }, []);

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography
        variant="h4"
        component="h3"
        sx={{ textAlign: "center", marginBottom: "70px", marginTop: "30px" }}
      >
        For All Rick & Morty Fans - a List of Their Favorite Sitcome Characters
      </Typography>

      <Grid container spacing={8} sx={{ padding: "0 80px 50px" }}>
        {characters.map((character, index) => {
          return (
            <Grid item xs={6} sm={4} md={3} key={character.id}>
              <Card sx={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={character.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {character.name}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => {
                      handleOpen(index);
                    }}
                  >
                    Learn More
                  </Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    sx={{ backgroundColor: "#000000" }}
                  >
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        {characters[selectedPost].name}
                      </Typography>
                      <Box sx={{ display: "flex" }} mt={3}>
                        <Box mr={10}>
                          <Typography
                            id="modal-modal-description"
                            sx={{ mt: 2 }}
                          >
                            Gender: {characters[selectedPost].gender}
                          </Typography>
                          <Typography
                            id="modal-modal-description"
                            sx={{ mt: 2 }}
                          >
                            Species: {characters[selectedPost].species}
                          </Typography>
                          <Typography
                            id="modal-modal-description"
                            sx={{ mt: 2 }}
                          >
                            Status: {characters[selectedPost].status}
                          </Typography>
                        </Box>

                        <img src={characters[selectedPost].image} width={200} />
                      </Box>
                    </Box>
                  </Modal>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
