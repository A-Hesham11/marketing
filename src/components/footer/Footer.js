import React, { useState } from "react";
import Logo_2 from "../../assets/logo2.png"
import Facebook from "../../assets/footer/facebook.svg"
import Instagram from "../../assets/footer/instagram.svg"
import Mask from "../../assets/footer/mask.svg"
import Telephone from "../../assets/footer/telephone.svg"
import Email from "../../assets/footer/email.svg"
import { FaBehanceSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {

  const products = [
    {
      id: 1,
      link: ["Home", "Popular", "About", "Contact"],
    },
    {
      id: 2,
      link: ["Help", "Resources", "Application", "Team"],
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional: Adds smooth scrolling effect
    });
  };

  return (
    <div id="contact" className="bg-[#132A47] -mt-40">
      <div className="mx-auto max-w-2xl pt-48 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="my-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          {/* COLUMN-1 */}

          <div className="col-span-4 md:col-span-12 lg:col-span-4">
            <img
              src={Logo_2}
              className="mb-6"
              width={100}
              height={100}
              alt="image"
            />{" "}
            <div className="flex gap-4">
              <Link
                to="https://www.facebook.com/Runagency/"
                target="_blank"
                className="footer-fb-icons"
              >
                <img
                  src={Facebook}
                  alt="facebook"
                  width={15}
                  height={20}
                />
              </Link>
              <Link
                to="https://www.behance.net/runagencyy"
                target="_blank"
                className="footer-icons"
              >
                <FaBehanceSquare className="text-xl text-white" />
              </Link>
              <Link
                to="https://www.instagram.com/runagency/?igshid=YmMyMTA2M2Y"
                target="_blank"
                className="footer-icons"
              >
                <img
                  src={Instagram}
                  alt="instagram"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>

          {/* CLOUMN-2/3 */}

          {products.map((product) => (
            <div
              key={product.id}
              className="group relative col-span-2 md:col-span-4 lg:col-span-2"
            >
              <ul>
                {product.link.map((link, index) => (
                  <li key={index} className="mb-5">
                    <Link
                      to="/"
                      className="text-white text-sm font-normal mb-6 space-links"
                      onClick={scrollToTop}
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CLOUMN-4 */}

          <div className="col-span-4 md:col-span-4 lg:col-span-4">
            <div className="flex gap-2">
              <img
                src={Mask}
                alt="mask-icon"
                width={24}
                height={24}
              />
              <h5 className="text-base font-normal text-offwhite">
                Egypt, Mansoura, Al Bahar Street, Qasr El Nil Tower, Clinics
                Entrance, 6th floor
              </h5>
            </div>
            <div className="flex gap-2 mt-10">
              <img
                src={Telephone}
                alt="telephone-icon"
                width={24}
                height={24}
              />
              <h5 className="text-base font-normal text-offwhite">
                +201013276678
              </h5>
            </div>
            <div className="flex gap-2 mt-10">
              <img
                src={Email}
                alt="email-icon"
                width={24}
                height={24}
              />
              <Link
                to={"http://www.Run-Agency.com"}
                target="_blank"
                className="text-base font-normal text-offwhite"
              >
                Run-Agency.com
              </Link>
            </div>
          </div>
        </div>

        <div className="py-10 lg:flex items-center justify-between border-t border-t-bordertop">

        </div>
      </div>
    </div>
  );
};

export default Footer;
