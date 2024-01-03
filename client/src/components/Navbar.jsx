import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, Tabs } from "@mui/material";
import { Link } from "react-router-dom";

export default function DenseAppBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

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
          <Tabs sx={{ marginLeft: "auto", marginTop: 1 }}>
            <Button variant="contained" component={Link} to="/authForm">
              Login
            </Button>
          </Tabs>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
