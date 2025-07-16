import React from "react";
import { assets } from "../assets/assets";
const Navbar = ({ setToken }) => {
  return (
    <div className="flex items-center justify-between px-[4%] py-2">
      <img
        className="w-[max(10%,80px)]"
        src={assets.logo}
        alt="admin page logo"
      />
      <button
        className="bg-gray-600 text-white px-5 py-2 sm:px-7 rounded-full text-xs sm:text-sm"
        onClick={() => {
          setToken("");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
