import React, { useContext, useState, useEffect } from 'react'
import { EditUserContext, UserContext } from '../context/UserContext';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import { Box, Grid, Typography, Button } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import TextField from '@mui/material/TextField';

const ProfileContent = () => {
  // context variables
  const { ready, user, setUser } = useContext(UserContext);
  const { readOnly, setReadOnly, editedName, setEditedName, editedPhone, setEditedPhone, editedLocation, setEditedLocation } = useContext(EditUserContext);

  // New state for validation error message
  const [validationError, setValidationError] = useState('');

  // Function to check if the form is valid
  const isFormValid = () => {
    return (
      editedName.trim() !== '' &&
      editedPhone.trim() !== '' &&
      editedLocation.trim() !== ''
    );
  };
  // Function to check if the phone is valid
  const isNumberValid = () => {
    return (
      editedPhone.trim().length === 10
    );
  };

  // useEffect to clear validation error when inputs change
  useEffect(() => {
    setValidationError('');
  }, [editedName, editedPhone, editedLocation]);

  if (!ready) {
    return 'Loading...';
  }

  if (!user) {
    return <Navigate to={'/'} />;
  }

  const handleProfileChanges = async () => {
    if (readOnly) {
      // enable editing
      setReadOnly(false);
    } else {
      // Validate the form
      if (!isFormValid()) {
        setValidationError('Please fill in all fields.');
        return;
      }
      if (!isNumberValid()) {
        setValidationError('Mobile Number should have 10 digits');
        return;
      }

      // updating user details
      try {
        // sending data to server
        await axios.put('/update-profile', {
          name: editedName,
          phone: editedPhone,
          address: editedLocation,
        });

        // handle success
        alert('Profile updated successfully');

        // resetting user in context
        setUser((prevUser) => ({
          ...prevUser,
          name: editedName,
          phone: editedPhone,
          address: editedLocation,
        }));

        // disable editing
        setReadOnly(true);
      } catch (error) {
        // Handle error
        console.error('Error updating profile', error);
        setValidationError('Error updating profile. Please try again.');
      };
    }
  };

  async function handleLogout() {
    await axios.post('/logout');
    alert("User logout successful");
    setUser(null);
    return <Navigate to={'/'} />;
  }

  return (
    <>
      <Box sx={{
        flexGrow: 1, backgroundColor: "#dae6f5", padding: "2rem", margin: 1, marginTop: { xs: '1rem', sm: '2rem' }, marginRight: { xs: '1rem' }, borderRadius: "1rem", border: "1px solid #ccc",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
      }}>

        <Grid container alignItems="center" justifyContent={{ xs: 'center', sm: "center", md: "left" }} spacing={{ xs: 0, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>

          {/* first item avatar */}
          <Grid item xs={2} sm={3} md={2}>
            <Avatar sx={{ width: 130, height: 130 }} />
          </Grid>

          {/* username and email_id */}
          <Grid item xs={6} sm={6} md={3} >
            <Grid item sx={{ textAlign: { xs: 'center', md: 'left' } }}>

              <h1 style={{ margin: "0", marginTop: "10%" }} >{user.name} </h1> {/* Taking value from context API */}
              <i><h4 style={{ margin: "0" }}>{user.email}</h4></i> {/* Taking value from context API */}

              <Button size='small' variant="outlined" sx={{ marginTop: 3, borderWidth: 2, '&:hover': { borderColor: 'darkblue', color: 'darkblue' }, }} onClick={handleLogout}>
                Logout
              </Button>

            </Grid>
          </Grid>

          {/* third item */}
          <Grid item alignItems="center" justifyContent={{ xs: 'center', sm: "center", }} xs={2} sm={4} md={7} marginTop='2rem' columns={{ xs: 4, sm: 8, md: 12 }} sx={{ flexGrow: 1 }} >

            <Box sx={{ flexGrow: 1 }}>
              <Grid container sx={{ display: { xs: 'none', md: 'flex' } }} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                <Grid item xs={2} sm={4} md={4} >
                  <Link to={'/sell-book'}>
                    <Button variant="contained" endIcon={< LibraryAddOutlinedIcon />} sx={{ padding: { xs: '0rem', sm: '1rem' }, margin: { xs: '1rem', md: '0rem' } }}>
                      <Typography >Sell Book</Typography>
                    </Button>
                  </Link>
                </Grid>

                <Grid item xs={2} sm={4} md={4} >
                  <Link to={'/buy-book'}>
                    <Button variant="contained" endIcon={<StorefrontOutlinedIcon />} sx={{ padding: { xs: '0.3rem', sm: '1rem' }, margin: { xs: '1rem', md: '0rem' } }}>
                      <Typography >Buy Book</Typography>
                    </Button>
                  </Link>
                </Grid>

                <Grid item xs={2} sm={4} md={4}>
                  <Link to={'/cart'}>
                    <Button variant="contained" endIcon={<AddShoppingCartIcon />} sx={{ padding: { xs: '0.5rem', sm: '1rem' }, margin: { xs: '1rem', md: '0rem' } }}>
                      <Typography >Cart</Typography>
                    </Button>
                  </Link>
                </Grid>

              </Grid>
            </Box>

          </Grid>
        </Grid>
      </Box>

      <Box sx={{
        margin: 1,
        marginTop: 5,
        padding: 6,
        border: "1px solid #ccc",
        borderRadius: 3,
        marginRight: { xs: '1rem' },
        backgroundColor: "#dae6f5",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
      }}>

        <form>
          <Grid container spacing={{ md: 10, xs: 2 }} marginBottom={2}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="outlined-read-only-input"
                label="User Name"
                defaultValue={user.name}
                // value={editedName}
                onChange={(event) => setEditedName(event.target.value)}
                disabled={readOnly}
                required
              // InputProps={{
              //   readOnly: readOnly,
              // }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="outlined-read-only-input"
                label="Mobile Number"
                defaultValue={user.phone}
                // value={editedPhone}
                onChange={(event) => setEditedPhone(event.target.value)}
                disabled={readOnly}
                required
              // InputProps={{
              //   readOnly: readOnly,
              // }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={{ md: 10, xs: 2 }} marginBottom={2}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="outlined-read-only-input"
                label="Email Id"
                value={user.email}
                disabled={true}
                required
              // InputProps={{
              //   readOnly: readOnly,
              // }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="outlined-read-only-input"
                label="Location"
                defaultValue={user.address}
                // value={editedLocation}
                onChange={(event) => setEditedLocation(event.target.value)}
                disabled={readOnly}
                required
              // InputProps={{
              //   readOnly: readOnly,
              // }}
              />
            </Grid>
          </Grid>

          {/* Display validation error */}
          {validationError && (
            <Typography
              variant="body2"
              color="error"
              sx={{
                mt: 1,
                textAlign: 'center',
                backgroundColor: '#FFEBEE',
                border: '1px solid #FFCDD2',
                borderRadius: '8px',
                padding: '8px',
                '&:hover': {
                  backgroundColor: '#FFCDD2',
                },
              }}
            >
              {validationError}
            </Typography>
          )}

          {/* Edit Profile / Save Changes button */}
          <Grid sx={{ marginTop: '1rem' }}>
            <Button variant="contained" onClick={handleProfileChanges}>
              {readOnly ? 'Edit Profile' : 'Save Changes'}
            </Button>
          </Grid>
        </form>
      </Box>
    </>
  )
}

export default ProfileContent
