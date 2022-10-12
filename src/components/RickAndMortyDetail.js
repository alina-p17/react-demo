import { React } from "react";
import { connect } from "react-redux";
import { Card, CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const RickAndMortyDetail = (props) => {
  if (!props.selectedCharacter) {
    return (
      <div style={{ textAlign: "center" }}>
        <Link to="/rick&morty" style={{ color: "black" }}>
          Click here to select a character
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Card sx={{ width: "500px", margin: "0 auto" }}>
        <CardMedia
          component="img"
          height="500"
          image={props.selectedCharacter.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Name: {props.selectedCharacter.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Status: {props.selectedCharacter.status}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Species: {props.selectedCharacter.species}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Gender: {props.selectedCharacter.gender}
          </Typography>
        </CardContent>
        <Button color="primary" style={{ margin: "0 0 20px 20px" }}>
          <Link to="/rick&morty" style={{ color: "black", margin: "8px" }}>
            Go Back
          </Link>
        </Button>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedCharacter: state.selectedCharacter,
  };
};

export default connect(mapStateToProps)(RickAndMortyDetail);
