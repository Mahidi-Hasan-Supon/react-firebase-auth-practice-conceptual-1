import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Leyout/Root";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Profile from "../pages/Profile/Profile";
import SignIn from "../pages/signIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";

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
        Component: Profile,
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
