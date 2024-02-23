import * as React from "react";
import { Box, Grid } from "@mui/material";
import BookImages from "./BookImages";
import BookDetails from "./BookDetails";
import TagDetails from "./TagDetails";
import { useMediaQuery } from "@mui/material";
const BuyBookCard = () => {
  const isXS = useMediaQuery("(max-width:600px)");
  const isSM = useMediaQuery("(min-width:600px) and (max-width:959px)");
  const isMD = useMediaQuery("(min-width:960px)");

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
            <BookImages />
          </Grid>

          {/* details of the specified book */}
          <Grid item xs={12} md={5} sx={{ padding: "1px", margin: "1px" }}>
            <BookDetails />
          </Grid>

          <Grid item xs={12} md={3} sx={{ padding: "0px" }}>
            <TagDetails />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default BuyBookCard;
