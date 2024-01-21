import React, { useState } from "react";
import {
  Box,
  Paper,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormLabel,
  Button,
  Typography,
  TextareaAutosize,
  Grid,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";

const steps = ["Step 1", "Step 2", "Step 3"];

const SellBookForm = () => {
  // state variables 
  const [activeStep, setActiveStep] = useState(0);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [subcategoryOptions, setSubcategoryOptions] = useState([]);
  const [publicationOrAuthor, setPublicationOrAuthor] = useState("");
  const [editionYear, setEditionYear] = useState(0);
  const [typeOfBook, setTypeOfBook] = useState("");
  const [transactionType, setTransactionType] = useState("");
  const [condition, setCondition] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [priceType, setPriceType] = useState("");
  const [mrp, setMrp] = useState(0);
  const [description, setDescription] = useState("");
  const [userName, setUserName] = useState("");
  const [mobileNo, setMobileNo] = useState(0);
  const [city, setCity] = useState("");
  const [isNextButtonDisabled, setNextButtonDisabled] = useState(true);

  const handleTitleChange = (e) => {
    const title = e.target.value;
    setTitle(title);
    // Enable the Next button if both category and title are not empty
    setNextButtonDisabled(!(title && category));  
  };

  // Set Subcategory options according to selected Category
  const handleCategoryChange = (e) => {              
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    // Enable the Next button if both category and title are not empty
    setNextButtonDisabled(!(title && selectedCategory));  
    switch (selectedCategory) {
      case "medical":
        setSubcategoryOptions(["MBBS", "Pharmacy", "Nursing", "Other"]);
        break;
      case "engineering":
        setSubcategoryOptions([
          "Computer",
          "E & TC",
          "Information Technology",
          "AIDS",
          "Electrical",
          "Civil",
          "Mechanical",
          "Instrumentation",
          "Other",
        ]);
        break;
      case "ssc":
        setSubcategoryOptions(["1 to 10th"]);
        break;
      case "hsc":
        setSubcategoryOptions(["Science", "Commerce", "Arts", "Other"]);
        break;
      case "competativeExams":
        setSubcategoryOptions([
          "Government Jobs",
          "Engineering",
          "Medical",
          "Management",
          "Finance & Accountancy",
          "Language Proficiency",
          "Architecture",
          "Education & Testing",
        ]);
        break;
      default:
        setSubcategoryOptions([]);
    }
  };

  // Handle Subcategory change
  const handleSubcategoryChange = (e) => {
    setSubcategory(e.target.value);
  };

  // Handle Publication/Author change
  const handlePublicationOrAuthorChange = (e) => {
    const publicationOrAuthor = e.target.value;
    setPublicationOrAuthor(publicationOrAuthor);
    // Activate next button of 2nd page when (publicationOrAuthor, typeOfBook, transactionType, condition) fields are not empty
    setNextButtonDisabled(!(publicationOrAuthor && typeOfBook && transactionType && condition));
  };

  // Handle Edition Year change
  const handleEditionYearChange = (e) => {
    const editionYear = Number(e.target.value);
    setEditionYear(editionYear);
  }

  // Handle Type of Book change
  const handleTypeOfBookChange = (e) => {
    const typeOfBook = e.target.value;
    setTypeOfBook(typeOfBook);
    setNextButtonDisabled(!(publicationOrAuthor && typeOfBook && transactionType && condition));
  };

  // Handle Transaction Type change 
  const handleTransactionTypeChange = (e) => {
    const transactionType = e.target.value;
    setTransactionType(transactionType);
    setNextButtonDisabled(!(publicationOrAuthor && typeOfBook && transactionType && condition));
  };

  // Handle Condition change
  const handleConditionChange = (e) => {
    const condition = e.target.value;
    setCondition(condition);
    setNextButtonDisabled(!(publicationOrAuthor && typeOfBook && transactionType && condition));
  };

  // Handle Cover image change
  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    setCoverImage(file);
    setNextButtonDisabled(!(publicationOrAuthor && typeOfBook && transactionType && condition));
  };

  // Handle Price change
  const handlePriceTypeChange = (e) => {
    const priceType = e.target.value;
    setPriceType(priceType);
  }

  // Handle Mrp cahnge
  const handleMrpChange = (e) => {
    const mrp = e.target.value; 
    setMrp(mrp);
  }

  // Handle Description change
  const handleDescriptionChange = (e) => {
    const description = e.target.value;
    setDescription(description);
  }

  // Handle User Name change
  const handleUserNameChange = (e) => {
    const userName = e.target.value;
    setUserName(userName);
    // Activate next button of 3rd page when (userName, mobileNo, city) fields are not empty
    setNextButtonDisabled(userName && mobileNo && city);
  }

  // Handle Mobile No. change
  const handleMobileNoChange = (e) => {
    const mobileNo = e.target.value;
    setMobileNo(mobileNo);
    setNextButtonDisabled(userName && mobileNo && city);
  }

  // Handle City change
  const handleCityChange = (e) => {
    const city = e.target.value;
    setCity(city);
    setNextButtonDisabled(userName && mobileNo && city);
  }

  // Back button function
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setNextButtonDisabled(false);
  };

  // When you click on the submit button it collect all the data
  const handleSubmit = () => {
    const formData = {
      title,
      category,
      subcategory,
      publicationOrAuthor,
      editionYear,
      typeOfBook,
      transactionType,
      condition,
      coverImage,
      priceType,
      mrp,
      description,
      userName,
      mobileNo,
      city,
    };

    console.log("Form Data:", formData);

    // Reset all the input field values to their empty state
    setTitle("");
    setCategory("");
    setSubcategory("");
    setPublicationOrAuthor("");
    setEditionYear(0);
    setTypeOfBook("");
    setTransactionType("");
    setCondition("");
    setCoverImage("");
    setPriceType("");
    setMrp(0);
    setDescription("");
    setUserName("");
    setMobileNo(0);
    setCity("");
    setActiveStep(0);
  };

  // Next button function
  const handleNext = () => {
    if(publicationOrAuthor && typeOfBook && transactionType && condition && title && category){
      setNextButtonDisabled(false);
    }
    else{
      setNextButtonDisabled(true);
    }
   
    let isValid = true;

    // Validation logic for required fields
    switch (activeStep) {
      case 0:
        isValid = title && category;
        break;
      case 1:
        isValid =
          publicationOrAuthor &&
          typeOfBook &&
          transactionType &&
          condition;
        break;
      case 2:
        isValid = userName && mobileNo && city;
        break;
      default:
        break;
    }

    if (isValid) {
      // Go to the next page
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      console.log("Please fill in all required fields before proceeding.");
    }
  };

  return (
    <Box
      sx={{
        padding: { xs: "5px", sm: "10px", md: "30px" },
        marginTop: "6rem",
      }}
    >
      <Box
        sx={{
          margin: "auto",
          border: "1px solid #ccc",
          borderRadius: 3,
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          width: { xs: "90%", sm: "80%", md: "70%" },
        }}
      >
        <Paper elevation={3} sx={{ padding: 5, borderRadius: 4 }}>
          <Stepper activeStep={activeStep} alternativeLabel sx={{ marginBottom: 2 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {activeStep === 0 && (
            <Box>
              {/* Form 1 Fields */}
              <TextField
                sx={{ width: "100%", marginBottom: 2 }}
                label="Title of Book"
                margin="normal"
                required
                variant="outlined"
                value={title}
                onChange={handleTitleChange}
              />
              <FormControl
                sx={{ width: "100%", marginBottom: 2 }}
                variant="outlined"
                margin="normal"
              >
                <InputLabel id="category-label" required>
                  Category
                </InputLabel>
                <Select
                  labelId="category-label"
                  label="Category"
                  value={category}
                  onChange={handleCategoryChange}
                >
                  <MenuItem value="medical">Medical</MenuItem>
                  <MenuItem value="engineering">Engineering</MenuItem>
                  <MenuItem value="ssc">Secondary Education</MenuItem>
                  <MenuItem value="hsc">Higher Secondary Education</MenuItem>
                  <MenuItem value="competativeExams">
                    Competitive Exams
                  </MenuItem>
                </Select>
              </FormControl>
              <FormControl
                sx={{ width: "100%", marginBottom: 2 }}
                variant="outlined"
                margin="normal"
              >
                <InputLabel id="subcategory-label">Subcategory</InputLabel>
                <Select
                  labelId="subcategory-label"
                  label="Subcategory"
                  value={subcategory}
                  onChange={handleSubcategoryChange}
                >
                  {subcategoryOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          )}

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
                    <FormLabel component="legend">
                      Type of Transaction
                    </FormLabel>
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
                <FormLabel>
                  Click the box below to upload the cover page!
                </FormLabel>
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

          {activeStep === 2 && (
            <Box>
              {/* Form 3 Fields */}
              <TextField
                sx={{ width: "100%" }}
                label="Your Name"
                margin="normal"
                required
                variant="outlined"
                value={userName}
                onChange={handleUserNameChange}
              />
              <Grid container spacing={{ xs: 2, md: 10 }}>
                <Grid item xs={12} md={6}>
                  <TextField
                    sx={{ width: "100%" }}
                    label="Mobile No."
                    type="number"
                    margin="normal"
                    variant="outlined"
                    required
                    value={mobileNo}
                    onChange={handleMobileNoChange}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    sx={{ width: "100%" }}
                    label="City"
                    type="text"
                    margin="normal"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleCityChange}
                  />
                </Grid>
              </Grid>
            </Box>
          )}

          <Grid container justifyContent="space-between" marginTop={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              Back
            </Button>
            {activeStep < steps.length - 1 && (
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                disabled={isNextButtonDisabled} // Set the disabled state based on the "isNextButtonDisabled" state variable
                style={{
                  cursor: isNextButtonDisabled ? "not-allowed" : "pointer",
                }}
              >
                Next
              </Button>
            )}
            {activeStep === steps.length - 1 && (
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            )}
          </Grid>
        </Paper>
      </Box>
      {/* change the styling inside default classes */}
      <style>{`
      .css-11reh94-MuiGrid-root>.MuiGrid-item {
        margin-bottom: 10px;
      }

      .css-1nrlq1o-MuiFormControl-root {
        min-width: 100%;
    }
      `}</style>
    </Box>
  );
};

export default SellBookForm;
