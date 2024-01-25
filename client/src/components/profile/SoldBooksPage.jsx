import React from 'react'
import { Box, Divider, Grid, Typography, Container } from "@mui/material";
import Sidebar from '../profileComponents/Sidebar';



const SoldBooksPage = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1, marginTop: "4rem"}}>
      <Grid container spacing={2}>

        <Grid position='static' item xs={2} height="100vh" sx={{backgroundColor: "#dae6f5", overflow: 'inherit',}}>
            <Sidebar/>
        </Grid>
        <Grid item xs={10}>
             
            {/* display sold list here */}

        </Grid>
      </Grid>
      </Box>
    </div>
  )
}

export default SoldBooksPage
