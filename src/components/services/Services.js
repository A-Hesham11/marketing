import React from "react";
import { GrServices } from "react-icons/gr";
import { FaBrush } from "react-icons/fa6";
import { MdOutlineAppSettingsAlt } from "react-icons/md";
import { GrNotes } from "react-icons/gr";
import { MdOutlineShoppingCart } from "react-icons/md";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      icon: <FaBrush />,
      title: "UI/UX Design",
      description:
        "Beautiful and Influential websites & apps that are mobile friendly quick to load and help drive sales giving you a solid presence online.",
      link: "/services-details",
    },
    {
      icon: <GrServices />,
      title: "Web Development",
      description:
        "Beautiful and Influential websites & apps that are mobile friendly quick to load and help drive sales giving you a solid presence online.",
      link: "/services-details",
    },
    {
      icon: <MdOutlineAppSettingsAlt />,
      title: "App Development",
      description:
        "Beautiful and Influential websites & apps that are mobile friendly quick to load and help drive sales giving you a solid presence online.",
      link: "/services-details",
    },
    {
      icon: <GrServices />,
      title: "Digital Marketing    ",
      description:
        "Beautiful and Influential websites & apps that are mobile friendly quick to load and help drive sales giving you a solid presence online.",
      link: "/services-details",
    },
    {
      icon: <GrNotes />,
      title: "Content Writing    ",
      description:
        "Beautiful and Influential websites & apps that are mobile friendly quick to load and help drive sales giving you a solid presence online.",
      link: "/services-details",
    },
    {
      icon: <MdOutlineShoppingCart />,
      title: "E-commerce    ",
      description:
        "Beautiful and Influential websites & apps that are mobile friendly quick to load and help drive sales giving you a solid presence online.",
      link: "/services-details",
    },
  ];

  return (
    <div id="services">
      <div className="mx-auto max-w-7xl px-4 my-5 sm:py-10 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* COLUMN-1 */}
          <div className="col-span-6 flex justify-center lg:justify-start">
            <div className="flex flex-col align-middle justify-center  p-10">
              <p className="text-4xl lg:text-6xl uppercase font-semibold lh-81 mt-2 text-center lg:text-start">
                SERVICES
              </p>
              <h4 className="text-lg pt-4 font-normal lh-33 text-center lg:text-start text-bluegray">
                What we do
              </h4>
            </div>
          </div>
          <div className="grid grid-cols-1 col-span-6 gap-6 lg:grid-cols-2 xl:grid-cols-3 ">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
