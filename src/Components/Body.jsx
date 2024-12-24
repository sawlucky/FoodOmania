import React, { useEffect, useState } from "react";
import resList from "../utils/resList";
import Resturant from "./Resturant";

const Body = () => {
  const [list, setList] = useState(resList);
  const [clicked, setClicked] = useState(false);
  const [val, setval] = useState("");

  const FilterOut = () => {
    const arr = resList.filter((items) => items.rating > 4.5);
    clicked ? setList(resList) : setList(arr);
    setClicked(!clicked);
  };

  const FilterByPrice = () => {
    const price = [...resList];
    const sortedByPriceAsc = price.sort(
      (a, b) =>
        parseFloat(a.price.substring(1)) - parseFloat(b.price.substring(1))
    );
    clicked ? setList(resList) : setList(sortedByPriceAsc);
    setClicked(!clicked);
  };

  const displayAll = () => {
    setList(resList);
  };

  const printval = (searchval) => {
    const ans = resList.filter((item) =>
      item.food.toUpperCase().includes(searchval.toUpperCase())
    );
    setList(ans);
  };

  useEffect(() => {}, [list, val]);

  return (
    <div className="bg-[#14100C] p-4 h-full font-customFont opacity-95 box-border overflow-auto custom-scrollbar">
      <div className="heading-items ml-4 md:ml-20 mt-10 md:mt-20 text-center md:text-left">
        <div className="menu-title text-white text-lg md:text-2xl p-2">
          Menu
        </div>
        <div className="menu-heading text-orange-400 font-serif font-bold text-2xl md:text-4xl">
          Check Our Tasty Menu
        </div>
      </div>

      <div className=" flex flex-wrap justify-center items-center md:justify-center gap-4 font-semibold text-white text-lg mt-5">
        <button
          className="items font-serif hover:text-orange-400 px-4 py-2"
          onClick={displayAll}
        >
          All
        </button>
        <button
          className="items font-serif hover:text-orange-400 px-4 py-2"
          onClick={FilterByPrice}
        >
          Starters
        </button>
        <button className="items font-serif hover:text-orange-400 px-4 py-2">
          Salads
        </button>
        <button
          className="items font-serif hover:text-orange-400 px-4 py-2"
          onClick={FilterByPrice}
        >
          Specially
        </button>
      </div>

      <div className="flex flex-wrap justify-center md:justify-between items-center m-5 p-4 gap-4">
        <div className="flex flex-wrap items-center">
          <input
            className="px-3 py-2 m-2 rounded border-b-4 border-orange-600"
            type="text"
            value={val}
            placeholder="Search here..."
            onChange={(e) => setval(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-orange-600 text-white font-semibold shadow-md hover:bg-orange-700 transition duration-200"
            onClick={() => printval(val)}
          >
            Search
          </button>
        </div>
        <div className="flex gap-4">
          <button
            className="px-4 py-2 bg-white border rounded-2xl cursor-pointer hover:bg-orange-600 transition duration-200"
            onClick={FilterOut}
          >
            Top Rated Restaurants
          </button>
          <button
            className="px-4 py-2 bg-white border rounded-2xl cursor-pointer hover:bg-orange-600 transition duration-200"
            onClick={FilterByPrice}
          >
            Filter
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2">
        {list.map((items) => (
          <Resturant datas={items} key={items.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
