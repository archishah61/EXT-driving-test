import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./component/HomeLayout/HomeLayout";

import Home from "./pages/Home/Home";
import AboutUs from "./pages/About/About";
import ContactUs from "./pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/contact", element: <ContactUs /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
