import React from "react";
import { Box, Grid } from "@mui/material";
import Sidebar from "../profileComponents/Sidebar";

export default function PurchaseHistoryPage() {
  return (
    <div>
      <Box sx={{ flexGrow: 1, marginTop: "4rem" }}>
        <Grid container spacing={2}>
          <Grid
            position="fixed"
            item
            xs={2}
            height="100vh"
            sx={{ backgroundColor: "#dae6f5" }}
          >
            <Sidebar />
          </Grid>
          <Grid item xs={10}>
            {/* create history component here */}
            <div>Purchase History Page</div>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}
