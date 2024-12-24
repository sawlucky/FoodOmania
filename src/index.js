import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Menus from "./Components/Menus";
import About from "./Components/About";
import Error from "./Components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./Components/Footer";

import RemainingItems from "./Components/RemainingItems";
import CustomerOrder from "./Components/CustomerOrder";
import Shimmer from "./Components/Shimmer";
import Header from "./Components/Header";
import Cart from "./Components/Cart";

//lazy loading //dynamic binding // on demand loading as react is so fast when we perform lazy loading  it doesnot find the code so to overcome the drawback we wrap our element inside Suspense which is a component  and we give a fall back inside suspense
const Grocery = lazy(() => {
  return import("./Components/Grocery");
});

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    errorElement: <Error />,
  },
  {
    path: "/grocery",
    element: (
      <Suspense fallback={<Shimmer />}>
        <Grocery />
      </Suspense>
    ),
    children: [
      {
        path: "/grocery",
        element: <Header />,
      },
    ],

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
    errorElement: <Error />,
  },
  {
    path: "/menu/",
    element: <App />,
    errorElement: <Error />,
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
  {
    path: "/menu/orders",
    element: <CustomerOrder />,
  },
  {
    path: "/cart",
    element: <Cart />,
    children: [
      {
        path: "/cart",
        element: <Header />,
      },
    ],

    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
root.render(<RouterProvider router={appRouter} />);
