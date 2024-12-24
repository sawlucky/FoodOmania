import React, { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { Rough_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";
const Rough = () => {
  const [allList, setAllList] = useState([]);

  useEffect(() => {
    fetchDatas();
  }, []);

  const fetchDatas = async () => {
    const data = await fetch(Rough_URL);
    const json = await data?.json();
    const arr = json.data?.cards[0]?.card?.card?.imageGridCards?.info;
    console.log(arr);
    setAllList(arr);
  };
  const { loginInfo, setuserName } = useContext(UserContext);
  // When data is not yet loaded, return shimmer loading screen
  if (allList.length === 0) return <Shimmer />;

  return (
    <div className="h-auto p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Explore Our Top Cuisines:-
        <input
          type="text"
          className="border 2px bg-gray-400 rounded-[30px]"
          value={loginInfo}
          onChange={(e) => {
            setuserName(e.target.value);
          }}
        />
      </h1>
      <div
        className="flex overflow-x-auto space-x-6"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {allList.map((item) => {
          // Extract the URL, collection ID, and tags for each item
          const url = item.action.link;

          // Extract collectionId from URL (assuming the pattern is '/collections/<id>')
          const collectionMatch = url.match(/\/collections\/(\d+)/);
          const collectionId = collectionMatch ? collectionMatch[1] : null;

          const tagsMatch = url.match(/[?&]tags=([^&]+)/);
          const tagsValue = tagsMatch ? tagsMatch[1] : null;

          return (
            <Link to={`/${collectionId}?tags=${tagsValue}`} key={item.id}>
              <div className="shadow-lg rounded-lg min-w-[150px] overflow-hidden flex flex-col items-center p-4 hover:scale-105 transform transition duration-300 ease-in-out">
                <img
                  src="/images/cusines.jpg"
                  alt="Cuisine"
                  className="w-24 h-24 object-cover rounded-full mb-3"
                />
                <h3 className="text-center text-lg font-semibold text-gray-800">
                  {item.action.text}
                </h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Rough;
