import React from "react";
import { FaShoppingCart } from "react-icons/fa";

function ProductDetailPage() {
  // name, price, category, stock, description;
  return (
    <div className="flex justify-center gap-5 px-5 md:px-10 lg:px-20 p-6">
      {/* 1111 */}
      <div className="w-full md:max-w-[70%] p-4 bg-white shadow-md rounded-md">
        <div className="rounded-2xl overflow-hidden max-h-[400px]">
          <img src="/banner.png" alt="" />
        </div>
        <div className="flex flex-col gap-1 mt-5">
          <h1 className="font-semibold text-lg">Name of Product</h1>
          <p className="text-md font-semibold ">$ 300:00</p>
          <p>Category : Cosmetics</p>
          <p className="text-xs md:text-sm ">Available Stock :20</p>
          <p className="font-semibold text-sm">Descrption</p>
          <p className="text-xs text-gray-500">
            Explore our wide range of products — from the latest electronics and
            trendy fashion to premium beauty, home essentials, and more.
            Whatever you’re looking for, we’ve got it all in one place.
          </p>
        </div>
      </div>
      {/* 222 */}
      <div className="w-full md:max-w-[30%]">
        <div className="p-4 bg-white shadow-md rounded-md font-poppins w-full flex flex-col items-center justify-center gap-6">
          <div className=" bg-buttonColor/10 rounded-full w-[85px] h-[85px] flex items-center justify-center">
            <FaShoppingCart className="text-[40px] text-buttonColor" />
          </div>
          <p className="text-gray-700 text-sm text-center">
            High-quality, durable, and stylish — the perfect choice to meet your
            needs.
          </p>
          <button className="w-full bg-buttonColor text-white rounded-md p-2 font-instrument tracking-wider text-sm flex items-center justify-center">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
