import React, { useContext } from "react";
import { Box, Grid, TextField } from "@mui/material";
import { UserContext } from '../context/UserContext';

export default function SellPage3({ activeStep }) {
  const { user } = useContext(UserContext);

  return (
    <div>
      {activeStep === 2 && (
        <Box>
          <Grid container spacing={{ xs: 2, md: 10 }}>
            {/* User Name */}
            <Grid item xs={12} md={6}>
              <TextField
                sx={{ width: "100%" }}
                label="Your Name"
                margin="normal"
                required
                variant="outlined"
                value={user.name}
                disabled={true}
              />
            </Grid>
            {/* User Email */}
            <Grid item xs={12} md={6}>
              <TextField
                sx={{ width: "100%" }}
                label="Email"
                type="email"
                margin="normal"
                variant="outlined"
                required
                value={user.email}
                disabled={true}
              />
            </Grid>
          </Grid>
          <Grid container spacing={{ xs: 2, md: 10 }}>
            {/* User Phone */}
            <Grid item xs={12} md={6}>
              <TextField
                sx={{ width: "100%" }}
                label="Mobile No."
                type="number"
                margin="normal"
                variant="outlined"
                required
                value={user.phone}
                disabled={true}
              />
            </Grid>
            {/* User City */}
            <Grid item xs={12} md={6}>
              <TextField
                sx={{ width: "100%" }}
                label="City"
                type="text"
                margin="normal"
                variant="outlined"
                required
                value={user.address}
                disabled={true}
              />
            </Grid>
          </Grid>
        </Box>
      )}
    </div>
  );
}
