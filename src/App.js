import React from "react";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./Home";
import Success from "./Success";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/success",
      element: <Success />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
