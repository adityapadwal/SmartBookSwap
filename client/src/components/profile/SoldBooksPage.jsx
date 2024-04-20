import React, { useState, useEffect } from "react";
import { Box, Divider, Grid, Typography, Container } from "@mui/material";
import Sidebar from "../profileComponents/Sidebar";
import axios from "axios";
import SoldBooksProducts from "./SoldBooksProducts";

const SoldBooksPage = () => {
  // state variables
  const [soldProducts, setSoldProducts] = useState([]);
  const [totalSoldProducts, setTotalSoldProducts] = useState(0);

  // for getting the sold products
  useEffect(() => {
    axios.get('/soldbooks')
      .then((response) => {
        if (response.data.success) {
          setSoldProducts(response.data.soldProductsDetails);
          setTotalSoldProducts(response.data.soldProductsDetails.length);
        } else {
          setSoldProducts([]);
          setTotalSoldProducts(0);
        }
      })
  }, [totalSoldProducts]);

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
          {/* Showing Sold Products */}
          <Grid
            item
            xs={10}
            sx={{
              marginLeft: { xs: "1rem", sm: "2rem", md: "14.5rem" },
              marginTop: "1rem",
              height: "100vh",
            }}
          >
            <Grid item xs={12} md={8} sx={{ marginTop: '6rem', marginLeft: '6rem' }}>
              <h3 style={{ background: "linear-gradient(to right, #284bfa, #98a9fa)", color: 'white', padding: '0.25rem', margin: '0.3rem', borderRadius: '5px', paddingLeft: '2rem' }}>Sold Books ({totalSoldProducts})</h3>
              {totalSoldProducts.length === 0 ? (
                <Typography
                  variant="h6"
                  sx={{ fontSize: { xs: "15px", sm: "20px", md: "25px" } }}
                >
                  Oops! You haven't sold any products yet!
                </Typography>
              ) : (
                soldProducts.map((product, index) => (
                  <Box key={index}>
                    <SoldBooksProducts
                      productTitle={product.title}
                      productPublicationOrAuthor={product.publicationOrAuthor}
                      productMrp={product.mrp}
                      productPhoto={product.image}
                      productQuantity={product.quantity}
                      productPurchaseDate={product.purchaseDate}
                      buyerName={product.buyerName}
                      buyerAddress={product.buyerAddress}
                    />
                  </Box>
                ))
              )}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default SoldBooksPage;
