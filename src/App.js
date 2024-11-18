import React from "react";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Rough from "./Components/Rough";
// import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Navbar />
      <Body />
      <Rough />
      <Footer />
    </div>
  );
};

export default App;
