import React, { useState } from "react";
import { TextField, Button, Paper, Typography } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    if (email === "admin@gmail.com" && password === "1234") {
      setMessage("Login Successful!");
    } else {
      setMessage("Invalid Email or Password");
    }
  };

  return (
    <div
      style={{
        backgroundImage: "url('https://media.istockphoto.com/id/520838006/photo/famous-temples-of-khajuraho.jpg?s=612x612&w=0&k=20&c=Q4YDdXoUpQ6SC5HKv7-P7fzzBL2sS2koRSxvrBoR9SI=')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Paper elevation={5} style={{ padding: "30px", width: "300px" }}>
        <Typography variant="h5" align="center">Login</Typography>

        <TextField
          label="Email"
          fullWidth
          margin="normal"
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: "15px" }}
          onClick={handleLogin}
        >
          Login
        </Button>

        <Typography align="center" style={{ marginTop: "10px", color: "red" }}>
          {message}
        </Typography>
      </Paper>
    </div>
  );
};

export default Login;