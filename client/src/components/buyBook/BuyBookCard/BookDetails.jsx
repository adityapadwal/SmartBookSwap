import React from 'react'
import { Grid, Box } from '@mui/material'
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';

const BookDetails = () => {

    return (
        <div style={{
            

        }}>
            <div style={{
                padding: '1rem',
                backgroundColor: '#deeafe',
                borderRadius:'20px',
                transition: 'background-color 0.5s ease, box-shadow 0.5s ease',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.4)', // Initial box shadow
                fontFamily: 'monospace',
            }}
                onMouseOver={(e) => {
                    // Apply hover styles on mouse over
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.6)';
                }}
                onMouseOut={(e) => {
                    // Revert to initial styles on mouse out
                    e.currentTarget.style.backgroundColor = '#deeafe';
                    e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.4)';
                }}>
                <h1>Engineering Mathematics</h1>
                <p style={{ marginTop: '-1rem' }}> Field  : <i>Engineering </i>| Department  : <i> Computer</i> | Year: <i>II</i></p>

            </div>

            {/* <div style={{
                padding: '1rem',
                backgroundColor: 'white',
                transition: 'background-color 0.5s ease, box-shadow 0.5s ease',
                boxShadow: '0 0 0px rgba(0, 0, 0, 0.0)', // Initial box shadow
                fontFamily: 'monospace',
            }}
                onMouseOver={(e) => {
                    // Apply hover styles on mouse over
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.4)';
                }}
                onMouseOut={(e) => {
                    // Revert to initial styles on mouse out
                    e.currentTarget.style.backgroundColor = 'white';
                    e.currentTarget.style.boxShadow = '0 0 0px rgba(0, 0, 0, 0.0)';
                }}>
                <h3 style={{ fontWeight: '400' }}>Price:</h3>
                <h2 style={{ marginTop: '-1rem' }}>₹200.00 <span style={{ fontWeight: 'lighter', fontSize: '1rem' }}>all tax included</span></h2>
                <button
                    style={{
                        padding: '7px 14px',
                        fontSize: '15px',
                        marginTop: '-10px',
                        backgroundColor: '#f39c12',  // Background color
                        color: 'white',             // Text color
                        border: 'none',             // Remove border
                        borderRadius: '5px',        // Add border radius for rounded corners
                        cursor: 'pointer',          // Change cursor on hover
                        transition: 'background-color 0.3s',  // Add smooth transition on background color change
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#f54c0a'}  // Change background color on hover
                    onMouseOut={(e) => e.target.style.backgroundColor = '#f39c12'}   // Change back to original color on mouse out
                >
                    Negotiate/fixed
                </button>
            </div> */}
            <hr />
            <div
                style={{
                    padding: '1rem',
                    backgroundColor: '#deeafe',
                    borderRadius:'20px',
                    transition: 'background-color 0.5s ease, box-shadow 0.5s ease',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.4)', // Initial box shadow
                    fontFamily: 'monospace',
                }}
                onMouseOver={(e) => {
                    // Apply hover styles on mouse over
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.6)';
                }}
                onMouseOut={(e) => {
                    // Revert to initial styles on mouse out
                    e.currentTarget.style.backgroundColor = '#deeafe';
                    e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.4)';
                }}

            >
                <h3>Details</h3>
                <ul>
                    <li>Publication/ Author : <b> Nirali </b>  </li>
                    <br />
                    <li> Edition : <b>2023  </b>   </li>
                    <br />
                    <li> Type: <b> Text Book </b>  </li>
                    <br />
                    <li> Negotiable: <b> Yes </b>  </li>
                    <br />
                    <li> Condition: <b> 2nd hand </b>  </li>
                    <br />
                </ul>

            </div>
            <hr />
            <div
                style={{
                    padding: '1rem',
                    backgroundColor: '#deeafe',
                    borderRadius: '20px',
                    transition: 'background-color 0.5s ease, box-shadow 0.5s ease',
                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.4)', // Initial box shadow
                    fontFamily: 'monospace',
                    marginBottom:'-1rem'
                }}
                onMouseOver={(e) => {
                    // Apply hover styles on mouse over
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.6)';
                }}
                onMouseOut={(e) => {
                    // Revert to initial styles on mouse out
                    e.currentTarget.style.backgroundColor = '#deeafe';
                    e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.4)';
                }}
            >
                <Grid container>
                    <Grid item xs={6} md ={3}
                        sx={{ textAlign: 'center', padding: '1rem' }} >

                        <RotateLeftIcon sx={{ color: 'blue' }} />
                        <p style={{ marginTop: '-0.1rem' }}> <b>10</b>  days returnable</p>
                    </Grid>
                    <Grid item xs={6} md ={3} sx={{ textAlign: 'center', padding: '1rem' }}>
                        <LocalShippingOutlinedIcon sx={{ color: 'blue' }} />
                        <p style={{ marginTop: '-0.1rem' }}> <b>Cash</b> on delivery</p>
                    </Grid>
                    <Grid item xs={6} md ={3} sx={{ textAlign: 'center', padding: '1rem' }}>
                        <SecurityOutlinedIcon sx={{ color: 'blue' }} />
                        <p style={{ marginTop: '-0.1rem' }}> <b>Secure</b>  Payment Gateway</p>
                    </Grid>
                    <Grid item xs={6} md ={3} sx={{ textAlign: 'center', padding: '1rem' }}>
                        <VerifiedOutlinedIcon sx={{ color: 'blue' }} />
                        <p style={{ marginTop: '-0.1rem' }}> <b>Verification</b> before Delivery</p>
                    </Grid>
                </Grid>
            </div>
            
            <hr style={{ marginTop: '2rem' }} />
        </div>
    )
}

export default BookDetails
