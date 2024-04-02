import React from 'react'
import { Box, Grid } from '@mui/material'
import Button from '@mui/material/Button';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { loadStripe } from '@stripe/stripe-js';
import axios from "axios";

export const CartSummary = ({ cart, totalPayable, totalCartItems }) => {
    const isPaymentDisabled = totalPayable === 0 && totalCartItems === 0;

    // payment integration
    const makePayment = async () => {
        const stripe = await loadStripe(`${import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY}`);

        // creating an array of final cart products
        let finalProductList = [];
        cart.map((product) => {
            const productName = product.title;
            const productImage = product.bookImage;
            const productPrice = product.mrp;
            const productQuantity = product.quantity;
            finalProductList.push({ productName, productImage, productPrice, productQuantity });
        });

        console.log("Final Product List => ", finalProductList);

        try {
            // sending a POST request to the server to create a checkout session
            const response = await axios.post("/create-checkout-session", {finalProductList});

            // parsing the response from the server
            const session = response.data;

            // redirecting to the checkout page using Stripe API
            const result = stripe.redirectToCheckout({
                sessionId: session.id
            });

            // handling errors, if any
            if (result.error) {
                console.log(result.error);
            }
        } catch (error) {
            console.error('Error making payment:', error);
        }
    }

    return (
        <Box sx={{ margin: { xs: '0.7rem', md: '3rem 2rem' }, padding: '1rem 2rem', boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.4)" }}>
            <p style={{ fontWeight: 'bold' }}>TOTAL PRICE DETAILS</p>
            <hr />
            <Grid container>
                <Grid item xs={8}>
                    <p>Price ({totalCartItems} items)</p>
                </Grid>
                <Grid item xs={4}>
                    <p>{totalPayable}</p>
                </Grid>
                <Grid item xs={8} sx={{ marginTop: '-1.5rem' }}>
                    <p>Extra Charges</p>
                </Grid>
                <Grid item xs={4} sx={{ marginTop: '-1.5rem' }}>
                    <p>0</p>
                </Grid>

                <Grid item xs={8} sx={{ marginTop: '0rem' }}>
                    <h4>Total Payable</h4>
                </Grid>
                <Grid item xs={4} sx={{ marginTop: '0rem' }}>
                    <h4>{totalPayable}</h4>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{}}>
                        <p style={{ fontSize: '14px' }}> <strong>Secure Payment</strong>: Your money is safe with us until you receive the item </p>
                        <br />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{}}>
                        <Button fullWidth variant="contained" startIcon={< ShoppingCartCheckoutIcon />} disabled={isPaymentDisabled} onClick={makePayment}>
                            Make Payment
                        </Button>

                    </Box>
                </Grid>
            </Grid>
            <br />
        </Box>
    )
}
