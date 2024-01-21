import React from 'react'
import { Box, Divider, Grid, Typography, Container, Button, Stack } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import TextField from '@mui/material/TextField';
import { useState } from 'react';


const ProfileBox = () => {

  const [readOnly, setReadOnly] = useState(true);
  const [inputName, setInputName] = useState('Ankita Ghadge');
  const [inputNumber, setInputNumber] = useState('9767754276')
  const [inputMail, setInputMail ] = useState('ankita.ghadge@gmail.com')
  const [inputLocation, setInputLocation] = useState('Pimple Saudagar, pimpri, pune')
  
  const handleToggleReadOnly = () => {
    setReadOnly(!readOnly);
  };


  const handleChangeInput = (event) => {
    setInputName(event.target.value);
  };
  const handleChangeNumber = (event) => {
    setInputNumber(event.target.value);
  };
  const handleChangeMail = (event) => {
    setInputMail(event.target.value);
  };
  const handleChangeLocation = (event) => {
    setInputLocation(event.target.value);
  };


  return (
    <>
      
      <Box sx={{ flexGrow: 1, backgroundColor: "#dae6f5", padding: "2rem", margin:1, marginTop:{xs:'1rem', sm:'2rem'}, marginRight:{xs:'1rem'}, borderRadius: "1rem", border: "1px solid #ccc",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",}}>

        <Grid container alignItems="center" justifyContent={{xs:'center', sm:"center", md:"left"}} spacing={{ xs: 0, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          
            {/* first item avatar */}
            <Grid  item xs={2} sm={3} md={2}>
              <Avatar sx={{ width: 130, height: 130 }} />
            </Grid>
          
            {/* username and email_id */}
            <Grid item xs={6} sm={6} md={3} >
              <Grid item  sx={{ textAlign: { xs: 'center', md: 'left'} }}>
                
                <h1 style={{margin: "0", marginTop: "10%"}} >{inputName} </h1>
                <i><h4 style={{margin:"0"}}>{inputMail  }</h4></i>
                
                <Button size='small' variant="outlined"  sx={{ marginTop: 3, borderWidth: 2, '&:hover': {borderColor: 'darkblue', color:'darkblue' }, }}> 
                 Edit Profile
                </Button>

              </Grid>
            </Grid>

            {/* third item */}
            <Grid item alignItems="center" justifyContent={{xs:'center', sm:"center",}}  xs={2} sm={4} md={7} marginTop='2rem' columns={{ xs: 4, sm: 8, md: 12 }} sx={{flexGrow: 1}} >

              <Box sx={{ flexGrow: 1 }}>
                <Grid container sx={{display:{xs:'none', md: 'flex'}}} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                      <Grid item xs={2} sm={4} md={4} >
                        <Button variant="contained" endIcon={< LibraryAddOutlinedIcon/>} sx={{padding:{xs:'0rem', sm:'1rem'}, margin:{xs:'1rem', md:'0rem'}}}>
                          <Typography >Sell Book</Typography>
                        </Button>
                      </Grid>

                      <Grid item xs={2} sm={4} md={4} >
                            <Button variant="contained" endIcon={<StorefrontOutlinedIcon />} sx={{padding:{xs:'0.3rem', sm:'1rem'}, margin:{xs:'1rem', md:'0rem'}}}>
                                  <Typography >Buy Book</Typography>
                            </Button>
                    </Grid>

                    <Grid item xs={2} sm={4} md={4}>
                      <Button variant="contained" endIcon={<AddShoppingCartIcon />} sx={{padding:{xs:'0.5rem', sm:'1rem'}, margin:{xs:'1rem', md:'0rem'}}}>
                            <Typography >Cart</Typography>
                        </Button>
                    </Grid>

                </Grid>
              </Box>

            </Grid>
        </Grid>
      </Box>

      <Box sx={{margin: 1,
        marginTop: 5,
        padding: 6,
        border: "1px solid #ccc",
        borderRadius: 3,
        marginRight:{xs:'1rem'},
        backgroundColor: "#dae6f5",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",}}>
        
        <form>
        

        <Grid container spacing={{md:10, xs:2 }} marginBottom={2}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              id="outlined-read-only-input"
              label="User Name"
              value={inputName}
              onChange={handleChangeInput}
              InputProps={{
                readOnly: readOnly,
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
          <TextField
              fullWidth
              id="outlined-read-only-input"
              label="Mobile Number"
              value={inputNumber}
              onChange={handleChangeNumber}
              InputProps={{
                readOnly: readOnly,
              }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={{md:10, xs:2 }} marginBottom={2}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              id="outlined-read-only-input"
              label="Email Id"
              value={inputMail}
              onChange={handleChangeMail}
              InputProps={{
                readOnly: readOnly,
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
          <TextField
              fullWidth
              id="outlined-read-only-input"
              label="Location"
              value={inputLocation}
              onChange={handleChangeLocation}
              InputProps={{
                readOnly: readOnly,
              }}
            />
          </Grid>
        </Grid>
        <Grid sx={{marginTop:'1rem' }}>
          <Button  variant="contained" onClick={handleToggleReadOnly}>
            {readOnly ? 'Edit Profile' : 'Save Changes'}
          </Button>
        </Grid>
        </form>
      </Box>
      
    </>
  )
}

export default ProfileBox
