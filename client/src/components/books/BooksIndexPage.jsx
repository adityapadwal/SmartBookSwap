import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import FilterComponent from "./FilterComponent";
import NavbarComponent from "./NavbarComponent";
import BookCardComponent from "./BookCardComponent";
import { useMediaQuery } from "@mui/material";
import axios from "axios";

export default function BooksIndexPage() {
  const isXS = useMediaQuery("(max-width:600px)");
  const isSM = useMediaQuery("(min-width:600px) and (max-width:959px)");
  const isMD = useMediaQuery("(min-width:960px)");

  const [books, setBooks] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [subcategoryFilter, setSubcategoryFilter] = useState("");
  const [sort, setSort] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get("/books").then((response) => {
      setBooks(response.data);
    });
  }, []);

  useEffect(() => {
    setSort(""); // Reset sort when category or subcategory changes
  }, [categoryFilter, subcategoryFilter]);

  const filteredBooks = books.filter((book) => {
    if (categoryFilter && subcategoryFilter && searchTerm) {
      // category, subcategory and search term are selected
      return (
        book.category === categoryFilter &&
        book.subcategory === subcategoryFilter &&
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else if (categoryFilter && subcategoryFilter) {
      // category and subcategory are selected
      return (
        book.category === categoryFilter &&
        book.subcategory === subcategoryFilter
      );
    } else if (categoryFilter && searchTerm) {
      // category and search term are selected
      return (
        book.category === categoryFilter &&
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else if (categoryFilter) {
      // Only category is selected
      return book.category === categoryFilter;
    } else if (subcategoryFilter && searchTerm) {
      // subcategory and search term are selected
      return (
        book.subcategory === subcategoryFilter &&
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else if (subcategoryFilter) {
      // Only subcategory is selected
      return book.subcategory === subcategoryFilter;
    } else if (searchTerm) {
      // Only search term is entered
      return book.title.toLowerCase().includes(searchTerm.toLowerCase());
    } else {
      // No filters selected and no search term, return all books
      return true;
    }
  });

  const sortedBooks = [...filteredBooks];

  if (sort === "asc") {
    sortedBooks.sort((a, b) => parseFloat(a.mrp) - parseFloat(b.mrp));
  } else if (sort === "desc") {
    sortedBooks.sort((a, b) => parseFloat(b.mrp) - parseFloat(a.mrp));
  }

  // console.log("Sort Value: ", sort);
  // console.log("Filtered Books: ", filteredBooks);

  return (
    <div style={{ background: "#f3f5f9" }}>
      <Box sx={{ flexGrow: 1, marginTop: "4rem" }}>
        <Grid container spacing={2}>
          {isMD && (
            <Grid
              position="fixed"
              item
              xs={3}
              width="18rem"
              height="100vh"
              sx={{ backgroundColor: "#dae6f5", overflow: "inherit" }}
            >
              <FilterComponent
                categoryFilter={categoryFilter}
                setCategoryFilter={(value) => {
                  setCategoryFilter(value);
                  // Reset subcategory when category changes
                  setSubcategoryFilter("");
                }}
                subcategoryFilter={subcategoryFilter}
                setSubcategoryFilter={setSubcategoryFilter}
              />
            </Grid>
          )}

          <Grid
            item
            xs={12}
            sx={{
              marginLeft: { xs: "1rem", sm: "2rem", md: "17rem" },
              marginTop: "1rem",
              height: "100vh",
            }}
          >
            {/* Search and Sort */}
            <Box>
              <Grid container spacing={9}>
                <Grid
                  item
                  xs={7}
                  md={10}
                  sx={{ transform: "scale(0.8)", marginLeft: "0rem" }}
                >
                  <TextField
                    id="standard-basic"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    label="🔎  Search"
                    variant="standard"
                    style={{ width: "90%" }}
                  />
                </Grid>

                <Grid item xs={1.3} sx={{ transform: "scale(0.8)" }}>
                  <FormControl
                    variant="standard"
                    sx={{ width: { xs: 70, md: 100 } }}
                  >
                    <InputLabel id="demo-simple-select-standard-label">
                      Sort by
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={sort}
                      onChange={(e) => setSort(e.target.value)}
                      label="sort"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="asc">Low to High</MenuItem>
                      <MenuItem value="desc">High to Low</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Box>

            {/* Cards */}
            <Box
              margin={"auto"}
              display="flex"
              flexWrap="wrap"
              justifyContent="center"
              alignItems="center"
              padding={"13px"}
            >
              {sortedBooks.length === 0 ? (
                <Typography
                  variant="h6"
                  sx={{ fontSize: { xs: "15px", sm: "20px", md: "25px" } }}
                >
                  Oops! Couldn't find any book!
                </Typography>
              ) : (
                sortedBooks.map((book, index) => (
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
                ))
              )}
            </Box>
          </Grid>
        </Grid>

        {/* Changed default classes style for the background of the div containing all book cards */}
        <style>{`
          .css-1obfa4e {
            background-color: #f3f5f9;
        }
        `}</style>
      </Box>
    </div>
  );
}
