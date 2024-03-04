import React, { useState, useEffect } from 'react'
import CartProducts from './CartProducts'
import { Box, Grid, Container, Typography } from '@mui/material'
import { CartSummary } from './CartSummary'
import axios from 'axios'

const Cart = () => {
  // state variables
  const [cart, setCart] = useState([]);
  const [totalCartItems, setTotalCartItems] = useState(0);
  const [totalPayable, setTotalPayable] = useState(0);

  useEffect(() => {
    axios
      .get('/cart')
      .then((response) => {
        if (response.data.success) {
          setCart(response.data.cart);
          console.log(response.data.cart);
          setTotalCartItems(response.data.cart.length);
          // console.log(response.data.cart); // debugging...
        } else {
          setCart([]);
          setTotalCartItems(0);
        }
        findPrice();
      });
  }, [totalCartItems]);

  const removeFromCart = (productId) => {
    // Send a request to remove the product from the cart
    axios
      .post('/remove-from-cart', { productId })
      .then((response) => {
        if (response.data.success) {
          // Update the cart state after successful removal
          setCart(cart.filter((product) => product.id !== productId));
          setTotalCartItems(totalCartItems - 1);
        } else {
          console.error("Failed to remove product from cart:", response.data.error);
        }
      });
      findPrice();
  };

  function findPrice() {
    let totalAmount = 0;
    cart.forEach(item => {
      totalAmount += item.mrp;
    });
    setTotalPayable(totalAmount);
  }

  return (
    <div>
      <Container>
        <Grid container>

          {/* Displaying Cart Products */}
          <Grid item xs={12} md={8} sx={{ marginTop: '6rem' }}>
            <h3 style={{ background: "linear-gradient(to right, #284bfa, #98a9fa)", color: 'white', padding: '0.25rem', margin: '0.3rem', borderRadius: '5px', paddingLeft: '2rem' }}>My Cart ({totalCartItems})</h3>
            {cart.length === 0 ? (
              <Typography
                variant="h6"
                sx={{ fontSize: { xs: "15px", sm: "20px", md: "25px" } }}
              >
                Oops! Your cart is empty!
              </Typography>
            ) : (
              cart.map((product, index) => (
                <Box key={index}>
                  <CartProducts
                    id={product.id}
                    title={product.title}
                    price={product.mrp}
                    bookImage={product.bookImage}
                    quantity={product.quantity}
                    sellerName={product.sellerName}
                    removeFromCart={removeFromCart}
                  />
                </Box>
              ))
            )}
          </Grid>

          {/* Display Summary */}
          <Grid item xs={12} md={4} sx={{ marginTop: { xs: '0rem', md: '6rem' } }}>
            <CartSummary 
              totalPayable = {totalPayable}
              totalCartItems = {totalCartItems}
            />
          </Grid>
        </Grid>
      </Container>

    </div>
  )
}

export default Cart
