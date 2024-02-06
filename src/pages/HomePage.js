import React from "react";
import Banner from "../components/banner/Banner";
import Services from "../components/services/Services";
import AboutUs from "../components/aboutUs/AboutUs";
import Portfolio from "../components/portfolio/Portfolio";
import Newsletter from "../components/newsletter/Newsletter";

const HomePage = () => {
  return (
    <div>
      <div>
        <Banner />
      </div>

      <div>
        <Services />
      </div>

      <div>
        <AboutUs />
      </div>

      <div>
        <Portfolio />
      </div>

      <div>
        <Newsletter/>
      </div>
    </div>
  );
};

export default HomePage;
