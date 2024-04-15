import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import MessageIcon from "@mui/icons-material/Message";
import HistoryIcon from '@mui/icons-material/History';
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "#dae6f5",
        border: "0px 3px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <nav aria-label="main mailbox folders">
        <List sx={{ flexGrow: 1 }}>
          {/* User Profile */}
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/profile">
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText
                primary="Profile"
                sx={{ display: { xs: "none", sm: "none", md: "block" } }}
              />
            </ListItemButton>
          </ListItem>
          <Divider />
          {/* Messages */}
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/chat">
              <ListItemIcon>
                <MessageIcon />
              </ListItemIcon>
              <ListItemText
                primary="Messages"
                sx={{ display: { xs: "none", sm: "none", md: "block" } }}
              />
            </ListItemButton>
          </ListItem>
          <Divider />
          {/* Listed Books */}
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/listedbooks">
              <ListItemIcon>
                <LibraryBooksIcon />
              </ListItemIcon>
              <ListItemText
                primary="Listed Books"
                sx={{ display: { xs: "none", sm: "none", md: "block" } }}
              />
            </ListItemButton>
          </ListItem>
          <Divider />
          {/* Sold Books */}
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/soldbooks">
              <ListItemIcon>
                <BeenhereIcon />
              </ListItemIcon>
              <ListItemText
                primary="Sold Books"
                sx={{ display: { xs: "none", sm: "none", md: "block" } }}
              />
            </ListItemButton>
          </ListItem>
          <Divider />
          {/* Purchase History */}
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/history">
              <ListItemIcon>
                <HistoryIcon />
              </ListItemIcon>
              <ListItemText
                primary="Purchase History"
                sx={{ display: { xs: "none", sm: "none", md: "block" } }}
              />
            </ListItemButton>
          </ListItem>
          <Divider />
        </List>
      </nav>
    </Box>
  );
};

export default Sidebar;
