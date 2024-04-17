import {
  Box,
  Rating,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addItems } from "../../store/Slices/CartSlice";

export default function ProductDetails() {
  const { id } = useParams();
  const { category } = useParams();
  const [data, setData] = useState();
  const [product, setProduct] = useState();
  const [image, setImage] = useState();
  const [flag, setFlag] = useState(false);

  const dispatch = useDispatch();

  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleImage = (e) => {
    setImage(e.target.src);
    setFlag(true);
  };

  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_API + `${category}/${id}?populate=*`)
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, [id]);

  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_API + `${category}?populate=*`)
      .then((res) => res.json())
      .then((data) => setProduct(data.data));
  }, [category]);

  // console.log(data);
  // console.log(product[2]?.attributes?.image?.data[0].attributes.url);

  return (
    <>
      <Container
        component={"main"}
        sx={{
          gap: "90px",
          display: "flex",
          mt: "170px",
          flexDirection: {
            md: "row",
            sm: "column",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
          }}
        >
          <Stack
            sx={{
              gap: "20px",
            }}
            flexDirection={"column"}
          >
            {data?.attributes?.image?.data.map((e, index) => (
              <Box
                key={index}
                sx={{
                  width: "75px",
                  height: "75px",
                  borderRadius: ".5rem",
                }}
              >
                <img
                  src={process.env.REACT_APP_BASE_URL + e?.attributes?.url}
                  onMouseOver={handleImage}
                  style={{ borderRadius: "7px", width: "100%", height: "100%" }}
                  alt=""
                />
              </Box>
            ))}
          </Stack>
          <Box>
            <Box
              sx={{
                width: "550px",
                height: "700px",
              }}
            >
              {flag == false ? (
                <img
                  src={
                    process.env.REACT_APP_BASE_URL +
                    data?.attributes?.image?.data[0]?.attributes?.url
                  }
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "20px",
                  }}
                  alt=""
                />
              ) : (
                <img
                  src={image}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "20px",
                  }}
                  alt=""
                />
              )}
            </Box>
          </Box>
        </Box>
        <Box>
          <Box>
            <Typography variant="h5" component={"p"}>
              {data?.attributes?.name}
            </Typography>
            <Typography
              variant="h4"
              component={"p"}
              sx={{
                my: "10px",
              }}
            >
              {data?.attributes?.price}$
            </Typography>
          </Box>
          {/* <Stack
            direction={"row"}
            sx={{
              gap: "10px",
            }}
          >
            <Box
              sx={{
                width: "75px",
                height: "75px",
                borderRadius: ".5rem",
              }}
            >
              <img
                src={
                  process.env.REACT_APP_BASE_URL +
                  product[3]?.attributes?.image?.data[0].attributes.url
                }
                alt=""
                style={{ borderRadius: "7px", width: "100%", height: "100%" }}
              />
            </Box>
            <Box
              sx={{
                width: "75px",
                height: "75px",
                borderRadius: ".5rem",
              }}
            >
              <img
                src={
                  process.env.REACT_APP_BASE_URL +
                  product[4]?.attributes?.image?.data[0].attributes.url
                }
                alt=""
                style={{ borderRadius: "7px", width: "100%", height: "100%" }}
              />
            </Box>
            <Box
              sx={{
                width: "75px",
                height: "75px",
                borderRadius: ".5rem",
              }}
            >
              <img
                src={
                  process.env.REACT_APP_BASE_URL +
                  product[5]?.attributes?.image?.data[0].attributes.url
                }
                alt=""
                style={{ borderRadius: "7px", width: "100%", height: "100%" }}
              />
            </Box>
            <Box
              sx={{
                width: "75px",
                height: "75px",
                borderRadius: ".5rem",
              }}
            >
              <img
                src={
                  process.env.REACT_APP_BASE_URL +
                  product[6]?.attributes?.image?.data[0].attributes.url
                }
                alt=""
                style={{ borderRadius: "7px", width: "100%", height: "100%" }}
              />
            </Box>
            <Box
              sx={{
                width: "75px",
                height: "75px",
                borderRadius: ".5rem",
              }}
            >
              <img
                src={
                  process.env.REACT_APP_BASE_URL +
                  product[7]?.attributes?.image?.data[0].attributes.url
                }
                alt=""
                style={{ borderRadius: "7px", width: "100%", height: "100%" }}
              />
            </Box>
          </Stack> */}
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              mt: "20px",
            }}
          >
            <Typography variant="h6" component={"p"}>
              Select Size
            </Typography>
            <Typography variant="body2" component={"p"}>
              Size Guide
            </Typography>
          </Stack>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Size</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Size"
                onChange={handleChange}
              >
                <MenuItem value={10}>XS</MenuItem>
                <MenuItem value={20}>S</MenuItem>
                <MenuItem value={30}>M</MenuItem>
                <MenuItem value={40}>L</MenuItem>
                <MenuItem value={50}>XL</MenuItem>
                <MenuItem value={60}>2XL</MenuItem>
                <MenuItem value={70}>XXXL</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Button
            onClick={() => dispatch(addItems(data))}
            variant="contained"
            sx={{
              width: "100%",
              my: 3,
              borderRadius: "10px",
              padding: 2,
              backgroundColor: "black",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.75)",
              },
            }}
          >
            Add to Bag
          </Button>
          <Typography my={3}>{data?.attributes?.description}</Typography>
          <Box>
            <Rating
              sx={{ color: "black" }}
              name="read-only"
              value={2.75}
              precision={0.25}
              readOnly
            />
          </Box>
        </Box>
      </Container>
    </>
  );
}
