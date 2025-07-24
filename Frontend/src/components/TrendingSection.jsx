// import React from "react";
// import { dummyProducts } from "../assets/assets";
// import ProductCard from "./ProductCard";

// function TrendingSection() {
//   const trendingProducts = dummyProducts.slice(0, 6);

//   return (
    
//     <section className="px-4 lg:px-16 md:py-18 py-12">
//       <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center md:text-left">
//         Trending Products
//       </h2>

//       <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:grid-rows-2 md:gap-4 w-full max-w-8xl">
//         {/* Top Row */}
//         <div className="md:col-span-1">
//           <ProductCard product={trendingProducts[0]} />
//         </div>
//         <div className="md:col-span-1">
//           <ProductCard product={trendingProducts[1]} />
//         </div>
//         <div className="md:col-span-2">
//           <ProductCard product={trendingProducts[2]} />
//         </div>

//         {/* Bottom Row */}
//         <div className="md:col-span-2 max-md:hidden">
//           <ProductCard product={trendingProducts[3]} />
//         </div>
//         <div className="md:col-span-1 max-md:hidden">
//           <ProductCard product={trendingProducts[4]} />
//         </div>
//         <div className="md:col-span-1">
//           <ProductCard product={trendingProducts[5]} />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default TrendingSection;

import React from "react";
import ProductCard from "./ProductCard";
import { useAppContext } from "../context/AppContext";

// TrendingSection component
function TrendingSection() {
  const { products } = useAppContext(); // Get products from context
  const trendingProducts = products.filter((product) => product.inStock).slice(0, 6);

  return (
    <section className="px-4 lg:px-16 md:py-18 py-12">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center md:text-left">
        Trending Products
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:grid-rows-2 md:gap-4 w-full max-w-8xl">
        {/* Top Row */}
        {trendingProducts[0] && (
          <div className="md:col-span-1">
            <ProductCard product={trendingProducts[0]} />
          </div>
        )}
        {trendingProducts[1] && (
          <div className="md:col-span-1">
            <ProductCard product={trendingProducts[1]} />
          </div>
        )}
        {trendingProducts[2] && (
          <div className="md:col-span-2">
            <ProductCard product={trendingProducts[2]} />
          </div>
        )}

        {/* Bottom Row */}
        {trendingProducts[3] && (
          <div className="md:col-span-2 max-md:hidden">
            <ProductCard product={trendingProducts[3]} />
          </div>
        )}
        {trendingProducts[4] && (
          <div className="md:col-span-1 max-md:hidden">
            <ProductCard product={trendingProducts[4]} />
          </div>
        )}
        {trendingProducts[5] && (
          <div className="md:col-span-1">
            <ProductCard product={trendingProducts[5]} />
          </div>
        )}
      </div>
    </section>
  );
}

export default TrendingSection;
