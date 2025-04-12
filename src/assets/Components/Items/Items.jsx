import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

const Items = ({ bid, buttonData, favItems }) => {
    const notifys = () =>
        toast("📦 Item added to your Favorite List!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    const item = favItems.find((data) => data.id === bid.id);

    return (
        <>
            {/* ✅ Mobile Version */}
            <div className="block md:hidden border-b p-3">
                <div className="flex items-center gap-3 mb-2">
                    <img src={bid.image} alt="" className="w-12 h-12 object-cover rounded" />
                    <div className="text-base font-semibold">{bid.title}</div>
                </div>
                <div className="text-sm text-gray-600 mb-1">💵 ${bid.currentBidPrice}</div>
                <div className="text-sm text-gray-600 mb-2">⏰ {bid.timeLeft}</div>
                <button
                    disabled={item}
                    onClick={() => {
                        buttonData(bid);
                        notifys();
                    }}
                    className="text-center"
                >
                    {item ? (
                        <FaHeart size={20} className="text-red-500 cursor-not-allowed mx-auto" />
                    ) : (
                        <CiHeart size={24} className="mx-auto cursor-pointer" />
                    )}
                </button>
            </div>

            {/* ✅ Desktop Version */}
            <tbody className="hidden md:table-row-group bg-white divide-y divide-gray-200">
            <tr>
                <td className="px-4 py-3 flex gap-3 items-center">
                    <img className="w-10 h-10" src={bid.image} alt="" />
                    <div className="text-sm font-medium text-gray-900">{bid.title}</div>
                </td>
                <td className="px-4 py-3 text-center text-sm text-gray-900">
                    ${bid.currentBidPrice}
                </td>
                <td className="px-4 py-3 text-center text-sm text-gray-900">
                    {bid.timeLeft}
                </td>
                <td className="px-4 py-3 text-center">
                    <button
                        disabled={item}
                        onClick={() => {
                            buttonData(bid);
                            notifys();
                        }}
                    >
                        {item ? (
                            <FaHeart size={20} className="text-red-500 cursor-not-allowed mx-auto" />
                        ) : (
                            <CiHeart size={24} className="mx-auto cursor-pointer" />
                        )}
                    </button>
                </td>
            </tr>
            </tbody>
        </>
    );
};

export default Items;
