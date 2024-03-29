import React, { useEffect, useState } from "react";
import { Avatar, Box, Rating, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { useDispatch } from "react-redux";
import { addItems } from "../../store/Slices/CartSlice";
import { Pagination, Navigation } from "swiper/modules";

const DiscountSlider = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const [items, setItems] = useState();
  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_API + "discounts?populate=*")
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);
  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_API + "discountboxes?populate=*")
      .then((res) => res.json())
      .then((items) => setItems(items.data));
  }, []);
  const discountItems = items?.map((e, index) => (
    <SwiperSlide key={index} style={{ width: "50vh" }}>
      <Card
        sx={{
          height: "100%",
          width: "100%",
          borderRadius: "20px",
        }}
      >
        <CardMedia
          sx={{ height: "50% !important" }}
          component="img"
          alt={e?.attributes?.title}
          src={
            process.env.REACT_APP_BASE_URL +
            e?.attributes?.image.data.attributes.url
          }
        />
        <Avatar
          sx={{
            bgcolor: "#039be5",
            position: "absolute",
            top: 10,
            right: 10,
            padding: "5px",
          }}
        >
          {e?.attributes?.discount * 100}%
        </Avatar>
        <CardContent
          sx={{
            height: "30% !important",
            objectFit: "contain !important",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Stack>
            <Typography gutterBottom variant="h5" component="p">
              {e?.attributes?.title}
            </Typography>
          </Stack>
          <Typography
            sx={{
              display: {
                xl: "flex",
                md: "none",
                lg: "none",
                sm: "none",
                xs: "none",
              },
            }}
            variant="body2"
            color="text.secondary"
          >
            {e?.attributes?.description.slice(0, 80)}...
          </Typography>
          <Stack flexDirection="row" justifyContent="center">
            <Typography
              sx={{ margin: "0 10px 0 0", textDecoration: "line-through" }}
              color="#bdbdbd"
              gutterBottom
              variant="h6"
              component="p"
              my={3}
            >
              {`${e?.attributes?.price}$`}
            </Typography>
            <Typography variant="h5" color="#311b92">
              {`${e?.attributes?.price * (1 - e?.attributes?.discount)}$`}
            </Typography>
          </Stack>
          <Box sx={{my:1}}>
            <Rating
              sx={{ color: "black" }}
              name="read-only"
              value={e?.attributes?.reting}
              precision={0.25}
              readOnly
            />
          </Box>
          <CardActions
            sx={{
              height: "7% !important",
              justifyContent: "center !important",
              alignItems: "center",
              gap: "10px",
              
            }}
          >
            <Button
              onClick={() => dispatch(addItems(e))}
              variant="outlined"
              size="small"
              sx={{
                border: "1px solid rgba(0,0,0,.2)",
                borderRadius: "10px",
              }}
            >
              {/* <AddShoppingCartOutlinedIcon /> */}+
            </Button>
            <Button
              size="small"
              variant="outlined"
              sx={{
                border: "1px solid rgba(0,0,0,.2)",
                borderRadius: "10px",
              }}
            >
              More
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </SwiperSlide>
  ));
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <>
      {data?.map((e, index) => (
        <Box
          key={index}
          sx={{
            width: "90%",
            position: "relative",
            margin: "5% auto",
            height: "70vh",
            display: "flex",
            justifyContent: "center",
            borderRadius: "20px",
            alignContent: "center",
            alignItems: "center",
            backgroundImage: `url(${
              process.env.REACT_APP_BASE_URL +
              e?.attributes?.image?.data[0]?.attributes?.url
            })`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={"auto"}
            spaceBetween={30}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {discountItems}
          </Swiper>
        </Box>
      ))}
    </>
  );
};

export default DiscountSlider;
