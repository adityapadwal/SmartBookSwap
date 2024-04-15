import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Typography,
  Grid,
  Container,
} from "@mui/material";
import BookItem from "./BookItem";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import { useTheme, useMediaQuery } from "@mui/material";
import './bg.css';
import bookGif from '../../assets/gif.gif'
import Cash from '../../assets/cash.gif'
import click from '../../assets/click.gif'
import Login from '../../assets/login.png'
import paid from '../../assets/paid.png'
import adduser from '../../assets/add.png'

const IndexPage = () => {
  const books = [
    {
      category: "Medical",
      name: "Book Title",
      location: "Pune",
      price: "200",
      image:
        "https://d1ysvut1l4lkly.cloudfront.net/B092HQ3WFN/13/image-0-0.jpg",
      type: "fixed",
    },
    {
      category: "Engineering",
      name: "Book Title",
      location: "Pune",
      price: "300",
      type: "fixed",
      image:
        "https://bookcover4u.com/pro/Fantasy-3D-book-cover-design-heart-illustration-valentine-book-covers-with-hearts-sparkle-vintage-fantasy-romantic-chain-moon-rose-curtain-drape-blue-N1553578257B.jpg",
    },
    {
      category: "Engineering",
      name: "Book Title",
      location: "Pune",
      price: "300",
      type: "fixed",
      image:
        "https://d1ysvut1l4lkly.cloudfront.net/B092HQ3WFN/13/image-0-0.jpg",
    },
    {
      category: "Engineering",
      name: "Book Title",
      location: "Pune",
      price: "300",
      type: "fixed",
      image:
        "https://bookcover4u.com/pro/Fantasy-3D-book-cover-design-heart-illustration-valentine-book-covers-with-hearts-sparkle-vintage-fantasy-romantic-chain-moon-rose-curtain-drape-blue-N1553578257B.jpg",
    },
    {
      category: "Engineering",
      name: "Book Title",
      location: "Pune",
      price: "300",
      type: "fixed",
      image:
        "https://d1ysvut1l4lkly.cloudfront.net/B092HQ3WFN/13/image-0-0.jpg",
    },
    {
      category: "Engineering",
      name: "Book Title",
      location: "Pune",
      price: "300",
      type: "fixed",
      image:
        "https://bookcover4u.com/pro/Fantasy-3D-book-cover-design-heart-illustration-valentine-book-covers-with-hearts-sparkle-vintage-fantasy-romantic-chain-moon-rose-curtain-drape-blue-N1553578257B.jpg",
    },
    {
      category: "Engineering",
      name: "Book Title",
      location: "Pune",
      price: "300",
      type: "fixed",
      image:
        "https://d1ysvut1l4lkly.cloudfront.net/B092HQ3WFN/13/image-0-0.jpg",
    },
    {
      category: "Engineering",
      name: "Book Title",
      location: "Pune",
      price: "300",
      type: "fixed",
      image:
        "https://bookcover4u.com/pro/Fantasy-3D-book-cover-design-heart-illustration-valentine-book-covers-with-hearts-sparkle-vintage-fantasy-romantic-chain-moon-rose-curtain-drape-blue-N1553578257B.jpg",
    },
    {
      category: "Engineering",
      name: "Book Title",
      location: "Pune",
      price: "300",
      type: "fixed",
      image:
        "https://d1ysvut1l4lkly.cloudfront.net/B092HQ3WFN/13/image-0-0.jpg",
    },
    {
      category: "Engineering",
      name: "Book Title",
      location: "Pune",
      price: "300",
      type: "fixed",
      image:
        "https://bookcover4u.com/pro/Fantasy-3D-book-cover-design-heart-illustration-valentine-book-covers-with-hearts-sparkle-vintage-fantasy-romantic-chain-moon-rose-curtain-drape-blue-N1553578257B.jpg",
    },
    {
      category: "Engineering",
      name: "Book Title",
      location: "Pune",
      price: "300",
      type: "fixed",
      image:
        "https://d1ysvut1l4lkly.cloudfront.net/B092HQ3WFN/13/image-0-0.jpg",
    },
  ];

  // Initialize state for selected category
  const [selectedCategory, setSelectedCategory] = useState("");
  const [activeNav, setActiveNav] = useState('#');


  return (
    <Box>
      <div className="sell">
        <h1 className="sell_h1" style={{}}> Have old <span className="span_sell_1"> Books </span><img src={bookGif} style={{ height: '5rem', marginBottom: '-1rem' }} alt="" />? Why not <span className="span_sell_2"> Sell </span> it to earn some<span className="span_sell_3"> Money </span><img src={Cash} style={{ height: '5rem', marginBottom: '-1rem' }} alt="" /> </h1>

        <Grid container>
          <Grid item xs={0} md={2} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
          </Grid>
          <Grid item xs={12} md={8}>
            <h3 className="sell_h3">Transform your cluttered bookshelves into cash by selling your used educational books directly to fellow knowledge seekers like yourself.</h3>
          </Grid>
          <Grid item xs={0} md={2}>
          </Grid>
        </Grid>

        <h2 className="sell_h2">Turn your old reads into real Money in your account! <a href="#steps" onClick={() => setActiveNav('#steps')} className={activeNav === '#steps' ? 'active' : ''}><Button variant="contained">Know More</Button></a></h2>
      </div>

      <div className="bg" style={{ paddingTop: "2px" }}>

        {/* buy book div */}
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "column", md: "row" }}
          alignItems={{ xs: "center", sm: "center", md: "center" }}
          justifyContent={{
            xs: "center",
            sm: "center",
            md: "space-between",
          }}
          height={{ xs: "auto", sm: "auto", md: "auto" }}
          padding={5}
          boxShadow={4}
          borderRadius={3}
          margin={8.5}
          marginTop={14.5}
          backgroundColor="#ffffff"
        >
          {/* Left Box - Title and Description */}
          <Box
            width={{ xs: "100%", sm: "100%", md: "50%" }}
            textAlign="left"
            marginTop={{ xs: 0, md: 0 }}
            marginRight={{ xs: 0, md: "2rem" }}
          >
            <Typography
              variant="h4"
              gutterBottom
              fontWeight="bold"
              marginBottom="2rem"
            >
              <span className="span_buy_1"> Buy </span> Affordable second hand books just a click away! <img src={click} style={{ height: '5rem', marginBottom: '-2rem' }} alt="" />
            </Typography>
            <Typography
              paragraph
              fontWeight={450}
              marginBottom="4rem"
              marginTop="4rem"
            >
              <span className="" style={{ fontStyle: 'normal', color: 'black', fontSize: '30px' }} >W</span>elcome to <span className="span_buy_2"> SmartBookSwap </span> – Your Smarter Way to Access Essential
              Educational Resources!
            </Typography>
            <Typography marginBottom="2rem">
              Say goodbye to the hassle of traditional bookshops and brokers –
              here, you can easily Buy, Sell, or Donate essential study materials
              at affordable rates from your peers or nearby sellers.
            </Typography>
          </Box>

          {/* Right Box - Search Form */}
          <Box
            width={{ xs: "90%", sm: "92%", md: "30%" }}
            height={{ xs: "auto", sm: "auto", md: "350px" }}
            padding={3}
            border="1px solid #ccc"
            borderRadius={3}
            boxShadow={6}
            marginBottom={{ xs: "16px", sm: "16px", md: 0 }}
          // Remove margin property
          >
            <Typography variant="h6" gutterBottom>
              Search Books Here!
            </Typography>
            <TextField
              label="Title"
              sx={{ width: "100%" }}
              margin="normal"
              variant="outlined"
            />
            <FormControl
              sx={{ width: "100%" }}
              variant="outlined"
              margin="normal"
            >
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                labelId="category-label"
                label="Category"
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value)}
              >
                {/* Your MenuItem options */}
              </Select>
            </FormControl>

            <TextField
              label="Location"
              sx={{ width: "100%" }}
              margin="normal"
              variant="outlined"
            />
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: "16px", width: "100%" }}
              component={Link}
              to={`/`}
            >
              Search
            </Button>
          </Box>
        </Box>

        <section className="stepss" id="steps"> 
          <Container>
            <h1 style={{ textAlign: 'center', fontSize: '35px', padding: '2rem 2rem 0rem 2rem', fontWeight: 'lighter' }}>How do I go about selling my book on the SmartBookSwap platform?</h1>
            <h2 style={{ textAlign: 'center', fontStyle: 'italic', paddingBottom:'2rem' }}>" Just follow the below 3 Steps "</h2>
            <Grid container spacing={4}>

              <Grid item xs={12}  md={4} sx={{margin:{xs:'2rem', md:'0rem'}}}>
                <div className="step">
                  <div className="step-number"><img className="image" src={Login} alt="" /></div>
                  <div className="step-info" style={{ padding: ' 0rem 1rem' }}>
                    <h2 style={{ fontFamily: 'fantasy', fontWeight: 'lighter' }}>I. Sign Up User</h2>
                    <p style={{ padding: ' 0rem 1rem', fontSize: '17px' }}>Create an account on our platform or login if you have ur account to start selling your books.</p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12}  md={4} sx={{margin:{xs:'2rem', md:'0rem'}}}>
                <div className="step">
                  <div className="step-number"><img className="image" src={adduser} alt="" /></div>
                  <div className="step-info" style={{ padding: ' 0rem 1rem' }}>
                    <h2 style={{ fontFamily: 'fantasy', fontWeight: 'lighter' }}> II. List Your Book</h2>
                    <p style={{ padding: ' 0rem 1rem', fontSize: '17px' }}>Upload details about the books you want to sell, including images and descriptions.</p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12}  md={4} sx={{margin:{xs:'2rem', md:'0rem'}}}>
                <div className="step">
                  <div className="step-number"><img className="image" src={paid} alt="" /></div>
                  <div className="step-info" style={{ padding: ' 0rem 1rem' }}>
                    <h2 style={{ fontFamily: 'fantasy', fontWeight: 'lighter' }}>III. Get Paid</h2>
                    <p style={{ padding: ' 0rem 1rem', fontSize: '17px' }}>Once your books are sold, receive payments securely through our platform.</p>
                  </div>
                </div>
              </Grid>

            </Grid>
          </Container>
          
        </section>

        {/* Cards for Books */}
        <Box>
          <Typography
            marginLeft="35px"
            variant="h4"
            fontWeight="bold"
            gutterBottom
            textAlign="center"
            marginTop="30px"
            sx={{
              fontSize: {
                xs: "20px",
                sm: "22px",
                md: "22px",
                lg: "30px",
              },
            }}
          >
            Your Gateway to Knowledge: Featured Books Await!
          </Typography>
          <Box
            margin={"auto"}
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
            padding={"13px"}
          >
            {books &&
              books.slice(0, 8).map((book, index) => (
                <Box margin={"auto"} key={index} padding="10px">
                  <BookItem
                    image={book.image}
                    category={book.category}
                    name={book.name}
                    location={book.location}
                    price={book.price}
                    type={book.type}
                  />
                </Box>
              ))}
          </Box>
        </Box>

        {/* Footer */}
        <Footer />
      </div>



    </Box>
  );
};

export default IndexPage;
