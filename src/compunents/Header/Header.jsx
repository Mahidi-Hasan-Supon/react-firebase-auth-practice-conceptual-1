import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <div className="bg-green-200 py-2 shadow">
      <div className="flex items-center md:justify-between md:w-6xl mx-auto gap-3">
        <div>
          <h1 className="text-xl font-bold text-green-500">Registation</h1>
        </div>
        <div className="flex gap-3 font-semibold">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-green-500 underline" : ""
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-green-500 underline" : ""
            }
            to="/aboutus"
          >
            About us
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-green-500 underline" : ""
            }
            to="/profile"
          >
            Profile
          </NavLink>
        </div>
        <div>
          <button className="btn bg-green-600 text-amber-50">sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
