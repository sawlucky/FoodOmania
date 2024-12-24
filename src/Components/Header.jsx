import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [status, setStatus] = useState("Login");
  const [clicked, setClicked] = useState(true);

  const setStats = () => {
    clicked ? setStatus("Login") : setStatus("Logout");
    setClicked(!clicked);
  };
  const { loginInfo } = useContext(UserContext);
  //   console.log(name);

  const OnlineStatus = useOnlineStatus();

  return (
    <div>
      <div className="nav-items flex flex-wrap justify-between items-center bg-stone-950 bg-opacity-80 absolute top-8 w-full dark:text-slate-400 text-sm leading-3 px-4 py-2">
        {/* Logo Section */}
        <div className="logo">
          <img
            src="/images/foodlogo.jpg"
            alt="Logo"
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full"
          />
        </div>

        {/* Navigation Links */}
        <div className="all-items hidden lg:flex justify-between gap-5 text-gray-100">
          <Link to="/">
            <div className="item hover:text-orange-500 cursor-pointer">
              Home
            </div>
          </Link>
          <Link to="/about">
            <div className="item hover:text-orange-500 cursor-pointer">
              About
            </div>
          </Link>
          <Link to="/menu">
            <div className="item hover:text-orange-500 cursor-pointer">
              Menu
            </div>
          </Link>
          <div className="item hover:text-orange-500 cursor-pointer">
            Events
          </div>
          <div className="item hover:text-orange-500 cursor-pointer">Chefs</div>
          <div className="item hover:text-orange-500 cursor-pointer">
            Gallery
          </div>
          <div className="item hover:text-orange-500 cursor-pointer">
            {loginInfo}
          </div>
        </div>

        {/* Grocery and Status Section */}
        <div className="third-items flex items-center gap-5 text-gray-100">
          <div className="hover:text-orange-500">
            <Link to="/grocery">Grocery</Link>
          </div>
          <div className="text-white">
            OnlineStatus: {OnlineStatus ? "🟢" : "🔴"}
          </div>
          <div className="block py-2 hover:text-orange-500">
            <Link to="/cart">Cart🛒</Link>
          </div>
        </div>

        {/* Buttons */}
        <div className="third-items flex gap-3 mt-2 lg:mt-0">
          <button className="rounded-full text-white border-2 border-solid border-orange-500 hover:bg-orange-500 px-4 py-2 text-sm sm:text-base">
            Book A Table
          </button>
          <button
            className="rounded-full text-white border-2 border-solid border-orange-500 hover:bg-orange-500 px-4 py-2 text-sm sm:text-base"
            onClick={() => {
              setStats();
            }}
          >
            {status}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="block lg:hidden mt-2 text-gray-100 text-center">
        <Link to="/">
          <div className="item hover:text-orange-500 cursor-pointer inline-block mx-2">
            Home
          </div>
        </Link>
        <Link to="/about">
          <div className="item hover:text-orange-500 cursor-pointer inline-block mx-2">
            About
          </div>
        </Link>
        <Link to="/menu">
          <div className="item hover:text-orange-500 cursor-pointer inline-block mx-2">
            Menu
          </div>
        </Link>
        <div className="item hover:text-orange-500 cursor-pointer inline-block mx-2">
          {loginInfo}
        </div>
        <div className="item hover:text-orange-500 cursor-pointer inline-block mx-2">
          Chefs
        </div>
        <div className="item hover:text-orange-500 cursor-pointer inline-block mx-2">
          Gallery
        </div>
        <div className="item hover:text-orange-500 cursor-pointer inline-block mx-2">
          Contact
        </div>
      </div>
    </div>
  );
};

export default Header;
