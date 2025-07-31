import React from "react";
import { useAppContext } from "../context/AppContext"; // Access global state
import { useParams } from "react-router-dom"; // Get category name from URL
import { categories } from "../assets/assets"; // Static category list with text and path
import ProductCard from "../components/ProductCard"; // Component to render individual product cards

const ProductCategory = () => {
  // Get products from global context
  const { products } = useAppContext();

  // Get the dynamic `category` parameter from the URL
  const { category } = useParams();

  // Find the matching category object from the static categories list using the path
  const searchCategory = categories.find(
    (item) => item.path.toLowerCase() === category
  );

  // Filter the products that belong to the current category
    const filteredProducts = products.filter(
      (product) => product.category.toLowerCase() === category
    );
  
  return (
    <div className="md:mt-13 mt-12 flex flex-col md:px-20 lg:px-36 px-4">
      {/* Display category title and underline if a matching category is found */}
      {searchCategory && (
        <div className="flex flex-col items-center md:mb-2">
          <p className="text-2xl md:text-3xl text-center text-neutral-900 md:mb-2 font-semibold items-center">
            {searchCategory.text.toUpperCase()}
          </p>
        </div>
      )}

      {/* Show products if found, otherwise show alternative content */}
      {filteredProducts.length > 0 ? (
        <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-6 mt-6 justify-center">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        // If no products are found, show a friendly message
        <div className="flex items-center justify-center h-[60vh]">
          <p className="text-2xl font-medium text-primary">
            No products found in this category.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductCategory;
