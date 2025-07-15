import Hero from "./Hero";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { TextField, Button, Paper } from "@mui/material";
import "./Signup.css"; 

const Signup = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });

  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/signup",
        { ...inputValue },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
      handleError("Something went wrong.");
    }

    setInputValue({
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <>
      <Hero />
      <div className="container">
        <div className="row m-5">
          <div className="col-8">
            <img
              src="/media/images/account_open.svg"
              style={{ width: "600px" }}
              alt="Signup Visual"
            />
          </div>
          <div className="col-4">
            <Paper className="form-card">
              <h2 className="form-title">Signup</h2>
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
                  type="text"
                  label="Username"
                  name="username"
                  value={username}
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
                  Signup
                </Button>

                <span style={{ marginTop: "1rem", display: "block" }}>
                  Already have an account? <Link to="/login">Login</Link>
                </span>
              </form>
            </Paper>
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
