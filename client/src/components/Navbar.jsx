import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Tabs, Tab, Menu, MenuItem, IconButton, Popover } from "@mui/material";
import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import AutoStoriesRoundedIcon from "@mui/icons-material/AutoStoriesRounded";

export default function DenseAppBar() {
  // State variables
  const [selectedTab, setSelectedTab] = React.useState(0);
  const [menuAnchor, setMenuAnchor] = React.useState(null);
  const [profileAnchor, setProfileAnchor] = React.useState(null);
  const [isLoggedin, setIsLoggedin] = React.useState(false);

  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const handleProfileClick = (event) => {
    setProfileAnchor(event.currentTarget);
  };

  const handleProfileClose = () => {
    setProfileAnchor(null);
  };

  const handleMenuSelect = (index) => {
    setSelectedTab(index);
    handleMenuClose();
  };

  const handleProfileMenuSelect = (action) => {
    // Handle actions like navigating to the profile page or signing out
    console.log(`Selected profile action: ${action}`);
    handleProfileClose();
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
          <AutoStoriesRoundedIcon sx={{ marginRight: 0.7 }} />
          <Typography variant="h6" color="inherit" component="div">
            SmartBookSwap
          </Typography>
          <Tabs
            value={selectedTab}
            onChange={(event, newValue) => setSelectedTab(newValue)}
            indicatorColor="transparent"
          >
            <Tab
              label="Home"
              to="/"
              component={Link}
              style={{ color: "white", marginLeft: "1rem", fontSize: "16px" }}
            />
            <Tab
              label={
                <div style={{ color: "white", fontSize: "16px" }}>
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
                    sx={{ width: 35, height: 35 }}
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
                <MenuItem onClick={() => handleProfileMenuSelect("Profile")}>
                  <PersonRoundedIcon sx={{ marginRight: 1 }} />
                  Profile
                </MenuItem>
                <MenuItem onClick={() => handleProfileMenuSelect("Signout")}>
                  <LogoutRoundedIcon sx={{ marginRight: 1 }} />
                  Signout
                </MenuItem>
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
                    style={{ textDecoration: "none", color: "inherit", textTransform: "capitalize", fontSize: "17px" }}
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
            <MenuItem
              sx={{ "&:hover": { backgroundColor: "#e3e3e3" } }}
              onClick={() => handleMenuSelect(1)}
            >
              Buy Book
            </MenuItem>
            <MenuItem
              sx={{ "&:hover": { backgroundColor: "#e3e3e3" } }}
              onClick={() => handleMenuSelect(2)}
            >
              Sell Book
            </MenuItem>
            <MenuItem
              sx={{ "&:hover": { backgroundColor: "#e3e3e3" } }}
              onClick={() => handleMenuSelect(3)}
            >
              Donate Book
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
