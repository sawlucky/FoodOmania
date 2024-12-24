import React, { useState, useEffect } from "react";
import { useParams, Outlet, Link } from "react-router-dom";
import Header from "./Header";
import { ResItems_Url } from "../utils/constant";
import Shimmer from "./Shimmer";
import ResturantCategories from "./ResturantCategories";

const RemainingItems = () => {
  const { id } = useParams();

  const [resItems, setResItems] = useState([]);
  const [remItems, setRemItems] = useState([]);
  const [actualdata, setactualdata] = useState([]);
  const [activeTab, setActiveTab] = useState("Order Online");
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const url = ResItems_Url + id;
        const data = await fetch(url);
        const json = await data.json();
        // console.log("here is json data");
        //   console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR);
        // console.log("this is data here below");
        const category = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.[
          "REGULAR"
        ]?.cards.filter(
          (c) =>
            c?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
        // console.log(category);
        setCategory(category);
        // console.log("this is data here below");

        const arr = json?.data?.cards || [];
        const actualData = arr.filter((item) => item?.card?.card?.info);
        const rest =
          json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
            ?.card?.card?.itemCards;
        // console.log(actualData);
        // console.log(rest);
        setRemItems(rest);
        setactualdata(rest);
        setResItems(actualData);
      } catch (error) {
        console.error("Error fetching restaurant items:", error);
      }
    };
    fetchItems();
  }, [id]);

  const filterOutVeg = () => {
    const data = actualdata.map((item) => ({ ...item }));
    const arr = data.filter(
      (item) =>
        item?.card?.info?.itemAttribute?.vegClassifier.toLowerCase() === "veg"
    );

    setRemItems(arr);
  };
  const filterOutNonVeg = () => {
    const data = actualdata.map((item) => ({ ...item }));
    const arr = data.filter(
      (item) =>
        item?.card?.info?.itemAttribute?.vegClassifier.toLowerCase() ===
        "nonveg"
    );

    setRemItems(arr);
  };
  const dummy = "Dumyy Data yess";
  return (
    <div className="min-h-screen mt-[120px] bg-gray-50">
      <Header />
      <div className="max-w-screen-lg mx-auto px-4 py-8">
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
                  className="rounded-lg p-4 shadow-md border border-gray-100 transition-transform transform hover:scale-105 hover:shadow-lg bg-white w-[995px]"
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
        <div>
          <div className="flex border-b border-gray-200 mb-4">
            <button
              className={`text-lg font-semibold px-4 py-2 border-b-2 transition-all border-green-500 text-green-500`}
              onClick={() => {
                filterOutVeg();
              }}
            >
              VEG
            </button>
            <button
              className={`text-lg font-semibold px-4 py-2 border-b-2 transition-all border-transparent  border-red-500 text-red-500`}
              onClick={() => {
                filterOutNonVeg();
              }}
            >
              NON-VEG
            </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {remItems === undefined
            ? " NA "
            : remItems.map((res) => {
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
                      <Link to="/menu/orders">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                          Add
                        </button>
                      </Link>
                      <span className="text-sm text-gray-600">
                        Customizable
                      </span>
                    </div>
                  </div>
                );
              })}
        </div>
        <div>
          {category.map((items) => {
            return (
              <ResturantCategories
                key={items?.card?.card.title}
                data={items?.card?.card}
                dummy={dummy}
              />
            );
          })}
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default RemainingItems;
