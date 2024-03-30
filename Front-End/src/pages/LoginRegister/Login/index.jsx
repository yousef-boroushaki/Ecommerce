import { Visibility, VisibilityOff } from "@mui/icons-material";
import useFormField from "../../../utils/useFormFields";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../../../store/Slices/AuthSlice";
import { Link } from "react-router-dom";
import {
  Box,
  Paper,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

export default function Login({ handlePage }) {
  const dispatch = useDispatch();
  const [fields, handleChange] = useFormField();
  const [data, setData] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:1337/api/auth/local", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(fields),
    })
      .then((data) => data.json())
      .then((data) => {
        dispatch(login(({ user: data.data.user, token: data.data.jwt })))
        console.log(data);
        alert("login successfully");
      })
      .catch((err) => alert(err));
  };
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_API + "loginbgs?populate=*")
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);
  return (
    <>
      {data?.map((e, index) => (
        <Box
          component="main"
          key={index}
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            height: "777px",
            backgroundImage: `url(${
              process.env.REACT_APP_BASE_URL +
              e?.attributes?.image?.data[0]?.attributes?.url
            })`,
            backgroundPosition:'60% 0%',
          }}
        >
          <Box
            sx={{
              marginTop: "100px",
              width: "70%",
            }}
          >
            <Grid container sx={{}}>
              <CssBaseline />
              <Grid item xs={false} sm={2} md={3} />
              <Grid
                item
                xs={12}
                sm={8}
                md={5}
                component={Paper}
                elevation={6}
                square
                sx={{
                  background: "rgba(0, 0, 0,0.01)",
                  borderRadius: "16px",
                  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.31)",
                  backdropFilter: "blur(5px)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                }}
              >
                <Box
                  sx={{
                    my: 8,
                    mx: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography component="h1" variant="h5" >
                    Login
                  </Typography>
                  <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{ mt: 1 }}
                  >
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email-address"
                      label="Email Address"
                      name="identifier"
                      onChange={handleChange}
                      autoComplete="email"
                      autoFocus
                      sx={{color:'white'}}
                    />
                    <FormControl
                      fullWidth
                      sx={{ mt: "15px" }}
                      variant="outlined"
                    >
                      <InputLabel >Password</InputLabel>
                      <OutlinedInput
                        fullWidth
                        required
                        id="password"
                        type={showPassword ? "text" : "password"}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Password"
                      />
                    </FormControl>
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Remember me"
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Login
                    </Button>
                    <Grid container>
                      <Grid item xs>
                        <Link
                          to={"/"}
                          style={{
                            fontSize: "14px",
                          }}
                        >
                          Back to Home
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link
                          onClick={handlePage}
                          style={{
                            fontSize: "14px",
                          }}
                        >
                          {"Don't have an account? Register"}
                        </Link>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      ))}
    </>
  );
}
