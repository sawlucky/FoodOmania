import React from "react";
// import { LOGO_URL } from "../utils/constant";

const ItemresList = ({ data, dummy }) => {
  console.log("this is from ItemREmList" + dummy);
  return (
    <div
      key={data.id}
      className="bg-white shadow-lg rounded-lg overflow-hidden p-6 m-[10px] relative"
    >
      <div className="flex justify-between items-center">
        {/* Left Section */}
        <div>
          <div className="flex items-center mb-3">
            <span
              className={`text-2xl mr-3 ${
                data?.itemAttribute?.vegClassifier === "VEG"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {data?.itemAttribute?.vegClassifier === "VEG" ? "🟩" : "🟥"}
            </span>
            <h3 className="text-xl font-bold text-gray-800">{data.name}</h3>
          </div>
          <div className="text-lg font-bold text-gray-800 mb-2">
            ₹{data?.price / 100 || data.defaultPrice / 100}
          </div>
          <div className="text-sm text-yellow-500 font-medium mb-3">
            ⭐ {data?.ratings?.aggregatedRating?.rating || "N/A"}{" "}
            <span className="text-gray-500">
              ({data?.ratings?.aggregatedRating?.ratingCountV2 || "0"} ratings)
            </span>
          </div>
          <p className="text-sm text-gray-600">{data.description}</p>
        </div>

        {/* Right Section */}
        <div className="flex-shrink-0 relative">
          <img
            src={data?.image || "https://via.placeholder.com/100"}
            alt={data.name}
            className="w-28 h-28 object-cover rounded-lg mb-3"
          />
          <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-full shadow-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all">
            Add
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export const withBestSeller = (ItemresList) => {
  return (props) => {
    return (
      <div className="bg-gradient-to-r from-white-100 to-yellow-200 p-4 rounded-md shadow-md">
        <div className="text-center mb-4">
          <label className="text-xl font-bold text-yellow">
            🌟 Best Sellers 🌟
          </label>
        </div>
        <ItemresList {...props} />
        <hr />
      </div>
    );
  };
};

export default ItemresList;
