import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Signdialog from "./Signdialog";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Registerdialog from "./Registerdialog";
import Drawerdata from "./Drawerdata";
import Drawer from "./Drawer";

function classNames(...classes) {
  return classes.join(" ");
}

const NavBar = () => {
  const navigation = [
    { name: "Home", href: "/", current: true },
    { name: "Services", href: "#services", current: false },
    { name: "About", href: "#about", current: false },
    { name: "Portfolio", href: "#portfolio", current: false },
    { name: "Contact", href: "#contact", current: false },
  ];

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const debounce = (fn) => {
      let frame;
      return (...params) => {
        if (frame) {
          cancelAnimationFrame(frame);
        }
        frame = requestAnimationFrame(() => {
          fn(...params);
        });
      };
    };

    const storeScroll = () => {
      document.documentElement.dataset.scroll = window.scrollY.toString();
    };

    document.addEventListener("scroll", debounce(storeScroll), {
      passive: true,
    });

    storeScroll();
  }, []);

  return (
    <nav className="navbar">
      <div className="mx-auto max-w-7xl px-6 lg:py-4 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
            {/* LOGO */}

            <div className="flex flex-shrink-0 items-center justify-center mt-2">
              <img src={Logo} width={60} height={60} alt="logo" />
            </div>

            {/* LINKS */}

            <div className="hidden lg:block ml-auto">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`${item.current ? "text-black hover:opacity-100" : "hover:text-black hover:opacity-100"} px-3 py-4 text-lg font-normal opacity-75 space-links`}
                    aria-current={item.href ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* SIGNIN DIALOG */}

          <Signdialog />

          {/* REGISTER DIALOG */}
          <Registerdialog />

          {/* DRAWER FOR MOBILE VIEW */}

          {/* DRAWER ICON */}
          <div className="block lg:hidden">
            <Bars3Icon
              className="block h-6 w-6"
              aria-hidden="true"
              onClick={() => setIsOpen(true)}
            />
          </div>

          {/* DRAWER LINKS DATA */}
          <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
            <Drawerdata />
          </Drawer>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
