import React, { useState, useEffect } from 'react'
import { Box, Grid } from "@mui/material";
import FilterComponent from './FilterComponent';
import NavbarComponent from './NavbarComponent';
import BookCardComponent from './BookCardComponent';
import axios from 'axios';

export default function BooksIndexPage() {
  const [books, setBooks] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [subcategoryFilter, setSubcategoryFilter] = useState("");

  useEffect(() => {
    axios
      .get('/books')
      .then((response) => {
        setBooks(response.data);
      });
  }, []);

  return (
    <div style={{ background: "#f3f5f9"}}>
      <Box sx={{ flexGrow: 1, marginTop: "4rem", }}>
        <Grid container spacing={2}>
          <Grid position='fixed' item xs={3} height="100vh" sx={{ backgroundColor: "#dae6f5", overflow: 'inherit', }}>
            <FilterComponent 
              categoryFilter={categoryFilter} 
              setCategoryFilter={setCategoryFilter}
              subcategoryFilter={subcategoryFilter} 
              setSubcategoryFilter={setSubcategoryFilter}
            />
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
              {books.filter(book => 
                {
                  if (categoryFilter && subcategoryFilter) {
                    // Both category and subcategory are selected
                    return book.category === categoryFilter && book.subcategory === subcategoryFilter;
                  } else if (categoryFilter) {
                    // Only category is selected
                    return book.category === categoryFilter;
                  } else if (subcategoryFilter) {
                    // Only subcategory is selected
                    return book.subcategory === subcategoryFilter;
                  } else {
                    // No filters selected, return all books
                    return true;
                  }
                }
              ).map((book, index) => (
                <Box margin={"auto"} key={index} padding="10px">
                  <BookCardComponent
                    id={book._id}
                    owner={book.owner}
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