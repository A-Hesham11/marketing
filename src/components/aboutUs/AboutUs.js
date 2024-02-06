import React from 'react'
import { EffectFade, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import OurTeam from "../../assets/our-team.jpg"
import OurTeamMedia from "../../assets/our-team-media.jpg"
import OurTeamCreative from "../../assets/our-team-creative.jpg"

const AboutUs = () => {
  return (
    <div
      id="about"
      className="mx-auto max-w-7xl grid-cols-1 grid px-4 my-6 sm:py-5 lg:px-8"
    >
      <div>
        <h3 className="text-4xl lg:text-5xl pt-4 font-semibold sm:leading-tight mt-5 text-center lg:text-start">
          ABOUT US
        </h3>
        <h4 className="text-lg pt-4 font-normal sm:leading-tight text-center text-beach lg:text-start">
          We are here to make your service look more elegant and stylish.
        </h4>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <div className="">
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
              <img src={OurTeam} width={600} height={600} alt="OurTeam" />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={OurTeamMedia}
                width={600}
                height={600}
                alt="OurTeamMedia"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={OurTeamCreative}
                width={600}
                height={600}
                alt="OurTeamCreative"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="flex flex-col gap-12">
          <p className="text-lg pt-4 font-normal sm:leading-tight text-center text-beach lg:text-start">
            Run is a vibrant and fast-growing brand and business design agency
            that gives our clients the ability to work with a professional team
            of experts, across a broad range of competencies, without the need
            to employ a full-time staff of their own
          </p>
          <div className="bg-[#142B48] text-white p-4 py-8 hidden lg:grid grid-cols-3 custom_radius">
            <div className="py-2 px-6 border-r border-white text-center">
              <h2 className="text-3xl mb-1 font-bold">100+</h2>
              <p>Account</p>
            </div>
            <div className="py-2 px-6 border-r border-white text-center">
              <h2 className="text-3xl mb-1 font-bold">20+</h2>
              <p>worldwide client</p>
            </div>
            <div className="py-2 px-6 text-center">
              <h2 className="text-3xl mb-1 font-bold">1000+</h2>
              <p>campaign</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs