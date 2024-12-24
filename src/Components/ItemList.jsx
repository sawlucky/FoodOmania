import React from "react";
import ItemresList, { withBestSeller } from "./ItemresList";

const ItemList = ({ items, dummy }) => {
  console.log(dummy + "yess this is itemList");
  const ResturantBestSeller = withBestSeller(ItemresList);

  return (
    <div key={items.title} className="space-y-4">
      {items.map((val) => {
        const list = val?.card?.info;
        return (
          <React.Fragment key={list.id}>
            {list.isBestseller ? (
              <ResturantBestSeller data={list} />
            ) : (
              <ItemresList data={list} dummy={dummy} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ItemList;
