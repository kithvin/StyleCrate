import React from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
      {/* Logo */}
      <a href="/" onClick={() => setOpen(false)}>
        <img className="h-13 w-auto" src={assets.logo} alt="logo" />
      </a>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <a href="#" className="font-semibold hover:text-primary">
          Home
        </a>
        <a href="#" className="font-semibold hover:text-primary">
          About
        </a>
        <a href="#" className="font-semibold hover:text-primary">
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
          <img src={assets.search_icon} alt="search" className="w-4 h-4 mr-1" />
        </div>

        {/* Cart */}
        <a href="/cart" className="relative cursor-pointer">
          <img src={assets.cart_icon} alt="cart" className="w-6.5 opacity-80" />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">
            3
          </button>
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
        <img
          src={assets.menu_icon}
          alt="menu"
          className="w-6 h-6"
        />
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md py-4 flex flex-col items-start gap-2 px-5 text-sm sm:hidden z-50">
          <a
            className="w-full py-2 px-3 rounded transition-colors font-semibold hover:text-primary-dull"
            href="/"
            onClick={() => setOpen(false)}
          >
            Home
          </a>
          <a
            className="w-full py-2 px-3 rounded transition-colors font-semibold hover:text-primary-dull"
            href="/products"
            onClick={() => setOpen(false)}
          >
            All Products
          </a>
          <a
            className="w-full py-2 px-3 rounded transition-colors font-semibold hover:text-primary-dull"
            href="/orders"
            onClick={() => setOpen(false)}
          >
            My Orders
          </a>
          <a
            href="/contact"
            className="w-full py-2 px-3 rounded transition-colors font-semibold hover:text-primary-dull"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
          <button
            onClick={() => setOpen(false)}
            className="w-full px-6 py-2.5 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm font-medium"
          >
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
