import React, { useEffect, useState } from "react";
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
import axios from "axios";

const BookCardComponent = ({
  id,
  owner,
  image,
  category,
  subcategory,
  title,
  publication,
  location,
  price,
  priceType,
}) => {
  // console.log(owner);
  const [user, setUser] = useState({});

  // fetching user data
  useEffect(() => {
    if (owner) {
      axios
        .get(`/profile/${owner}`)
        .then((response) => {
          setUser(response.data);
          // console.log("User data:", response.data);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [owner]);

  // console.log("usestate user data: ", user);
  // console.log(user.user.address);

  return (
    <div>
      <Card
        sx={{
          margin: 1.5,
          width: 282,
          height: 400,
          borderRadius: 5,
          ":hover": {
            boxShadow: "10px 10px 20px #ccc",
          },
          position: "relative",
        }}
      >
        {/* Image */}
        <img
          height={"50%"}
          width={"100%"}
          src={image}
          alt={"No Image available"}
        />
        <CardContent>
          {/* Category */}
          <Box
            sx={{
              borderRadius: "8px",
              padding: "5px 5px",
              fontSize: 10,
              textTransform: "uppercase",
              color: "#fff",
              backgroundColor: "#1976d2",
              borderColor: "#1976d2",
              position: "absolute",
              top: "13rem",
              left: 12,
            }}
          >
            {category}
          </Box>

          {/* Subcategory */}
          <Box
            sx={{
              borderRadius: "8px",
              padding: "5px 5px",
              fontSize: 10,
              textTransform: "uppercase",
              color: "#fff",
              backgroundColor: "#1976d2",
              borderColor: "#1976d2",
              position: "absolute",
              top: "13rem",
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
            {title.length > 27 ? title.slice(0, 25) + "..." : title}
          </Typography>

          {/* Book publication/author */}
          <Typography
            sx={{ marginTop: "16px" }}
            variant="subtitle"
            gutterBottom
          >
            {publication.length > 25
              ? publication.slice(0, 23) + "..."
              : publication}
          </Typography>

          {/* Location and Price */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "8px", // Move location to new line
            }}
          >
            <Typography variant="body2" color="textSecondary">
              {priceType ? `Rs. ${price} (${priceType})` : "(Free)"}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", marginTop: "5px" }}>
            <LocationOnIcon sx={{ marginRight: "4px", color: "#1976d2" }} />
            {user.user && user.user.address ? (
              <Typography variant="body2" color="textSecondary">
                {user.user.address}
              </Typography>
            ) : (
              <Typography variant="body2" color="textSecondary">
                Address not available
              </Typography>
            )}
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
  );
};

export default BookCardComponent;
