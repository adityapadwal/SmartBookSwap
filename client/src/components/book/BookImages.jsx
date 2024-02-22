import * as React from "react";
import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const BookImages = () => {
  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
      rows: 2,
      cols: 2,
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
      cols: 2,
    },
  ];

  return (
    <div
      style={{
        padding: "1rem 1rem 0.5rem 1rem",
        backgroundColor: "white",
        border: "1px solid #ccc",
        borderRadius: "8px",
        transition: "background-color 0.5s ease, box-shadow 0.5s ease",
        boxShadow: "0 3px 3px rgba(0, 0, 0, 0.4)",
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
      <img
        {...srcset(itemData[0].img, 300, itemData[0].rows, 2)}
        alt={itemData[0].title}
        loading="lazy"
        style={{
          width: "100%",
          height: "378px",
          transition: "transform 0.5s ease, opacity 1s ease",
          opacity: "1",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = "scale(0.9)";
          e.currentTarget.style.opacity = "0.7";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.opacity = "1";
        }}
      />
      {/* Small Images (visible only on small screens) */}
      <Box
        sx={{
          display: { xs: "flex" },
          flexDirection: "row",
          margin: "2px 0 0 0",
        }}
      >
        {itemData.slice(1).map((item) => (
          <a
            key={item.img}
            href={item.img}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              display: "inline-block",
              opacity: "1",
              transition: "opacity 0.5s ease",
              margin: "2px",
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = "0.7")}
            onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <img
              {...srcset(item.img, 150, item.rows, 1)}
              alt={item.title}
              loading="lazy"
              style={{
                width: "90%",
                height: "auto",
                margin: "5px",
                marginTop: "1rem",
                transition: "transform 0.5s ease, opacity 0.5s ease",
                opacity: "1",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "scale(0.9)";
                e.currentTarget.style.opacity = "0.7";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.opacity = "1";
              }}
            />
          </a>
        ))}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <span
          style={{
            cursor: "pointer",
            textDecoration: "underline",
            color: "#1a73e8ff",
          }}
          onClick={() => {
            console.log("Redirect to all images page!");
          }}
        >
          See more images
        </span>
      </Box>
    </div>
  );
};

export default BookImages;
