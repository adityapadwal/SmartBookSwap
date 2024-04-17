import React from 'react'
import { Box, Grid, Container } from '@mui/material';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from '@mui/material/Divider';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MessageIcon from '@mui/icons-material/Message';
import './mediaQueries.css';

const PurchaseHistoryProducts = ({ productTitle, productPublicationOrAuthor, productMrp, productPhoto, productQuantity, productPurchaseDate, sellerName, sellerAddress }) => {

    function buyNow() {
        alert("Click on \" Make Payment \" to proceed further");
    }
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
                    {/* Left side */}
                    <Grid item xs={12} md={6} sx={{ padding: '1rem' }}>
                        <Box sx={{ width: '50px' }}>
                            <img style={{ height: '150px' }} src={productPhoto} alt="" />
                        </Box>
                        {/* Book Title */}
                        <h3 className='name'> Title: {productTitle}</h3>
                        {/* Book Publication */}
                        <p>Publication/Author: {productPublicationOrAuthor}</p>
                    </Grid>
                    {/* Right side */}
                    <Grid item xs={12} md={6} sx={{ padding: '1rem' }}>
                        {/* Book Quantity */}
                        <p>Quantity: {productQuantity}</p>
                        {/* Book Seller Name*/}
                        <p>Seller Name: {sellerName}</p>
                        {/* Book Seller Address*/}
                        <p>Seller Address: {sellerAddress}</p>
                        {/*Purchase Date*/}
                        <p>Purchase Date: {productPurchaseDate}</p>
                        {/* Book Price */}
                        <h4> MRP : ₹ {productMrp} </h4>
                    </Grid>
                </Grid>
                {/* <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

          <Grid container>

            <Grid item xs={3.9}>
              <Button onClick={buyNow} fullWidth size="small" startIcon={<ShoppingCartIcon />}>
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

              <Button onClick={() => {removeFromCart(id)}} fullWidth size="small" startIcon={<DeleteIcon />}>
                Remove
              </Button>

            </Grid>

          </Grid>
        </Box> */}
            </Box>
        </div>
    )
}

export default PurchaseHistoryProducts