import React from "react";
import { Box, Grid } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";

const FilterComponent = ({
  categoryFilter,
  setCategoryFilter,
  subcategoryFilter,
  setSubcategoryFilter,
}) => {
  const CustomCheckbox = (props) => (
    <Checkbox
      style={{ transform: "scale(0.7)" }}
      checked={props.checked} // Explicitly pass the checked prop
      {...props}
    />
  );

  return (
    <div>
      <Box
        sx={{
          width: "100%",
          maxWidth: 360,
          display: { xs: "none", sm: "none", md: "block" },
        }}
      >
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem disablePadding sx={{ margin: "1rem" }}>
              <FormControl>
                <FormLabel
                  sx={{ color: "blue" }}
                  id="demo-radio-buttons-group-label"
                >
                  <b>Categories</b>
                </FormLabel>

                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  name="radio-buttons-group"
                >
                  <FormControlLabel value="" control={<Radio />} label="All" />
                  <FormControlLabel
                    value="engineering"
                    control={<Radio />}
                    label="Engineering"
                  />
                  <FormControlLabel
                    value="medical"
                    control={<Radio />}
                    label="Medical"
                  />
                  <FormControlLabel
                    value="competative exams"
                    control={<Radio />}
                    label="Competitive Exams"
                  />
                  <FormControlLabel
                    value="ssc"
                    control={<Radio />}
                    label="SSC"
                  />
                  <FormControlLabel
                    value="hsc"
                    control={<Radio />}
                    label="HSC"
                  />
                </RadioGroup>
              </FormControl>
            </ListItem>
          </List>
        </nav>
        <Divider />
        <nav aria-label="secondary mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Subcategories" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItem component="a">
                <FormGroup>
                  <FormControlLabel
                    control={
                      <CustomCheckbox
                        checked={subcategoryFilter === "IT"}
                        onChange={(e) => {
                          const newValue = e.target.value;
                          setSubcategoryFilter((prevValue) =>
                            prevValue === newValue ? "" : newValue
                          );
                        }}
                      />
                    }
                    value="IT"
                    label="IT"
                  />
                  {/* <FormControlLabel control={<CustomCheckbox />} style={{ transform: 'scale(0.9)', height: '1.7rem' }} label="UPSC" />
                  <FormControlLabel control={<CustomCheckbox />} style={{ transform: 'scale(0.9)', height: '1.7rem' }} label="BAMS" />
                  <FormControlLabel control={<CustomCheckbox />} style={{ transform: 'scale(0.9)', height: '1.7rem' }} label="Computer Eng" />
                  <FormControlLabel control={<CustomCheckbox />} style={{ transform: 'scale(0.9)', height: '1.7rem' }} label="12th CBSC" />
                  <FormControlLabel control={<CustomCheckbox />} style={{ transform: 'scale(0.9)', height: '1.7rem' }} label="Law" />
                  <FormControlLabel control={<CustomCheckbox />} style={{ transform: 'scale(0.9)', height: '1.7rem' }} label="AIDS" />
                  <FormControlLabel control={<CustomCheckbox />} style={{ transform: 'scale(0.9)', height: '1.7rem' }} label="MBBS" />
                  <FormControlLabel control={<CustomCheckbox />} style={{ transform: 'scale(0.9)', height: '1.7rem' }} label="10th" />
                  <FormControlLabel control={<CustomCheckbox />} style={{ transform: 'scale(0.9)', height: '1.7rem' }} label="MPSC" />
                  <FormControlLabel control={<CustomCheckbox />} style={{ transform: 'scale(0.9)', height: '1.7rem' }} label="Science" /> */}
                </FormGroup>
              </ListItem>
            </ListItem>
          </List>
        </nav>
      </Box>
    </div>
  );
};

export default FilterComponent;