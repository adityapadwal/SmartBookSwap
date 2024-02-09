import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Typography,
} from "@mui/material";
import BookItem from "./BookItem";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import { useTheme, useMediaQuery } from "@mui/material";

const IndexPage = () => {
  const books = [
    {
      category: "Medical",
      name: "Book Title",
      location: "Pune",
      price: "200",
      image:
        "https://d1ysvut1l4lkly.cloudfront.net/B092HQ3WFN/13/image-0-0.jpg",
      type: "fixed",
    },
    {
      category: "Engineering",
      name: "Book Title",
      location: "Pune",
      price: "300",
      type: "fixed",
      image:
        "https://bookcover4u.com/pro/Fantasy-3D-book-cover-design-heart-illustration-valentine-book-covers-with-hearts-sparkle-vintage-fantasy-romantic-chain-moon-rose-curtain-drape-blue-N1553578257B.jpg",
    },
    {
      category: "Engineering",
      name: "Book Title",
      location: "Pune",
      price: "300",
      type: "fixed",
      image:
        "https://d1ysvut1l4lkly.cloudfront.net/B092HQ3WFN/13/image-0-0.jpg",
    },
    {
      category: "Engineering",
      name: "Book Title",
      location: "Pune",
      price: "300",
      type: "fixed",
      image:
        "https://bookcover4u.com/pro/Fantasy-3D-book-cover-design-heart-illustration-valentine-book-covers-with-hearts-sparkle-vintage-fantasy-romantic-chain-moon-rose-curtain-drape-blue-N1553578257B.jpg",
    },
    {
      category: "Engineering",
      name: "Book Title",
      location: "Pune",
      price: "300",
      type: "fixed",
      image:
        "https://d1ysvut1l4lkly.cloudfront.net/B092HQ3WFN/13/image-0-0.jpg",
    },
    {
      category: "Engineering",
      name: "Book Title",
      location: "Pune",
      price: "300",
      type: "fixed",
      image:
        "https://bookcover4u.com/pro/Fantasy-3D-book-cover-design-heart-illustration-valentine-book-covers-with-hearts-sparkle-vintage-fantasy-romantic-chain-moon-rose-curtain-drape-blue-N1553578257B.jpg",
    },
    {
      category: "Engineering",
      name: "Book Title",
      location: "Pune",
      price: "300",
      type: "fixed",
      image:
        "https://d1ysvut1l4lkly.cloudfront.net/B092HQ3WFN/13/image-0-0.jpg",
    },
    {
      category: "Engineering",
      name: "Book Title",
      location: "Pune",
      price: "300",
      type: "fixed",
      image:
        "https://bookcover4u.com/pro/Fantasy-3D-book-cover-design-heart-illustration-valentine-book-covers-with-hearts-sparkle-vintage-fantasy-romantic-chain-moon-rose-curtain-drape-blue-N1553578257B.jpg",
    },
    {
      category: "Engineering",
      name: "Book Title",
      location: "Pune",
      price: "300",
      type: "fixed",
      image:
        "https://d1ysvut1l4lkly.cloudfront.net/B092HQ3WFN/13/image-0-0.jpg",
    },
    {
      category: "Engineering",
      name: "Book Title",
      location: "Pune",
      price: "300",
      type: "fixed",
      image:
        "https://bookcover4u.com/pro/Fantasy-3D-book-cover-design-heart-illustration-valentine-book-covers-with-hearts-sparkle-vintage-fantasy-romantic-chain-moon-rose-curtain-drape-blue-N1553578257B.jpg",
    },
    {
      category: "Engineering",
      name: "Book Title",
      location: "Pune",
      price: "300",
      type: "fixed",
      image:
        "https://d1ysvut1l4lkly.cloudfront.net/B092HQ3WFN/13/image-0-0.jpg",
    },
  ];

  // Initialize state for selected category
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <Box sx={{ background: "#deeafe", paddingTop: "2px" }}>
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "column", md: "row" }}
        alignItems={{ xs: "center", sm: "center", md: "center" }}
        justifyContent={{
          xs: "center",
          sm: "center",
          md: "space-between",
        }}
        height={{ xs: "auto", sm: "auto", md: "auto" }}
        padding={5}
        boxShadow={2}
        borderRadius={3}
        margin={8.5}
        marginTop={14.5}
        backgroundColor="#ffffff"
      >
        {/* Left Box - Title and Description */}
        <Box
          width={{ xs: "100%", sm: "100%", md: "50%" }}
          textAlign="left"
          marginTop={{ xs: 0, md: 0 }}
          marginRight={{ xs: 0, md: "2rem" }}
        >
          <Typography
            variant="h4"
            gutterBottom
            fontWeight="bold"
            marginBottom="2rem"
          >
            Affordable Learning, Sustainable Living!
          </Typography>
          <Typography
            paragraph
            fontWeight={450}
            fontStyle="italic"
            marginBottom="2rem"
          >
            Welcome to SmartBookSwap – Your Smarter Way to Access Essential
            Educational Resources!
          </Typography>
          <Typography marginBottom="2rem">
            Say goodbye to the hassle of traditional bookshops and brokers –
            here, you can easily Buy, Sell, or Donate essential study materials
            at affordable rates from your peers or nearby sellers.
          </Typography>
          <Button component={Link} to={`/`} variant="contained" color="primary">
            Know More
          </Button>
        </Box>

        {/* Right Box - Search Form */}
        <Box
          width={{ xs: "90%", sm: "92%", md: "30%" }}
          height={{ xs: "auto", sm: "auto", md: "350px" }}
          padding={3}
          border="1px solid #ccc"
          borderRadius={3}
          boxShadow={2}
          marginBottom={{ xs: "16px", sm: "16px", md: 0 }}
          // Remove margin property
        >
          <Typography variant="h6" gutterBottom>
            Search Books Here!
          </Typography>
          <TextField
            label="Title"
            sx={{ width: "100%" }}
            margin="normal"
            variant="outlined"
          />
          <FormControl
            sx={{ width: "100%" }}
            variant="outlined"
            margin="normal"
          >
            <InputLabel id="category-label">Category</InputLabel>
            <Select
              labelId="category-label"
              label="Category"
              value={selectedCategory}
              onChange={(event) => setSelectedCategory(event.target.value)}
            >
              {/* Your MenuItem options */}
            </Select>
          </FormControl>

          <TextField
            label="Location"
            sx={{ width: "100%" }}
            margin="normal"
            variant="outlined"
          />
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "16px", width: "100%" }}
            component={Link}
            to={`/`}
          >
            Search
          </Button>
        </Box>
      </Box>

      {/* Cards for Books */}
      <Box>
        <Typography
          marginLeft="35px"
          variant="h4"
          fontWeight="bold"
          gutterBottom
          textAlign="center"
          sx={{
            fontSize: {
              xs: "20px",
              sm: "22px",
              md: "22px",
              lg: "30px",
            },
          }}
        >
          Your Gateway to Knowledge: Featured Books Await!
        </Typography>
        <Box
          margin={"auto"}
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          padding={"13px"}
        >
          {books &&
            books.slice(0, 8).map((book, index) => (
              <Box margin={"auto"} key={index} padding="10px">
                <BookItem
                  image={book.image}
                  category={book.category}
                  name={book.name}
                  location={book.location}
                  price={book.price}
                  type={book.type}
                />
              </Box>
            ))}
        </Box>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default IndexPage;
