import React, { useEffect, useState } from "react";
import { useContext } from 'react';
import { UserContext } from './UserContext';
import axios from "axios";
import { Link } from "react-router-dom";
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
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import AutoStoriesRoundedIcon from "@mui/icons-material/AutoStoriesRounded";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropUpSharpIcon from "@mui/icons-material/ArrowDropUpSharp";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default function DenseAppBar() {
  // state variables
  const [menuAnchor, setMenuAnchor] = useState(null); // our services menu
  const [profileAnchor, setProfileAnchor] = useState(null); // profile pop over
  const [isLoggedin, setIsLoggedin] = useState(true); // user login status
  const [drawerOpen, setDrawerOpen] = useState(false); // drawer open / close status
  const [ourServicesOpen, setOurServicesOpen] = useState(false); // State to manage the open/close state of the "Our Services" list in the Drawer

  // Using context variables
  const { user, setUser } = useContext(UserContext);

  // checking if user has logged in or not
  useEffect(() => {
    if (user) {
      setIsLoggedin(true);
    } else {
      setIsLoggedin(false);
    }
  }, [user]);

  // handling user logout
  async function handleUserLogout() {
    await axios.post('/logout');
    setUser(null);
    alert("User log-out successful");
  }

  // manage opening of our services menu
  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  // manage closing of our services menu
  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  // manage opening of profile icon
  const handleProfileClick = (event) => {
    setProfileAnchor(event.currentTarget);
  };

  // manage closing of profile icon
  const handleProfileClose = () => {
    setProfileAnchor(null);
  };

  // manage opening drawer
  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  // manage closing of drawer
  const handleDrawerClose = () => {
    setDrawerOpen(false);
    setOurServicesOpen(false); // Close the "Our Services" menu list
  };

  // Function to toggle the "Our Services" list in the Drawer
  const toggleOurServices = () => {
    setOurServicesOpen(!ourServicesOpen);
  };

  return (
    <Box sx={{ flexGrow: 1, zIndex: +1 }}>
      <AppBar
        sx={{
          background: "#2258ae",
          position: "fixed", // ensures AppBar is positioned above the drawer
        }}
      >
        <Toolbar>
          {/* BookIcon & Website Name */}
          <AutoStoriesRoundedIcon sx={{ marginRight: 1 }} />
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Typography
              sx={{
                fontSize: { xs: "20px", md: "22px" },
              }}
              variant="h6"
              textcolor="inherit"
            >
              SmartBookSwap
            </Typography>
          </Link>

          {/* Our Service Tab */}
          <Tabs
            value={0}
            indicatorColor="transparent"
            sx={{
              marginLeft: "auto",
              marginTop: 1,
              display: { xs: "none", md: "block" },
            }}
          >
            <Tab
              label={
                <div
                  style={{ color: "white", fontSize: "16px", marginTop: "2px" }}
                >
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

          {/* Login/Register & Profile Tab */}
          {isLoggedin ? (
            <Tabs
              value={0}
              textColor="inherit"
              sx={{
                marginLeft: "auto",
                marginTop: 1,
                display: { xs: "none", md: "block" },
              }}
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
                <Link
                  to={"/profile"}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <MenuItem onClick={handleProfileClose}>
                    <PersonRoundedIcon sx={{ marginRight: 1 }} />
                    Profile
                  </MenuItem>
                </Link>
                <Link
                  to={"/"}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <MenuItem onClick={handleUserLogout}>
                    <LogoutRoundedIcon sx={{ marginRight: 1 }} />
                    Logout
                  </MenuItem>
                </Link>
              </Popover>
            </Tabs>
          ) : (
            <Tabs
              value={0}
              textColor="inherit"
              sx={{
                marginLeft: "auto",
                marginTop: 1,
                display: { xs: "none", md: "block" },
              }}
              indicatorColor="transparent"
            >
              <Tab
                label={
                  <Link
                    to="/login"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      textTransform: "capitalize",
                      fontSize: "17px",
                      marginBottom: "5px",
                    }}
                  >
                    Login / Register
                  </Link>
                }
              />
            </Tabs>
          )}

          {/* Drawer */}
          <IconButton
            sx={{ color: "white", display: { md: "none" }, marginLeft: "auto" }}
            onClick={drawerOpen ? handleDrawerClose : handleDrawerOpen}
          >
            {drawerOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>

          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={handleDrawerClose}
            sx={{
              width: 200,
              position: "relative",
              flexShrink: 0,
            }}
          >
            <List>
              {isLoggedin ? (
                <List style={{ backgroundColor: "#dae6f5" }}>
                  <Link
                    to="/profile"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <ListItem onClick={handleDrawerClose}>
                      <PersonRoundedIcon sx={{ marginRight: "5px" }} />
                      <ListItemText primary="Profile" />
                    </ListItem>
                  </Link>
                </List>
              ) : (
                <List>
                  <List style={{ backgroundColor: "#dae6f5" }}>
                    <Link
                      to="/login"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <ListItem onClick={handleDrawerClose}>
                        <ListItemText primary="Login/Register" />
                      </ListItem>
                    </Link>
                  </List>
                </List>
              )}

              <List>
                <ListItem
                  style={{ cursor: "pointer", backgroundColor: "#dae6f5" }}
                  onClick={toggleOurServices}
                >
                  <ListItemText primary="Our Services" />
                  {ourServicesOpen ? (
                    <ArrowDropDownSharpIcon />
                  ) : (
                    <ArrowDropUpSharpIcon />
                  )}
                </ListItem>
                {ourServicesOpen && (
                  <List style={{ backgroundColor: "#f5f5f5" }}>
                    <Link
                      to="/buy-book"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <ListItem onClick={handleDrawerClose}>
                        <ListItemText primary="Buy Book" />
                      </ListItem>
                    </Link>
                    <Link
                      to="/sell-book"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <ListItem onClick={handleDrawerClose}>
                        <ListItemText primary="Sell Book" />
                      </ListItem>
                    </Link>
                  </List>
                )}
              </List>
            </List>
          </Drawer>

          <Menu
            id="service-menu"
            anchorEl={menuAnchor}
            keepMounted
            open={Boolean(menuAnchor)}
            onClose={handleMenuClose}
            sx={{ marginLeft: "12px" }}
          >
            <Link
              to={"/buy-book"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <MenuItem
                sx={{ "&:hover": { backgroundColor: "#e3e3e3" } }}
                onClick={handleMenuClose}
              >
                Buy Book
              </MenuItem>
            </Link>
            <Link
              to={"/sell-book"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <MenuItem
                sx={{ "&:hover": { backgroundColor: "#e3e3e3" } }}
                onClick={handleMenuClose}
              >
                Sell Book
              </MenuItem>
            </Link>
          </Menu>
        </Toolbar>
      </AppBar>
      {/* changed default classes style */}
      <style>{`
          .css-h4y409-MuiList-root {
            padding-top: 2px;
            padding-bottom: 0px;
        }
        @media (min-width: 600px) {
          .css-4t3x6l-MuiPaper-root-MuiDrawer-paper {
            top: 65px;
          }
        }
      
        @media (max-width: 599px) {
          .css-4t3x6l-MuiPaper-root-MuiDrawer-paper {
            top: 55px;
          }
        }
        `}</style>
    </Box>
  );
}