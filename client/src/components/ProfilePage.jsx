import React, { useContext, useState } from 'react'
import { Typography, Button, Box } from '@mui/material';
import { Navigate } from 'react-router-dom';
import { UserContext } from "./UserContext";
import axios from 'axios';

export default function ProfilePage() {

  // state variables
  const [redirect, setRedirect] = useState(null); // redirect to / after logging out
  const { ready, user, setUser } = useContext(UserContext);

  async function logout() {
    await axios.post('/logout');
    setRedirect('/');
    setUser(null);
  }

  if (!ready) {
    return 'Loading...';
  }

  if (ready && !user && !redirect) {
    return <Navigate to={'/login'} />
  }

  if (redirect) {
    return (
      <Navigate to={redirect} />
    )
  }

  return (
    <div>
      <Box textAlign="center" maxWidth="lg" mx="auto">
        <Typography>
          Logged in as
        </Typography>
        <br />
        <Button onClick={logout} variant="contained" color="primary" sx={{ maxWidth: 'sm', mt: 2 }}>
          Logout
        </Button>
      </Box>
    </div>
  );
};
