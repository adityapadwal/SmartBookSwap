import React from "react";
import AutoStoriesRoundedIcon from "@mui/icons-material/AutoStoriesRounded";
import FacebookOutlined from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Link as RouterLink } from "react-router-dom";
import { Box, Divider, Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box margin={0} padding={0}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="flex-start"
        height={300}
        backgroundColor="#2258ae"
      >
        {/* First Box in Footer */}
        <Grid item marginLeft={6}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            margin={"50px"}
          >
            <Box display="flex">
              <AutoStoriesRoundedIcon
                style={{
                  color: "white",
                  marginRight: "8px",
                  fontSize: "3rem",
                }}
              />
              <Typography variant="h6" fontSize={"30px"} color="white">
                SmartBookSwap
              </Typography>
            </Box>
            <Typography color="white" fontSize={"20px"}>
              Keep Your Books Flowing!
            </Typography>
            <Box display="flex" marginTop={3}>
              <Link to="/facebook-page" style={{ textDecoration: "none" }}>
                <FacebookOutlined
                  style={{
                    color: "white",
                    cursor: "pointer",
                    marginRight: 13,
                    fontSize: "2.5rem",
                  }}
                />
              </Link>
              <Link to="/instagram-page" style={{ textDecoration: "none" }}>
                <InstagramIcon
                  style={{
                    color: "white",
                    cursor: "pointer",
                    marginRight: 13,
                    fontSize: "2.5rem",
                  }}
                />
              </Link>
              <Link to="/twitter-page" style={{ textDecoration: "none" }}>
                <TwitterIcon
                  style={{
                    color: "white",
                    cursor: "pointer",
                    fontSize: "2.5rem",
                  }}
                />
              </Link>
            </Box>
          </Box>
        </Grid>

        {/* Second Box in Footer */}
        <Grid item marginRight={6}>
          <Box margin={"50px"}>
            <Typography
              fontSize={"30px"}
              variant="h6"
              color="white"
              marginBottom={1}
            >
              Quick Links
            </Typography>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <Link to="/home" style={{ textDecoration: "none" }}>
                  <Typography fontSize={"20px"} variant="body2" color="white">
                    <ArrowRightIcon style={{ marginRight: "4px" }} />
                    Home
                  </Typography>
                </Link>
              </li>
              <li>
                <Link to="/services" style={{ textDecoration: "none" }}>
                  <Typography fontSize={"20px"} variant="body2" color="white">
                    <ArrowRightIcon style={{ marginRight: "4px" }} />
                    Our Services
                  </Typography>
                </Link>
              </li>
              <li>
                <Link to="/profile" style={{ textDecoration: "none" }}>
                  <Typography fontSize={"20px"} variant="body2" color="white">
                    <ArrowRightIcon style={{ marginRight: "4px" }} />
                    Profile
                  </Typography>
                </Link>
              </li>
            </ul>
          </Box>
        </Grid>
        <Divider style={{ width: "100%", backgroundColor: "white" }} />
        <Typography
          variant="body2"
          color="white"
          style={{
            marginBottom: "5px",
            marginLeft: "33rem",
            fontSize: "20px",
          }}
        >
          Copyright 2016-23 ©{" "}
          <RouterLink
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
              textDecoration: "underline",
            }}
          >
            SmartBookSwap
          </RouterLink>{" "}
          All Rights Reserved
        </Typography>
      </Grid>
    </Box>
  );
};

export default Footer;
