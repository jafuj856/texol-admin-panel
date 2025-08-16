import React from "react";
import CommonHeading, {
  CommonText,
} from "../../components/commonText/CommonHeading";
import { useLocation } from "react-router-dom";

function Products() {
  const location = useLocation();
  const category = location.state?.category;
  return (
    <div className="px-6 md:px-10 lg:px-20">
      <CommonHeading className={`text-center`} heading={category} />
      <div className="text-center w-full flex justify-center">
        <CommonText
          className={"text-center max-w-[500px] text-gray-500"}
          text={
            "Discover quality products at great prices, carefully selected to bring you the best in style, function, and value."
          }
        />
      </div>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-5 w-full max-w-[90%]">
        <div
          onClick={() =>
            navigate("/product", { state: { category: "electronics" } })
          }
          className={`relative w-full  shadow-md bg-white hover:shadow-2xl h-fit  group overflow-hidden cursor-pointer transition-all duration-500 ease-out delay-500 hover:scale-105
    `}
        >
          {/* Image filling parent */}
          <img src="/category2.jpg" className="w-full h-full" alt="" />
          <div className="p-4 text-start">
            <h1 className="font-jakarta font-semibold ">Name or Product</h1>
            <p className="font-bold text-xs">50:00 $</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
