import React, { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import Default from "./default";
import FavCard from "./FavCard";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const FavItem = ({ favItems, handleFavData }) => {
    const [totalPrice, setTotalPrice] = useState(null);

    useEffect(() => {
        const total = favItems.reduce((acc, item) => acc + item.currentBidPrice, 0);
        setTotalPrice(total);
    }, [favItems]);

    const notify = () =>
        toast.warn("📦 Item Removed from Favorite!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    return (
        <div className="rounded-lg overflow-hidden bg-white shadow-sm max-w-full sm:w-80 md:w-1/3 lg:w-1/4 xl:w-1/5 mx-auto">
            <div className="p-5 text-center border-b border-gray-200">
                <h1 className="inline-flex items-center text-[#2B7FFF] gap-1 mx-auto lg:text-xl md:text-lg text-base font-semibold">
                    <CiHeart size={25} />
                    Favorite Items
                </h1>
            </div>

            {favItems.length < 1 ? (
                <Default />
            ) : (
                <div className="fav-items p-8 divide-y divide-gray-200 border-b border-gray-200">
                    {favItems.map((favItem) => (
                        <FavCard
                            key={favItem.ids}
                            favItem={favItem}
                            handleFavData={handleFavData}
                            notify={notify}
                        />
                    ))}
                </div>
            )}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="light"
            />

            <div className="flex justify-between p-6 sm:p-8">
                <h1 className="lg:text-base md:text-sm text-xs font-medium">
                    Total Bids Amount
                </h1>
                <p className="font-bold lg:text-base md:text-sm text-xs">
                    $ {totalPrice}
                </p>
            </div>
        </div>
    );
};

export default FavItem;
