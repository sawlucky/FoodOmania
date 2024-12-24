import React from "react";

const Display = (props) => {
  const { name, locality, costForTwo, avgRating } = props.datas;
  const { deliveryTime } = props.datas?.sla;

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden p-4 relative hover:scale-105 transform transition duration-300 ease-in-out md:max-w-md lg:max-w-lg">
      <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mb-2">
        {name}
      </h3>
      <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-2">
        Locality: {locality}
      </p>
      <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-2">
        Cost for Two: {costForTwo}
      </p>
      <p className="text-sm md:text-base lg:text-lg text-yellow-500 font-semibold mb-2">
        Avg Rating: {avgRating} ★
      </p>
      <p className="text-sm md:text-base lg:text-lg text-gray-600">
        Delivery Time: {deliveryTime} mins
      </p>
    </div>
  );
};

// Higher Order Component for "Promoted"
export const withPromoted = (Display) => {
  return (props) => {
    return (
      <div className="relative">
        <div className="absolute opacity-80 top-0 right-0 bg-black text-white px-2 py-1 rounded-br-md z-10 text-xs sm:text-sm md:text-base lg:text-lg">
          <label>Promoted</label>
        </div>
        <Display {...props} />
      </div>
    );
  };
};

export default Display;
