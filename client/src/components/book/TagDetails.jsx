import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import axios from "axios";

import { useMediaQuery } from "@mui/material";

const TagDetails = ({ book, user, id }) => {
  // Get today's date
  const today = new Date();

  // Add 7 days to today's date
  const deliveryDate = new Date();
  deliveryDate.setDate(today.getDate() + 7);

  // Format the date as a string (adjust the format as needed)
  const formattedDeliveryDate = deliveryDate.toDateString();

  const buttonStyles = {
    common: {
      padding: "10px 20px",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",
      borderRadius: "5px",
      margin: "3px",
      textAlign: "center",
      textDecoration: "none",
      display: "inline-block",
      transition: "background-color 0.3s",
      marginTop: "1.5rem",
      color: "#fff",
      width: "100%", // Set a fixed width for all buttons
    },
    negotiate: {
      backgroundColor: "#f39c12", // Yellow shade
      border: "1px solid #d68910",
    },
    addToCart: {
      backgroundColor: "#2ecc71", // Green shade
      border: "1px solid #27ae60",
    },
    removeFromCart: {
      backgroundColor: "#c73c3c",
      border: "1px solid #c41616"
    },
    buyNow: {
      backgroundColor: "#3498db", // Blue shade
      border: "1px solid #2980b9",
    },
  };

  const isXS = useMediaQuery("(max-width:600px)");
  const isSM = useMediaQuery("(min-width:600px) and (max-width:959px)");
  const isMD = useMediaQuery("(min-width:960px)");
  
  // state variables
  const [redirect, setRedirect] = useState(false); // for redirection to cart
  const [bookInCart, setBookInCart] = useState(false);
  const [chatRedirect, setChatRedirect] = useState(false);

  // useEffect hook
  useEffect(() => {
    axios.get(`/check-in-cart/${id}`)
      .then((response)=> {
        if(response.data.success === true) {
          // console.log(response.data) debugging...
          const isBookPresent = response.data.isBookInCart;
          // console.log(response.data.isBookInCart); debugging...
          setBookInCart(isBookPresent);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [bookInCart]);

  // adding product to cart
  async function addToCart() {
    try {
      const productId = book._id;
      await axios.post("/cart", {productId});
      setBookInCart(true);
    } catch (error) {
      console.log(error);
    }
    // redirect to cart page 
    // setRedirect(true);
  }

  // removing product from cart
  function removeFromCart() {
    const productId = id;
    axios
      .post('/remove-from-cart', { productId })
      .then((response) => {
        if (response.data.success) {
          setBookInCart(false);
        } else {
          console.error("Failed to remove product from cart:", response.data.error);
        }
      });
  }

  // buying product (add to cart and redirect)
  function buyProduct() {
    if(bookInCart) {
      setRedirect(true);
    } else {
      addToCart();
      setRedirect(true);
    }
  }

  // redirect to the cart after adding product to cart
  if(redirect === true) {
    return <Navigate to={'/cart'} />
  } 

  // function to redirect user to messaging system
  if(chatRedirect === true) {
    return <Navigate to={'/chat'} />
  }

  return (
    <div>
      <div
        style={{
          padding: "0.3rem 1rem 0.5rem 1rem",
          margin: isXS
            ? "0 0 1rem 0"
            : isSM
              ? "0 1rem 1rem 1rem"
              : "0 1rem 1rem 1rem",

          backgroundColor: "white", //#deeafe
          // border: '1px solid grey',
          transition: "background-color 0.5s ease, box-shadow 0.5s ease",
          borderRadius: "8px",
          boxShadow: "0 3px 3px rgba(0, 0, 0, 0.4)",
          height: "340px",
          width: isXS ? "" : isSM ? "335px" : "335px",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = "white";
          e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.5)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = "white";
          e.currentTarget.style.boxShadow = "0 3px 3px rgba(0, 0, 0, 0.4)";
        }}
      >
        <Box sx={{ margin: "1rem 0 1rem 0", padding: "2rem", height: "auto" }}>
          <h1 style={{ margin: "-1rem 0 5px 0" }}>
            <span
              style={{ fontSize: isXS ? "1.4rem" : isSM ? "1.6rem" : "1.8rem" }}
            >
              {/* book mrp */}
              {book.mrp === 0 ? "Free" : "₹ " + book.mrp}{" "}
            </span>
            <span style={{ fontSize: isXS ? "14px" : isSM ? "16px" : "20px" }}>
              {/* book price type */}
              {book.priceType !== "" ? "(" + book.priceType + ")" : ""}
            </span>
          </h1>
          <h3 style={{ color: "green", margin: "6px 0 5px 0" }}>Available</h3>
          <div>
            {/* Chat with seller */}
            <button
              onClick={() => {setChatRedirect(true)}}
              style={{ ...buttonStyles.common, ...buttonStyles.negotiate }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#f2bb22";
                // e.currentTarget.style.boxShadow =
                //  "6px 6px 6px rgb(201, 151, 12)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#f39c12";
                e.currentTarget.style.boxShadow =
                  "0 0px 0px rgba(0, 0, 0, 0.0)";
              }}
            >
              chat with seller
            </button>
            {/* Add to Cart */}
            {
            bookInCart ? 
            <button
              onClick={removeFromCart}
              style={{ ...buttonStyles.common, ...buttonStyles.removeFromCart }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#c41616";
                // e.currentTarget.style.boxShadow = "6px 6px 6px rgb(3, 94, 12)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#c73c3c";
                e.currentTarget.style.boxShadow =
                  "0 0px 0px rgba(0, 0, 0, 0.0)";
              }}
            >
              Remove From Cart
            </button>
            : 
            <button
              onClick={addToCart}
              style={{ ...buttonStyles.common, ...buttonStyles.addToCart }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#16c427";
                // e.currentTarget.style.boxShadow = "6px 6px 6px rgb(3, 94, 12)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#2ecc71";
                e.currentTarget.style.boxShadow =
                  "0 0px 0px rgba(0, 0, 0, 0.0)";
              }}
            >
              Add to Cart
            </button>
            }
            
            {/* Buy Now */}
            <button
              onClick={buyProduct}
              style={{ ...buttonStyles.common, ...buttonStyles.buyNow }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#2ebcf0";
                // e.currentTarget.style.boxShadow =
                //   "6px 6px 6px rgb(14, 120, 158)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#3498db";
                e.currentTarget.style.boxShadow =
                  "0 0px 0px rgba(0, 0, 0, 0.0)";
              }}
            >
              Buy Now
            </button>
          </div>
        </Box>
      </div>

      <div
        style={{
          backgroundColor: "white",
          transition: "background-color 0.5s ease, box-shadow 0.5s ease",
          marginBottom: "0rem",
          textAlign: "center",
          padding: isXS
            ? "0.5rem 1rem 0 1rem"
            : isSM
              ? "0.3rem 1rem 0.4rem 1rem"
              : "0.3rem 1rem 0.4rem 1rem",
          margin: isXS
            ? ""
            : isSM
              ? "1.5rem 1rem 1rem 1rem"
              : "1.5rem 1rem 1rem 1rem",
          height: isXS ? "160px" : isSM ? "180px" : "180px",
          width: isXS ? "" : isSM ? "335px" : "335px",
          borderRadius: "8px",
          boxShadow: "0 3px 3px rgba(0, 0, 0, 0.4)",
        }}
        onMouseOver={(e) => {
          // Apply hover styles on mouse over
          e.currentTarget.style.backgroundColor = "white";
          e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.5)";
        }}
        onMouseOut={(e) => {
          // Revert to initial styles on mouse out
          e.currentTarget.style.backgroundColor = "white";
          e.currentTarget.style.boxShadow = "0 3px 3px rgba(0, 0, 0, 0.4)";
        }}
      >
        <h2
          style={{
            fontSize: isXS ? "20px" : isSM ? "25px" : "",
            margin: "0.6rem 6px -8px 0px",
          }}
        >
          Sold By :{" "}
        </h2>

        <p style={{ fontSize: isXS ? "14px" : isSM ? "16px" : "20px" }}>
          <PersonIcon
            style={{
              margin: "-1px 6px -6px 0px",
              color: "#2258ae",
              fontSize: isXS ? "1.5rem" : isSM ? "1.8rem" : "2rem",
            }}
          />
          {/* seller name */}
          <span> {user.name} </span>
        </p>
        <p
          style={{
            fontSize: isXS ? "14px" : isSM ? "16px" : "20px",
            margin: "-10px 0 18px 0",
          }}
        >
          {" "}
          <LocationOnOutlinedIcon
            style={{
              margin: "-1px 6px -6px 0px",
              color: "#2258ae",
              fontSize: isXS ? "1.5rem" : isSM ? "1.8rem" : "2rem",
            }}
          />{" "}
          {/* seller address */}
          {user.address}{" "}
        </p>
        <a
          href={"https://maps.google.com/?q=" + user.address}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
          }}
        >
          <Button
            variant="outlined"
            color="primary"
            style={{ padding: "6px 8px", fontSize: "13px" }}
          >
            Search Location on Map
          </Button>
        </a>
      </div>
    </div>
  );
};

export default TagDetails;
