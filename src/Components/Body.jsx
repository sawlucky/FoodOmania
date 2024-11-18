import React, { useEffect, useState } from "react";

import resList from "../utils/resList";

import Resturant from "./Resturant";
// import Shimmer from "./Shimmer";
import Notfound from "./Notfound";

const Body = () => {
  const [list, setList] = useState(resList);
  const [clicked, setClicked] = useState(false);
  const [val, setval] = useState("");
  const FilterOut = () => {
    console.log("fxn invoked");
    const arr = resList.filter((items) => {
      return items.rating > 4.5;
    });
    clicked ? setList?.(resList) : setList?.(arr);
    setClicked(!clicked);
  };
  const FilterByPrice = () => {
    console.log("fxn invoked");
    const price = resList.map((item) => ({ ...item }));

    const sortedByPriceAsc = price.sort(
      (a, b) =>
        parseFloat(a.price.substring(1)) - parseFloat(b.price.substring(1))
    );

    clicked ? setList?.(resList) : setList?.(sortedByPriceAsc);
    setClicked(!clicked);
  };

  useEffect(() => {}, [list]);

  const displayAll = () => {
    setList(resList);
  };
  const printval = (searchval) => {
    const ans = resList.map((item) => ({ ...item }));

    const arr = ans.filter((item) => {
      //   if (item.food.toUpperCase() == "Chicken".toUpperCase())
      //     console.log(item.food, "found and val is", searchval);
      return item.food.toUpperCase().includes(searchval.toUpperCase());
      //   return item.food.toUpperCase() === searchval.toUpperCase();
    });
    setList(arr);
    console.log(arr);
  };

  return list.length === 0 ? (
    <Notfound />
  ) : (
    <>
      <div className="bg-[#1b110ae6] p-4  opacity-95 h-[120vh] font-customFont brightness-60 box-border overflow-auto custom-scrollbar ">
        <div className="heading-items ml-20 mt-20">
          <div className="menu-title text-white text-2xl  p-2">Menu</div>
          <div className="menu-heading text-orange-400   font-serif font-bold  text-4xl">
            Check Our Tasty Menu
          </div>
        </div>
        <div className="flex justify-center text-center gap-10 font-semibold text-white text-1.5xl mt-5">
          <div className="items font-serif hover:text-orange-400 ">
            <button
              onClick={() => {
                displayAll();
              }}
            >
              All
            </button>
          </div>
          <div className="items font-serif hover:text-orange-400 ">
            <button
              onClick={() => {
                FilterByPrice();
              }}
            >
              Starters
            </button>
          </div>
          <div className="items font-serif hover:text-orange-400 ">Salads</div>
          <div className="items font-serif hover:text-orange-400 ">
            <button
              onClick={() => {
                FilterByPrice();
              }}
            >
              Specially
            </button>
          </div>
        </div>
        <div className="flex items-center m-5 p-4 ">
          <div>
            <input
              className="px-2 py-2 m-3 "
              type="text"
              value={val}
              placeholder="search here.."
              onChange={(e) => {
                setval(e.target.value);
                // printval(e);
              }}
            />
            <button
              className="px-2 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-200"
              onClick={(e) => {
                setval(e.target.value);
                printval(val);
              }}
            >
              search
            </button>
            {/* <p className="h1">{val}</p> */}
          </div>
          <button
            className="m-2 p-2 border bg-white rounded-2xl cursor-pointer hover:bg-[#2f1e12e6]"
            onClick={() => {
              FilterOut();
            }}
          >
            Top rated Resturants
          </button>
          <button
            className="m-2 p-2 border bg-white rounded-2xl cursor-pointer hover:bg-[#2f1e12e6]"
            onClick={() => {
              FilterByPrice();
            }}
          >
            sort
          </button>
          <select
            name=""
            id=""
            onChange={(e) => {
              if (e.target.value === "4") {
                FilterOut();
              }
              if (e.target.value === "price") {
                FilterByPrice();
              }
            }}
          >
            <option value="">--select--</option>
            <option value="4">above 4.0</option>
            <option value="price">price</option>
          </select>
        </div>
        <div className="m-2 h-[90%] box-border grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 overflow-hidden scrollbar-hide">
          {list.map((items) => {
            return <Resturant datas={items} key={items.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Body;
