// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { categories } from "../assets/assets"; 

// const Categories = () => {
//   const navigate = useNavigate();

//   const handleCategoryClick = (path) => {
//     navigate(`/products/${path.toLowerCase()}`);
//     window.scrollTo(0, 0);
//   };

//   return (
//     <div className="mt-8 md:mt-20">
//       {/* Button-style layout */}
//       <div className="grid grid-cols-2 place-items-center sm:flex sm:flex-wrap sm:justify-center gap-3 md:gap-4">
//         {categories?.map((category, index) => (
//           <div
//             key={index}
//             onClick={() => handleCategoryClick(category.path)}
//             className="cursor-pointer w-39 md:w-48 h-21 md:h-24 flex items-center justify-start gap-2 md:px-4 px-1 bg-white text-black border border-gray-300 shadow-sm rounded-md hover:shadow-md hover:border-gray-400 transition-all"
//           >
//             <img
//               src={category.image}
//               alt={`${category.text} icon`}
//               className="w-12 h-12 object-contain"
//             />
//             <span className="text-base font-medium">{category.text}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Categories;

import React from "react";
import { categories } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const { navigate } = useNavigate();

  const handleCategoryClick = (path) => {
    navigate(`/products/${path.toLowerCase()}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="mt-8 md:mt-20">
    
      <div className="grid grid-cols-2 place-items-center sm:flex sm:flex-wrap sm:justify-center gap-3 md:gap-4">
        {categories?.map((category, index) => (
          <div
            key={index}
            onClick={() => handleCategoryClick(category.path)}
            className="cursor-pointer w-39 md:w-48 h-21 md:h-24 flex items-center justify-start gap-2 md:px-4 px-1 bg-white text-black border border-gray-300 shadow-sm rounded-md hover:shadow-md hover:border-gray-400 transition-all"
          >
            <img
              src={category.image}
              alt={`${category.text} icon`}
              className="w-12 h-12 object-contain"
            />
            <span className="text-base font-medium">{category.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
