import React, { useState } from "react";
import LandingPages from "../components/landing/landingPages";
import CoursesImg from "../assets/landingHome.png";
import ButtonGoUp from "../components/atoms/buttonGoUp/ButtonGoUp";
import "aos/dist/aos.css";
import { FaMobileScreenButton } from "react-icons/fa6";
import { FaRegCalendarDays } from "react-icons/fa6";
import { LuAlarmClock } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";

const CallUs = () => {
  const [formData, setFormData] = useState({
    message: "",
    uname: "",
    email: "",
    subject: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form data submitted:", formData);
  };

  return (
    <main className="relative">
      <div className="landing_img h-full">
        <LandingPages
          landingImage={CoursesImg}
          title="إتصل بنا"
          main="الرئيسية"
          branch="إتصل بنا"
        />
      </div>

      <div className="container mb-16">
        <h2
          className="text-mainBlack mt-28 mb-14 font-semibold text-5xl text-center"
          data-aos="fade-down"
        >
          تواصل معنا
        </h2>
        <div className="grid grid-cols-12 gap-12">
          <form onSubmit={handleSubmit} className="col-span-12 md:col-span-full lg:col-span-7" data-aos="zoom-in-left">
            <div className="row">
              <div className="col-12 mb-6">
                <div className="form-group label-float">
                  <textarea
                    className="form-control w-full rounded-lg p-3 border"
                    name="message"
                    id="message"
                    cols="30"
                    rows="8"
                    placeholder=" "
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  <label>رسالتك</label>
                </div>
              </div>
              <div className="col-12 my-6">
                <div className="flex items-center gap-4 flex-col md:flex-row">
                  <div className="w-full">
                    <div className="form-group label-float">
                      <input
                        className="form-control w-full rounded-lg p-3 border"
                        id="name"
                        placeholder=" "
                        type="text"
                        name="uname"
                        value={formData.uname}
                        onChange={handleChange}
                      />
                      <label>الإسم</label>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="form-group label-float">
                      <input
                        className="form-control w-full rounded-lg p-3 border"
                        id="email"
                        placeholder=" "
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <label>البريد الإلكترونى</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 my-6">
                <div className="form-group label-float">
                  <input
                    className="form-control w-full rounded-lg p-3 border"
                    placeholder=" "
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  <label>الموضوع</label>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="btn bg-mainOrange text-white py-4 px-16 rounded-lg font-bold"
              >
                إرسال
              </button>
            </div>
          </form>
          <div className="col-span-12 lg:col-span-5 pt-3" data-aos="zoom-in-right">
            <div className="flex items-center gap-2">
              <FaMobileScreenButton size={28}/>
              <p className="font-semibold text-xl">0534699908</p>
            </div>
            <div className="flex items-center gap-2 my-4">
              <FaRegCalendarDays size={26}/>
              <p className="font-semibold text-xl">من الأحد الى الخميس</p>
            </div>
            <div className="flex items-center gap-2">
              <LuAlarmClock size={27}/>
              <p className="font-semibold text-xl">من الساعه 9 صباحا - 5 مساء</p>
            </div>
            <div className="flex items-center gap-2 my-4">
              <HiOutlineMail size={27}/>
              <p className="font-semibold text-xl">advance.skills3@gmail.com</p>
            </div>
            <p className="font-semibold text-xl text-mainOrange">يسعدنا خدمتكم فى أى وقت !</p>
          </div>
        </div>
      </div>

      <ButtonGoUp />
    </main>
  );
};

export default CallUs;
