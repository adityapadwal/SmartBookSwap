import React, { useContext } from "react";
import { TextField } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import axios from "axios";
import { BookDetailsContext } from "../context/BookDetailsContext";
import { useMediaQuery } from "@mui/material";

export default function PhotosUploader({ addedPhotos, onChange }) {
  const isXS = useMediaQuery("(max-width:600px)");
  const isSM = useMediaQuery("(min-width:600px) and (max-width:959px)");
  const isMD = useMediaQuery("(min-width:960px)");

  const {
    publicationOrAuthor,
    typeOfBook,
    transactionType,
    condition,
    description,
    setNextButtonDisabled,
  } = useContext(BookDetailsContext);

  // function for uploading image
  const uploadPhoto = async (e) => {
    const files = e.target.files; // getting user files
    const data = new FormData(); // creating a new form data (built-in javascript object)
    for (let i = 0; i < files.length; i++) {
      data.append("photos", files[i]); // significant when handling the files on the server side.
    }
    // sending photos to AWS S3 for storage
    await axios
      .post("/upload", data, {
        headers: { "Contect-Type": "multipart/form-data" }, // standard content type for handling file uploads through HTTP
      })
      .then((response) => {
        const { data: filenames } = response;
        // adding the photos URLs to the database
        onChange((prev) => {
          return [...prev, ...filenames];
        });
      });

    // handling next button
    setNextButtonDisabled(
      !(
        publicationOrAuthor &&
        typeOfBook &&
        transactionType &&
        condition &&
        description
      )
    );
  };

  // function for setting photo as thumbNail
  function setAsThumbNail(event, fileName) {
    event.preventDefault();
    const addedPhotosWithoutSelected = [
      ...addedPhotos.filter((photo) => photo !== fileName),
    ];
    const newAddedPhotos = [...addedPhotosWithoutSelected];
    newAddedPhotos.unshift(fileName);
    onChange([...newAddedPhotos]);
  }

  // function for deleting photo
  function deletePhoto(event, fileName) {
    onChange([...addedPhotos.filter((photo) => photo !== fileName)]);
  }

  return (
    <>
      {/* Component - File input from user device */}
      <TextField
        sx={{ width: "100%" }}
        label=""
        type="file"
        margin="normal"
        variant="outlined"
        InputProps={{
          // Configure the underlying Input element
          inputComponent: "input",
          inputProps: {
            type: "file",
            multiple: true, // Enable multiple file selection
          },
        }}
        onChange={uploadPhoto}
      />

      {/* Component - Image list */}
      <ImageList
        sx={{ width: "100%", height: isXS ? 70 : isMD ? 175 : 200 }}
        cols={4}
        rowHeight={isXS ? 70 : 175}
      >
        {addedPhotos.length > 0 &&
          addedPhotos.map((link) => (
            <ImageListItem key={link}>
              {/* Image */}
              <img
                srcSet={`${link}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${link}?w=164&h=164&fit=crop&auto=format`}
                alt={"Image not found"}
                loading="lazy"
              />
              {/* Buttons */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                {/* mark as main photo (thumbnail) */}
                <button
                  onClick={(event) => {
                    setAsThumbNail(event, link);
                  }}
                  style={{
                    cursor: "pointer",
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    width: "24px",
                    height: "24px",
                  }}
                >
                  {link === addedPhotos[0] && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                  {link !== addedPhotos[0] && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                  )}
                </button>
                {/* delete photo */}
                <button
                  onClick={(event) => {
                    deletePhoto(event, link);
                  }}
                  style={{
                    cursor: "pointer",
                    color: "white",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    width: "24px",
                    height: "24px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </ImageListItem>
          ))}
      </ImageList>
    </>
  );
}
