import React, { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import Header from "./Header";
import Shimmer from "./Shimmer";
import Display, { withPromoted } from "./Display";

const Menus = () => {
  const { collectionId } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tags = queryParams.get("tags");

  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchItem(collectionId, tags);
  }, [collectionId, tags]);
  const ResturantPromoted = withPromoted(Display);

  const fetchItem = async (collectionId, tags) => {
    const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6375676&lng=88.43190729999999&collection=${collectionId}&tags=${tags}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`;
    const data = await fetch(url);
    const json = await data.json();
    const arr = json?.data?.cards;
    // console.log(arr);
    const present = arr.filter((item) => {
      const info = item.card?.card?.info;
      return info && !undefined;
    });
    setItems(present);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-4 mt-[120px]">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
          Menu Items
        </h1>
        {items.length === 0 ? (
          <Shimmer />
        ) : (
          <div className=" relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {/* <Display datas={items} /> */}
            {items.map((item) => {
              const info = item.card?.card?.info;
              return (
                <Link to={`/menu/${info.id}`} key={info?.id}>
                  {/* <div className=" shadow-md text-white p-4 relative bg-black rounded-lg"> */}
                  {info.promoted ? (
                    <ResturantPromoted datas={info} />
                  ) : (
                    <Display datas={info} />
                  )}
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
