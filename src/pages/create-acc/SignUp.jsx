// SignUp.jsx
import { TextField } from "@mui/material";
import React from "react";
import styles from "./SignUp.scss";

const SignUp = () => {

return (
<div className={styles.container}>
    <div className={styles.topContent}>
    <img
        src="https://i.postimg.cc/CL7CmGSx/google-logo-png-29530.png"
        alt="Google Logo"
        className={styles.logo}
    />
    <h2>Create your Google Account</h2>
    </div>
    <div className={styles.row}>
    <form >
        <div className={styles.inputs}>
        <div className={styles.row}>
            <div className={styles.column}>
            <TextField
                variant="outlined"
                type="text"
                name="firstName"
                className={styles.input}
            
                label="First Name"
                fullWidth
            />
            </div>
            <div className={styles.column}>
            <TextField
                variant="outlined"
                type="text"
                name="lastName"
                className={styles.input}
                label="Last Name"
                fullWidth
            />
            </div>
        </div>
        </div>
        <div className={styles.inputs}>
        <TextField
            variant="outlined"
            type="email"
            name="email"
            
            className={styles.input}

            label="Email"
            fullWidth
        />
        </div>
        <div className={styles.inputs}>
        <TextField
            variant="outlined"
            type="text"
            name="username"

            className={styles.input}

            label="Username"
            fullWidth
        />
        </div>

        <div className={styles.row}>
        <div className={styles.column}>
            <TextField
            variant="outlined"
            // type={formData.showPassword ? "text" : "password"}
            name="password"
            className={styles.input}

            label="Password"
            fullWidth
            />
        </div>
        <div className={styles.column}>
            <TextField
            variant="outlined"
            // type={formData.showPassword ? "text" : "password"}
            name="confirmPassword"
            
            className={styles.input}
            
            // value={formData.confirmPassword}
            label="Confirm Password"
            fullWidth
            />
        </div>
        </div>

        
        <div className={styles.checkbox}>
        <input
            type="checkbox"
            name="showPassword"
        />
        <label>Show Password</label>
        </div>

        <div className={styles.last_line_signup}>
            <div className={styles.btnGroup}>
            <a href="#" className={styles.linkBtn}>
                Sign in instead
            </a>
            <button type="submit" className={styles.nextBtn}>
                Next
            </button>
            
            </div>
        </div>
    </form>

    {/* <div className={styles.imageContainer}>
        <img src="signup.png" alt="Signup" className={styles.signupImage} />
    </div> */}
    </div>
</div>
);
};

export default SignUp;
