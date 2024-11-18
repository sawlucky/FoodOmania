import React, { useState } from "react";

const ResturantcCard = ({ id, price, rating, food, address, img }) => {
  //   console.log(datas.falseData);
  const [isClicked, setIsClicked] = useState(false);
  // const [isFilterd, setfiltered] = useState([]);

  return (
    <div>
      <div
        className={`box w-[300px] h-[320px] bg-slate-100 border-b-4 rounded-lg border-orange-400 m-5 shadow-2xl flex-shrink-0 box-border cursor-pointer transition-transform duration-300 ease-in-out transform ${
          isClicked
            ? "scale-105 bg-slate-300"
            : "group-hover:scale-105 hover:bg-slate-200"
        }`}
        onClick={() => setIsClicked(!isClicked)}
      >
        <img
          src={img}
          alt=""
          className="w-full h-auto p-2  object-fit shadow-2xl"
        />
        <div className="flex justify-between items-center" key={id}>
          <div className="item-name m-2 p-2 font-serif">{food}</div>
          <div className="ratings mr-2 bg-green-950 text-white p-1 rounded-lg">
            {rating}
          </div>
        </div>
        <div className="price-address flex justify-between">
          <div className="address font-mono box-border overflow-hidden p-2">
            {address}
          </div>
          <div className="price p-2 mr-2">{price}</div>
        </div>
      </div>
    </div>
  );
};

export default ResturantcCard;
