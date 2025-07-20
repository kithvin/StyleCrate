import React from "react";
import { assets } from "../assets/assets";

const ProductCard = ({
  product,
  currency = "$",
  cartItems = {},
  onAddToCart = () => {},
  onNavigate = () => {},
}) => {
  if (!product) return null;

  const isInCart = cartItems[product._id];

  return (
    <div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
      {/* Image */}
      <div
        onClick={() => {
          onNavigate(
            `/products/${product.category?.toLowerCase()}/${product._id}`
          );
          window.scrollTo(0, 0);
        }}
        className="relative h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden cursor-pointer flex items-center justify-center"
      >
        <img
          src={product.image?.[0] || ""}
          alt={product.name || "Product image"}
          className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-3">
        <p className="text-xs uppercase text-gray-400 mb-1 tracking-wide">
          {product.category || "Uncategorized"}
        </p>

        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 truncate">
          {product.name || "Untitled Product"}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <img
                key={i}
                className="w-4"
                src={i < 4 ? assets.star_icon : assets.star_dull_icon}
                alt=""
              />
            ))}
          <span className="text-sm text-gray-500 ml-1">(4)</span>
        </div>

        {/* Price and Actions */}
        <div className="flex items-end justify-between mt-4">
          {/* Price */}
          <div>
            <p className="text-xl font-semibold text-gray-800">
              {currency}
              {product.offerPrice || product.price || "N/A"}
              {product.offerPrice && product.offerPrice < product.price && (
                <span className="ml-2 text-sm text-gray-400 line-through">
                  {currency}
                  {product.price}
                </span>
              )}
            </p>
          </div>

          {/* Add to Cart / Quantity */}
          <div onClick={(e) => e.stopPropagation()}>
            {!isInCart ? (
              <button
                onClick={() => onAddToCart(product._id)}
                className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer"
              >
                Buy Now
              </button>
            ) : (
              <button
                disabled
                className="bg-gray-300 text-gray-600 px-4 py-2 rounded-lg text-sm font-medium cursor-not-allowed"
              >
                In Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
