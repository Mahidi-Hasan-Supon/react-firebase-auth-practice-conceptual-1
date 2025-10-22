import React from "react";
import { Outlet } from "react-router";
import Header from "../compunents/Header/Header";
import Footer from "../compunents/Footer/Footer";

const Root = () => {
  return (
    <div className="flex flex-col">
      <Header></Header>
      <div className=" bg-green-600">
        <div className="mx-6xl mx-auto mi-h-screen py-50">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
