import React, { useContext } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { BookDetailsContext } from "../context/BookDetailsContext";

export default function SellPage1({ activeStep }) {
  // context variables
  const {
    title, setTitle, 
    category, setCategory, 
    subcategory, setSubcategory,  
    subcategoryOptions, setSubcategoryOptions,
    setNextButtonDisabled,
  } = useContext(BookDetailsContext);

  const handleTitleChange = (e) => {
    const title = e.target.value;
    setTitle(title);
    // Enable the Next button if both category and title are not empty
    setNextButtonDisabled(!(title && category));
  };

  // Set Subcategory options according to selected Category
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    // Enable the Next button if both category and title are not empty
    setNextButtonDisabled(!(title && selectedCategory));
    switch (selectedCategory) {
      case "medical":
        setSubcategoryOptions(["MBBS", "Pharmacy", "Nursing", "Other"]);
        break;
      case "engineering":
        setSubcategoryOptions([
          "Computer",
          "E & TC",
          "Information Technology",
          "AIDS",
          "Electrical",
          "Civil",
          "Mechanical",
          "Instrumentation",
          "Other",
        ]);
        break;
      case "ssc":
        setSubcategoryOptions(["1 to 10th"]);
        break;
      case "hsc":
        setSubcategoryOptions(["Science", "Commerce", "Arts", "Other"]);
        break;
      case "competativeExams":
        setSubcategoryOptions([
          "Government Jobs",
          "Engineering",
          "Medical",
          "Management",
          "Finance & Accountancy",
          "Language Proficiency",
          "Architecture",
          "Education & Testing",
        ]);
        break;
      default:
        setSubcategoryOptions([]);
    }
  };

  // Handle Subcategory change
  const handleSubcategoryChange = (e) => {
    setSubcategory(e.target.value);
  };

  return (
    <div>
      {activeStep === 0 && (
        <Box>
          {/* Form 1 Fields */}
          <TextField
            sx={{ width: "100%", marginBottom: 2 }}
            label="Title of Book"
            margin="normal"
            required
            variant="outlined"
            value={title}
            onChange={handleTitleChange}
          />
          <FormControl
            sx={{ width: "100%", marginBottom: 2 }}
            variant="outlined"
            margin="normal"
          >
            <InputLabel id="category-label" required>
              Category
            </InputLabel>
            <Select
              labelId="category-label"
              label="Category"
              value={category}
              onChange={handleCategoryChange}
            >
              <MenuItem value="medical">Medical</MenuItem>
              <MenuItem value="engineering">Engineering</MenuItem>
              <MenuItem value="ssc">Secondary Education</MenuItem>
              <MenuItem value="hsc">Higher Secondary Education</MenuItem>
              <MenuItem value="competativeExams">Competitive Exams</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            sx={{ width: "100%", marginBottom: 2 }}
            variant="outlined"
            margin="normal"
          >
            <InputLabel id="subcategory-label">Subcategory</InputLabel>
            <Select
              labelId="subcategory-label"
              label="Subcategory"
              value={subcategory}
              onChange={handleSubcategoryChange}
            >
              {subcategoryOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      )}
    </div>
  );
}