import { Box, Grid, TextField } from "@mui/material";
import React from "react";

export default function SellPage3({
  activeStep,
  userName,
  mobileNo,
  city,
  handleUserNameChange,
  handleMobileNoChange,
  handleCityChange,
}) {
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
