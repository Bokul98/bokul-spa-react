import React from "react";

const Hero = () => {
  return (
      <div className="w-full">
        <div className="hero bg-[url('https://i.ibb.co.com/dw1zXz20/Banner-min.jpg')] bg-cover bg-center bg-no-repeat h-[400px] md:h-96 lg:h-[680px] text-white">
          <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-center h-full w-11/12 mx-auto text-center lg:text-left">
            <div className="lg:w-2/3 mt-4 lg:mt-0">
              <h1 className="text-xl md:text-3xl lg:text-5xl font-bold leading-snug">
                Bid on Unique Items from Around the World
              </h1>
              <p className="py-3 md:py-4 lg:py-6 font-light opacity-90 text-sm md:text-lg lg:text-2xl">
                Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
              </p>
              <button className="btn bg-white text-black border-none rounded-full px-6 py-2 hover:bg-gray-100 transition-all">
                Explore Auctions
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Hero;
