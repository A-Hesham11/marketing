import React from "react";
import { Link } from "react-router-dom";

const Drawerdata = () => {
  const navigation = [
    { name: "Home", href: "/", current: true },
    { name: "Services", href: "#services", current: false },
    { name: "About", href: "#about", current: false },
    { name: "Portfolio", href: "#portfolio", current: false },
    { name: "Contact", href: "/contact", current: false },
  ];


  return (
    <div className="rounded-md max-w-sm w-full mx-auto">
      <div className="flex-1 space-y-4 py-1">
        <div className="sm:block">
          <div className="space-y-1 px-5 pt-2 pb-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${item.current ? "text-black hover:opacity-100" : "hover:text-black hover:opacity-100"} px-2 py-1 text-lg font-normal opacity-75 block`}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4"></div>
            {/* <button className="bg-white w-full text-blue border border-lightblue font-medium py-2 px-4 rounded">
              Sign In
            </button>
            <button className="bg-lightblue w-full hover:bg-blue hover:text-white text-blue font-medium my-2 py-2 px-4 rounded">
              Sign up
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawerdata;
