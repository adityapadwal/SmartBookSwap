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
    const [addedPhotos, setAddedPhotos] = useState([]);
    const [priceType, setPriceType] = useState("");
    const [mrp, setMrp] = useState(0);
    const [description, setDescription] = useState("");
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
                addedPhotos, setAddedPhotos,
                priceType, setPriceType,
                mrp, setMrp,
                description, setDescription,
                nextButtonDisabled, setNextButtonDisabled,
                isFormSubmitted, setFormSubmitted,
        }}>
            {children}
        </BookDetailsContext.Provider>
    );
};