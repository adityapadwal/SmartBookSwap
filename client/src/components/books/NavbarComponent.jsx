import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import TextField from '@mui/material/TextField';

const NavbarCoponent = () => {
    
    const [sort, setSort] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const handleSearch = () => {
        // Implement your search logic here, using the searchTerm state
        console.log('Searching for:', searchTerm);
    };

    
    const handleChangeSort = (event) => {
        setSort(event.target.value);
    };

    return (
        <div>
            <Box>
                <Grid container spacing={9}>
                    <Grid item xs={7} md={10} sx={{ transform: 'scale(0.8)', marginTop: '-0.7rem', marginLeft:'0rem' }}>
                        <TextField id="standard-basic" label="🔎  Search" variant="standard"  style={{width: '90%'}}/>
                       
                    </Grid>

                    <Grid item xs={1.3} sx={{ transform: 'scale(0.8)', marginTop: '-0.7rem' }}>
                        <FormControl variant="standard" sx={{ minWidth:{xs:70, md: 100} }}>
                            <InputLabel id="demo-simple-select-standard-label">Sort by</InputLabel>
                            <Select labelId="demo-simple-select-standard-label" id="demo-simple-select-standard" value={sort} onChange={handleChangeSort} label="sort">
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={1}>High to Low</MenuItem>
                                <MenuItem value={2}>Low to High</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                </Grid>
            </Box>
        </div>
    )
}

export default NavbarCoponent
