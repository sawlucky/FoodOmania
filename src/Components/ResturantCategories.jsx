import React from "react";
import ItemList from "./ItemList";

const ResturantCategories = ({ data, dummy }) => {
  const { title, id, itemCards } = data;
  //   console.log(dummy);

  return (
    <div key={id}>
      <div className="collapse collapse-arrow bg-base-200 m-[8px]">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-bold">
          {title} ({itemCards.length})
        </div>
        <div className="collapse-content">
          <ItemList items={itemCards} dummy={dummy} />
        </div>
      </div>
    </div>
  );
};

export default ResturantCategories;
