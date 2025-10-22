import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Leyout/Root";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Profile from "../pages/Profile/Profile";
import SignIn from "../pages/signIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import AuthProvider from "../context/AuthProvider";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/aboutus",
        Component: About,
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>,
      },
      {
        path:'/signIn',
        Component:SignIn,
      },
      {
        path:'/signUp',
        Component:SignUp,
      }
    ],
  },
]);
