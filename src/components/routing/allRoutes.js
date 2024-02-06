import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../footer/Footer";
import HomePage from "../../pages/HomePage";
import NavBar from "../navBar/NavBar";

const AllRoutesProvider = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Fragment>
            <NavBar/>
            <HomePage />
            <Footer />
          </Fragment>
        }
      />
    </Routes>
  );
};

export default AllRoutesProvider;
