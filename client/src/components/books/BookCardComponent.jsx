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


const BookCardComponent = ({ image, category, subcategory, title, publication, location, price, priceType }) => {
  return (
    <div>
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
        {/* Image */}
        <img height={"50%"} width={"100%"} src={image} alt={'No Image available'} />
        <CardContent>
          {/* Category */}
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

          {/* Subcategory */}
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
              right: 12,
            }}
          >
            {subcategory}
          </Box>

          {/* Book title */}
          <Typography
            sx={{ marginTop: "16px" }}
            fontWeight="bold"
            variant="subtitle1"
            gutterBottom
          >
            {(title.length > 25) ? title.slice(0, 23)+'...' : title}
          </Typography>

          {/* Book publication/author */}
          <Typography
            sx={{ marginTop: "16px" }}
            variant="subtitle"
            gutterBottom
          >
            {(publication.length > 25) ? publication.slice(0, 23)+'...' : publication}
          </Typography>

          {/* Location and Price */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="body2" color="textSecondary">
              {priceType ? `Rs. ${price} (${priceType})` : `(Free)`}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <LocationOnIcon sx={{ marginRight: "4px", color: "#1976d2" }} />
              <Typography variant="body2" color="textSecondary">
                {location}
              </Typography>
            </Box>

          </Box>

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
            Get Book
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default BookCardComponent
