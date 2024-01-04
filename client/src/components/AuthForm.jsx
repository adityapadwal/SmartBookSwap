// AuthForm.jsx
import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  TextField,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const AuthForm = ({ onSubmit, isAdmin }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [isSignup, setIsSignup] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const isEmailValid = (email) => {
    return email.includes("@gmail.com");
  };

  const isFormValid = () => {
    // Check if all inputs are entered and email is valid
    return (
      inputs.email.trim() !== "" &&
      inputs.password.trim() !== "" &&
      isEmailValid(inputs.email)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  const handleSwitchPage = () => {
    setIsSignup(!isSignup);
  };

  const handleForgotPassword = () => {
    // Implement logic to navigate to the "Forgot Password" page
    console.log("Navigate to Forgot Password page");
  };

  const formWidth = isSmallScreen ? "90%" : 350; // Choose a common width for both login and signup

  return (
    <Dialog PaperProps={{ style: { borderRadius: 13, marginTop: "5.5rem" } }} open={true}>
      <Typography variant="h5" textAlign="center" sx={{ my: isSmallScreen ? 2 : 3, marginBottom: 0 }}>
        {isSignup ? "Signup" : "Login"}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box
          p={3}
          display="flex"
          flexDirection="column"
          width={formWidth}
          margin="auto"
        >
          {isSignup && (
            <>
              <TextField
                value={inputs.name}
                onChange={handleChange}
                margin="normal"
                variant="standard"
                type="text"
                name="name"
                label="Name"
              />
            </>
          )}

          <TextField
            value={inputs.email}
            onChange={handleChange}
            margin="normal"
            variant="standard"
            type="email"
            name="email"
            label="Email"
          />

          <TextField
            value={inputs.password}
            onChange={handleChange}
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
            {isSignup ? "Signup" : "Login"}
          </Button>
          {isSignup && (
            <>
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
            </>
          )}
          {!isSignup && (
            <>
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
                Don’t have an account?{" "}
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
                  Sign up
                </Button>
              </Typography>
            </>
          )}
        </Box>
      </form>
    </Dialog>
  );
};

export default AuthForm;
