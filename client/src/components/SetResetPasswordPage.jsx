import React, { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
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

const SetResetPasswordPage = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const [email, setEmail] = useState(""); // form input
    const [newPassword, setNewPassword] = useState(""); // form input
    const [confirmNewPassword, setConfirmNewPassword] = useState(""); // form input
    const [errorMessage, setErrorMessage] = useState(""); // handling error msgs
    const [redirect, setRedirect] = useState(false); // redirecting to login after successful password reset

    // Use useParams to capture resetToken from the URL
    const { token } = useParams();

    const isEmailValid = (email) => {
        return email.includes("@gmail.com");
    };

    const isFormValid = () => {
        return (
            email.trim() !== "" &&
            newPassword.trim() !== "" &&
            confirmNewPassword.trim() !== "" &&
            isEmailValid(email)
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");

        try {
            if(newPassword !== confirmNewPassword) {
                setErrorMessage("Passswords do not match");
                return;
            }

            await axios.post(`/reset-password/${token}`, {
                email, 
                newPassword,
            });
            alert('Password updated successfully!');
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
                Reset Password
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
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        margin="normal"
                        variant="standard"
                        type="password"
                        name="newPassword"
                        label="New password"
                        required
                    />

                    <TextField
                        value={confirmNewPassword}
                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                        margin="normal"
                        variant="standard"
                        type="password"
                        name="confirmNewPassword"
                        label="Confirm new Password"
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
                        Reset Password
                    </Button>
                    <Typography
                        component="p"
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 1, textAlign: "center" }}
                    >
                        Remeber Password?{" "}
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

export default SetResetPasswordPage;
