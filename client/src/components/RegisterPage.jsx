import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import {
    Box,
    Button,
    Dialog,
    IconButton,
    TextField,
    Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import axios from "axios";

const RegisterPage = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const [name, setName] = useState(""); // form input
    const [email, setEmail] = useState(""); // form input
    const [password, setPassword] = useState(""); // form input
    const [redirect, setRedirect] = useState(false); // redirecting to login after successful registration

    const isEmailValid = (email) => {
        return email.includes("@gmail.com");
    };

    const isFormValid = () => {
        return (
            name.trim() !== "" &&
            email.trim() !== "" &&
            password.trim() !== "" &&
            isEmailValid(email)
        );
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            await axios.post('/register', {
                name, 
                email, 
                password
            });
            
            alert('Registration Successful! Now you can log in!');
            setRedirect(true);
        } catch (event) {
            alert("Registration Failed! Please try again later!");
        }
    };

    const handleSwitchPage = () => {
        navigate("/login");
    };

    const handleClose = () => {
        navigate("/");
    };

    if(redirect) {
        return <Navigate to={'/login'} />
    }

    const formWidth = isSmallScreen ? "90%" : 350;

    return (
        <Dialog
            PaperProps={{ style: { borderRadius: 13, marginTop: "6rem" } }}
            open={true}
        >
            <Box sx={{ ml: "auto", p: 1 }}>
                <IconButton onClick={handleClose}>
                    <CloseRoundedIcon />
                </IconButton>
            </Box>
            <Typography variant="h5" textAlign="center">
                Register
            </Typography>
            <form onSubmit={handleSubmit}>
                <Box
                    p={3}
                    display="flex"
                    flexDirection="column"
                    width={formWidth}
                    margin="auto"
                >
                    <TextField
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        margin="normal"
                        variant="standard"
                        type="text"
                        name="name"
                        label="Name"
                    />

                    <TextField
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        margin="normal"
                        variant="standard"
                        type="email"
                        name="email"
                        label="Email"
                    />

                    <TextField
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        margin="normal"
                        variant="standard"
                        type="password"
                        name="password"
                        label="Password"
                    />
                    <Button
                        disabled={!isFormValid()}
                        sx={{
                            mt: 2,
                            borderRadius: 8,
                            bgcolor: "#1976d2",
                            fontSize: "0.9rem",
                            "&:focus": {
                                border: "none",
                                outline: "none",
                            },
                            "&:active": {
                                border: "none",
                                outline: "none",
                            },
                            "&:hover": {
                                bgcolor: "#5c8dd0",
                            },
                        }}
                        variant="contained"
                        type="submit"
                        fullWidth
                    >
                        Signup
                    </Button>
                    <Typography
                        component="p"
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 1, textAlign: "center" }}
                    >
                        Have an account?{" "}
                        <Button
                            onClick={handleSwitchPage}
                            color="primary"
                            sx={{
                                fontSize: "0.8rem",
                                textTransform: "none",
                                "&:focus": {
                                    border: "none",
                                    outline: "none",
                                },
                                "&:active": {
                                    border: "none",
                                    outline: "none",
                                },
                            }}
                        >
                            Login
                        </Button>
                    </Typography>
                </Box>
            </form>
        </Dialog>
    );
};

export default RegisterPage;
