import React from "react";
import Header from "./Header";
// import PhonelinkRingRoundedIcon from "@material-ui/icons/PhonelinkRingRounded";
const Navbar = () => {
  return (
    <div>
      <div className="main relative">
        <img
          src="/images/foodomania2.jpeg"
          alt=""
          className="brightness-40 w-full h-auto object-cover "
        />
      </div>
      <div className="top-elements absolute top-1 left-1/2 transform -translate-x-1/2   shadow-lg text-white flex justify-between  w-full ">
        <div className="left text-sm flex items-center space-x-2 ml-11  text-orange-100">
          <span role="img" aria-label="phone ">
            🕻
          </span>
          <span>+1 5589 55488 55</span>
          <span>⌛ Mon-Sat: 11AM - 11PM</span>
        </div>
        <div className="right text-sm font-medium mr-11 text-orange-100 ">
          En / De
        </div>
      </div>
      <Header />

      <div className="body flex absolute top-[45%] justify-between m-5 w-full items-center">
        <div className="left  text-white ml-[100px]">
          <h1 className="text-4xl font-bold font-sans ">
            Welcome to <p className="text-orange-400">Restaurantly</p>
          </h1>
          <h2 className="text-2xl font-medium font-serif ">
            Delivering great food for more than 18 years!
          </h2>

          <div className="all-buttons flex gap-4 m-4">
            <button className="rounded-[50px] border-2 border-solid border-orange-500 hover:bg-orange-500 p-3">
              Our Menu
            </button>
            <button className="rounded-[50px] border-2 border-solid border-orange-500 hover:bg-orange-500 p-2">
              Book Table
            </button>
          </div>
        </div>
        <div className="right mr-[100px]">
          <iframe
            width="320"
            height="240"
            src="https://www.youtube.com/embed/TdrL3QxjyVw"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
