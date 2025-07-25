import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const {
    user,
    setUser,
    setshowUserLogin,
    navigate,
    setSearchQuery,
    searchQuery,
    getCartCount,
  } = useAppContext();
  const logout = (async) => {
    setUser(null);
    navigate("/");
  };
  // const cartCount = 3;

  useEffect(() => {
    if (searchQuery.length > 0) {
      console.log("Redirecting to /products with search:", searchQuery);
    }
  }, [searchQuery]);

  return (
    <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
      {/* Logo */}
      <NavLink to="/" onClick={() => setOpen(false)}>
        <img className="h-13 w-auto" src={assets.logo} alt="logo" />
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <NavLink to="/" className="font-semibold hover:text-primary">
          Home
        </NavLink>
        <NavLink to="/products" className="font-semibold hover:text-primary">
          All Products
        </NavLink>
        <NavLink to="/contact" className="font-semibold hover:text-primary">
          Contact
        </NavLink>

        <NavLink
          to="/seller-dashboard"
          onClick={() => setOpen(false)}
          className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer hover:bg-gray-100 transition"
        >
          Seller Dashboard
        </NavLink>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            className="py-1.5 w-36 bg-transparent outline-none placeholder-gray-500 text-center"
            type="text"
            placeholder="Search products"
          />
          <img src={assets.search_icon} alt="search" className="w-4 h-4 mr-1" />
        </div>

        {/* Cart */}
        <div
          onClick={() => navigate("/cart")}
          className="relative cursor-pointer"
        >
          <img
            src={assets.cart_icon_addtional}
            alt="cart"
            className="w-5.5 opacity-80"
          />
          {/* {getCartCount > 0 && (
            <span className="absolute -top-2 -right-3 text-xs text-white bg-black w-[18px] h-[18px] rounded-full flex items-center justify-center">
              {getCartCount()}
            </span>
          )} */}
          {/* {getCartCount() > 0 && (
            <span className="absolute -top-2 -right-3 text-xs text-white bg-black w-[18px] h-[18px] rounded-full flex items-center justify-center">
              {getCartCount()}
            </span>
          )} */}
          <span className="absolute -top-2 -right-3 text-xs text-white bg-black w-[18px] h-[18px] rounded-full flex items-center justify-center">
            {getCartCount()}
          </span>
        </div>

        {!user ? (
          <button
            onClick={() => setshowUserLogin(true)}
            className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full ml-1"
          >
            Login
          </button>
        ) : (
          <div className="relative group">
            <img src={assets.profile_icon} className="w-10" alt="" />
            <ul className="hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200 py-2.5 w-30 rounded-md text-sm z-40">
              <li
                onClick={() => navigate("my-orders")}
                className="p-1.5 pl-6 hover:bg-primary/10 cursor-pointer"
              >
                My Orders
              </li>
              <li
                onClick={logout}
                className="p-1.5 pl-8 hover:bg-primary/10 cursor-pointer"
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      <div className="sm:hidden flex items-center gap-7 md:gap-4">
        <NavLink to="/cart" className="relative cursor-pointer">
          <img
            src={assets.cart_icon_addtional}
            alt="cart"
            className="w-5.5 opacity-80"
          />
          {/* {getCartCount() > 0 && (
            <span className="absolute -top-2 -right-3 text-xs text-white bg-black w-[18px] h-[18px] rounded-full flex items-center justify-center">
              {getCartCount()}
            </span>
          )} */}
          {/* {getCartCount() > 0 && (
            <span className="absolute -top-2 -right-3 text-xs text-white bg-black w-[18px] h-[18px] rounded-full flex items-center justify-center">
              {getCartCount()}
            </span>
          )} */}
          <span className="absolute -top-2 -right-3 text-xs text-white bg-black w-[18px] h-[18px] rounded-full flex items-center justify-center">
            {getCartCount()}
          </span>
        </NavLink>

        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden p-2 focus:outline-none"
        >
          <img src={assets.menu_icon} alt="Menu Icon" className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-b-xl py-6 px-5 sm:hidden z-50">
          <div className="grid grid-cols-2 gap-4 text-sm font-medium text-gray-800">
            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className="text-center py-2 rounded-lg bg-gray-50 hover:bg-primary/10 transition font-semibold border"
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              onClick={() => setOpen(false)}
              className="text-center py-2 rounded-lg bg-gray-50 hover:bg-primary/10 transition font-semibold border"
            >
              All Products
            </NavLink>
            {user && (
              <NavLink
                to="/orders"
                onClick={() => setOpen(false)}
                className="text-center py-2 rounded-lg bg-gray-50 hover:bg-primary/10 transition font-semibold border"
              >
                My Orders
              </NavLink>
            )}
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="text-center py-2 rounded-lg bg-gray-50 hover:bg-primary/10 transition font-semibold border"
            >
              Contact
            </NavLink>
          </div>

          <NavLink
            to="/seller-dashboard"
            onClick={() => setOpen(false)}
            className="block mt-4 text-center py-2 rounded-lg bg-gray-100 hover:bg-primary/10 transition border"
          >
            Seller Dashboard
          </NavLink>

          <hr className="my-4 border-gray-300" />
          {!user ? (
            <button
              onClick={() => {
                setOpen(false);
                setshowUserLogin(true);
              }}
              className="w-full py-2 bg-primary text-white rounded-full hover:bg-primary-dull transition"
            >
              Login
            </button>
          ) : (
            <button
              onClick={logout}
              className="w-full py-2 bg-primary text-white rounded-full hover:bg-primary-dull transition"
            >
              logout
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
