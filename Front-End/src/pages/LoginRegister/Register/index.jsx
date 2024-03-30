import { Visibility, VisibilityOff } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState } from "react";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import useFormField from "../../../utils/useFormFields";
import axios from "axios";

export default function Register({ handlePage }) {
  const [fields, handleChange] = useFormField();
  const [data, setData] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:1337/api/auth/local/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(fields),
    })
      .then((data) => data.json())
      .then((data) => {
        alert("login successfully");
        handlePage();
      })
      .catch("something wrong");
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
          key={index}
          component="main"
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            height: "777px",
            backgroundImage: `url(${
              process.env.REACT_APP_BASE_URL +
              e?.attributes?.image?.data[0]?.attributes?.url
            })`,
            backgroundPosition: "60% 0%",
          }}
        >
          <Container
            maxWidth="sm"
            sx={{
              pb: 3,
            }}
          >
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "600px",
                background: "rgba(0, 0, 0,0.01)",
                borderRadius: "16px",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.31)",
                backdropFilter: "blur(5px)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                padding: "80px",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Register
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="username"
                      name="username"
                      required
                      fullWidth
                      onChange={handleChange}
                      id="username"
                      label="UserName"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      onChange={handleChange}
                      id="email"
                      label="email"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl
                      fullWidth
                      sx={{ mt: "15px" }}
                      variant="outlined"
                    >
                      <InputLabel>Password</InputLabel>
                      <OutlinedInput
                        fullWidth
                        required
                        onChange={handleChange}
                        name="password"
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
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Register
                </Button>
                <Grid container justifyContent="flex-end">
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
                    <Link onClick={handlePage}>
                      Already have an account? Login
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </Box>
      ))}
    </>
  );
}
