import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import ProductCard from "../components/ProductCard";

const AllProducts = () => {

  // Get all products and the current search query from global context
  const { products, searchQuery } = useAppContext();

  // Local state to store filtered products
  const [filteredProducts, setFilterProducts] = useState([]);

  useEffect(() => {

    // If searchQuery is not empty, filter products based on name
    if (searchQuery.length > 0) {
      setFilterProducts(
        products.filter((products) =>
          products.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {

      // If no searchQuery, show all products
        setFilterProducts(products)
    }
  }, [products, searchQuery]);

  return (
    <div className="md:mt-12 mt-12 flex flex-col md:px-20 lg:px-26 px-4"> 
       {/* Section title */}
      <div className="flex flex-col items-center mb-8 md:mb-2">
        <p className="text-2xl md:text-3xl text-center mb-2 font-semibold">All Products</p>
        {/* <div className="w-16 h-0.5 bg-primary rounded-full"></div> */}
      </div>

       {/* Product grid: shows only products that are in stock */}
      <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-6 lg:grid-cols-5 md:mt-6 justify-center">
        {filteredProducts.filter((product)=> product.inStock).map((product,index)=>(
            <ProductCard key={index} product={product}/>
        ))}
      </div>
    </div>
  );
}

export default AllProducts;