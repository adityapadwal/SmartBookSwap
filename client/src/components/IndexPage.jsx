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
        flexDirection={{ xs: "column", sm: "column", md: "row" }}
        alignItems={{ xs: "stretch", sm: "stretch", md: "center" }}
        justifyContent={{
          xs: "flex-start",
          sm: "flex-start",
          md: "space-between",
        }}
        height={{ xs: "auto", sm: "auto", md: "100vh" }}
        padding={5}
      >
        {/* Left Box */}
        <Box
          width={{ xs: "100%", sm: "100%", md: "50%" }}
          textAlign="left"
          marginTop={{ xs: "64px", md: 0 }}
        >
          {/* Adjust marginTop based on the height of your navbar */}
          <Typography
            variant="h4"
            gutterBottom
            fontWeight="bold"
            marginBottom="2rem"
            sx={{
              fontSize: {
                xs: "20px",
                sm: "22px",
                md: "22px",
                lg: "30px",
              },
            }}
          >
            Affordable Learning, Sustainable Living!
          </Typography>
          <Typography
            paragraph
            sx={{
              fontSize: {
                xs: "16px",
                sm: "18px",
                md: "18px",
                lg: "22px",
              },
            }}
            fontWeight={"450"}
            fontStyle={"italic"}
          >
            Welcome to SmartBookSwap – Your Smarter Way to Access Essential
            Educational Resources!
          </Typography>
          <Typography sx={{
              fontSize: {
                xs: "14px",
                sm: "16px",
                md: "16px",
                lg: "18px",
              },
            }} marginBottom="2rem">
            Say goodbye to the hassle of traditional bookshops and brokers –
            here, you can easily Buy, Sell, or Donate essential study materials
            at affordable rates from your peers or nearby sellers.
          </Typography>
          <Button variant="contained" color="primary">
            Know More
          </Button>
        </Box>

        {/* Right Box */}
        <Box
          width={{ xs: "90%", sm: "94%", md: "35%" }}
          height={{ xs: "auto", sm: "auto", md: "350px" }}
          padding={3}
          border="1px solid #ccc"
          borderRadius={3}
          boxShadow={2}
          marginTop={{ xs: "40px", sm: "40px", md: "0" }}
          marginBottom={{ xs: "16px", sm: "16px", md: 0 }}
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
              <MenuItem value="internatinalExams">International Exams</MenuItem>
              <MenuItem value="hsc">Higher Secondary Education</MenuItem>
              <MenuItem value="ssc">Secondary School</MenuItem>
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

      {/* Cards for Books */}
      <Box >
        <Typography
          marginLeft="40px"
          variant="h4"
          fontWeight="bold"
          gutterBottom
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
