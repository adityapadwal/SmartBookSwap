import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Tabs, Tab, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useContext } from 'react';
import { UserContext } from './UserContext';

export default function DenseAppBar() {

  // State variables
  const [selectedTab, setSelectedTab] = React.useState(0);
  const { user } = useContext(UserContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          background: "#063970",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" component={Link} to="/" style={{ textDecoration: 'none', underline: 'none' }}>
            BookShareHub
          </Typography>
          <Tabs
            value={selectedTab} // Set the value prop to the selectedTab state
            onChange={(event, newValue) => setSelectedTab(newValue)} // Update the selectedTab state
            textColor="inherit"
            sx={{ marginLeft: 'auto', marginTop: 1 }}
          >
            <Tab
              label={
                user
                  ? <Link to="/profiletemp" style={{ textDecoration: 'none', color: 'inherit' }}>
                    Profile
                  </Link>
                  : <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
                    Login / Register
                  </Link>
              }
            />
          </Tabs>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
