import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {
  AppBar,
  Button,
  ButtonGroup,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import RollerSkatingOutlinedIcon from "@mui/icons-material/RollerSkatingOutlined";
import ElectricMopedOutlinedIcon from "@mui/icons-material/ElectricMopedOutlined";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
import WatchOutlinedIcon from "@mui/icons-material/WatchOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import ChildFriendlyOutlinedIcon from "@mui/icons-material/ChildFriendlyOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { BorderBottom, TextFields } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Modal from "@mui/material/Modal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const style = {
  position: "absolute",
  top: "20%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Slidernav() {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [age, setAge] = React.useState("");

  const handleChanges = (event) => {
    setAge(event.target.value);
  };

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <Stack sx={{}}>
      <Grid width={"100%"}>
        <Box
          sx={{
            flexGrow: 1,
            maxWidth: "100%",
            bgcolor: "background.paper",
          }}
        >
          <Grid item>
            <Tabs
              // value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons
              aria-label="visible arrows tabs example"
              sx={{
                [`& .${tabsClasses.scrollButtons}`]: {
                  "&.Mui-disabled": { opacity: 0.3 },
                },
                maxWidth: "90%",
                margin: { sm: "0 100px 0 0", xs: "0 auto" },
              }}
            >
              <Link to={"/"}>
                <Tab
                  label="Home"
                  icon={<HomeOutlinedIcon />}
                  sx={{ color: "black" }}
                />
              </Link>
              <Link to={"/products"}>
                <Tab
                  label="Products"
                  icon={<ShoppingBasketOutlinedIcon />}
                  sx={{ color: "black" }}
                ></Tab>
              </Link>
              <Link to={"/men"}>
                <Tab
                  label="Men"
                  icon={<PersonOutlineOutlinedIcon />}
                  sx={{ color: "black" }}
                />
              </Link>
              <Link to={"/women"}>
                <Tab
                  label="Women"
                  icon={<Person3OutlinedIcon />}
                  sx={{ color: "black" }}
                />
              </Link>
              <Link to={"/kids"}>
                <Tab
                  label="Kids"
                  icon={<ChildFriendlyOutlinedIcon />}
                  sx={{ color: "black" }}
                />
              </Link>
              <Link to={"/shoes"}>
                <Tab
                  label="Shoes"
                  icon={<RollerSkatingOutlinedIcon />}
                  sx={{ color: "black" }}
                />
              </Link>
              <Link to={"/bag"}>
                <Tab
                  label="Bag"
                  icon={<BusinessCenterOutlinedIcon />}
                  sx={{ color: "black" }}
                />
              </Link>
              <Link to={"/belt"}>
                <Tab
                  label="Belt"
                  icon={<ElectricMopedOutlinedIcon />}
                  sx={{ color: "black" }}
                />
              </Link>
              <Link to={"/watch"}>
                <Tab
                  label="Watch"
                  icon={<WatchOutlinedIcon />}
                  sx={{ color: "black" }}
                />
              </Link>
              <Link to={"/sport"}>
                <Tab
                  label="Sport"
                  icon={<FitnessCenterOutlinedIcon />}
                  sx={{ color: "black" }}
                />
              </Link>
            </Tabs>
          </Grid>
          <Grid item>
            <Button
              onClick={handleOpen}
              variant="outlined"
              startIcon={<TuneOutlinedIcon />}
              size="small"
              sx={{
                display: { xs: "none", sm: "flex" },
                color: "black",
                border: "1px solid rgba(0,0,0,.2)",
                borderRadius: "10px",
                maxWidth: "12%",
                position: "absolute",
                top: "105px",
                right: "10px",
              }}
            >
              Filter
            </Button>
            <Modal
              open={open}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Filter By
                </Typography>
                <Stack
                  direction={"row"}
                  sx={{
                    alignItems: "center",
                    gap: "10px",
                    justifyContent: "center",
                  }}
                >
                  <Typography>Category: </Typography>
                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small-label">Age</InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={age}
                      label="Age"
                      onChange={handleChanges}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Men</MenuItem>
                      <MenuItem value={20}>Women</MenuItem>
                      <MenuItem value={30}>Kids</MenuItem>
                      <MenuItem value={40}>Shoes</MenuItem>
                      <MenuItem value={50}>Belt</MenuItem>
                      <MenuItem value={60}>Bag</MenuItem>
                      <MenuItem value={70}>Watch</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
                <Stack
                  direction={"row"}
                  sx={{
                    alignItems: "center",
                    gap: "10px",
                    justifyContent: "center",
                    my: "20px",
                  }}
                >
                  <Typography>Price: </Typography>
                  <TextField
                    sx={{ width: "80px", height: "10%" }}
                    variant="outlined"
                    label="min"
                    type="number"
                  ></TextField>
                  <TextField
                    sx={{ width: "80px", height: "10%" }}
                    variant="outlined"
                    label="max"
                    type="number"
                  ></TextField>
                </Stack>
                <Stack
                  direction={"row"}
                  sx={{ justifyContent: "flex-end", alignItems: "end" }}
                >
                  <Button
                    variant="contained"
                    sx={{ bgcolor: "black", width: "80px" }}
                    onClick={handleClose}
                  >
                    Done
                  </Button>
                </Stack>
              </Box>
            </Modal>

            {/* <ButtonGroup
              disableElevation
              variant="outlined"
              aria-label="Disabled elevation buttons"
              size="small"
              sx={{
                position: "absolute",
                top: "20px",
                right: "5px",
                zIndex: 2000,
              }}
            > */}
            <Button
              sx={{
                display: { xs: "flex", sm: "none" },
                color: "black",
                border: "1px solid rgba(0,0,0,.2)",
                borderRadius: "50px",
                maxWidth: "20%",
                position: "absolute",
                top: "20px",
                right: "30px",
                zIndex: 2000,
              }}
            >
              <TuneOutlinedIcon />
            </Button>
            {/* <Button
                sx={{
                  display: { xs: "flex", sm: "none" },
                  color: "black",
                  border: "1px solid rgba(0,0,0,.2)",
                  borderRadius: "10px",
                  
                }}
              >
                <Link
                  style={{
                    color: "rgb(0,0,0)",
                  }}
                  to={"/login-register"}
                >
                  <AccountCircleOutlinedIcon />
                </Link>
              </Button>
              <Button
              sx={{
                color:'rgb(0,0,0)',
                border: "1px solid rgba(0,0,0,.2)",
                borderRadius: "10px",
              }}
            >
              <AddShoppingCartOutlinedIcon />

            </Button>
            </ButtonGroup> */}
          </Grid>
        </Box>
      </Grid>
    </Stack>
  );
}
