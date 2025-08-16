import React, { useState } from "react";
import { useChageStatus, useUpdateProduct } from "../../api/useApiCall";
import { toast } from "react-toastify";

function ChangeStatus({ isOpen, onClose }) {
  if (!isOpen) return null;
  const [status, setStatus] = useState(false);
  const { mutate, isPending } = useChageStatus();
  const handleSubmit = () => {
    mutate(
      { status: status, orderId: isOpen },
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
        <select
          onChange={(e) => setStatus(e.target.value)}
          className="w-full h-10 outline-none border border-black/20 mb-4 mt-2 p-2 rounded-md"
        >
          <option value="">Select Status</option>
          <option value={"true"}>Deliverd</option>
          <option value={"false"}>Pending</option>
        </select>
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

export default ChangeStatus;
