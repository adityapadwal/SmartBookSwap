import React from 'react'
import { useState, createContext } from "react";

export const BookDetailsContext = createContext({});
export function BookDetailsContextProvider({ children }) {

    // state variables
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [subcategory, setSubcategory] = useState("");
    const [subcategoryOptions, setSubcategoryOptions] = useState([]);
    const [publicationOrAuthor, setPublicationOrAuthor] = useState("");
    const [editionYear, setEditionYear] = useState(0);
    const [typeOfBook, setTypeOfBook] = useState("");
    const [transactionType, setTransactionType] = useState("");
    const [condition, setCondition] = useState("");
    const [coverImage, setCoverImage] = useState("");
    const [priceType, setPriceType] = useState("");
    const [mrp, setMrp] = useState(0);
    const [description, setDescription] = useState("");
    const [userName, setUserName] = useState("");
    const [mobileNo, setMobileNo] = useState(0);
    const [city, setCity] = useState("");
    const [nextButtonDisabled, setNextButtonDisabled] = useState(true);
    const [isFormSubmitted, setFormSubmitted] = useState(false);

    return (
        <BookDetailsContext.Provider 
            value={{ 
                title, setTitle, 
                category, setCategory, 
                subcategory, setSubcategory,  
                subcategoryOptions, setSubcategoryOptions,
                publicationOrAuthor, setPublicationOrAuthor,
                editionYear, setEditionYear,
                typeOfBook, setTypeOfBook,
                transactionType, setTransactionType,
                condition, setCondition,
                coverImage, setCoverImage,
                priceType, setPriceType,
                mrp, setMrp,
                description, setDescription,
                userName, setUserName,
                mobileNo, setMobileNo,
                city, setCity,
                nextButtonDisabled, setNextButtonDisabled,
                isFormSubmitted, setFormSubmitted,
        }}>
            {children}
        </BookDetailsContext.Provider>
    );
};