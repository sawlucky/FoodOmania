import React from "react";
import Header from "./Header";
import "../App.css";

const Navbar = () => {
  return (
    <div>
      <div className="main relative">
        <img
          src="/images/nicebg.jpg"
          alt=""
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="top-elements absolute top-2 left-1/2 transform -translate-x-1/2 shadow-lg text-white flex justify-between items-center px-4 sm:px-8 w-full">
        <div className="left text-xs sm:text-sm flex flex-wrap items-center space-x-2 sm:space-x-4 text-orange-100">
          <span role="img" aria-label="phone">
            🕻
          </span>
          <span>+1 5589 55488 55</span>
          <span>⌛ Mon-Sat: 11AM - 11PM</span>
        </div>
        <div className=" text-xs sm:text-sm font-medium text-orange-100">
          En / De
        </div>
      </div>
      <Header />
      <div className="body flex flex-col md:flex-row absolute top-[45%] px-6 md:px-16 w-full items-center">
        <div className="left text-white mb-6 md:mb-0 md:ml-16 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold">
            Welcome to <span className="text-orange-400">Restaurantly</span>
          </h1>
          <h2 className="text-lg md:text-2xl font-medium text-white mt-2">
            Delivering great food for more than 18 years!
          </h2>
          <div className="all-buttons flex flex-wrap gap-4 justify-center md:justify-start mt-4">
            <button className="rounded-full border-2 border-orange-500 hover:bg-orange-500 text-sm md:text-base px-4 py-2">
              Our Menu
            </button>
            <button className="rounded-full border-2 border-orange-500 hover:bg-orange-500 text-sm md:text-base px-4 py-2">
              Book Table
            </button>
          </div>
        </div>
        <div className="right ml-[400px] mt-[30px] md:mr-16"></div>
      </div>
    </div>
  );
};

export default Navbar;
