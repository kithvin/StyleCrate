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

      <div className={`${isSellerPath ? "" : ""}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:category" element={<ProductCategory />} />
          <Route path="/products/:category/:id" element={<ProductDetails />} />
          <Route path="/deals" element={<ExploreDeals />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {!isSellerPath && <Footer />}
    </div>
  );
};

export default App;
