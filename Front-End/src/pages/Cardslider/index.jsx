import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import "./stylee.css";
import { Box, Rating, Stack } from "@mui/material";
import { HashNavigation, Pagination, Navigation } from "swiper/modules";
import { useDispatch } from "react-redux";
import { addItems } from "../../store/Slices/CartSlice";
import { Link } from "react-router-dom";

const Cardslider = () => {
  const [data, setData] = useState();
  const [img, setImg] = useState();
  const [hover, setHover] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_API + "producthomes?populate=*")
      .then((res) => res.json())
      .then((data) => setData(data.data));
    // console.log(data)
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          borderRadius: "20px",
          mt: 5,
        }}
      >
        {data?.map((e, index) => (
        
          <Card
            key={index}
            sx={{
              width: "340px",
              height:'650px',
              maxHeight: "100%",
              borderColor: "white !important",
              boxShadow: 0,
            }}
          >
            <Stack sx={{ height: "60%", width: "100%" }}>
              <Swiper
                spaceBetween={30}
                hashNavigation={{
                  watchState: true,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, HashNavigation]}
                className="mySwiper"
              >

                {e?.attributes?.image?.data?.map((d, index) => (
                  <>
                    {console.log(e)}
                    <SwiperSlide key={index}>
                      <img
                        style={{ borderRadius: "1rem" }}
                        src={
                          process.env.REACT_APP_BASE_URL +
                          d?.attributes?.url
                        }
                        alt={d?.attributes?.name}
                      />
                    </SwiperSlide>
                  </>
                ))}
              </Swiper>
            </Stack>
            <Box sx={{ height: "10%" }}>
              <CardContent>
                <Box
                  sx={{
                    margin: "0 0 0 -13px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography gutterBottom variant="h5" component="div">
                      {e?.attributes?.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {e?.attributes?.description.slice(0, 100)}...
                    </Typography>
                    <Typography variant="h5" sx={{ margin: "10px 0 0 0 " }}>
                      Price: {e?.attributes?.price}$
                    </Typography>
                  </Box>
                  <Box>
                    <Rating
                      sx={{ color: "black" }}
                      name="read-only"
                      value={e?.attributes?.reting}
                      precision={0.25}
                      readOnly
                    />
                  </Box>
                </Box>
              </CardContent>
              <CardActions sx={{ margin: "0 0 0 -16px" }}>
                <Button onClick={() => dispatch(addItems(e))} size="small">
                  <AddShoppingCartOutlinedIcon />
                </Button>
                <Link to={`/product-details/producthomes/${e?.id}`}>
                  <Button size="small">More Details</Button>
                </Link>
              </CardActions>
            </Box>
          </Card>
        ))}
      </Box>
    </>
  );
};

export default Cardslider;
