import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import Sidebar from "../profileComponents/Sidebar";
import BookCardComponent from "../books/BookCardComponent";
import axios from "axios";

const ListedBooksPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("/getAllListedBooks").then((response) => {
      setBooks(response.data);
    });
  }, []);

  return (
    <div>
      <Box sx={{ flexGrow: 1, marginTop: "4rem" }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={2}
            height="100vh"
            sx={{
              position: "fixed",
              backgroundColor: "#dae6f5",
              overflow: "inherit",
            }}
          >
            <Sidebar />
          </Grid>
          <Grid
            item
            xs={10}
            sx={{
              marginLeft: { xs: "1rem", sm: "2rem", md: "14rem" },
              marginTop: "1rem",
              height: "100vh",
            }}
          >
            {/* Cards */}
            <Box
              margin={"auto"}
              display="flex"
              flexWrap="wrap"
              justifyContent="center"
              alignItems="center"
              padding={"13px"}
            >
              {books.length === 0 ? (
                <Typography
                  variant="h6"
                  sx={{ fontSize: { xs: "15px", sm: "20px", md: "25px" } }}
                >
                  Oops! Couldn't find any book!
                </Typography>
              ) : (
                books.map((book, index) => (
                  <Box margin={"auto"} key={index} padding="10px">
                    <BookCardComponent
                      id={book._id}
                      owner={book.owner}
                      image={book.photos[0]}
                      category={book.category}
                      subcategory={book.subcategory}
                      title={book.title}
                      publication={book.publicationOrAuthor}
                      price={book.mrp}
                      priceType={book.priceType}
                    />
                  </Box>
                ))
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default ListedBooksPage;
