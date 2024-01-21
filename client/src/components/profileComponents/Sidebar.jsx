import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import HistoryIcon from '@mui/icons-material/History';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    
    <Box height="100vh" sx={{ width: '100%', maxWidth: 360, bgcolor: '#dae6f5', border: "0px 3px"}}>
    <nav aria-label="main mailbox folders">

      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/profilelayout">
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Profile"  sx={{ display: { xs: "none", sm: "none", md: "block" } }} />
          </ListItemButton>
        </ListItem>

        <Divider />

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/history">
            <ListItemIcon>
              <HistoryIcon />
            </ListItemIcon>
            <ListItemText primary="History"   sx={{ display: { xs: "none", sm: "none", md: "block" } }}/>
          </ListItemButton>
        </ListItem>
        <Divider />
      

      <ListItem disablePadding>
          <ListItemButton component={Link} to="/listedbooks">
            <ListItemIcon>
              <LibraryBooksIcon />
            </ListItemIcon>
            <ListItemText primary="Listed Book's"   sx={{ display: { xs: "none", sm: "none", md: "block" } }}/>
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/soldbooks">
            <ListItemIcon>
              <BeenhereIcon />
            </ListItemIcon>
            <ListItemText primary="Sold Book's"   sx={{ display: { xs: "none", sm: "none", md: "block" } }}/>
          </ListItemButton>
        </ListItem>
        <Divider />
      </List>

      
    </nav>
    
  </Box>
  )
}

export default Sidebar
