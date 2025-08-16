import React, { useState } from "react";
import { useUpdateProduct } from "../../api/useApiCall";
import { toast } from "react-toastify";

function StockUpdate({ isOpen, onClose }) {
  if (!isOpen) return null; // <-- Only render when open
  const [stock, setStock] = useState(0);
  const { mutate, isPending } = useUpdateProduct();
  const handleSubmit = () => {
    if (stock === 0) return toast.error("please fill stock field");
    mutate(
      { stock: stock, id: isOpen },
      {
        onSuccess: (data) => {
          console.log(data);
          toast.success(data?.message);
          onClose();
        },
        onError: (err) => {
          console.log(err);
        },
      }
    );
  };
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <div className="p-6 bg-white rounded-md shadow-lg border border-black/10 relative w-[400px]">
        <h2 className="text-lg font-semibold mb-4">Stock Update</h2>
        <p className="text-sm text-gray-600">
          Here you can update your stock details.
        </p>
        <input
          className="w-full h-10 outline-none border border-black/20 mb-4 mt-2 p-2 rounded-md"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          type="number"
          onWheel={(e) => e.currentTarget.blur()}
        />
        <button
          onClick={handleSubmit}
          className="w-full flex text-white items-center justify-center p-2 px-4 bg-buttonColor rounded-md"
        >
          {isPending ? "Loading..." : "Add Stock cound"}
        </button>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default StockUpdate;
