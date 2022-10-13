import { React, useEffect } from "react";
import { connect } from "react-redux";
import { Card, CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { fetchCharacters } from "../actions";

const RickAndMortyDetail = (props) => {
  let { id } = useParams();
  let character;

  useEffect(() => {
    props.fetchCharacters();
  }, []);

  const characterDetailRenderer = (character) => {
    return (
      <Card sx={{ width: "500px", margin: "0 auto" }}>
        <CardMedia component="img" height="500" image={character.image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Name: {character.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Status: {character.status}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Species: {character.species}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Gender: {character.gender}
          </Typography>
        </CardContent>
        <Button color="primary" style={{ margin: "0 0 20px 20px" }}>
          <Link to="/rick&morty" style={{ color: "black", margin: "8px" }}>
            Go Back
          </Link>
        </Button>
      </Card>
    );
  };

  if (id && props.sitcomeCharacters.length) {
    character = props.sitcomeCharacters[id];
  } else if (props.selectedCharacter) {
    character = props.selectedCharacter;
  } else return null;

  return <div>{characterDetailRenderer(character)}</div>;
};

const mapStateToProps = (state) => {
  return {
    selectedCharacter: state.selectedCharacter,
    sitcomeCharacters: state.sitcomeCharacters,
  };
};

export default connect(mapStateToProps, { fetchCharacters })(
  RickAndMortyDetail
);
