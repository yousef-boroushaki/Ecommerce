import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./stylee.css";

export default function Slider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  const [data, setData] = useState();
  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_API + "sliders?populate=*")
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);
  const items = data?.map((e, index) => (
    <SwiperSlide key={index}>
      <img
        src={
          process.env.REACT_APP_BASE_URL +
          e?.attributes?.image.data.attributes.url
        }
        alt={e?.attributes?.text}
      />
    </SwiperSlide>
  ));
  return (
    <>
      <Swiper
        style={{ marginTop: "160px" }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {items}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
