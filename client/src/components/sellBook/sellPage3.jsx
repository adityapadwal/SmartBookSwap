import React, { useContext } from "react";
import { Box, Grid, TextField } from "@mui/material";
import { BookDetailsContext } from "../context/BookDetailsContext";

export default function SellPage3({ activeStep}) {
  // context variables
  const {
    userName, setUserName,
    mobileNo, setMobileNo,
    city, setCity,
    setNextButtonDisabled,
  } = useContext(BookDetailsContext);

  // Handle User Name change
  const handleUserNameChange = (e) => {
    const userName = e.target.value;
    setUserName(userName);
    // Activate next button of 3rd page when (userName, mobileNo, city) fields are not empty
    setNextButtonDisabled(!(userName && mobileNo && city));
  };

  // Handle Mobile No. change
  const handleMobileNoChange = (e) => {
    const mobileNo = e.target.value;
    setMobileNo(mobileNo);
    setNextButtonDisabled(!(userName && mobileNo && city));
  };

  // Handle City change
  const handleCityChange = (e) => {
    const city = e.target.value;
    setCity(city);
    setNextButtonDisabled(!(userName && mobileNo && city));
  };

  return (
    <div>
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
    </div>
  );
}
