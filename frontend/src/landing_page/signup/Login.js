import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { TextField, Button, Box, Paper } from "@mui/material";

import "./Login.css"; 
const Login = () => {
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formdata;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:3000/login", 
        { ...formdata },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
       
      } else {
        handleError(message);
      }
    } catch (err) {
      console.log(err);
      handleError("Something went wrong");
    }

    setFormdata({
      email: "",
      password: "",
    });
  };

  return (
    <Box className="form-container">
      <Paper className="form-card">
        <h2 className="form-title">Login</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            type="email"
            label="Email"
            name="email"
            value={email}
            onChange={handleOnChange}
            fullWidth
            margin="normal"
          />
          <TextField
            type="password"
            label="Password"
            name="password"
            value={password}
            onChange={handleOnChange}
            fullWidth
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "1rem" }}
          >
            Login
          </Button>

          <span style={{ marginTop: "1rem", display: "block" }}>
            Don't have an account? <Link to="/signup">SignUp</Link>
          </span>
        </form>
      </Paper>
      <ToastContainer />
    </Box>
  );
};

export default Login;
