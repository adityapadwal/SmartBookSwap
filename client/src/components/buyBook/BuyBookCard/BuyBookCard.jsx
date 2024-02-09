import * as React from 'react';
import { Box, Grid } from '@mui/material';
import BookImages from './BookImages';
import BookDetails from './BookDetails';
import TagDetails from './TagDetails';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const BuyBookCard = () => {

    return (
        <div style={{ background: 'white' }}>
            <Box sx={{ marginTop: '5rem', padding: '1rem' }}>
                <Grid container spacing={2}>
                    {/* First Grid Item (xs=12 for small screens, xs=4 for larger screens) */}
                    <Grid item xs={12} md={3.5} sx={{ position: 'static', marginLeft: { xs: '0rem' } }}>
                        <BookImages />
                    </Grid>

                    {/* details of the specified book */}
                    <Grid item xs={12} md={5} sx={{ padding: '1px', margin: '1rem' }}>
                        <BookDetails />
                    </Grid>

                    <Grid item xs={12} md={3} sx={{ padding: '0px' }}>
                        <TagDetails />
                    </Grid>
                </Grid>

                <Grid container >
                    <Grid item xs={10} md={8} sx={{ padding: '0rem', marginTop: '0rem' }}>
                        <div style={{
                            padding: '2rem',
                            backgroundColor: '#deeafe',
                            transition: 'background-color 0.5s ease, box-shadow 0.5s ease',
                            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', // Initial box shadow
                            fontFamily: 'monospace',
                            height: '200px',
                            width: '100%',
                            borderRadius: '20px'

                        }}
                            onMouseOver={(e) => {
                                // Apply hover styles on mouse over
                                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                                e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.4)';
                            }}
                            onMouseOut={(e) => {
                                // Revert to initial styles on mouse out
                                e.currentTarget.style.backgroundColor = '#deeafe';
                                e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
                            }}>
                            <h2> Description:  </h2>
                            <h4>Book is as good as new. There are very less marking. And no page missing.nkfjnakjdfnj s asfk aslks ldasldlasdd asndlk alk slkasld lasd ask lasdlk asl las dlask dlasdll aslda sld lasd lasdl asldkalsdlkasdlasdklaslk skd ladlasdslkdlask </h4>
                        </div>

                    </Grid>


                    <Grid item xs={4} sx={{ padding: '0rem', marginTop: '0rem', }}>
                        <Box sx={{marginLeft:{xs:'2.5rem', md:'7rem'}, marginTop:{xs:'2rem', md:'0rem'}}}>
                            <div style={{

                                backgroundColor: '#deeafe',
                                transition: 'background-color 0.5s ease, box-shadow 0.5s ease',
                                boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', // Initial box shadow
                                fontFamily: 'monospace',
                                marginBottom: '0rem',
                                textAlign: 'center',
                                padding: '2rem',
                                margin: '0rem',
                                height: '200px',
                                width: '200px',
                                borderRadius: '20px'

                            }}
                                onMouseOver={(e) => {
                                    // Apply hover styles on mouse over
                                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                                    e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.4)';
                                }}
                                onMouseOut={(e) => {
                                    // Revert to initial styles on mouse out
                                    e.currentTarget.style.backgroundColor = '#deeafe';
                                    e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.4)';
                                }}>
                                <p style={{ color: 'blue', marginTop: '60px' }}> <LocationOnOutlinedIcon /> get book location </p>
                                <p><span>Sold By</span> : Ankita Tai Ghadge</p>
                            </div>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </div>
    );
};

export default BuyBookCard;
