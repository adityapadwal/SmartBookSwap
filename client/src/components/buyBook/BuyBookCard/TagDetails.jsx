import React from 'react'
import { Box } from '@mui/material'



const TagDetails = () => {

  // Get today's date
  const today = new Date();

  // Add 7 days to today's date
  const deliveryDate = new Date();
  deliveryDate.setDate(today.getDate() + 7);

  // Format the date as a string (adjust the format as needed)
  const formattedDeliveryDate = deliveryDate.toDateString();

  const buttonStyles = {
    common: {
      padding: '10px 20px',
      fontSize: '16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      borderRadius: '5px',
      margin: '3px',
      textAlign: 'center',
      textDecoration: 'none',
      display: 'inline-block',
      transition: 'background-color 0.3s',
      marginTop: '1.5rem',
      color: '#fff',
      width: '100%', // Set a fixed width for all buttons
    },
    negotiate: {
      backgroundColor: '#f39c12', // Yellow shade
      border: '1px solid #d68910',
    },
    addToCart: {
      backgroundColor: '#2ecc71', // Green shade
      border: '1px solid #27ae60',
    },
    buyNow: {
      backgroundColor: '#3498db', // Blue shade
      border: '1px solid #2980b9',
    },
  };

  return (
    <div
      style={{
        padding: '1rem',
        margin: '1rem',
        backgroundColor: '#deeafe',
        border: '1px solid grey',
        borderRadius: '8px',
        transition: 'background-color 0.5s ease, box-shadow 0.5s ease',
        boxShadow: '0 4px 4px rgba(0, 0, 0, 0.4)',

      }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = 'white';
        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.6)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = '#deeafe';
        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.4)';

      }}
    >
      <Box sx={{ margin: '1rem', padding: '1rem', height: 'auto', }}>
        <h1 style={{ marginTop: '-1rem' }}>₹200.00 <span style={{ fontWeight: 'lighter', fontSize: '1rem' }}></span></h1>
        <p style={{ marginTop: '-1rem', fontSize: '12px' }}>All Tax Included</p>
        <br />
        <p>delivery before <b> <br /> {formattedDeliveryDate} </b></p>
        <br />
        <h3 style={{ color: 'green' }}>Available</h3>
        <br />
        <div>
          <button style={{ ...buttonStyles.common, ...buttonStyles.negotiate }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#f2bb22';
              e.currentTarget.style.boxShadow = '6px 6px 6px rgb(201, 151, 12)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#f39c12';
              e.currentTarget.style.boxShadow = '0 0px 0px rgba(0, 0, 0, 0.0)';


            }}
          >
            Negotiate
          </button>
          <button style={{ ...buttonStyles.common, ...buttonStyles.addToCart }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#16c427';
              e.currentTarget.style.boxShadow = '6px 6px 6px rgb(3, 94, 12)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#2ecc71';
              e.currentTarget.style.boxShadow = '0 0px 0px rgba(0, 0, 0, 0.0)';


            }}
          >
            Add to Cart
          </button>
          <button style={{ ...buttonStyles.common, ...buttonStyles.buyNow }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#2ebcf0';
              e.currentTarget.style.boxShadow = '6px 6px 6px rgb(14, 120, 158)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#3498db';
              e.currentTarget.style.boxShadow = '0 0px 0px rgba(0, 0, 0, 0.0)';


            }}
          >
            Buy Now
          </button>
        </div>
      </Box>
    </div>
  )
}

export default TagDetails
