import React from "react";
import { IoMdClose } from "react-icons/io";

const FavCard = ({ favItem, handleFavData, notify }) => {
    return (
        <div className="fav-card flex justify-between items-center gap-4 mt-2 py-3 border border-[#E5E7EB] rounded-xl px-4 sm:px-6">
            <div className="image">
                <img
                    className="lg:w-10 lg:h-10 md:w-8 md:h-8 w-6 h-6"
                    src={favItem.image}
                    alt=""
                />
            </div>

            <div className="contents-card flex-grow">
                <h3 className="font-medium text-xs sm:text-sm lg:text-base">
                    {favItem.title}
                </h3>
                <div className="flex justify-between">
                    <p className="text-[10px] sm:text-sm font-bold">
                        $ {favItem.currentBidPrice}
                    </p>
                    <p className="text-[10px] sm:text-sm font-bold">
                        Bids: {favItem.bidsCount}
                    </p>
                </div>
            </div>

            <div className="flex justify-center sm:justify-start">
                <button
                    className="cursor-pointer"
                    onClick={() => {
                        handleFavData(favItem.id);
                        notify();
                    }}
                >
                    <IoMdClose size={20} />
                </button>
            </div>
        </div>
    );
};

export default FavCard;
