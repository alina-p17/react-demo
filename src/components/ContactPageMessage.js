import { React } from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";

const ContactPageMessage = (props) => {
  const capitalizedFirstName =
    props.firstName.charAt(0).toUpperCase() +
    props.firstName.toLowerCase().slice(1);
  return (
    <Container sx={{ marginTop: "100px" }}>
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        {capitalizedFirstName}, thank you for your message!
      </Typography>
      <Typography
        variant="h5"
        component="h3"
        sx={{ textAlign: "center", marginTop: "20px" }}
      >
        Please, click
        <Link
          to="/"
          style={{
            color: " #175799",
            margin: "6px 6px",
            fontSize: "20px",
          }}
        >
          here
        </Link>
        to return to the main page
      </Typography>
    </Container>
  );
};

export default ContactPageMessage;
