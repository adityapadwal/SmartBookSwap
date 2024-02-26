import React from 'react'
import CartProducts from './CartProducts'
import { Box, Grid, Container } from '@mui/material'
import { CartSummary } from './CartSummary'

const Cart = () => {
  return (
    <div>
      <Container>
        <Grid container>

          <Grid item xs={12} md={8} sx={{ marginTop: '6rem' }}>
            <Box>
              <h3 style={{ background: "linear-gradient(to right, #284bfa, #98a9fa)", color: 'white', padding: '0.25rem', margin: '0.3rem', borderRadius: '5px', paddingLeft: '2rem' }}>My Cart (0)</h3>
              <CartProducts />
              <CartProducts />
            </Box>
          </Grid>

          <Grid item xs={12} md={4} sx={{ marginTop: { xs: '0rem', md: '6rem' } }}>
            <CartSummary />
          </Grid>
        </Grid>
      </Container>

    </div>
  )
}

export default Cart
