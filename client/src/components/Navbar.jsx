import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Tabs, Tab, Drawer, List, ListItem, ListItemText } from '@mui/material';

export default function DenseAppBar() {

  // State variables
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [selectedTab, setSelectedTab] = React.useState(0);

  // Event handlers
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          background: "#063970",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" component="div">
            BookShareHub
          </Typography>
          <Tabs
            value={selectedTab} // Set the value prop to the selectedTab state
            onChange={(event, newValue) => setSelectedTab(newValue)} // Update the selectedTab state
            textColor="inherit"
            sx={{ marginLeft: 'auto', marginTop: 1 }}
          >
            <Tab label={<Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Login</Link>} />
            <Tab label={<Link to="/signup" style={{ textDecoration: 'none', color: 'inherit' }}>SignUp</Link>} sx={{ marginLeft: 2 }} />
          </Tabs>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
