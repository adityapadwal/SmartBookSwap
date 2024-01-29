import axios from 'axios';
import React from 'react'
import { createContext } from "react";
import { useState, useEffect } from 'react';

export const UserContext = createContext({});
export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        if (!user) {
            axios
                .get('/profile')
                .then(({ data }) => {
                    setUser(data);
                    setReady(true);
                });
        }
    }, []);

    return (
        <UserContext.Provider value={{ ready, user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const EditUserContext = createContext({});
export function EditUserContextProvider({ children }) {
    const [readOnly, setReadOnly] = useState(true);
    const [editedName, setEditedName] = useState('');
    const [editedPhone, setEditedPhone] = useState('');
    const [editedLocation, setEditedLocation] = useState('');

    useEffect(() => {
        let isMounted = true;
        axios
            .get('/profile')
            .then(({ data }) => {
                if (isMounted && data) {
                    setEditedName(data.name || '');
                    setEditedPhone(data.phone || '');
                    setEditedLocation(data.address || '');
                }
            })
            .catch(error => {
                console.error('Error fetching profile data', error);
            });
        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <EditUserContext.Provider value={{ readOnly, setReadOnly, editedName, setEditedName, editedPhone, setEditedPhone, editedLocation, setEditedLocation }}>
            {children}
        </EditUserContext.Provider>
    );
};
