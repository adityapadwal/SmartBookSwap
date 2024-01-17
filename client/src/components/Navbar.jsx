import React, { useState } from "react";
import { Link, useNavigate, Navigate} from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Menu,
  MenuItem,
  Popover,
} from "@mui/material";

import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import AutoStoriesRoundedIcon from "@mui/icons-material/AutoStoriesRounded";

export default function DenseAppBar() {

  // state variables
  const [selectedTab, setSelectedTab] = useState(0); // keeps track of currently selected tab in profile section.
  const [serviceTabIndex, setServiceTabIndex] = useState(0); // keeps track of currently selected tab in our services section 
  const [menuAnchor, setMenuAnchor] = useState(null); // our services menu
  const [profileAnchor, setProfileAnchor] = useState(null); // profile pop over
  const [isLoggedin, setIsLoggedin] = useState(false); // user login status

  const navigate = useNavigate();

  // manage opening/clicking of our services menu
  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };
  
  // manage closing of our services menu
  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  // manage opening/clicking of profile icon
  const handleProfileClick = (event) => {
    setProfileAnchor(event.currentTarget);
  };

  // manage closing of profile icon
  const handleProfileClose = () => {
    setProfileAnchor(null);
  };

  // handles selection of items in menu
  const handleMenuSelect = (index) => {
    setSelectedTab(index);
    handleMenuClose();
  };

  const handleProfileMenuSelect = (action) => {
    // Handle actions like navigating to the profile page or signing out
    console.log(`Selected profile action: ${action}`);
    handleProfileClose();
    console.log(index);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          background: "#2258ae",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <AutoStoriesRoundedIcon sx={{ marginRight: 1 }} />
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant="h6" color="inherit" component="div">
              SmartBookSwap
            </Typography>
          </Link>
          <Tabs
            value={serviceTabIndex}
            onChange={(event, newValue) => setServiceTabIndex(newValue)}
            indicatorColor="transparent"
            sx={{ marginLeft: "auto", marginTop: 1 }}
          >
            <Tab
              label={
                <div style={{ color: "white", fontSize: "16px", marginTop: "2px"}}>
                  Our Services
                  <i
                    className="material-icons"
                    style={{ verticalAlign: "middle", color: "inherit" }}
                  >
                    <ArrowDropDownSharpIcon />
                  </i>
                </div>
              }
              aria-controls="service-menu"
              aria-haspopup="true"
              onClick={handleMenuOpen}
            />
          </Tabs>
          {isLoggedin ? (
            <Tabs
              value={selectedTab}
              onChange={(event, newValue) => setSelectedTab(newValue)}
              textColor="inherit"
              sx={{ marginLeft: "auto", marginTop: 1 }}
              indicatorColor="transparent"
            >
              <Tab
                icon={
                  <PersonRoundedIcon
                    style={{ color: "#fff" }}
                    sx={{ width: 35, height: 30 }}
                  />
                }
                onClick={handleProfileClick}
              />
              <Popover
                open={Boolean(profileAnchor)}
                anchorEl={profileAnchor}
                onClose={handleProfileClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                sx={{ marginLeft: 2 }}
              >
                <Link to={'/account'} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <MenuItem>
                    <PersonRoundedIcon sx={{ marginRight: 1 }} />
                    Profile
                  </MenuItem>
                </Link>
                <Link to={'/account'} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <MenuItem>
                    <LogoutRoundedIcon sx={{ marginRight: 1 }} />
                    Logout
                  </MenuItem>
                </Link>
              </Popover>
            </Tabs>
          ) : (
            <Tabs
              value={selectedTab}
              onChange={(event, newValue) => setSelectedTab(newValue)}
              textColor="inherit"
              sx={{ marginLeft: "auto", marginTop: 1 }}
              indicatorColor="transparent"
            >
              <Tab
                label={
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "inherit", textTransform: "capitalize", fontSize: "17px", marginBottom: "5px"}}
                  >
                    Login / Register
                  </Link>
                }
              />
            </Tabs>
          )}

          <Menu
            id="service-menu"
            anchorEl={menuAnchor}
            keepMounted
            open={Boolean(menuAnchor)}
            onClose={handleMenuClose}
            sx={{ marginLeft: "12px" }}
          >
            <Link to={'/buy-book'} style={{ textDecoration: "none", color: "inherit"}}> 
              <MenuItem
                sx={{ "&:hover": { backgroundColor: "#e3e3e3" } }}
                onClick={() => handleMenuSelect()}
              >
                Buy Book
              </MenuItem>
            </Link>
            <Link to={'/post-book'} style={{ textDecoration: "none", color: "inherit"}}>
              <MenuItem
                sx={{ "&:hover": { backgroundColor: "#e3e3e3" } }}
                onClick={() => handleMenuSelect()}
              >
                Sell Book
              </MenuItem>
            </Link>
            <Link to={'/post-book'} style={{ textDecoration: "none", color: "inherit"}}>
              <MenuItem
                sx={{ "&:hover": { backgroundColor: "#e3e3e3" } }}
                onClick={() => handleMenuSelect()}
              >
                Donate Book
              </MenuItem>
            </Link>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
