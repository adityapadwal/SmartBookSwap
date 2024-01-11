import React, { useState } from "react";
import { Box, Button, Dialog, IconButton, TextField, Typography } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import axios from "axios";

const ResetPasswordPage = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); // handling error msgs
    const [redirect, setRedirect] = useState(false);

    const handleResetPassword = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('/reset-password', {
                email 
            });
            setRedirect(true);
        } catch (error) {
            if(error.response) {
                setErrorMessage(error.response.data);
            } else {
                setErrorMessage("Error in sending email!");
            }
        }
    };

    const handleReturnToLogin = () => {
        navigate("/login");
    };

    const handleClose = () => {
        navigate("/");
    };

    if(redirect) {
        return <Navigate to={'/login'}/>
    }

    return (
        <Dialog
            PaperProps={{ style: { borderRadius: 13, marginTop: "6rem" } }}
            open={true}
        >
            <Box
                p={3}
                display="flex"
                flexDirection="column"
                width="300px"
                margin="auto"
            >
                <IconButton sx={{ ml: "auto" }} onClick={handleClose}>
                    <CloseRoundedIcon />
                </IconButton>

                <Typography variant="h5" textAlign="center">
                    Reset Password
                </Typography>

                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1, textAlign: "center" }}
                >
                    Enter your email below, and an email for resetting the password will be sent.
                </Typography>

                <form onSubmit={handleResetPassword}>
                    <TextField
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        margin="normal"
                        variant="standard"
                        type="email"
                        name="email"
                        label="Email"
                        fullWidth
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
                        Send Email
                    </Button>
                </form>

                <Typography
                    component="p"
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1, textAlign: "center" }}
                >
                    <Button
                        onClick={handleReturnToLogin}
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
                        Return to Login
                    </Button>
                </Typography>
            </Box>
        </Dialog>
    );
};

export default ResetPasswordPage;
