import React, { useContext } from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import { BookDetailsContext } from "../context/BookDetailsContext";

export default function SellPage2({ activeStep }) {
  // context variables
  const {
    publicationOrAuthor, setPublicationOrAuthor,
    editionYear, setEditionYear,
    typeOfBook, setTypeOfBook,
    transactionType, setTransactionType,
    condition, setCondition,
    setCoverImage,
    priceType, setPriceType,
    mrp, setMrp,
    description, setDescription,
    setNextButtonDisabled,
  } = useContext(BookDetailsContext);

  // Handle Publication/Author change
  const handlePublicationOrAuthorChange = (e) => {
    const publicationOrAuthor = e.target.value;
    setPublicationOrAuthor(publicationOrAuthor);
    // Activate next button of 2nd page when (publicationOrAuthor, typeOfBook, transactionType, condition) fields are not empty
    setNextButtonDisabled(
      !(publicationOrAuthor && typeOfBook && transactionType && condition)
    );
  };

  // Handle Edition Year change
  const handleEditionYearChange = (e) => {
    const editionYear = (e.target.value);

    setEditionYear(editionYear);
  };

  // Handle Type of Book change
  const handleTypeOfBookChange = (e) => {
    const typeOfBook = e.target.value;
    setTypeOfBook(typeOfBook);
    setNextButtonDisabled(
      !(publicationOrAuthor && typeOfBook && transactionType && condition)
    );
  };

  // Handle Transaction Type change
  const handleTransactionTypeChange = (e) => {
    const transactionType = e.target.value;
    setTransactionType(transactionType);
    setNextButtonDisabled(
      !(publicationOrAuthor && typeOfBook && transactionType && condition)
    );
  };

  // Handle Condition change
  const handleConditionChange = (e) => {
    const condition = e.target.value;
    setCondition(condition);
    setNextButtonDisabled(
      !(publicationOrAuthor && typeOfBook && transactionType && condition)
    );
  };

  // Handle Cover image change
  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    setCoverImage(file);
    setNextButtonDisabled(
      !(publicationOrAuthor && typeOfBook && transactionType && condition)
    );
  };

  // Handle Price change
  const handlePriceTypeChange = (e) => {
    const priceType = e.target.value;
    setPriceType(priceType);
  };

  // Handle Mrp cahnge
  const handleMrpChange = (e) => {
    const mrp = e.target.value;
    setMrp(mrp);
  };

  // Handle Description change
  const handleDescriptionChange = (e) => {
    const description = e.target.value;
    setDescription(description);
  };

  return (
    <div>
      {activeStep === 1 && (
        <Box>
          {/* Form 2 Fields */}
          <TextField
            sx={{ width: "100%" }}
            label="Publication/Author Name"
            margin="normal"
            required
            variant="outlined"
            value={publicationOrAuthor}
            onChange={handlePublicationOrAuthorChange}
          />
          <Grid marginBottom={3} container spacing={{ xs: 2, md: 10 }}>
            <Grid item xs={12} md={6}>
            <TextField
                sx={{ width: "100%" }}
                label="Edition (Year)"
                type="number"
                margin="normal"
                variant="outlined"
                value={editionYear}
                onChange={handleEditionYearChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl
                sx={{ width: "100%" }}
                variant="outlined"
                margin="normal"
              >
                <InputLabel required id="book-type-label">
                  Type of Book
                </InputLabel>
                <Select
                  value={typeOfBook}
                  onChange={handleTypeOfBookChange}
                  labelId="book-type-label"
                  label="Type of Book"
                >
                  <MenuItem value="Reference Book">Reference Book</MenuItem>
                  <MenuItem value="Textbook">Textbook</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={{ xs: 2, md: 10 }}>
            <Grid item xs={12} md={6}>
              <FormControl component="fieldset" margin="normal" required>
                <FormLabel component="legend">Type of Transaction</FormLabel>
                <RadioGroup
                  value={transactionType}
                  onChange={handleTransactionTypeChange}
                  row
                >
                  <FormControlLabel
                    value="Sell"
                    control={<Radio />}
                    label="Sell"
                  />
                  <FormControlLabel
                    value="Free"
                    control={<Radio />}
                    label="Free"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={6}>
              <FormControl component="fieldset" margin="normal" required>
                <FormLabel component="legend">Condition</FormLabel>
                <RadioGroup
                  value={condition}
                  onChange={handleConditionChange}
                  row
                >
                  <FormControlLabel
                    value="New"
                    control={<Radio />}
                    label="New"
                  />
                  <FormControlLabel
                    value="Used"
                    control={<Radio />}
                    label="Used"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
          <FormControl sx={{ width: "100%" }}>
            <FormLabel>Click the box below to upload the cover page!</FormLabel>
            <TextField
              sx={{ width: "100%" }}
              label=""
              type="file"
              margin="normal"
              variant="outlined"
              onChange={handleCoverImageChange}
            />
          </FormControl>

          <Grid container spacing={{ xs: 2, md: 10 }} marginBottom={2}>
            <Grid item xs={12} md={6}>
              <FormControl
                sx={{ width: "100%" }}
                variant="outlined"
                margin="normal"
              >
                <InputLabel id="price-type">Price Type</InputLabel>
                <Select
                  value={priceType}
                  onChange={handlePriceTypeChange}
                  labelId="price-type"
                  label="Price Type"
                >
                  <MenuItem value="Fixed">Fixed</MenuItem>
                  <MenuItem value="Negotiable">Negotiable</MenuItem>
                  <MenuItem value="Price on call">Price on call</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                value={mrp}
                onChange={handleMrpChange}
                sx={{ width: "100%" }}
                label="MRP (Rs.)"
                type="number"
                margin="normal"
                variant="outlined"
              />
            </Grid>
          </Grid>

          <FormControl>
            <FormLabel component="legend">Description of Book</FormLabel>
            <TextareaAutosize
              rowsmin={4}
              placeholder=""
              style={{
                height: "130px",
                marginTop: 10,
                marginBottom: 10,
              }}
              value={description}
              onChange={handleDescriptionChange}
              variant="outlined"
            />
          </FormControl>
        </Box>
      )}
    </div>
  );
}
