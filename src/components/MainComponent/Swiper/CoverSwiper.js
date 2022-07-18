import React from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { slider_1, show_1, show_2, show_3, show_4 } from '../../../assets/images'
const slide_img = [slider_1, show_1, show_2, show_3, show_4, slider_1, show_1, show_2, show_3, show_4]

const CoverSwiper = () => {
  const { width, height } = useWindowDimensions()
  const theme = useTheme()
  const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ width, height: height / 3 }}>
      <Swiper
        slidesPerView={matchDownMd ? 1 : 4}
        spaceBetween={3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        style={{
          height: '100%',
          width: '100%'
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="swiper"
      >
        {slide_img.map((img, i) => {
          return (
            <SwiperSlide key={i}>
              <img src={img} alt="" width="100%" height="100%" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  )
}

export default CoverSwiper