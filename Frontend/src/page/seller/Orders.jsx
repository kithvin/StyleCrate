// import React, { useEffect, useState } from "react";
// import { useAppContext } from "../../context/AppContext";
// import { assets } from "../../assets/assets";
// import toast from "react-hot-toast";

// const Orders = () => {
//   const { currency, axios } = useAppContext();
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchOrders = async () => {
//     try {
//       setLoading(true);
//       const { data } = await axios.get("/api/order/seller");
//       if (data.success) {
//         setOrders(data.orders);
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "Delivered":
//         return "text-green-600";
//       case "Cancelled":
//         return "text-red-600";
//       case "Shipped":
//         return "text-blue-600";
//       default:
//         return "text-yellow-600";
//     }
//   };

//   if (loading) {
//     return <div className="flex justify-center items-center h-[95vh]">Loading...</div>;
//   }

//   return (
//     <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll">
//       <div className="md:p-10 p-6 space-y-4">
//         <h2 className="pb-2 ml-14 md:pb-12 md:ml-92 text-2xl font-semibold">Orders List</h2>

//         {orders.length === 0 ? (
//           <div className="text-center py-10">
//             <p>No orders found</p>
//           </div>
//         ) : (
//           orders.map((order) => (
//             <div
//               key={order._id}
//               className="flex flex-col sm:flex-col md:flex-row md:items-center justify-between gap-5 p-5 max-w-4xl rounded-md border border-gray-300 w-full"
//             >
//               <div className="flex flex-col sm:flex-row gap-5 w-full md:max-w-80">
//                 <img
//                   className="w-12 h-12 object-cover"
//                   src={assets.box_icon}
//                   alt="boxIcon"
//                 />
//                 <div>
//                   {order.items.map((item, index) => (
//                     <div key={index} className="flex flex-col">
//                       <p className="font-medium text-sm md:text-base">
//                         {item.product?.name || "Product not found"}{" "}
//                         <span className="text-primary">x {item.quantity}</span>
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="text-sm md:text-base text-black/60 w-full md:w-auto md:mr-10">
//                 <p className="text-black/80 font-medium">
//                   {order.address?.firstName || "N/A"} {order.address?.lastName || ""}
//                 </p>
//                 <p>
//                   {order.address?.street || "N/A"}, {order.address?.city || "N/A"},
//                 </p>
//                 <p>
//                   {order.address?.state || "N/A"}, {order.address?.zipcode || "N/A"},{" "}
//                   {order.address?.country || "N/A"}
//                 </p>
//                 <p>{order.address?.phone || "N/A"}</p>
//               </div>

//               <p className="font-medium text-lg my-auto w-full md:w-auto text-start md:text-center mr-1">
//                 {currency}
//                 {order.amount}
//               </p>

//               <div className="flex flex-col text-sm w-full md:w-auto">
//                 <p>Method: {order.paymentType}</p>
//                 <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
//                 <p>
//                   Payment:{" "}
//                   <span className={`font-semibold ${order.isPaid ? "text-green-600" : "text-red-500"}`}>
//                     {order.isPaid ? "Paid" : "Pending"}
//                   </span>
//                 </p>
//                 <p>
//                   Status:{" "}
//                   <span className={`font-semibold ${getStatusColor(order.status)}`}>
//                     {order.status}
//                   </span>
//                 </p>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Orders;

// import React, { useEffect, useState } from "react";
// import { useAppContext } from "../../context/AppContext";
// import { assets } from "../../assets/assets";
// import toast from "react-hot-toast";

// const Orders = () => {
//   const { currency, axios } = useAppContext();
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchOrders = async () => {
//     try {
//       setLoading(true);
//       const { data } = await axios.get("/api/order/seller");
//       if (data.success) {
//         setOrders(data.orders);
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "Delivered":
//         return "text-green-600";
//       case "Cancelled":
//         return "text-red-600";
//       case "Shipped":
//         return "text-blue-600";
//       default:
//         return "text-yellow-600";
//     }
//   };

//   const getPaymentStatus = (order) => {
//     if (order.paymentType === "Online") {
//       return {
//         text: "Paid",
//         color: "text-green-600"
//       };
//     }
//     return {
//       text: order.isPaid ? "Paid" : "Pending",
//       color: order.isPaid ? "text-green-600" : "text-red-500"
//     };
//   };

//   if (loading) {
//     return <div className="flex justify-center items-center h-[95vh]">Loading...</div>;
//   }

//   return (
//     <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll">
//       <div className="md:p-10 p-6 space-y-4">
//         <h2 className="pb-2 ml-14 md:pb-12 md:ml-92 text-2xl font-semibold">Orders List</h2>

//         {orders.length === 0 ? (
//           <div className="text-center py-10">
//             <p>No orders found</p>
//           </div>
//         ) : (
//           orders.map((order) => {
//             const paymentStatus = getPaymentStatus(order);
            
//             return (
//               <div
//                 key={order._id}
//                 className="flex flex-col sm:flex-col md:flex-row md:items-center justify-between gap-5 p-5 max-w-4xl rounded-md border border-gray-300 w-full"
//               >
//                 <div className="flex flex-col sm:flex-row gap-5 w-full md:max-w-80">
//                   <img
//                     className="w-12 h-12 object-cover"
//                     src={assets.box_icon}
//                     alt="boxIcon"
//                   />
//                   <div>
//                     {order.items.map((item, index) => (
//                       <div key={index} className="flex flex-col">
//                         <p className="font-medium text-sm md:text-base">
//                           {item.product?.name || "Product not found"}{" "}
//                           <span className="text-primary">x {item.quantity}</span>
//                         </p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="text-sm md:text-base text-black/60 w-full md:w-auto md:mr-10">
//                   <p className="text-black/80 font-medium">
//                     {order.address?.firstName || "N/A"} {order.address?.lastName || ""}
//                   </p>
//                   <p>
//                     {order.address?.street || "N/A"}, {order.address?.city || "N/A"},
//                   </p>
//                   <p>
//                     {order.address?.state || "N/A"}, {order.address?.zipcode || "N/A"},{" "}
//                     {order.address?.country || "N/A"}
//                   </p>
//                   <p>{order.address?.phone || "N/A"}</p>
//                 </div>

//                 <p className="font-medium text-lg my-auto w-full md:w-auto text-start md:text-center mr-1">
//                   {currency}
//                   {order.amount}
//                 </p>

//                 <div className="flex flex-col text-sm w-full md:w-auto">
//                   <p>Method: {order.paymentType}</p>
//                   <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
//                   <p>
//                     Payment:{" "}
//                     <span className={`font-semibold ${paymentStatus.color}`}>
//                       {paymentStatus.text}
//                     </span>
//                   </p>
//                   <p>
//                     Status:{" "}
//                     <span className={`font-semibold ${getStatusColor(order.status)}`}>
//                       {order.status}
//                     </span>
//                   </p>
//                 </div>
//               </div>
//             );
//           })
//         )}
//       </div>
//     </div>
//   );
// };

// export default Orders;

import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";
import toast from "react-hot-toast";

const Orders = () => {
  const { currency, axios } = useAppContext();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/api/order/seller");
      if (data.success) {
        setOrders(data.orders);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered": return "text-green-600";
      case "Cancelled": return "text-red-600";
      case "Shipped": return "text-blue-600";
      default: return "text-yellow-600";
    }
  };

  const getPaymentStatus = (order) => {
    return order.paymentType === "Online" 
      ? { text: "Paid", color: "text-green-600" }
      : { text: "Unpaid", color: "text-red-500" };
  };

  if (loading) {
    return <div className="flex justify-center items-center h-[95vh]">Loading...</div>;
  }

  return (
    <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll">
      <div className="md:p-10 p-6 space-y-4">
        <h2 className="pb-2 ml-14 md:pb-12 md:ml-92 text-2xl font-semibold">Orders List</h2>

        {orders.length === 0 ? (
          <div className="text-center py-10">
            <p>No orders found</p>
          </div>
        ) : (
          orders.map((order) => {
            const paymentStatus = getPaymentStatus(order);
            
            return (
              <div key={order._id} className="flex flex-col sm:flex-col md:flex-row md:items-center justify-between gap-5 p-5 max-w-4xl rounded-md border border-gray-300 w-full">
                
                {/* Product Section */}
                <div className="flex flex-col sm:flex-row gap-5 w-full md:max-w-80">
                  <img className="w-12 h-12 object-cover" src={assets.box_icon} alt="boxIcon" />
                  <div>
                    {order.items.map((item, index) => (
                      <div key={index} className="flex flex-col">
                        <p className="font-medium text-sm md:text-base">
                          {item.product?.name || "Product not found"} 
                          <span className="text-primary"> x {item.quantity}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="text-sm md:text-base text-black/60 w-full md:w-auto md:mr-10">
                  <p className="text-black/80 font-medium">
                    {order.address?.firstName || "N/A"} {order.address?.lastName || ""}
                  </p>
                  <p>{order.address?.street || "N/A"}, {order.address?.city || "N/A"},</p>
                  <p>{order.address?.state || "N/A"}, {order.address?.zipcode || "N/A"}, {order.address?.country || "N/A"}</p>
                  <p>{order.address?.phone || "N/A"}</p>
                </div>

                {/* Total Amount */}
                <p className="font-medium text-lg my-auto w-full md:w-auto text-start md:text-center mr-1">
                  {currency}{order.amount}
                </p>

                {/* Payment Info */}
                <div className="flex flex-col text-sm w-full md:w-auto">
                  <p>Method: {order.paymentType}</p>
                  <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
                  <p>
                    Payment:{" "}
                    <span className={`font-semibold ${paymentStatus.color}`}>
                      {paymentStatus.text}
                    </span>
                  </p>
                  <p>
                    Status:{" "}
                    <span className={`font-semibold ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Orders;