import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { assets, dummyOrders } from "../../assets/assets";
import toast from "react-hot-toast";

const Orders = () => {
  // Access the currency symbol from global context
  // const { currency, axios } = useAppContext();
  const { currency} = useAppContext();

  // State to hold list of orders
  const [orders, setOrders] = useState([]);

  // Fetch orders data
  // const fetchOrders = async () => {
  //   try {
  //     const { data } = await axios.get("/api/order/seller");
  //     if (data.success) {
  //       setOrders(data.orders);
  //     } else {
  //       toast.error(data.message);
  //     }
  //   } catch (error) {
  //     toast.error(error.message);
  //   }
  // };

  // Run fetchOrders once on component mount
  useEffect(() => {
    // fetchOrders();
    setOrders(dummyOrders);
  }, []);

  return (
    <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll">
      <div className="md:p-10 p-6 space-y-4">
        {/* Page Title */}
        <h2 className="pb-2 ml-14 md:pb-12 md:ml-92 text-2xl font-semibold">Orders List</h2>

        {/* Loop through each order */}
        {orders.map((order, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-col md:flex-row md:items-center justify-between gap-5 p-5 max-w-4xl rounded-md border border-gray-300 w-full"
          >
            {/* Product Section */}
            <div className="flex flex-col sm:flex-row gap-5 w-full md:max-w-80">
              {/* Product Thumbnail */}
              <img
                className="w-12 h-12 object-cover"
                src={assets.box_icon}
                alt="boxIcon"
              />
              {/* Product Info List */}
              <div>
                {order.items.map((item, index) => (
                  <div key={index} className="flex flex-col">
                    <p className="font-medium text-sm md:text-base">
                      {item.product.name}{" "}
                      <span className="text-primary">x {item.quantity}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Shipping Address */}
            <div className="text-sm md:text-base text-black/60 w-full md:w-auto">
              <p className="text-black/80 font-medium">
                {order.address.firstName} {order.address.lastName}
              </p>
              <p>
                {order.address.street}, {order.address.city},
              </p>
              <p>
                {order.address.state},{order.address.zipcode},{" "}
                {order.address.country}
              </p>
              <p>{order.address.phone}</p>
            </div>

            {/* Total Amount */}
            <p className="font-medium text-lg my-auto w-full md:w-auto text-start md:text-center">
              {currency}
              {order.amount}
            </p>

            {/* Payment Info */}
            <div className="flex flex-col text-sm w-full md:w-auto">
              <p>Method: {order.paymentType}</p>
              <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
              <p>
                Payment:{" "}
                <span
                  className={`font-semibold ${
                    order.isPaid ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {order.isPaid ? "Paid" : "Pending"}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
