import * as React from 'react';
import { Box, Grid } from '@mui/material';
import Button from '@mui/material/Button';

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

const BookImages = () => {
    const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
            rows: 2,
            cols: 2,
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger',
        },
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera',
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Coffee',
            cols: 2,
        },
    ];

    return (
        <div style={{
            padding: '1rem',
            backgroundColor: '#deeafe',
            border: '1px solid #ccc',
            borderRadius: '8px',
            boxShadow: '0 4px 4px rgba(0, 0, 0, 0.4)',
           
        }}
            onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor= 'white';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.5)';
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor= '#deeafe';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.4)';
            }}>

            <img
                {...srcset(itemData[0].img, 300, itemData[0].rows, 2)}
                alt={itemData[0].title}
                loading="lazy"
                
                style={{ width: '100%', height: '400px', transition: 'transform 0.3s', opacity: '1' }}
                onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'scale(0.9)';
                    e.currentTarget.style.opacity = '0.7';
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.opacity = '1';
                }}
            />
            {/* Small Images (visible only on small screens) */}
            <Box
                sx={{
                    display: { xs: 'flex', },
                    flexDirection: 'row',
                    marginTop: '2px',
                    marginBottom:'0.5rem'
                }}
            >
                {itemData.slice(1).map((item) => (
                    <a
                        key={item.img}
                        href={item.img}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', display: 'inline-block', opacity: '1', transition: 'opacity 0.3s', margin: '2px' }}
                        onMouseOver={(e) => (e.currentTarget.style.opacity = '0.7')}
                        onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
                    >
                        <img
                            {...srcset(item.img, 150, item.rows, 1)}
                            alt={item.title}
                            loading="lazy"
                            style={{ width: '90%', height: 'auto', margin: '5px', marginTop:'1rem', transition: 'transform 0.3s', opacity: '1' }}

                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'scale(0.9)';
                                e.currentTarget.style.opacity = '0.7';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.opacity = '1';
                            }}
                        />
                    </a>
                ))}
                
                <div>
                <Button variant="contained" color="primary" style={{borderRadius:'0px'}} sx={{height:'76px', marginTop:'1.1rem',transition: 'transform 0.3s', backgroundColor:'#ebeff5', opacity:'0.8', border:'1px solid grey'}} 
                    onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = '#6d93cf';
                        e.currentTarget.style.transform = 'scale(0.9)';
            
                        e.currentTarget.style.opacity = '1';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.backgroundColor = '#ebeff5';
                        e.currentTarget.style.opacity = '0.8';
                    }}
                >
                    <p style={{color:'black', fontSize:'30px'}}>+</p>
                    </Button>
                </div>
            </Box>
        </div>
    )
}

export default BookImages
