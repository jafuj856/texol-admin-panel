import React, { useEffect, useState } from "react";
import { useGetOrders, useGetProducts } from "../../api/useApiCall";
import { Search } from "lucide-react";
import NotFount from "../../components/notFound/NotFount";
import Loading from "../../components/loading/Loading";
import StockUpdate from "../../components/stockUpdate/StockUpdate";
import { useNavigate } from "react-router-dom";
import ChangeStatus from "../../components/stockUpdate/ChangeStatus";
import socket from "../../socket";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";

function Dashboard() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data, isLoading, error } = useGetProducts(search);
  const { data: orderData, isLoading: orderLoading } = useGetOrders();
  const [oderId, setOrderId] = useState("");
  const [stockAdd, setStockAdd] = useState("");

  useEffect(() => {
    socket.emit("message", JSON.stringify({ event: "admin_join" }));
    socket.on("new_order", (data) => {
      console.log("New order received:", data);
      queryClient.invalidateQueries(["getOrder"]);
    });

    socket.on("product_stock_updated", (data) => {
      console.log(" Stock updated:", data);
      queryClient.invalidateQueries(["getProduct"]);
    });

    return () => {
      socket.off("new_order");
      socket.off("product_stock_updated");
    };
  }, []);
  return (
    <div className=" relative">
      <StockUpdate isOpen={stockAdd} onClose={() => setStockAdd("")} />
      <ChangeStatus isOpen={oderId} onClose={() => setOrderId("")} />
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
        <table className="w-full min-w-[600px] text-left font-urbanist capitalize">
          <thead className="bg-buttonColor/20 text-sm">
            <tr>
              <th className="px-4 py-1 font-semibold ">Product Id</th>
              <th className="px-4 py-1 font-semibold ">Product Name</th>
              <th className="px-4 py-1 font-semibold ">Product Price</th>
              <th className="px-4 py-1 font-semibold ">Product Stock</th>
              <th className="px-4 py-1 font-semibold ">Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.length > 0 &&
              !isLoading &&
              data?.map((item) => {
                return (
                  <tr
                    onClick={() =>
                      navigate("/product-deatil", { state: { product: item } })
                    }
                    className="py-3 border-b border-black/20 cursor-pointer"
                  >
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
        <table className="w-full min-w-[600px] text-left font-urbanist capitalize">
          <thead className="bg-buttonColor/20 text-sm">
            <tr>
              <th className="px-4 py-1 font-semibold ">Order Id</th>
              <th className="px-4 py-1 font-semibold ">Total amount</th>
              <th className="px-4 py-1 font-semibold ">Payment method</th>
              <th className="px-4 py-1 font-semibold ">status</th>
              <th className="px-4 py-1 font-semibold ">Date</th>
              <th className="px-4 py-1 font-semibold ">Action</th>
            </tr>
          </thead>
          <tbody>
            {!isLoading &&
              orderData?.length > 0 &&
              orderData?.map((item) => {
                console.log(item);
                return (
                  <tr
                    onClick={() =>
                      navigate("/order-details", { state: { order: item } })
                    }
                    className="py-3 border-b border-black/20"
                  >
                    <td className="px-4 py-3 text-xc md:text-sm ">
                      {item?._id}
                    </td>
                    <td className="px-4 py-3 text-xc md:text-sm ">
                      {item?.totalPrice}
                    </td>
                    <td className="px-4 py-3 text-xc md:text-sm ">
                      {item?.paymentMethod}
                    </td>
                    <td className="px-4 py-3 text-xc md:text-sm ">
                      {item?.isDelivered ? "Deliverd" : "pending"}
                    </td>
                    <td className="px-4 py-3 text-xc md:text-sm ">
                      {new Date(item?.updatedAt).toLocaleDateString()}
                    </td>
                    <td className="px-4 py-3 text-xc md:text-sm ">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setOrderId(item?._id);
                        }}
                        className="text-white bg-buttonColor rounded-md p-1 px-4"
                      >
                        Change Status
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {orderLoading && <Loading />}
        {orderData?.length === 0 && !orderLoading && <NotFount />}
      </div>
    </div>
  );
}

export default Dashboard;
