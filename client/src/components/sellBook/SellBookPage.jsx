import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { Box, Paper, Button, Grid, Stepper, Step, StepLabel } from "@mui/material";
import SellPage1 from "./sellPage1";
import SellPage2 from "./sellPage2";
import SellPage3 from "./sellPage3";
import { BookDetailsContext } from "../context/BookDetailsContext";
import axios from "axios";

const steps = ["Step 1", "Step 2", "Step 3"];
const SellBookPage = () => {
  // context variables
  const {
    title, setTitle,
    category, setCategory,
    subcategory, setSubcategory,
    publicationOrAuthor, setPublicationOrAuthor,
    editionYear, setEditionYear,
    typeOfBook, setTypeOfBook,
    transactionType, setTransactionType,
    condition, setCondition,
    coverImage, setCoverImage,
    priceType, setPriceType,
    mrp, setMrp,
    description, setDescription,
    userName, setUserName,
    mobileNo, setMobileNo,
    city, setCity,
    nextButtonDisabled, setNextButtonDisabled,
    isFormSubmitted, setFormSubmitted,
  } = useContext(BookDetailsContext);

  // state variables
  const [activeStep, setActiveStep] = useState(0);
  const [redirect, setRedirect] = useState(false); // redirecting to profile after successful submission of form

  // Back button function
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setNextButtonDisabled(false);
  };

  // When you click on the submit button it collects all the data
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isFormValid =
      title &&
      category &&
      publicationOrAuthor &&
      typeOfBook &&
      transactionType &&
      condition &&
      userName &&
      mobileNo &&
      city;

    if (!isFormValid) {
      alert("Please fill in all required fields before submitting!.");
    } else {
      setFormSubmitted(true);
      try {
        await axios.post('/addBook', {
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
          city
        });
        setRedirect(true);
        alert("Book Added Sucessfully!");
      } catch (error) {
        console.log("Error:", error);
        if (error.response) {
          alert(`Request Failed: ${error.response.data}`);
        } else {
          alert("Failed to add book. Please try again later!");
        }
      }

      resetInputFields();
    }
  };

  // Reset all the input field values to their empty state
  function resetInputFields() {
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
  }

  // Next button function
  const handleNext = () => {
    if (!isFormSubmitted) {
      // Validation logic for required fields based on the active step
      let isValid = true;

      switch (activeStep) {
        case 0:
          isValid = title && category;
          break;
        case 1:
          isValid =
            publicationOrAuthor && typeOfBook && transactionType && condition;
          break;
        case 2:
          isValid = userName && mobileNo && city;
          break;
        default:
          break;
      }

      setNextButtonDisabled(true);
      if (isValid) {
        // Go to the next page
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    }
  };

  if (redirect) {
    return <Navigate to={'/listedbooks'} />
  }

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
          <Stepper
            activeStep={activeStep}
            alternativeLabel
            sx={{ marginBottom: 2 }}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <SellPage1 activeStep={activeStep}/>

          <SellPage2 activeStep={activeStep} />

          <SellPage3 activeStep={activeStep} />

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
                disabled={Boolean(nextButtonDisabled)} // Set the disabled state based on the "nextButtonDisabled" state variable
                style={{
                  cursor: nextButtonDisabled ? "not-allowed" : "pointer",
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

export default SellBookPage;