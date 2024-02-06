import React from 'react'
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Food_1 from "../../assets/category/food-1.png"
import Food_2 from "../../assets/category/food-2.png"
import Food_3 from "../../assets/category/001.png"
import Food_4 from "../../assets/category/002.png"
import Food_5 from "../../assets/category/03.png"
import Food_6 from "../../assets/category/04.png"
import Category_1 from "../../assets/category/1.png"
import Category_2 from "../../assets/category/2.png"

const FoodAndBeverage = () => {
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
            <img src={Category_1} width={320} height={320} alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Category_2} width={320} height={320} alt="img" />
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
              src={Food_1}
              width={320}
              height={320}
              alt="img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Food_2}
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
          // style={{ paddingBottom: "3rem" }}
          centeredSlides={true}
          autoplay={{
            delay: 1500,
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
              src={Food_3}
              width={320}
              height={320}
              alt="img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Food_4}
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
          // style={{ paddingBottom: "3rem" }}
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
              src={Food_5}
              width={320}
              height={320}
              alt="img"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={Food_6}
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

export default FoodAndBeverage