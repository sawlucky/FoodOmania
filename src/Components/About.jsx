import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
// import Shimmer from "./Shimmer";
// import UserInfoClass from "./UserInfoClass";
// import UseData from "./UseData";
import Getgit from "./Getgit";

const About = () => {
  return (
    <>
      <div className="">
        <Header />
      </div>
      <div className="m-[100px]">
        <Getgit />
        <Outlet />
      </div>
    </>
  );
};

export default About;
