import React from "react";
import { Box } from "@mui/material";
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

const categories = [
  { value: "", label: "All" },
  {
    value: "Engineering",
    label: "Engineering",
    subcategories: [
      "Computer",
      "IT",
      "E & TC",
      "AIDS",
      "Civil",
      "Mechanical",
      "Electrical",
      "Instrumentation",
      "Other",
    ],
  },
  {
    value: "Medical",
    label: "Medical",
    subcategories: ["Nursing", "MBBS", "Pharmacy"],
  },
  {
    value: "Competative Exams",
    label: "Competative Exams",
    subcategories: [
      "Government Jobs",
      "Engineering",
      "Medical",
      "Management",
      "Finance & Accountancy",
      "Language Proficiency",
      "Architecture",
      "Education & Testing",
    ],
  },
  { value: "SSC", label: "SSC", subcategories: ["1 to 10th"] },
  {
    value: "HSC",
    label: "HSC",
    subcategories: ["Science", "Commerce", "Arts", "Other"],
  },
];

const FilterComponent = ({
  categoryFilter,
  setCategoryFilter,
  subcategoryFilter,
  setSubcategoryFilter,
}) => {
  const CustomCheckbox = (props) => (
    <Checkbox
      style={{ transform: "scale(0.7)" }}
      checked={props.checked}
      {...props}
    />
  );

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setCategoryFilter(value);
    if (value !== "") {
      // Reset subcategory filter when category changes
      setSubcategoryFilter("");
    }
  };

  const handleSubcategoryChange = (subcategory) => {
    setSubcategoryFilter(subcategoryFilter === subcategory ? "" : subcategory);
  };

  return (
    <div>
      <Box
        sx={{
          width: "100%",
          maxWidth: 370,
          height: "627px",
          overflowY: "auto",
          overflowX: "auto",
          display: { xs: "none", sm: "none", md: "block" },
        }}
      >
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem disablePadding sx={{ margin: "1rem" }}>
              <FormControl>
                <FormLabel
                  sx={{ color: "#2258ae", fontSize: "20px" }}
                  id="demo-radio-buttons-group-label"
                >
                  <b>Categories</b>
                </FormLabel>

                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  value={categoryFilter}
                  onChange={handleCategoryChange}
                  name="radio-buttons-group"
                >
                  {categories.map(({ value, label }) => (
                    <FormControlLabel
                      key={value}
                      value={value}
                      control={<Radio />}
                      label={label}
                    />
                  ))}
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
                <ListItemText
                  primaryTypographyProps={{
                    sx: {
                      color: "#2258ae",
                      fontWeight: "bold",
                      fontSize: "20px",
                    },
                  }}
                  primary={<b>Subcategories</b>}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItem component="a">
                <FormGroup>
                  {categories
                    .find((cat) => cat.value === categoryFilter)
                    ?.subcategories?.map((subcategory) => (
                      <FormControlLabel
                        key={subcategory}
                        control={
                          <CustomCheckbox
                            checked={subcategoryFilter === subcategory}
                            onChange={() =>
                              handleSubcategoryChange(subcategory)
                            }
                          />
                        }
                        value={subcategory}
                        label={subcategory}
                      />
                    ))}
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
