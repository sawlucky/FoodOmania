import React, { useState, useEffect } from "react";
import { useParams, Outlet } from "react-router-dom";
import Header from "./Header";
import { ResItems_Url } from "../utils/constant";
import Shimmer from "./Shimmer";

const ResItems = () => {
  const { id } = useParams();
  const [resItems, setResItems] = useState([]);
  const [remItems, setRemItems] = useState([]);
  const [activeTab, setActiveTab] = useState("Order Online");

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const url = ResItems_Url + id;
      const data = await fetch(url);
      const json = await data.json();

      const arr = json?.data?.cards || [];
      const actualData = arr.filter((item) => item?.card?.card?.info);
      const rest =
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
          ?.card?.itemCards;

      setRemItems(rest);
      setResItems(actualData);
    } catch (error) {
      console.error("Error fetching restaurant items:", error);
    }
  };

  return (
    <div className="min-h-screen mt-[120px] bg-gray-50">
      <Header />
      <div className="max-w-screen-lg mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-4">
          <button
            className={`text-lg font-semibold px-4 py-2 border-b-2 transition-all ${
              activeTab === "Order Online"
                ? "border-orange-500 text-orange-500"
                : "border-transparent text-gray-600"
            }`}
            onClick={() => setActiveTab("Order Online")}
          >
            Order Online
          </button>
          <button
            className={`text-lg font-semibold px-4 py-2 border-b-2 transition-all ${
              activeTab === "Dineout"
                ? "border-orange-500 text-orange-500"
                : "border-transparent text-gray-600"
            }`}
            onClick={() => setActiveTab("Dineout")}
          >
            Dineout
          </button>
        </div>

        {resItems.length === 0 ? (
          <Shimmer />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resItems.map((item) => {
              const info = item?.card?.card?.info;
              if (!info) return null;

              return (
                <div
                  key={info.id}
                  className="rounded-lg p-4 shadow-md border border-gray-100 transition-transform transform hover:scale-105 hover:shadow-lg bg-white"
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {info.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    {info.cuisines?.join(", ") || "Cuisine not available"}
                  </p>
                  {/* Ratings, Cost, and Delivery Time */}
                  <div className="flex items-center text-gray-700 mb-4">
                    <span className="flex items-center text-green-600 font-bold mr-2">
                      {info?.avgRatingString || "N/A"} ★
                    </span>
                    <span className="text-sm text-gray-500 mr-2">
                      ({info?.totalRatingsString || "No ratings"})
                    </span>
                    <span className="text-gray-500 font-semibold">•</span>
                    <span className="text-sm text-gray-500 font-semibold mx-2">
                      {info?.costForTwoMessage || "N/A"}
                    </span>
                  </div>
                  {/* Outlet Location and Delivery Time */}
                  <div className="text-sm text-gray-700 mb-2">
                    <strong>Outlet:</strong>{" "}
                    {info.areaName || "Location not available"}
                  </div>
                  <div className="text-sm text-gray-700">
                    <strong>Delivery Time:</strong>{" "}
                    {info?.sla?.slaString || "N/A"}
                  </div>

                  <div className="mt-6 p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                    <h3 className="text-lg font-semibold text-orange-700 mb-2">
                      Deals for You
                    </h3>
                    <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
                      {info.aggregatedDiscountInfo.descriptionList.map(
                        (data, index) => (
                          <div
                            key={index}
                            className="flex-shrink-0 flex items-center bg-white rounded-md p-3 border border-gray-200 shadow-sm hover:shadow-md transition-transform duration-300 hover:scale-105 min-w-[250px]"
                          >
                            <span className="text-orange-600 font-bold mr-2">
                              🔥
                            </span>
                            <p className="text-gray-700">
                              <strong>{data.meta}</strong>
                            </p>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {remItems.length === 0 ? (
            <Shimmer />
          ) : (
            remItems.map((res) => {
              const remdata = res?.card?.info;
              return (
                <div
                  key={remdata.id}
                  className="w-72 p-4 border border-gray-200 rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105 hover:shadow-lg"
                >
                  <div className="text-center">
                    <span
                      className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                        remdata?.itemAttribute?.vegClassifier === "VEG"
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {remdata?.itemAttribute?.vegClassifier || "N/A"}
                    </span>
                    <h3 className="mt-2 text-xl font-semibold">
                      {remdata.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {remdata.description}
                    </p>
                    <p className="mt-2 text-lg font-bold text-green-600">
                      ₹{remdata.price / 100}
                    </p>
                    <p className="text-sm text-gray-400">
                      {remdata.ratings?.aggregatedRating?.rating || "N/A"} ★
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      Add
                    </button>
                    <span className="text-sm text-gray-600">Customizable</span>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default ResItems;
