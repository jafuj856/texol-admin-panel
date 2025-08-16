import React, { useState } from "react";
import { useGetProducts } from "../../api/useApiCall";
import { Search } from "lucide-react";
import NotFount from "../../components/notFound/NotFount";
import Loading from "../../components/loading/Loading";
import StockUpdate from "../../components/stockUpdate/StockUpdate";

function Dashboard() {
  const [search, setSearch] = useState("");
  const { data, isLoading, error } = useGetProducts(search);
  const [stockAdd, setStockAdd] = useState("");

  return (
    <div className=" relative">
      <StockUpdate isOpen={stockAdd} onClose={() => setStockAdd("")} />
      <h1 className="text-xl font-bold mb-4 font-instrument">
        Product with Stock level
      </h1>
      <div className="flex items-center gap-2 h-8 w-full max-w-[400px] p-1 border border-black/10 rounded-md mb-3 overflow-hidden">
        <Search className="text-black/10" />{" "}
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search products"
          className="w-full h-full bg-white outline-none "
        />
      </div>
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[600px] text-left font-urbanist">
          <thead className="bg-buttonColor/20 text-sm">
            <th className="px-4 py-1 font-semibold ">Product Id</th>
            <th className="px-4 py-1 font-semibold ">Product Name</th>
            <th className="px-4 py-1 font-semibold ">Product Price</th>
            <th className="px-4 py-1 font-semibold ">Product Stock</th>
            <th className="px-4 py-1 font-semibold ">Action</th>
          </thead>
          <tbody>
            {data?.length > 0 &&
              !isLoading &&
              data?.map((item) => {
                console.log(item);

                return (
                  <tr className="py-3 border-b border-black/20 cursor-ponter">
                    <td className="px-4 py-3 text-xc md:text-sm ">
                      {item?._id}
                    </td>
                    <td className="px-4 py-3 text-xc md:text-sm ">
                      {item?.name}
                    </td>
                    <td className="px-4 py-3 text-xc md:text-sm ">
                      {item?.price}
                    </td>
                    <td className="px-4 py-3 text-xc md:text-sm ">
                      {item?.stock}
                    </td>
                    <td className="px-4 py-3 text-xc md:text-sm ">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setStockAdd(item?._id);
                        }}
                        className="text-white bg-buttonColor rounded-md p-1 px-4"
                      >
                        AddCount
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {isLoading && <Loading />}
        {data?.length === 0 && !isLoading && <NotFount />}
      </div>
      <h1 className="text-xl font-bold mb-4 font-instrument mt-7">
        Oreder mangement
      </h1>
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[600px] text-left font-urbanist">
          <thead className="bg-buttonColor/20 text-sm">
            <th className="px-4 py-1 font-semibold ">Order Id</th>
            <th className="px-4 py-1 font-semibold ">Product Name</th>
            <th className="px-4 py-1 font-semibold ">Product Price</th>
            <th className="px-4 py-1 font-semibold ">order Count</th>
            <th className="px-4 py-1 font-semibold ">Action</th>
          </thead>
          <tbody>
            <tr className="py-3 border-b border-black/20">
              <td className="px-4 py-3 text-xc md:text-sm ">2423rfwef</td>
              <td className="px-4 py-3 text-xc md:text-sm ">2423rfwef</td>
              <td className="px-4 py-3 text-xc md:text-sm ">2423rfwef</td>
              <td className="px-4 py-3 text-xc md:text-sm ">2423rfwef</td>
              <td className="px-4 py-3 text-xc md:text-sm ">
                <button className="text-white bg-buttonColor rounded-md p-1 px-4">
                  Change Status
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
