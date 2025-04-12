import React, { useState } from "react";
import Items from "../Items/items";
import FavItem from "../FavItems/FavItem";

const Main = ({ bids }) => {
  const [favItems, setFavItems] = useState([]);
  const buttonData = (data) => {
    const newArr = [...favItems, data];
    setFavItems(newArr);
  };

  const handleFavData = (id) => {
    const remainingFavItems = favItems.filter((data) => data.id !== id);
    setFavItems(remainingFavItems);
  };

  return (
    <div className="bg-[#EBF0F5] lg:pt-32 md:pt-20 pt-11 lg:pb-20 md:pb-14 pb-6">
      <div className="w-11/12 mx-auto ">
        <div className="header-titles">
          <h1 className="lg:text-3xl md:text-2xl text-xl font-medium">
            Active Auctions
          </h1>
          <p className="lg:text-xl md:text-lg text-base lg:py-4 md:py-3 py-2">
            Discover and bid on extraordinary items
          </p>
        </div>

        <div className="content-container flex items-start md:flex-row flex-col md:gap-5 ">
          <div className="flex-grow bg-white rounded-lg shadow-md overflow-hidden">
            <table className="divide-y divide-gray-200 w-full ">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="lg:px-6 md: py-6 text-left text-xs font-medium text-black
                                lg:tracking-wider md:tracking-tight tracking-normal w-[70%]"
                  >
                    Items
                  </th>
                  <th
                    scope="col"
                    className="lg:px-6 md: py-6 text-left text-xs font-medium text-black 
                                lg:tracking-wider md:tracking-tight tracking-normal whitespace-nowrap"
                  >
                    Current bid.
                  </th>
                  <th
                    scope="col"
                    className="lg:px-6 md: py-6 text-left text-xs font-medium text-black
                                lg:tracking-wider md:tracking-tight tracking-normal whitespace-nowrap"
                  >
                    Time left
                  </th>
                  <th
                    scope="col"
                    className="lg:px-6 md: py-6 text-left text-xs font-medium text-black
                                lg:tracking-wider md:tracking-tight tracking-normal whitespace-nowrap"
                  >
                    Bid Now
                  </th>
                </tr>
              </thead>
              {bids.map((bid) => (
                <Items
                  key={bid.id}
                  bid={bid}
                  favItems={favItems}
                  buttonData={buttonData}
                ></Items>
              ))}
            </table>
          </div>

          <FavItem favItems={favItems} handleFavData={handleFavData}></FavItem>
        </div>
      </div>
    </div>
  );
};

export default Main;
