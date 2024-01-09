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
import Slider from "./Slider";
import Footer from "./Footer";

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
        "https://bookcover4u.com/pro/Fantasy-3D-book-cover-design-heart-illustration-valentine-book-covers-with-hearts-sparkle-vintage-fantasy-romantic-chain-moon-rose-curtain-drape-blue-N1553578257B.jpg",
    },
  ];

  return (
    <Box>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        height="100vh"
      >
        {/* First Box to the left - Title and Description of website*/}
        <Box width={800} padding={6} textAlign="left">
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
            fontSize="1.5rem"
            fontWeight={"450"}
            fontStyle={"italic"}
          >
            Welcome to SmartBookSwap – Your Smarter Way to Access Essential
            Educational Resources!{" "}
          </Typography>
          <Typography fontSize="1.3rem" marginBottom="2rem">
            Say goodbye to the hassle of traditional bookshops and brokers –
            here, you can easily Buy, Sell, or Donate essential study materials
            at affordable rates from your peers or nearby sellers.
          </Typography>
          <Button variant="contained" color="primary">
            Know More
          </Button>
        </Box>

        {/* Second Box to the right - Search Form */}
        <Box
          width={400}
          height={350}
          padding={3}
          border="1px solid #ccc"
          borderRadius={3}
          boxShadow={2}
          marginRight={6}
        >
          <Typography variant="h6" gutterBottom>
            Search Books Here!
          </Typography>
          <TextField
            label="Title"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel id="category-label">Category</InputLabel>
            <Select labelId="category-label" label="Category">
              <MenuItem value="medical">Medical</MenuItem>
              <MenuItem value="school">School</MenuItem>
              <MenuItem value="engineering">Engineering</MenuItem>
              <MenuItem value="science&arts">Science & Arts</MenuItem>
              <MenuItem value="internatinalExams">Internatinal Exams</MenuItem>
              <MenuItem value="hsc">Higher Secondary Education</MenuItem>
              <MenuItem value="ssc">Seconadry School</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Location"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "16px" }}
          >
            Search
          </Button>
        </Box>
      </Box>

      {/* Slider */}
      <Slider />

      {/* Cards for Books */}
      <Box marginTop={15}>
        <Typography
          marginLeft="20px"
          variant="h4"
          fontWeight="bold"
          gutterBottom
        >
          Your Gateway to Knowledge: Featured Books Await!
        </Typography>
        <Box
          margin={"auto"}
          display="flex"
          flexWrap="wrap"
          justifyContent="space-evenly"
          padding={"13px"}
        >
          {books &&
            books
              .slice(0, 10)
              .map((book, index) => (
                <BookItem
                  key={index}
                  image={book.image}
                  category={book.category}
                  name={book.name}
                  location={book.location}
                  price={book.price}
                  type={book.type}
                />
              ))}
        </Box>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default IndexPage;
