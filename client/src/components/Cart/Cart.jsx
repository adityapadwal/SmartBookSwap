import React from 'react'
import CartCard from './CartCard'
import { Box, Grid, Container } from '@mui/material'
import Button from '@mui/material/Button';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const Cart = () => {
  return (
    <div>
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ marginTop: '6rem' }}>
            <Box>
              <h3 style={{ background: "linear-gradient(to right, #284bfa, #98a9fa)", color: 'white', padding: '0.25rem', margin: '0.3rem', borderRadius: '5px', paddingLeft: '2rem' }}>My Cart (0)</h3>
              <CartCard />
              <CartCard />

            </Box>
          </Grid>
          <Grid item xs={12} md={4} sx={{ marginTop: { xs: '0rem', md: '6rem' } }}>
            <Box sx={{ margin:{ xs: '0.7rem', md: '3rem 2rem' } , padding: '1rem 2rem', boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.4)" }}>
              <p style={{ fontWeight: 'bold' }}>TOTAL PRICE DETAILS</p>
              <hr />
              <Grid container>
                <Grid item xs={8}>
                  <p>Price (2 items)</p>
                </Grid>
                <Grid item xs={4}>
                  <p>1400</p>
                </Grid>
                <Grid item xs={8} sx={{ marginTop: '-1.5rem' }}>
                  <p>Shipping Charges</p>
                </Grid>
                <Grid item xs={4} sx={{ marginTop: '-1.5rem' }}>
                  <p>140</p>
                </Grid>

                <Grid item xs={8} sx={{ marginTop: '0rem' }}>
                  <h4>Total Payable</h4>
                </Grid>
                <Grid item xs={4} sx={{ marginTop: '0rem' }}>
                  <h4>1840</h4>
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{}}>
                    <p style={{ fontSize: '14px' }}> Secure Payment: Your money is safe with us until you receive the item </p>
                    <br />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{}}>
                    <Button fullWidth variant="contained" startIcon={< ShoppingCartCheckoutIcon/>}>
                      Make Payment
                    </Button>
                   
                  </Box>
                </Grid>
              </Grid>
              <br />
            </Box>

          </Grid>
        </Grid>
      </Container>

    </div>
  )
}

export default Cart
