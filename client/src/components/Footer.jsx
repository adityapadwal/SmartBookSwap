import React from "react";
import AutoStoriesRoundedIcon from "@mui/icons-material/AutoStoriesRounded";
import FacebookOutlined from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Box, Divider, Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      height={{ xs: 360, sm: 300, md: 300 }}
      backgroundColor="#2258ae"
    >
      {/* First Box in Footer */}
      <Grid item xs={12} sm={6}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          margin={{ xs: "20px 0", sm: "30px" }}
        >
          <Box display="flex" alignItems="center">
            <AutoStoriesRoundedIcon
              style={{
                color: "white",
                marginRight: "8px",
                fontSize: { xs: "2rem", sm: "3rem" },
              }}
            />
            <Typography variant="h6" fontSize={{ xs: "20px", sm: "30px" }} color="white">
              SmartBookSwap
            </Typography>
          </Box>
          <Typography color="white" fontSize={{ xs: "14px", sm: "20px" }}>
            Keep Your Books Flowing!
          </Typography>
          <Box display="flex" marginTop={3}>
            <Link to="/facebook-page" style={{ textDecoration: "none" }}>
              <FacebookOutlined
                style={{
                  color: "white",
                  cursor: "pointer",
                  marginRight: 13,
                  fontSize: { xs: "1.5rem", sm: "2.5rem" },
                }}
              />
            </Link>
            <Link to="/instagram-page" style={{ textDecoration: "none" }}>
              <InstagramIcon
                style={{
                  color: "white",
                  cursor: "pointer",
                  marginRight: 13,
                  fontSize: { xs: "1.5rem", sm: "2.5rem" },
                }}
              />
            </Link>
            <Link to="/twitter-page" style={{ textDecoration: "none" }}>
              <TwitterIcon
                style={{
                  color: "white",
                  cursor: "pointer",
                  fontSize: { xs: "1.5rem", sm: "2.5rem" },
                }}
              />
            </Link>
          </Box>
        </Box>
      </Grid>

      {/* Second Box in Footer */}
      <Grid item xs={12} sm={6}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          margin={{ xs: "20px 0", sm: "30px" }}
        >
          <Typography
            fontSize={{ xs: "20px", sm: "30px" }}
            variant="h6"
            color="white"
          >
            Quick Links
          </Typography>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/home" style={{ textDecoration: "none" }}>
                <Typography fontSize={{ xs: "14px", sm: "20px" }} style={{ textAlign: "left" }} variant="body2" color="white">
                  <ArrowRightIcon style={{ marginRight: "4px" }} />
                  Home
                </Typography>
              </Link>
            </li>
            <li>
              <Link to="/services" style={{ textDecoration: "none" }}>
                <Typography fontSize={{ xs: "14px", sm: "20px" }} style={{ textAlign: "left" }} variant="body2" color="white">
                  <ArrowRightIcon style={{ marginRight: "4px" }} />
                  Our Services
                </Typography>
              </Link>
            </li>
          </ul>
        </Box>
      </Grid>

      <Divider style={{ width: "100%", backgroundColor: "white" }} />
    </Grid>
    
  );
};

export default Footer;
