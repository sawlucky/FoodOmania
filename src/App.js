import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Rough from "./Components/Rough";
import UserContext from "./utils/UserContext";
// import { Provider } from "react-redux";
// import appStore from "./utils/appStore";

const App = () => {
  const [userName, setuserName] = useState();
  useEffect(() => {
    const data = {
      loginInfo: "shah Lucky",
    };
    setuserName(data.loginInfo);
  }, []);

  return (
    // <Provider store={appStore}>
    <UserContext.Provider value={{ loginInfo: userName, setuserName }}>
      <div>
        <Navbar />
        <Body />
        <Rough />
        <Footer />
      </div>
    </UserContext.Provider>
    // </Provider>
  );
};

export default App;
