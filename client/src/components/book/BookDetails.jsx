import React from "react";
import { useMediaQuery } from "@mui/material";

const BookDetails = ({book}) => {
  const isXS = useMediaQuery("(max-width:600px)");
  const isSM = useMediaQuery("(min-width:600px) and (max-width:959px)");
  const isMD = useMediaQuery("(min-width:960px)");

  return (
    <div style={{}}>
      <div
        style={{
          padding: "0.3rem 1.5rem 1rem 1.5rem",
          backgroundColor: "white",
          transition: "background-color 0.5s ease, box-shadow 0.5s ease",
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
        <h1
          style={{
            fontSize: isXS ? "25px" : isSM ? "30px" : "",
            margin: "10px 0px 20px 0px",
          }}
        >
          {/* book title */}
          {book.title}
        </h1>
        <p
          style={{
            margin: "-10px 0px 10px 0px",
            fontSize: isXS ? "14px" : isSM ? "16px" : "20px",
          }}
        >
          {" "}
          {/* book category and subcategory */}
          <i>{book.category} </i> | <i> {book.subcategory}</i>
        </p>
      </div>

      <div
        style={{
          padding: "0.3rem 1.5rem 1rem 1.5rem",
          marginTop: "20px",
          backgroundColor: "white",
          transition: "background-color 0.5s ease, box-shadow 0.5s ease",
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
        <h2 style={{ fontSize: isXS ? "20px" : isSM ? "25px" : "" }}>
          Book Details:
        </h2>
        <ul
          style={{
            margin: "-5px 0px 0px -5px",
            fontSize: isXS ? "14px" : isSM ? "16px" : "20px",
          }}
        >
          <li style={{ marginBottom: "-10px" }}>
            {/* book publication/author */}
            Publication / Author : <b> {book.publicationOrAuthor} </b>{" "}
          </li>
          <br />
          <li style={{ marginBottom: "-10px" }}>
            {" "}
            {/* book edition */}
            Edition : <b> {book.editionYear} </b>{" "}
          </li>
          <br />
          <li style={{ marginBottom: "-10px" }}>
            {" "}
            {/* book type */}
            Type: <b> {book.typeOfBook} </b>{" "}
          </li>
          <br />
          <li style={{ marginBottom: "-10px" }}>
            {" "}
            {/* book condition */}
            Condition: <b> {book.condition} </b>{" "}
          </li>
          <br />
        </ul>
      </div>

      <div
        style={{
          padding: "0.3rem 1.5rem 1rem 1.5rem",
          marginTop: "20px",
          backgroundColor: "white",
          transition: "background-color 0.5s ease, box-shadow 0.5s ease",
          borderRadius: "8px",
          boxShadow: "0 3px 3px rgba(0, 0, 0, 0.4)",
          height: isXS ? "" : isSM ? "172px" : "183px",
          width: "100",
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
        <h2 style={{ fontSize: isXS ? "20px" : isSM ? "25px" : "" }}>
          {" "}
          Description:{" "}
        </h2>
        <p
          style={{
            fontSize: isXS ? "14px" : isSM ? "16px" : "20px",
            margin: "-5px 0px 0.5rem 0px",
          }}
        >
          {/* book description */}
          {book.description}
        </p>
      </div>
    </div>
  );
};

export default BookDetails;
