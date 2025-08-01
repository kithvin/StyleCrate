// import React from "react";
// import { assets } from "../assets/assets"; // Verify this path is correct
// import { useAppContext } from "../context/AppContext";

// const ProductCard = ({ product }) => {
//   const { currency, addToCart, removeFromCart, cartItems, navigate } =
//     useAppContext();

//   return (
//     product && (
//       <div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
//         <div
//           onClick={() => {
//             navigate(
//               `/products/${product.category.toLowerCase()}/${product._id}`
//             );
//             scrollTo(0, 0);
//           }}
//           className="relative h-120 sm:h-72 md:h-80 lg:h-96 overflow-hidden cursor-pointer flex items-center justify-center"
//         >
//           <img
//             className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
//             src={product.image[0]}
//             alt={product.name}
//           />
//         </div>

//         <div className="p-3">
//           <p className="text-lg sm:text-xl font-semibold text-primary truncate">
//             {product.category}
//           </p>
//           <p className="text-xs uppercase text-gray-400 mb-1 tracking-wide">
//             {product.name}
//           </p>
//           <div className="flex items-center gap-1 mt-2">
//             {Array(5)
//               .fill("")
//               .map((_, i) => (
//                 <img
//                   key={i}
//                   className="w-4 h-4 sm:w-5 sm:h-5"
//                   src={i < 4 ? assets.star_icon : assets.star_dull_icon}
//                   alt=""
//                 />
//               ))}
//             <p className="text-sm text-gray-500 ml-1">(4)</p>
//           </div>
//           <div className="flex items-end justify-between mt-4">
//             <p className="text-xl font-semibold text-gray-800">
//               {currency}
//               {product.offerPrice}{" "}
//               <span className="text-gray-500/60 md:text-sm text-xs line-through">
//                 {currency}
//                 {product.price}
//               </span>
//             </p>
//             <div onClick={(e) => e.stopPropagation()} className="text-primary">
//               {!cartItems[product._id] ? (
//                 <button
//                   className="bg-black text-white px-7 py-3 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer"
//                   onClick={() => addToCart(product._id)}
//                 >
//                   Buy Now
//                 </button>
//               ) : (
//                 <div className="bg-gray-300 text-gray-600 px-4 py-2 rounded-lg text-sm font-medium cursor-not-allowed">
//                   <button
//                     onClick={() => removeFromCart(product._id)}
//                     className="cursor-pointer text-md px-3.5 py-1 h-full "
//                   >
//                     -
//                   </button>
//                   <span className="w-5 text-center">
//                     {cartItems[product._id]}
//                   </span>
//                   <button
//                     onClick={() => addToCart(product._id)}
//                     className="cursor-pointer text-md px-3.5 py-1 h-full"
//                   >
//                     +
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   );
// };

// export default ProductCard;

import React from "react";
import { assets, categories } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

// Helper to get display name from category
const getDisplayCategory = (slug) => {
  const match = categories.find(
    (cat) => cat.path.toLowerCase() === slug.toLowerCase()
  );
  return match?.text || slug;
};

const ProductCard = ({ product }) => {
  const { currency, addToCart, removeFromCart, cartItems, navigate } =
    useAppContext();

  if (!product) return null;

  const categorySlug = product.category?.toLowerCase().replace(/\s+/g, "-");

  const handleNavigate = () => {
    navigate(`/products/${categorySlug}/${product._id}`);
    scrollTo(0, 0);
  };

  return (
    <div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200">
      <div
        onClick={handleNavigate}
        className="relative h-120 sm:h-72 md:h-80 lg:h-96 overflow-hidden cursor-pointer flex items-center justify-center"
      >
        <img
          className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
          src={product.image[0]}
          alt={product.name}
        />
      </div>

      <div className="p-3">
        <p className="text-lg sm:text-xl font-semibold text-primary truncate">
          {getDisplayCategory(categorySlug)}
        </p>
        <p className="text-xs uppercase text-gray-400 mb-1 tracking-wide font-semibold">
          {product.name}
        </p>

        <div className="flex items-center gap-1 mt-2">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <img
                key={i}
                className="w-4 h-4 sm:w-5 sm:h-5"
                src={i < 4 ? assets.star_icon : assets.star_dull_icon}
                alt=""
              />
            ))}
          <p className="text-sm text-gray-500 ml-1">(4)</p>
        </div>

        <div className="flex items-end justify-between mt-4">
          <p className="text-xl font-semibold text-gray-800">
            {currency}
            {product.offerPrice}{" "}
            <span className="text-gray-500/60 md:text-sm text-xs line-through">
              {currency}
              {product.price}
            </span>
          </p>

          <div onClick={(e) => e.stopPropagation()} className="text-primary">
            {!cartItems[product._id] ? (
              <button
                className="bg-black text-white px-7 py-3 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer"
                onClick={() => addToCart(product._id)}
              >
                Buy Now
              </button>
            ) : (
              <div className="bg-gray-300 text-gray-600 px-1 py-2 rounded-lg text-sm font-medium cursor-not-allowed flex items-center gap-2">
                <button
                  onClick={() => removeFromCart(product._id)}
                  className="cursor-pointer text-md px-3.5 py-1"
                >
                  -
                </button>
                <span className="w-5 text-center">
                  {cartItems[product._id]}
                </span>
                <button
                  onClick={() => addToCart(product._id)}
                  className="cursor-pointer text-md px-3.5 py-1"
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
