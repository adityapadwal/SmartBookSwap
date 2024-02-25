import React from 'react'
import { Box, Grid, Container } from '@mui/material'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from '@mui/material/Divider';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MessageIcon from '@mui/icons-material/Message';
import './cart.css';
const CartCard = () => {
  return (
    <div>
      <Box sx={{ padding: '0.5rem', backgroundColor: "white", boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.4)", margin: '0.7rem', transition: "background-color 0.5s ease, box-shadow 0.5s ease" }} onMouseOver={(e) => {
        // Apply hover styles on mouse over
        e.currentTarget.style.backgroundColor = "white";
        e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.5)";
      }}
        onMouseOut={(e) => {
          // Revert to initial styles on mouse out
          e.currentTarget.style.backgroundColor = "white";
          e.currentTarget.style.boxShadow = "0 3px 10px rgba(0, 0, 0, 0.4)";
        }}>
        <Grid container>
          <Grid item xs={6} md={3} sx={{ padding: '1rem' }}>
            <Box sx={{ width: '50px' }}>
              <img style={{ height: '150px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ06817YwZVdxX5A_t_gcT2NZjv8CeWjbAyxQ&usqp=CAU" alt="" />
            </Box>
          </Grid>
          <Grid item xs={6} md={6} sx={{ padding: '0.5rem' }}>
            <h3 className='name' > Engineering Graphics And Design</h3>
            <p>Qty: 1</p>
            <p style={{marginTop:'-0.6rem'}}> Seller: Ankita Tai Ghadge</p>
            <h4 style={{marginTop:'-0.2rem'}}> MRP : 200 Rs</h4>
          </Grid>
        </Grid>
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
          
          <Grid container>

            <Grid item xs={3.9}>
              <Button fullWidth size="small" startIcon={<ShoppingCartIcon />}>
                Buy Now
              </Button>
            </Grid>

            <Divider orientation="vertical" flexItem />

            <Grid item xs={4}>
              <Button fullWidth size="small" startIcon={<MessageIcon />}>
                Negotiate
              </Button>
            </Grid>

            <Divider orientation="vertical" flexItem />

            <Grid item xs={4}>

              <Button fullWidth size="small" startIcon={<DeleteIcon />}>
                Remove
              </Button>

            </Grid>

          </Grid>
        </Box>
      </Box>
    </div>
  )
}

export default CartCard
