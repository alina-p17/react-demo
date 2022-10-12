import { useEffect } from "react";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { connect } from "react-redux";
import { fetchCharacters } from "../actions";
import { Link } from "react-router-dom";
import { selectCharacter } from "../actions";

const RickAndMorty = (props) => {
  useEffect(() => {
    props.fetchCharacters();
  }, []);

  return (
    <div>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography
          variant="h4"
          component="h3"
          sx={{ textAlign: "center", marginBottom: "70px", marginTop: "30px" }}
        >
          For All Rick & Morty Fans - a List of Their Favorite Sitcome
          Characters
        </Typography>

        <Grid container spacing={8} sx={{ padding: "0 80px 50px" }}>
          {props.sitcomeCharacters.map((character, index) => {
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
                    <Link
                      to={`/rick&morty/${index}`}
                      onClick={() => {
                        props.selectCharacter(character);
                      }}
                      style={{ color: " #175799" }}
                    >
                      Learn More
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { sitcomeCharacters: state.sitcomeCharacters };
};

export default connect(mapStateToProps, { fetchCharacters, selectCharacter })(
  RickAndMorty
);
