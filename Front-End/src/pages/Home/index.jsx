import React from "react";
import SliderHomePage from "../SliderHomePage/index";
import Cardslider from "../Cardslider/index";
import DiscountSlider from "../DiscountSlider/index";
import { Box, Container, Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <SliderHomePage />
      <DiscountSlider />
      <Cardslider />
      
    </>
  );
}
