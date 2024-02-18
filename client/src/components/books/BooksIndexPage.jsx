import React, { useState, useEffect } from 'react'
import { Box, Grid } from "@mui/material";
import FilterComponent from './FilterCoponent';
import NavbarComponent from './NavbarComponent';
import BookCardComponent from './BookCardComponent';
import axios from 'axios';

export default function BooksIndexPage() {

  // state variables
  const [books, setBooks] = useState([]);

  // fetching all the listed books
  useEffect(() => {
    axios
      .get('/books')
      .then((response) => {
        setBooks(response.data);
        console.log(response.data); // debugging...
      });
  }, []);

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
                books.map((book, index) => (
                  <Box margin={"auto"} key={index} padding="10px">
                    <BookCardComponent
                      image={book.photos[0]}
                      category={book.category}
                      subcategory={book.subcategory}
                      title={book.title}
                      publication={book.publicationOrAuthor}
                      location={book.location} 
                      price={book.mrp}
                      priceType={book.priceType}
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
