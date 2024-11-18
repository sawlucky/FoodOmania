import React, { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [status, setStatus] = useState("Login");
  const [clicked, setClicked] = useState("true");
  const setStats = () => {
    clicked ? setStatus("Login") : setStatus("Logout");
    setClicked(!clicked);
  };
  return (
    <div>
      <div className="nav-items flex  justify-between items-center bg-stone-950 bg-opacity-80 absolute top-8 w-full">
        <div className="logo ml-[100px]">
          <img
            src="/images/foodlogo.jpg"
            alt=""
            className="w-20 h-20 rounded-full"
          />
        </div>
        <div className="all-items flex justify-between gap-10 text-gray-100  ">
          <Link to="/">
            <div className="item hover:text-orange-500 cursor-pointer ">
              Home
            </div>
          </Link>
          <Link to="/about">
            <div className="item hover:text-orange-500 cursor-pointer">
              About
            </div>
          </Link>
          <Link to="/menu">
            {" "}
            <div className="item hover:text-orange-500 cursor-pointer">
              Menu
            </div>
          </Link>

          <div className="item hover:text-orange-500 cursor-pointer">
            Events
          </div>
          <div className="item hover:text-orange-500 cursor-pointer">Chefs</div>
          <div className="item hover:text-orange-500 cursor-pointer ">
            Gallery
          </div>
          <div className="item hover:text-orange-500 cursor-pointer ">
            Contact
          </div>
        </div>
        <div className="third-items  text-gray-100 mr-[100px]">
          <button
            className="rounded-[50px] border-2 border-solid border-orange-500 hover:bg-orange-500  p-2"
            onClick={() => {
              setStats();
            }}
          >
            {status}
          </button>
        </div>
        <div className="third-items  text-gray-100 mr-[100px]">
          <button className="rounded-[50px] border-2 border-solid border-orange-500 hover:bg-orange-500  p-2">
            Book A Table
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
