import React, { useState, useContext } from "react";
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
import PhotosUploader from "./PhotosUploader";

export default function SellPage2({ activeStep }) {
  // context variables
  const {
    publicationOrAuthor,
    setPublicationOrAuthor,
    editionYear,
    setEditionYear,
    typeOfBook,
    setTypeOfBook,
    transactionType,
    setTransactionType,
    condition,
    setCondition,
    addedPhotos,
    setAddedPhotos,
    priceType,
    setPriceType,
    mrp,
    setMrp,
    description,
    setDescription,
    setNextButtonDisabled,
  } = useContext(BookDetailsContext);

  // state variables
  const [isFreeTransaction, setIsFreeTransaction] = useState(false);

  // Handle Publication/Author change
  const handlePublicationOrAuthorChange = (e) => {
    const publicationOrAuthor = e.target.value;
    setPublicationOrAuthor(publicationOrAuthor);
    // Activate next button of 2nd page when (publicationOrAuthor, typeOfBook, transactionType, condition) fields are not empty
    setNextButtonDisabled(
      !(
        publicationOrAuthor &&
        typeOfBook &&
        transactionType &&
        condition &&
        description
      )
    );
  };

  // Handle Edition Year change
  const handleEditionYearChange = (e) => {
    const editionYear = e.target.value;
    setEditionYear(editionYear);
    setNextButtonDisabled(
      !(
        publicationOrAuthor &&
        typeOfBook &&
        transactionType &&
        condition &&
        description
      )
    );
  };

  // Handle Type of Book change
  const handleTypeOfBookChange = (e) => {
    const typeOfBook = e.target.value;
    setTypeOfBook(typeOfBook);
    setNextButtonDisabled(
      !(
        publicationOrAuthor &&
        typeOfBook &&
        transactionType &&
        condition &&
        description
      )
    );
  };

  // Handle Transaction Type change
  const handleTransactionTypeChange = (e) => {
    const transactionType = e.target.value;
    setTransactionType(transactionType);

    // Set the state based on the selected transaction type
    setIsFreeTransaction(transactionType === "Free");

    setNextButtonDisabled(
      !(
        publicationOrAuthor &&
        typeOfBook &&
        transactionType &&
        condition &&
        description
      )
    );
  };

  // Handle Condition change
  const handleConditionChange = (e) => {
    const condition = e.target.value;
    setCondition(condition);
    setNextButtonDisabled(
      !(
        publicationOrAuthor &&
        typeOfBook &&
        transactionType &&
        condition &&
        description
      )
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
    setNextButtonDisabled(
      !(
        publicationOrAuthor &&
        typeOfBook &&
        transactionType &&
        condition &&
        description
      )
    );
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
                required
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
          <FormControl>
            <FormLabel>
              Click the box below to upload the images of your books!
            </FormLabel>
            <FormLabel>Upload at least 4 images</FormLabel>
            {/* Photos uploader component */}
            <PhotosUploader
              addedPhotos={addedPhotos}
              onChange={setAddedPhotos}
            />
          </FormControl>

          <Grid container spacing={{ xs: 2, md: 10 }} marginBottom={2}>
            <Grid item xs={12} md={6}>
              {/* Render Price Type field when not Free transaction */}
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
                  disabled={isFreeTransaction} // Disable when transaction type is Free
                >
                  <MenuItem value="Fixed">Fixed</MenuItem>
                  <MenuItem value="Negotiable">Negotiable</MenuItem>
                  <MenuItem value="Price on call">Price on call</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={6}>
              {/* Render MRP field when not Free transaction */}
              <TextField
                value={mrp}
                onChange={handleMrpChange}
                sx={{ width: "100%" }}
                label="MRP (Rs.)"
                type="number"
                margin="normal"
                variant="outlined"
                disabled={isFreeTransaction} // Disable when transaction type is Free
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
