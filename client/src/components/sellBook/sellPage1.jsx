import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";

export default function SellPage1({
  activeStep,
  title,
  category,
  subcategory,
  handleTitleChange,
  handleCategoryChange,
  subcategoryOptions,
  handleSubcategoryChange,
}) {
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
