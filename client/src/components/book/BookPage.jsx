import * as React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Grid } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import BookImages from "./BookImages";
import BookDetails from "./BookDetails";
import TagDetails from "./TagDetails";

const BookPage = () => {
  // for styling (mobile responsive)
  const isXS = useMediaQuery("(max-width:600px)");
  const isSM = useMediaQuery("(min-width:600px) and (max-width:959px)");
  const isMD = useMediaQuery("(min-width:960px)");

  // getting book ID from URL
  const { id } = useParams();

  // state variables
  const [book, setBook] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!id) {
      return;
    } else {
      axios
        .get(`/books/${id}`)
        .then((response) => {
          setBook(response.data.bookInfo);
          setUser(response.data.bookOwner);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }, [id]);

  return (
    <div style={{ background: "#f3f5f9" }}>
      <Box
        sx={{
          width: isMD ? "100%" : "auto",
          marginTop: isXS ? "3.5rem" : isSM ? "4rem" : "4rem",
          padding: isXS ? "0.8rem" : isSM ? "1rem" : "2rem",
        }}
      >
        <Grid container spacing={2}>
          {/* First Grid Item (xs=12 for small screens, xs=4 for larger screens) */}
          <Grid
            item
            xs={12}
            md={3.5}
            sx={{ position: "static", marginLeft: { xs: "0rem" } }}
          >
            {book && user && <BookImages book={book} />}
          </Grid>

          <Grid item xs={12} md={5} sx={{ padding: "1px", margin: "1px" }}>
            {book && user && <BookDetails book={book} />}
          </Grid>

          <Grid item xs={12} md={3} sx={{ padding: "0px" }}>
            {book && user && <TagDetails book={book} user={user} id={id} />}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default BookPage;