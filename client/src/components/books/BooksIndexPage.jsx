import React from 'react'
import { Box, Grid } from "@mui/material";
import FilterComponent from './FilterCoponent';
import NavbarComponent from './NavbarComponent';
import BookCardComponent from './BookCardComponent';

export default function BooksIndexPage() {
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
    <div>
      <Box sx={{ flexGrow: 1, marginTop: "4rem" }}>
        <Grid container spacing={2}>
          <Grid position='fixed' item xs={3} height="100vh" sx={{ backgroundColor: "#dae6f5", overflow: 'inherit', }}>
            <FilterComponent />
          </Grid>

          <Grid item xs={12} sx={{ marginLeft: { xs: "1rem", sm: "2rem", md: "12rem" }, marginTop: '1rem', }}>
            <NavbarComponent />
            
            <Box
              margin={"auto"}
              display="flex"
              flexWrap="wrap"
              justifyContent="center"
              alignItems="center"
              padding={"13px"}
            >
              {books &&
                books.slice(1, 7).map((book, index) => (
                  <Box margin={"auto"} key={index} padding="10px">
                    <BookCardComponent
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
          </Grid>
        </Grid>
      </Box>
    </div>
  )
};
