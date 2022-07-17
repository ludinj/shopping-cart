import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
const LoginPage = () => {
  const { user, dispatch, error } = useContext(AuthContext);
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 500,
    margin: "20px auto",
  };
  console.log(error);

  const btnstyle = { margin: "8px 0" };

  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  // const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleChange = (e) => {
    setCredentials((pre) => ({ ...pre, [e.target.id]: e.target.value }));
    console.log(credentials);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials, {
        withCredentials: true,
      });

      if (res.data.isAdmin) {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });

        navigate("/");
      } else {
        dispatch({
          type: "LOGIN_FAILURE",
          payload: { message: "You are not allowed!" },
        });
      }
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
    }
  };

  return (
    <Grid>
      <Paper elevation={4} style={paperStyle}>
        <Grid container alignItems="center">
          <h1>Sign In</h1>
        </Grid>
        <TextField
          label="Email"
          placeholder="Enter Email"
          fullWidth
          id="email"
          required
          onChange={handleChange}
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          id="password"
          fullWidth
          required
          onChange={handleChange}
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        />
        {error && (
          <Typography color="error" align="center">
            {error.message}
          </Typography>
        )}
        <Button
          type="button"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
          onClick={handleSubmit}
        >
          Sign in
        </Button>
        <Typography align="center">
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <Typography align="center">
          Do you have an account ?<Link href="#">Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default LoginPage;
