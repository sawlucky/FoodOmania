import React from "react";
// import { useLocation } from "react-router-dom";

const CustomerOrder = (props) => {
  console.log(props.datas); // Logs the passed customerAdd array

  return (
    <div>
      <h2>Customer Orders</h2>
      {/* <ul>
        {datas && datas.length > 0 ? (
          datas.map((item, index) => (
            <li key={index}>
              {item?.card?.info?.name || "Item Name Not Available"}
            </li>
          ))
        ) : (
          <p>No items added to the order yet.</p>
        )}
      </ul> */}
    </div>
  );
};

export default CustomerOrder;
