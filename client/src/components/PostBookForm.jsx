import React, { useState } from "react";
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormLabel,
  Button,
  Typography,
  TextareaAutosize,
  Grid,
} from "@mui/material";

const PostBookForm = () => {
    const [category, setCategory] = useState("");
  const [subcategoryOptions, setSubcategoryOptions] = useState([]);

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);

    switch (selectedCategory) {
      case "medical":
        setSubcategoryOptions(["MBBS", "Pharmacy", "Nursing", "Other"]);
        break;
      case "engineering":
        setSubcategoryOptions(["Computer", "E & TC", "Information Technology", "AIDS", "Electrical", "Civil", "Mechanical", "Instrumentation", "Other"]);
        break;
      case "ssc":
        setSubcategoryOptions(["1 to 10th"]);
        break;
      case "hsc":
        setSubcategoryOptions(["Science", "Commerce", "Arts", "Other"]);
        break;
      case "competativeExams":
        setSubcategoryOptions(["Government Jobs", "Engineering", "Medical", "Management", "Finance & Accountancy", "Language Proficiency", "Architecture", "Education & Testing"]);
        break;
      default:
        setSubcategoryOptions([]);
    }
  };

  return (
    <Box sx={{
        margin: 15,
        marginTop: 15,
        padding: 6,
        border: "1px solid #ccc",
        borderRadius: 3,
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
      }}>
      <Typography
        variant="h4"
        gutterBottom
        fontWeight="bold"
        marginBottom="0.5rem"
        sx={{ padding: "0.6rem", borderRadius: 1, }}
      >
        Sell / Donate Your Books:
      </Typography>
      <form>
        <TextField
          fullWidth
          label="Title of Book"
          margin="normal"
          required
          variant="outlined"
        />

<Grid container spacing={10}>
          <Grid item xs={6}>
            <FormControl fullWidth variant="outlined" margin="normal">
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
                <MenuItem value="competativeExams">Competative Exams</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel id="subcategory-label">Subcategory</InputLabel>
              <Select
                labelId="subcategory-label"
                label="Subcategory"
                value={subcategoryOptions}
                onChange={(e) => setSubcategoryOptions(e.target.value)}
              >
                {subcategoryOptions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container spacing={10}>
          <Grid item xs={6}>
            <FormControl component="fieldset" margin="normal" required>
              <FormLabel component="legend">Type of Transaction</FormLabel>
              <RadioGroup row>
                <FormControlLabel
                  value="Sell"
                  control={<Radio />}
                  label="Sell"
                />
                <FormControlLabel
                  value="Donate"
                  control={<Radio />}
                  label="Donate"
                />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <FormControl component="fieldset" margin="normal" required>
              <FormLabel component="legend">Condition</FormLabel>
              <RadioGroup row>
                <FormControlLabel 
                  value="New" 
                  control={<Radio />} 
                  label="New" 
                />
                <FormControlLabel
                  value="Used"
                  control={<Radio />}
                  label="Used"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
        <TextField
          fullWidth
          label="Publication/Author Name"
          margin="normal"
          variant="outlined"
        />
        <Grid marginBottom={3} container spacing={10}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Edition (Year)"
              type="number"
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel id="book-type-label">Type of Book</InputLabel>
              <Select labelId="book-type-label" label="Type of Book">
                <MenuItem value="Reference Book">Reference Book</MenuItem>
                <MenuItem value="Textbook">Textbook</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <FormControl fullWidth>
          <FormLabel required>Click the box below to upload the cover page!</FormLabel>
          <TextField
            fullWidth
            label=""
            type="file"
            margin="normal"
            variant="outlined"
          />
        </FormControl>

        <Grid container spacing={10} marginBottom={2}>
          <Grid item xs={6}>
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel required id="price-type">Price Type</InputLabel>
              <Select labelId="price-type" label="Price Type">
                <MenuItem value="Fixed">Fixed</MenuItem>
                <MenuItem value="Negotiable">Negotiable</MenuItem>
                <MenuItem value="Price on call">Price on call</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              label="MRP (Rs.)"
              type="number"
              margin="normal"
              variant="outlined"
            />
          </Grid>
        </Grid>

        <FormControl>
          <FormLabel component="legend">Description of Book</FormLabel>
          <TextareaAutosize
            rowsMin={4}
            placeholder=""
            style={{
              width: "1160px",
              height: "130px",
              marginTop: 10,
              marginBottom: 10,
            }}
            variant="outlined"
          />
        </FormControl>
        <TextField
          fullWidth
          label="Your Name"
          margin="normal"
          required
          variant="outlined"
        />
        <Grid container spacing={10}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Mobile No."
              type="number"
              margin="normal"
              variant="outlined"
              required
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              label="City"
              type="text"
              margin="normal"
              variant="outlined"
              required
            />
          </Grid>
        </Grid>
        <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default PostBookForm;
