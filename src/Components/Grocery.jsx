import React from "react";
import { Outlet } from "react-router-dom";

const Grocery = () => {
  return (
    <div>
      <Outlet />
      Welcome to Grocery ..........!!!!!!
    </div>
  );
};

export default Grocery;
