import React from "react";
import { Outlet } from "react-router-dom";

const Cart = () => {
  return (
    <div>
      <Outlet />
      this is cart
    </div>
  );
};

export default Cart;
