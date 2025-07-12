import React from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const cartCount = 3; 

  return (
    <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
      {/* Logo */}
      <a href="/">
        <img className="h-13 w-auto" src={assets.logo} alt="Site Logo" />
      </a>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <a href="/home" className="font-semibold hover:text-primary">
          Home
        </a>
        <a href="/about" className="font-semibold hover:text-primary">
          About
        </a>
        <a href="/contact" className="font-semibold hover:text-primary">
          Contact
        </a>

        <button className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer hover:bg-gray-100 transition">
          Seller Dashboard
        </button>

        {/* Search bar */}
        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input
            className="py-1.5 w-36 bg-transparent outline-none placeholder-gray-500 text-center"
            type="text"
            placeholder="Search products"
          />
          <img
            src={assets.search_icon}
            alt="Search Icon"
            className="w-4 h-4 mr-1"
          />
        </div>

        {/* Cart */}
        <a href="/cart" className="relative cursor-pointer">
          <img
            src={assets.cart_icon}
            alt="Cart Icon"
            className="w-6.5 opacity-80"
          />
          {cartCount > 0 && (
            <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">
              {cartCount}
            </button>
          )}
        </a>

        <button className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full ml-1">
          Login
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="sm:hidden p-2 focus:outline-none"
      >
        <img src={assets.menu_icon} alt="Menu Icon" className="w-6 h-6" />
      </button>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-b-xl py-6 px-5 sm:hidden z-50">
          <div className="grid grid-cols-2 gap-4 text-sm font-medium text-gray-800">
            <a
              href="/home"
              onClick={() => setOpen(false)}
              className="text-center py-2 rounded-lg bg-gray-50 hover:bg-primary/10 transition font-semibold"
            >
              Home
            </a>
            <a
              href="/products"
              onClick={() => setOpen(false)}
              className="text-center py-2 rounded-lg bg-gray-50 hover:bg-primary/10 transition font-semibold"
            >
              All Products
            </a>
            <a
              href="/orders"
              onClick={() => setOpen(false)}
              className="text-center py-2 rounded-lg bg-gray-50 hover:bg-primary/10 transition font-semibold"
            >
              My Orders
            </a>
            <a
              href="/contact"
              onClick={() => setOpen(false)}
              className="text-center py-2 rounded-lg bg-gray-50 hover:bg-primary/10 transition font-semibold"
            >
              Contact
            </a>
          </div>

          {/* Seller Dashboard Full Width */}
          <a
            href="/seller-dashboard"
            onClick={() => setOpen(false)}
            className="block mt-4 text-center py-2 rounded-lg bg-gray-100 hover:bg-primary/10 transition"
          >
            Seller Dashboard
          </a>

          {/* Divider */}
          <hr className="my-4 border-gray-300" />

          {/* Login Button */}
          <button
            onClick={() => setOpen(false)}
            className="w-full py-2 bg-primary text-white rounded-full hover:bg-primary-dull transition"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
