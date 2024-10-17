// SignIn.jsx
import { Backdrop, Button, CircularProgress, TextField } from "@mui/material";
// import styles from "./SignIn.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginApiCall } from "../../Services/Api";
import styles from "./SignIn.scss";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLoginClick = async (event) => {
    event.preventDefault();

    try {
      const response = await loginApiCall({ email, password });

      console.log(response); // Log the entire response for inspection
      localStorage.setItem("access", response.access);

      navigate("/Dashboard"); // Corrected from "/Dashboard" to "/dashboard" (case-sensitive)
    } catch (error) {
      // Something happened in setting up the request
      console.error("Error message:", error.message);
    }
  };

  return (
    <div className="container">
      <div className={styles.topContent}>
        <img
          src="https://i.postimg.cc/CL7CmGSx/google-logo-png-29530.png"
          alt="Google Logo"
        />
        <h2>Sign in</h2>
        <p className="heading">Use your Google Account</p>
      </div>

      <form>
        <TextField
          id="email"
          label="Email or phone"
          fullWidth
          margin="normal"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* <a href="" className={styles.linkBtn}>
        Forgot Password?
    </a> */}

        <div className="btnGroup">
          <Button variant="outlined">Create account</Button>
          <Backdrop
            sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
            open={false}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
          <Button onClick={handleLoginClick}>Login</Button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
