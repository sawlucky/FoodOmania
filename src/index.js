import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Menus from "./Components/Menus";
import About from "./Components/About";
import Error from "./Components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./Components/Footer";
// import ResItems from "./Components/ResItems";
import RemainingItems from "./Components/RemainingItems";
// import Header from "./Components/Header";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
    children: [
      {
        path: "/about",
        element: <Footer />,
      },
    ],
  },
  {
    path: "/menu/",
    element: <Menus />,
  },
  {
    path: "/:collectionId",
    element: <Menus />,
  },
  {
    path: "/menu/:id",
    element: <RemainingItems />,
    children: [
      {
        path: "/menu/:id",
        element: <Footer />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
root.render(<RouterProvider router={appRouter} />);
