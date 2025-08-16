import { ArrowLeft } from "lucide-react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function AdminOrderDetail() {
  const order = useLocation()?.state?.order;
  console.log(order);
  const navigate = useNavigate();

  if (!order) {
    return <div style={{ padding: "20px" }}>No order selected.</div>;
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl mb-4 text-buttonColor flex gap-2 items-center">
          <ArrowLeft onClick={() => navigate(-1)} className="cursor-pointer" />{" "}
          Order Details
        </h2>
      </div>

      <div className="border border-black/10 shadow bg-white p-5">
        <h3>Order ID: {order._id}</h3>

        <div>
          <strong>User:</strong> {order.user.name} ({order.user.email})
        </div>

        <div style={{ marginTop: "10px" }}>
          <strong>Shipping Address:</strong>
          <div>{order.shippingAddress.address}</div>
          <div>
            {order.shippingAddress.city} - {order.shippingAddress.postalCode}
          </div>
          <div>{order.shippingAddress.country}</div>
        </div>

        <div style={{ marginTop: "10px" }}>
          <strong>Order Items:</strong>
          {order.orderItems.map((item) => (
            <div
              key={item._id}
              style={{
                border: "1px solid #eee",
                padding: "8px",
                marginTop: "5px",
              }}
            >
              <span>
                {item.name} - Qty: {item.qty} × ₹{item.price}
              </span>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "10px" }}>
          <strong>Payment Method:</strong> {order.paymentMethod}
        </div>
        <div>
          <strong>Total Price:</strong> ₹{order.totalPrice}
        </div>
        <div>
          <strong>Paid:</strong> {order.isPaid ? "Yes " : "No "}
        </div>
        <div>
          <strong>Delivered:</strong> {order.isDelivered ? "Yes " : "No "}
        </div>

        {/* Created Date */}
        <div style={{ marginTop: "10px", fontSize: "14px", color: "gray" }}>
          Created At: {new Date(order.createdAt).toLocaleString()}
        </div>
      </div>
    </div>
  );
}

export default AdminOrderDetail;
