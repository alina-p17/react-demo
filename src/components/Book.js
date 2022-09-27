import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Rating from "@mui/material/Rating";

export const Book = ({ title, description, image, rating, reviews }) => {
  return (
    <Box
      sx={{
        "& > :not(style)": {
          m: 3,
          width: 900,
          height: 800,
        },
      }}
    >
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h3" mt={3} mb={2}>
          Title: {title}
        </Typography>
        <img src={image} width={350} />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "20px",
            marginBottom: "15px",
          }}
        >
          <Rating
            name="read-only"
            readOnly
            value={4.5}
            precision={0.5}
            size="small"
          />
          <Typography variant="paragraph" component="p" ml={0.5}>
            {rating}
          </Typography>
          <Typography variant="paragraph" component="p" ml={1.5}>
            ({reviews} reviews)
          </Typography>
        </Box>
        <Typography variant="h6" component="p" ml={3}>
          DESCRIPTION: {description}
        </Typography>
      </Paper>
    </Box>
  );
};
