import React from 'react'
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import M1 from "../../assets/category/m1.png";
import M2 from "../../assets/category/m2.png";
import M3 from "../../assets/category/m3.png";
import M4 from "../../assets/category/m4.png";

const Medical = () => {

  return (
    <a
      target="_blank"
      href={"https://www.behance.net/runagencyy"}
      className="mt-4"
    >
      <div className="mt-4">
        <Swiper
          spaceBetween={0}
          effect={"fade"}
          // style={{ paddingBottom: "3rem" }}
          centeredSlides={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectFade]}
          loop={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
          }}
        >
          <SwiperSlide>
            <img
              src={M1}
              width={320}
              height={320}
              alt="img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={M2}
              width={320}
              height={320}
              alt="img"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="mt-4">
        <Swiper
          spaceBetween={0}
          effect={"fade"}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, EffectFade]}
          loop={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
          }}
        >
          <SwiperSlide>
            <img
              src={M3}
              width={320}
              height={320}
              alt="img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={M4}
              width={320}
              height={320}
              alt="img"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </a>
  )
}

export default Medical