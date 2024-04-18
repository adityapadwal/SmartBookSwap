import React, { useState, useEffect } from 'react'
import PurchaseHistoryProducts from './PurchaseHistoryProducts'
import Sidebar from "../profileComponents/Sidebar";

import { Box, Grid, Container, Typography } from '@mui/material'
import axios from 'axios'

const PurchaseHistoryPage = () => {
  // state variables
  const [cart, setCart] = useState([]);
  const [purchasedProducts, setPurchasedProducts] = useState([]);
  const [totalPurcasedProducts, setTotalPurcasedProducts] = useState(0);

  useEffect(() => {
    axios
      .get('/history')
      .then((response) => {
        if (response.data.success) {
          setPurchasedProducts(response.data.allOrders);
          setTotalPurcasedProducts(response.data.allOrders.length);
        } else {
          setPurchasedProducts([]);
          setTotalPurcasedProducts(0);
        }
      });
  }, [totalPurcasedProducts]);

  return (
    <div>
      <Box sx={{ flexGrow: 1, }}>
        <Grid container spacing={2}>
          {/* Sidebar */}
          <Grid
            position="fixed"
            item
            xs={2}
            height="100vh"
            sx={{ backgroundColor: "#dae6f5", overflow: "inherit", marginTop: "4rem" }}
          >
            <Sidebar />
          </Grid>
          {/* Showing the purchased Products */}
          <Grid
            item
            xs={10}
            sx={{
              marginLeft: { xs: "1rem", sm: "2rem", md: "14.5rem" },
              marginTop: "1rem",
              height: "100vh",
            }}
          >
            <Grid item xs={12} md={8} sx={{ marginTop: '6rem', marginLeft: '6rem'}}>
              <h3 style={{ background: "linear-gradient(to right, #284bfa, #98a9fa)", color: 'white', padding: '0.25rem', margin: '0.3rem', borderRadius: '5px', paddingLeft: '2rem' }}>Purchase History ({totalPurcasedProducts})</h3>
              {totalPurcasedProducts.length === 0 ? (
                <Typography
                  variant="h6"
                  sx={{ fontSize: { xs: "15px", sm: "20px", md: "25px" } }}
                >
                  Oops! You haven't purchased any products yet!
                </Typography>
              ) : (
                purchasedProducts.map((product, index) => (
                  <Box key={index}>
                    <PurchaseHistoryProducts
                      productTitle={product.productTitle}
                      productPublicationOrAuthor={product.productPublicationOrAuthor}
                      productMrp={product.productMrp}
                      productPhoto={product.productPhoto}
                      productQuantity={product.productQuantity}
                      productPurchaseDate={product.productPurchaseDate}
                      sellerName={product.sellerName}
                      sellerAddress={product.sellerAddress}
                    />
                  </Box>
                ))
              )}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default PurchaseHistoryPage