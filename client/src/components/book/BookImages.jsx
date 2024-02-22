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

const BookImages = ({book}) => {
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
      {/* Displaying first image */}
      <img
        {...srcset(book.photos[0], 300, 2, 2)}
        alt={"Image 1"}
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
        {/* Displaying rest of the images */}
        {book.photos.slice(1, 4).map((item) => (
          <a
            key={item}
            href={item}
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
              {...srcset(item, 150, 1, 1)}
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
