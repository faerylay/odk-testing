import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./style.css";

const YoutubeList = () => {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const youtubeLinks = [
    "https://www.youtube.com/watch?v=HZoVj7xcWxo&t=891s",
    "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    "https://www.youtube.com/watch?v=ysz5S6PUM-U",
    "https://www.youtube.com/watch?v=HZoVj7xcWxo&t=891s",
  ]

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {youtubeLinks.map((img, i) => {
          return (
            <SwiperSlide key={i.toString()} >
              <div>
                <ReactPlayer
                  controls={true}
                  url={img}
                  config={{
                    youtube: {
                      playerVars: { origin: ['https://www.youtube.com'] }
                    }
                  }}

                  playing={false}
                  volume={1}
                  width={'100%'}
                  height={'100%'}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        loop={true}
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {youtubeLinks.map((img, i) => {
          return (
            <SwiperSlide key={i.toString()} >
              <div>
                <ReactPlayer
                  controls={true}
                  url={img}
                  playing={false}
                  volume={1}
                  width={'100%'}
                  height={'100%'}
                  config={{
                    youtube: {
                      playerVars: { origin: 'https://www.youtube.com' }
                    }
                  }}

                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  )
}

export default YoutubeList