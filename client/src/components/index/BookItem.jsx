import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const BookItem = ({ image, category, name, location, price, type }) => {
  return (
    <Card
      sx={{
        margin: 2,
        width: 260,
        height: 360,
        borderRadius: 5,
        ":hover": {
          boxShadow: "10px 10px 20px #ccc",
        },
        position: "relative",
      }}
    >
      <img height={"50%"} width={"100%"} src={image} alt={name} />
      <CardContent>
        <Box
          sx={{
            borderRadius: "9px",
            padding: "5px 10px",
            fontSize: 12,
            textTransform: "uppercase",
            color: "#fff",
            backgroundColor: "#1976d2",
            borderColor: "#1976d2",
            position: "absolute",
            top: "12rem",
            left: 12,
          }}
        >
          {category}
        </Box>
        <Typography
          sx={{ marginTop: "16px" }}
          fontWeight="bold"
          variant="subtitle1"
          gutterBottom
        >
          {name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginBottom: "8px",
          }}
        >
          <LocationOnIcon sx={{ marginRight: "4px", color: "#1976d2" }} />
          <Typography variant="body2" color="textSecondary">
            {location}
          </Typography>
        </Box>
        <Typography variant="body2" color="textSecondary">
          {`Rs. ${price}`} {type && `(${type})`}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          position: "absolute",
          bottom: 0,
          left: "85%",
          transform: "translateX(-50%)",
          width: "100%",
          margin: 1,
        }}
      >
        <Button
          sx={{
            backgroundColor: "#1976d2",
            color: "white",
            ":hover": {
              backgroundColor: "#2258ae",
            },
          }}
          component={Link}
          to={`/`}
          size="small"
        >
          Book
        </Button>
      </CardActions>
    </Card>
  );
};

export default BookItem;
