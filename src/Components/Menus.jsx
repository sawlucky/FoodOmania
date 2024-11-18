import React, { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import Header from "./Header";
import Shimmer from "./Shimmer";

const Menus = () => {
  const { collectionId } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tags = queryParams.get("tags");

  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchItem(collectionId, tags);
  }, [collectionId, tags]);

  const fetchItem = async (collectionId, tags) => {
    const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6375676&lng=88.43190729999999&collection=${collectionId}&tags=${tags}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`;
    // console.log(url);
    const data = await fetch(url);
    const json = await data.json();
    const arr = json?.data?.cards;
    const present = arr.filter((item) => {
      const info = item.card?.card?.info;

      return info && !undefined;
    });
    // console.log(present);

    setItems(present);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-6 mt-[100px]">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Menu Items
        </h1>
        {items.length === 0 ? (
          <Shimmer />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {items.map((item) => {
              const info = item.card?.card?.info;

              return (
                <Link to={`/menu/${info.id}`} key={info?.id}>
                  <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4 hover:scale-105 transform transition duration-300 ease-in-out">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {info?.name}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      Locality: {info?.locality}
                    </p>
                    <p className="text-gray-600 mb-2">
                      Cost for Two: {info?.costForTwo}
                    </p>
                    <p className="text-yellow-500 font-semibold mb-2">
                      Avg Rating: {info?.avgRating} ★
                    </p>
                    <p className="text-gray-600">
                      Delivery Time: {info?.sla?.deliveryTime} mins
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Menus;
