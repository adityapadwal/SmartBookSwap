import React, { useContext, useState } from "react";
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
import { UserContext } from "./UserContext";

const LoginPage = () => {

    // functions
    const navigate = useNavigate();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    // state variables
    const [email, setEmail] = useState(""); // form input
    const [password, setPassword] = useState(""); // form input
    const [redirect, setRedirect] = useState(false); // redirect to '/' after successful login
    const [errorMessage, setErrorMessage] = useState(""); // handling error msgs
    const { setUser } = useContext(UserContext);

    const isEmailValid = (email) => {
        return email.includes("@gmail.com");
    };
    const isFormValid = () => {
        return (email.trim() !== "" && password.trim() !== "" && isEmailValid(email));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        try {
            const { data } = await axios.post('/login', {
                email,
                password
            });
            setUser(data);
            setRedirect(true);
        } catch (error) {
            if (error.response) {
                setErrorMessage(`Login Failed: ${error.response.data}`);
            } else {
                setErrorMessage("Login Failed. Please check your internet connection.");
            }
        }
    };

    const handleForgotPassword = () => {
        navigate("/reset-password");
    };

    const handleSwitchPage = () => {
        navigate("/register");
    };
    const handleClose = () => {
        navigate("/");
    };
    if (redirect) {
        return <Navigate to={'/'} />
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
                Login
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
                        Login
                    </Button>
                    <Typography
                        component="p"
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 1, textAlign: "center" }}
                    >
                        <Button
                            onClick={handleForgotPassword}
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
                            Forgot your password?
                        </Button>
                    </Typography>
                    <Typography
                        component="p"
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 1, textAlign: "center" }}
                    >
                        Don't have an account?{" "}
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
                            Register
                        </Button>
                    </Typography>
                </Box>
            </form>
        </Dialog>
    );
};

export default LoginPage;