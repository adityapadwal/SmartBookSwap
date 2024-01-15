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
    const [confirmPassword, setConfirmPassword] = useState(""); // form input
    const [errorMessage, setErrorMessage] = useState(""); // handling error msgs
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        try {
            if (password !== confirmPassword) {
                setErrorMessage("Passwords do not match");
                return;
            }

            await axios.post('/register', {
                name,
                email,
                password
            });
            setRedirect(true);
        } catch (error) {
            if (error.response) {
                setErrorMessage(`Registration Failed: ${error.response.data}`);
            } else {
                setErrorMessage("Registration Failed. Please try again later!");
            }
        }
    };

    const handleSwitchPage = () => {
        navigate("/login");
    };

    const handleClose = () => {
        navigate("/");
    };

    if (redirect) {
        return <Navigate to={'/login'} />
    }

    return (
        <Dialog
            PaperProps={{ style: { borderRadius: 13, marginTop: "6rem" } }}
            open={true}
        >
            <Box 
                sx={{ p: 1 }}
                width={isSmallScreen ? "300px" : "400px"}
            >
                <IconButton onClick={handleClose}>
                    <CloseRoundedIcon />
                </IconButton>
            </Box>
            <Typography variant="h5" textAlign="center">
                Register
            </Typography>
            <form onSubmit={handleSubmit}>
                <Box
                    p={isSmallScreen ? 2 : 3}
                    display="flex"
                    flexDirection="column"
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
                        required
                    />

                    <TextField
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        margin="normal"
                        variant="standard"
                        type="email"
                        name="email"
                        label="Email"
                        required
                    />

                    <TextField
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        margin="normal"
                        variant="standard"
                        type="password"
                        name="password"
                        label="Password"
                        required
                    />

                    <TextField
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        margin="normal"
                        variant="standard"
                        type="password"
                        name="confirmPassword"
                        label="Confirm Password"
                        required
                    />

                    {errorMessage && (
                        <Typography
                            variant="body2"
                            color="error"
                            sx={{
                                mt: 1,
                                textAlign: "center",
                                backgroundColor: "#FFEBEE",
                                border: "1px solid #FFCDD2",
                                borderRadius: "8px",
                                padding: "8px",
                                "&:hover": {
                                    backgroundColor: "#FFCDD2",
                                },
                            }}
                        >
                            {errorMessage}
                        </Typography>
                    )}

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
                        Register
                    </Button>
                    <Typography
                        component="p"
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
