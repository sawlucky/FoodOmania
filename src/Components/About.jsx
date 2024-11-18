import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Shimmer from "./Shimmer";
import UserInfoClass from "./UserInfoClass";

const About = () => {
  return (
    <>
      <div className="">
        <Header />
      </div>
      <div className="m-[100px]">
        <Shimmer />
        this is about
        <UserInfoClass
          name={"shah lucky the boss"}
          location={"jaharkahnd class"}
        />
        <Outlet />
      </div>
    </>
  );
};

export default About;
