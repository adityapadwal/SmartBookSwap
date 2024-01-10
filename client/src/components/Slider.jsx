import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";

const Slider = () => {
  const sliderItems = [
    {
      title: "Medical",
      popular: ["MBBS", "BHMS", "Pharmacy", "Dental"],
      link: "/medical",
    },
    {
      title: "Engineering",
      popular: ["Civil", "Computer", "Mechanical", "Electrical", "etc."],
      link: "",
    },
    {
      title: "Government Jobs",
      popular: ["Banking", "UPSC", "MPSC"],
      link: "",
    },
    {
      title: "Internatinal Exams",
      popular: ["GRE", "SAT", "GMAT"],
      link: "",
    },
    {
      title: "Science & Arts",
      popular: ["BCA", "MCA", "BSC", "MSC", "BA", "MA"],
      link: "",
    },
    {
      title: "Higher Secondary Education",
      popular: ["NCRET", "MSBSHSE", "CBSC"],
      link: "",
    },
    {
      title: "Seconadry School",
      popular: ["NCRET", "MSBSHSE", "ICSC", "CBSC", "Olympiads"],
      link: "",
    },
    {
      title: "Other",
      popular: ["MBA", "Law", "PHD", "BBA", "B.Com"],
      link: "",
    },
  ];

  const itemsPerPage = 4;

  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const chunkedSliderItems = chunkArray(sliderItems, itemsPerPage);
  return (
    <Box borderRadius={5} marginLeft={8} position="relative">
      <Carousel animation="slide" autoPlay={false} navButtonsAlwaysVisible>
        {chunkedSliderItems.map((chunk, chunkIndex) => (
          <Box
            key={chunkIndex}
            width="95%"
            height={300}
            display="flex"
            flexDirection="row"
            justifyContent="space-around"
            alignItems="center"
            border="1px solid #ccc"
            boxShadow={2}
            marginBottom={3}
            className="box-inside-slider"
          >
            {chunk.map((item, itemIndex) => (
              <Box
                key={itemIndex}
                width="30%"
                textAlign="center"
                height="100%"
                backgroundColor={itemIndex % 2 === 0 ? "#2258ae" : "white"}
              >
                <Typography
                  variant="h4"
                  gutterBottom
                  style={{ color: itemIndex % 2 === 0 ? "white" : "black" }}
                >
                  {item.title}
                </Typography>
                <Typography
                  marginTop={2}
                  variant="body1"
                  style={{ color: itemIndex % 2 === 0 ? "white" : "black" }}
                >
                  {item.popular.join(", ")}
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  href={`http://localhost:5173${item.link}`}
                  style={{
                    marginTop: "30px",
                    color: itemIndex % 2 === 0 ? "white" : "black",
                    border: `1px solid ${
                      itemIndex % 2 === 0 ? "white" : "black"
                    }`,
                  }}
                >
                  View All
                </Button>
              </Box>
            ))}
          </Box>
        ))}
      </Carousel>
      <style>{`
          .css-1abc02a {
            right: 4.5rem !important;
          }
          .css-1vw6mcs-MuiTypography-root {
            margin-top: 4rem;
          }
        `}</style>
    </Box>
  );
};

export default Slider;
