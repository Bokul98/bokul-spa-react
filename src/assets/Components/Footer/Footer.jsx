import React from "react";

const Footer = () => {
  return (
      <div className="flex items-center bg-gray-900 text-white">
        <div className="content md:w-8/12 w-11/12 mx-auto text-center py-8">
          <h1 className="lg:text-2xl md:text-xl text-lg font-oswald text-blue-500">
            Auction
            <span className="text-yellow-500 font-bold">Gallery</span>
          </h1>
          <p className="text-base lg:py-3 text-white">
            <span>Bid. </span>
            <span>Win. </span>
            <span>Own.</span>
          </p>
          <div className="flex lg:gap-4 md:gap-3 gap-2 justify-center lg:pb-7 md:pb-5 pb-3">
            <button className="text-sm text-blue-500 hover:underline">Home</button>
            <button className="text-sm text-blue-500 hover:underline">Auctions</button>
            <button className="text-sm text-blue-500 hover:underline">Categories</button>
            <button className="text-sm text-blue-500 hover:underline">How it Works</button>
          </div>

          <p className="opacity-80 md:text-base text-sm">
            &copy; 2025, AuctionHub. All rights reserved.
          </p>
        </div>
      </div>
  );
};

export default Footer;
