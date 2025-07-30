// import React from "react";
// import Navbar from "./components/Navbar";
// import { Route, Routes, useLocation } from "react-router-dom";
// import Footer from "./components/Footer";
// import { useAppContext } from "./context/AppContext";
// import Contact from "./page/Contact";
// import Home from "./page/Home";
// import Cart from "./page/Cart";
// import Login from "./components/Login";
// import AllProducts from "./page/AllProduct";
// import ProductCategory from "./page/ProductCategory";
// import ProductDetails from "./page/ProductDetails";
// import ExploreDeals from "./components/ExploreDeals";
// import AddAddress from "./page/AddAddress";
// import MyOrders from "./page/MyOrders";
// import SellerLogin from "./components/seller/SellerLogin";
// import SellerLayout from "./page/seller/SellerLayout";
// import AddProduct from "./page/seller/AddProduct";
// import ProductList from "./page/seller/ProductList";
// import Orders from "./page/seller/Orders";

// const App = () => {
//   const location = useLocation();
//   const isSellerPath = location.pathname.includes("/seller");

//   const { showUserLogin, isSeller } = useAppContext();

//   return (
//     <div className="text-default min-h-screen text-gray-700 bg-white">
//       {!isSellerPath && <Navbar />}

//       {/* Transparent login popup without background shading */}
//       {showUserLogin && (
//         <div className="fixed inset-0 backdrop-brightness-50 z-50 flex justify-center items-center">
//           <Login />
//         </div>
//       )}

//       <div className={`${isSellerPath ? "" : ""}`}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/products" element={<AllProducts />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/add-address" element={<AddAddress />} />
//           <Route path="/products/:category" element={<ProductCategory />} />
//           <Route path="/my-orders" element={<MyOrders />} />
//           <Route path="/products/:category/:id" element={<ProductDetails />} />
//           <Route path="/deals" element={<ExploreDeals />} />
//           <Route path="/contact" element={<Contact />} />

//           <Route path="/seller-login" element={<SellerLogin />} />
//           <Route path="/seller" element={isSeller ? <SellerLayout /> : <SellerLogin />} />
//           <Route index element={isSeller ? <AddProduct/>:null}/>
//           <Route paht='product-list' element={<ProductList/>}/>
//           <Route path='order' element={<Orders/>}/>
//         </Routes>
//       </div>

//       {!isSellerPath && <Footer />}
//     </div>
//   );
// };

// export default App;

import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import { useAppContext } from "./context/AppContext";
import Contact from "./page/Contact";
import Home from "./page/Home";
import Cart from "./page/Cart";
import Login from "./components/Login";
import AllProducts from "./page/AllProduct";
import ProductCategory from "./page/ProductCategory";
import ProductDetails from "./page/ProductDetails";
import ExploreDeals from "./components/ExploreDeals";
import AddAddress from "./page/AddAddress";
import MyOrders from "./page/MyOrders";
import SellerLogin from "./components/seller/SellerLogin";
import SellerLayout from "./page/seller/SellerLayout";
import AddProduct from "./page/seller/AddProduct";
import ProductList from "./page/seller/ProductList";
import Orders from "./page/seller/Orders";
import { Toaster } from "react-hot-toast";

const App = () => {
  const location = useLocation();
  const isSellerPath = location.pathname.includes("/seller");

  const { showUserLogin, isSeller } = useAppContext();

  return (
    <div className="text-default min-h-screen text-gray-700 bg-white">
      {!isSellerPath && <Navbar />}

      {/* Transparent login popup without background shading */}
      {showUserLogin && (
        <div className="fixed inset-0 backdrop-brightness-50 z-50 flex justify-center items-center">
          <Login />
        </div>
      )}
      <Toaster
        toastOptions={{
          style: {
            background: "white",
            color: "black",
            border: "1px solid #ccc", 
          },
          success: {
            iconTheme: {
              primary: "black",
              secondary: "white",
            },
          },
          error: {
            iconTheme: {
              primary: "black",
              secondary: "white",
            },
          },
        }}
      />
      <div className={`${isSellerPath ? "" : ""}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/add-address" element={<AddAddress />} />
          <Route path="/products/:category" element={<ProductCategory />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/products/:category/:id" element={<ProductDetails />} />
          <Route path="/deals" element={<ExploreDeals />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/seller-login" element={<SellerLogin />} />
          <Route
            path="/seller"
            element={isSeller ? <SellerLayout /> : <SellerLogin />}
          >
            <Route index element={<AddProduct />} />
            <Route path="product-list" element={<ProductList />} />
            <Route path="orders" element={<Orders />} />
          </Route>
        </Routes>
      </div>

      {!isSellerPath && <Footer />}
    </div>
  );
};

export default App;
