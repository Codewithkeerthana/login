import "./App.css";
import Grid from "@mui/material/Grid";
import BackGroundImge from "./background.png";
import Button from "@mui/material/Button";
//import Box from '@mui/material/Box';
import { TextField, InputAdornment, makeStyles } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import React, { useState, useEffect } from "react";
import { Password } from "@mui/icons-material";
function App() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [isValid, setIsValid] = useState(true);
  // const handleUsernameChange = (event) => {
  //   setUsername(event.target.value);
  // };
  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/;
  //   // console.log(username);
  //   console.log(emailRegex.test(username))
  //   if (emailRegex.test(username)) {
  //   const passwordRegex =
  //     /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[^a-zA-Z0-9])(?!.*\s).{8,}$/;
  //   if (passwordRegex.test(password)) {
  //     setIsValid(true);
  //     console.log("Valid username and password!");
  //   } else {
  //     setIsValid(false);
  //     console.log(
  //       "Invalid password!Password should not contain at least 8 characters, one  uppercase letter, one lowercase letter , one number and one special character."
  //     );
  //   }
  // }
  //    else {
  //     setIsValid(false);
  //     console.log("Invalid username! Please enter a valid email address.")
  //   }
  // };

const [email,setEmail] = useState("");
const [password, setPassword] = useState("");
const [isVaild,setIsValid] = useState(false);

  useEffect(() => {
    const checkValidity = () => {
      const hasUpperCase = /[A-Z]/.test(password);  
      const hasLowerCase = /[a-z]/.test(password);
      const hasNumber = /[0-9]/.test(password);
      const hasSpecialChar = /[!@#$%^&*(),.?{}|<>]/.test(password); 
    setIsValid(
      email.includes("@") && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && password.length >= 8);
  
    };
  checkValidity();
    }, [email,password]);

    const handleEmailChange = (event) => {
      setEmail(event.target.value);}
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
  const styles = {
    layer: {},
  };
  return (
    <div className="App">
      <header>
        <div className="main-container">
          <Grid container>
            <Grid className="main-container-item" item xs={12} md={8} lg={6}>
              <div className="box">
                <div className="place">
                  <div>
                    <div className="sub-container">
                      <img className="image" src="companylogo.png"></img>
                      <div className="login">Login</div>
                    </div>
                    <hr className="boder" />
                  </div>
                  <Grid container xs={12}>
                    <Grid className="abc" item xs={12}>
                      {/* <form onSubmit={handleSubmit}> */}
                        <label for="email">
                          <b>Username or Email Id</b>
                        </label>
                     {/* </form> */}
                    </Grid>
                    <Grid className="item1" item xs={12}>
                      <TextField
                        className="text"

                        // error={!isValid}
                        // helperText={!isValid && "Incorrect entry."}

                        value={email}
                        onChange={handleEmailChange}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <PersonOutlineOutlinedIcon />
                            </InputAdornment>
                          ),
                        }}
                        variant="outlined"
                        fullWidth
                        size="small"
                      />
                    </Grid>
                    <Grid className="item2" item xs={12}>
                      <label for="psw">
                        <b>Password</b>
                      </label>
                      <div style={{ width: "100%", height: "10px" }}></div>
                      <TextField
                        className="text2"
                        id="outlined-password-input"
                        type="password"
                        autoComplete="current-password"  
                        
                        onChange={handlePasswordChange}
                       
          //error={!isValid}
         // id="outlined-error-helper-text"
          //label="Error"
          //defaultValue="Hello World"
          //helperText={!isValid && "Incorrect entry."}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <VisibilityOutlinedIcon />
                            </InputAdornment>
                          ),
                        }}
                        variant="outlined"
                        fullWidth
                        size="small"
                      />   
                    </Grid>
                    <Grid className="item3" item xs={12}>
                      <label>
                        <input type="checkbox" />I accept the{" "}
                        <span style={{ color: "#0D4858" }}>
                          Legal (Terms of Use)
                        </span>{" "}
                        and{" "}
                        <span style={{ color: "#0D4858" }}>Privacy Policy</span>
                      </label>
                    </Grid>
                    <div className="row">
                      <div className="align">
                        <Button variant="text" className="button">
                          Forgot Password?
                        </Button>
                      </div>
                      <div className="button-padding">
                        <Button
                          variant="contained"
                          id="loginButton" 
                         // onClick={handleSubmit}
                        >
                          Log In
                        </Button>
                      </div>
                    </div>
                  </Grid>
                </div>
              </div>
            </Grid>
            <Grid item xs={6}></Grid>
          </Grid>
        </div>
      </header>
    </div>
  );
}
export default App;


