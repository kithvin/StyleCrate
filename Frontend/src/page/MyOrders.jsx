import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { dummyOrders } from "../assets/assets";


const MyOrders = () => {
  // State to store orders
  const [myOrders, setMyOrders] = useState([]);

  // Get currency symbol from context
  const { currency, axios, user } = useAppContext();

  const fetchMyorders = async () => {
    // try {
    //   const { data } = await axios.get("/api/order/user");
    //   if (data.success) {
    //     setMyOrders(data.orders);
    //   }
    // } catch (error) {
    //   console.error("Error fetching orders:", error);
    // }
    setMyOrders(dummyOrders)
  };

  //   const fetchMyorders = async () => {
  //   try {
  //     const { data } = await axios.get('/api/order/user'); // Changed to GET
  //     if(data.success) {
  //       console.log("Orders data:", data.orders); // Debug log
  //       setMyOrders(data.orders);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching orders:", error);
  //   }
  // };

  // Fetch orders on component mount
  useEffect(() => {
    if (user) {
      fetchMyorders();
    }
  }, [user]);

  return (
    <div className="px-4 md:px-0 mt-8 md:mt-12 pb-14 md:pb-16">
      {/* Heading */}
      <div className="flex flex-col items-center mb-8 md:mb-10">
        <p className="text-2xl md:text-3xl text-center mb-2 font-semibold">
          My Orders
        </p>
      </div>

      {/* Loop through orders */}
      {myOrders.map((order, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-lg mb-10 p-4 py-5 w-full mx-auto max-w-4xl"
        >
          {/* Order info */}
          <p className="flex flex-col sm:flex-row sm:justify-between text-gray-400 sm:items-center gap-2 sm:gap-4 text-sm sm:text-base md:font-medium">
            <span>OrderId: {order._id}</span>
            <span>Payment: {order.paymentType}</span>
            <span>
              Total Amount: {currency}
              {order.amount}
            </span>
          </p>

          {/* Loop through items */}
          {order.items.map((item, index) => (
            <div
              key={index}
              className={`relative bg-white text-gray-500/70 ${
                order.items.length !== index + 1 ? "border-b" : ""
              } border-gray-300 flex flex-col md:flex-row md:items-center justify-between p-4 py-5 gap-4 md:gap-16 w-full`}
            >
              <div className="flex items-center flex-1 min-w-0">
                {/* Product image */}
                <div className="bg-primary/10 p-2 sm:p-4 rounded-lg flex-shrink-0">
                  <img
                    src={item.product.image[0]}
                    alt=""
                    className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded"
                  />
                </div>

                {/* Product name and category */}
                <div className="ml-2 sm:ml-4 min-w-0">
                  <h2 className="text-base sm:text-xl font-medium text-gray-800 truncate">
                    {item.product.name}
                  </h2>
                  <p className="text-sm sm:text-base">
                    Category: {item.product.category}
                  </p>
                </div>
              </div>

              {/* Item details */}
              <div className="flex flex-col justify-center mr-17 md:ml-8 text-sm sm:text-base">
                <p>Quantity: {item.quantity || "1"}</p>
                <p>Status: {order.status}</p>
                <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
              </div>

              {/* Item total price */}
              <p className="text-primary text-base sm:text-lg font-medium whitespace-nowrap">
                Amount: {currency}
                {item.product.offerPrice * item.quantity}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MyOrders;


