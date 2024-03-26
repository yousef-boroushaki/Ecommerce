import React, { useState } from "react";
import { AppBar, Badge, Container, Grid, Stack } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import LoginRegister from "../../pages/LoginRegister";
import Home from "../../pages/Home";
import { Link } from "react-router-dom";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import Slidernav from "./Slidernav";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useSelector } from "react-redux";

const pages = ["Products", "Pricing", "Blog"];

export const SearchCart = ({ id, title, image, price }) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "80px",
          display: "flex",
          textAlign: "center",
          justifyContent: "space-between",
        }}
      >
        <Link to={`/product-details/producthomes/${id}`}>
          <img
            src={image}
            alt=""
            style={{
              height: "50px",
              width: "50px",
              borderRadius: "5px",
              mx: "50px",
            }}
          />
        </Link>
        <Link
          to={`/product-details/producthomes/${id}`}
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          {title}
        </Link>
        <Link
          to={`/product-details/producthomes/${id}`}
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          {price}$
        </Link>
      </Box>
    </>
  );
};

export default function Navbar() {
  const cardLength = useSelector((state) => state.cart.list).length;
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [value, setValue] = useState(0);
  const [searchData, setSearchData] = useState();
  const [showResult, setShowResult] = useState();
  const search = (e) => {
    fetch(
      process.env.REACT_APP_BASE_API +
        `producthomes?populate=*&filters[title][$contains]=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        setSearchData(data.data);
      });
    console.log(searchData);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const searchItems = searchData?.map((e, index) => (
    <SearchCart
      key={index}
      id={e.id}
      title={e.attributes.title}
      price={e.attributes.price}
      image={
        process.env.REACT_APP_BASE_URL +
        e?.attributes?.image?.data[0]?.attributes?.url
      }
    />
  ));

  return (
    <>
      <Stack
        component={"nav"}
        sx={{
          position: "fixed",
          top: "0",
          left: "0",
          zIndex: 1000,
          width: "100%",
          mb: "100px",
        }}
      >
        <Container
          maxWidth="100%"
          sx={{
            padding: "10px ",
            borderBottom: "1px solid rgba(0,0,0,.2)",
            // zIndex: 1000,
            bgcolor: "white",
            width: "100%",
          }}
        >
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", sm: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", lg: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Link to={"/"} style={{ textDecoration: "none" }}>
                LOGO
              </Link>
            </Typography>

            {/* search */}
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                alignItems: "center",
                width: { md: "50%", sm: "60%", xs: "70%" },
                borderRadius: "30px",
                boxShadow: "0 0 10px 1px rgba(0,0,0,.1)",
                margin: {
                  md: "0 auto",
                  sm: " 0 30px",
                },
              }}
              onKeyUp={search}
              onChange={(e) => setShowResult(e.target.value)}
            >
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
              <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
              <Box
                sx={{
                  padding: "20px",
                  gap: "20px",
                  width: "50%",
                  height: "400px",
                  display: "flex",
                  overflowY: "scroll",
                  position: "absolute",
                  flexDirection: "column",
                  alignItems: "center",
                  boxShadow: "0 0 20px 5px rgba(0,0,0,.2)",
                  borderRadius: "0 0 10px 10px",
                  opacity: showResult ? "1" : 0,
                  visibility: showResult ? "visible" : "hidden",
                  zIndex: 1000,
                  backgroundColor: "white",
                }}
              >
                {searchItems}
              </Box>
            </Paper>

            <Stack
              direction={"row"}
              spacing={1}
              sx={{
                display: { xs: "none", sm: "flex" },
              }}
            >
              <Button
                variant="outlined"
                startIcon={<AccountCircleOutlinedIcon />}
                sx={{
                  border: "1px solid rgba(0,0,0,.2)",
                  borderRadius: "10px",
                  color: "rgb(0,0,0)",
                }}
              >
                <Link
                  style={{
                    textDecoration: "none",
                    color: "rgb(0,0,0)",
                  }}
                  to={"/login-register"}
                >
                  Login
                </Link>
              </Button>
              <Link to="/shopingcard">
                <Button
                  variant="outlined"
                  sx={{
                    color: "rgb(0,0,0)",
                    border: "1px solid rgba(0,0,0,.2)",
                    borderRadius: "10px",
                  }}
                >
                  <Badge color="error" badgeContent={cardLength}>
                    <AddShoppingCartOutlinedIcon />
                  </Badge>
                </Button>
              </Link>
            </Stack>
          </Toolbar>
        </Container>
        <Slidernav />
      </Stack>

      <Box
        sx={{
          width: "100%",
          // height:'200px',
          display: { xs: "flex", sm: "none" },
          position: "fixed",
          bottom: "0",
          // left:'0',
          zIndex: 1000,
          mx: "auto",
          // height:'70px'
        }}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{
            width: "100%",
            mx: "auto",
          }}
        >
          <BottomNavigationAction
            label="Login"
            icon={<AccountCircleOutlinedIcon />}
          />

          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </Box>
    </>
  );
}
