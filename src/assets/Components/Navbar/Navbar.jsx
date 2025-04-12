import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
      <div className="navbar bg-base-100 shadow-sm md:px-8 lg:px-16 px-2">
        <div className="navbar-start">
          <h1 className="lg:text-2xl md:text-xl text-lg font-oswald text-blue-500">
            Auction<span className="text-yellow-500 font-bold">Gallery</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden md:flex space-x-4 font-p">
          <button className="btn btn-ghost text-lg font-normal">Home</button>
          <button className="btn btn-ghost text-lg font-normal">Auctions</button>
          <button className="btn btn-ghost text-lg font-normal">Categories</button>
          <button className="btn btn-ghost text-lg font-normal">How to works</button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
              className="btn btn-ghost btn-circle"
              onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Icons (Always Visible) */}
        <div className="navbar-end gap-x-3 hidden md:flex">
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <img
                  src="https://i.ibb.co.com/Vprq7DTL/Group-3466092.png"
                  alt="Icon"
                  className="h-10 w-10"
              />
            </div>
          </button>
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                  alt="Profile"
                  src="https://i.ibb.co.com/MxFJXvjM/profile.png"
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu Items */}
        {menuOpen && (
            <div className="absolute top-16 left-0 w-full bg-base-100 flex flex-col items-center space-y-2 py-4 shadow-md z-50 md:hidden">
              <button className="btn btn-ghost text-lg">Home</button>
              <button className="btn btn-ghost text-lg">Auctions</button>
              <button className="btn btn-ghost text-lg">Categories</button>
              <button className="btn btn-ghost text-lg">How to works</button>
            </div>
        )}
      </div>
  );
};

export default Navbar;
