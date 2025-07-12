// import React from "react";
// import { Link } from "react-router-dom";
// import { assets } from "../assets/assets";

// const MainBanner = () => {
//   return (
//     <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 lg:px-16 min-h-[50vh] md:min-h-[70vh] gap-4 mt-4">
//       {/* Large Left Image with Text Overlay */}
//       <div className="relative col-span-1 lg:col-span-2 rounded-2xl overflow-hidden">
//         <img
//           src={assets.img1}
//           alt="Main Visual"
//           className="w-full h-180 min-h-[250px] object-cover rounded-2xl"
//         />
//         <div className="absolute top-4 sm:top-8 left-4 sm:left-8">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black font-bold drop-shadow-lg">
//             Fresh Picks <br /> for Every Season
//           </h1>
//           <p className="text-black text-base sm:text-lg md:text-xl mt-2 sm:mt-4 drop-shadow-md">
//             Explore quality groceries & essentials <br />
//             delivered to your door.
//           </p>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-12 w-fit">
//             <Link
//               to="/products"
//               className="px-5 sm:px-7 py-3 bg-neutral-900 transition-all duration-200 rounded-lg text-white text-center font-medium"
//             >
//               Shop Now
//             </Link>
//             <Link
//               to="/deals"
//               className="px-5 sm:px-7 py-3 bg-zinc-500 ransition-all duration-200 rounded-lg text-white text-center font-medium"
//             >
//               Explore Deals
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Right Side Images Stack */}
//       <div className="flex flex-col gap-4 h-180">
//         <div className="relative flex-1 rounded-2xl overflow-hidden">
//           <img
//             src={assets.img8}
//             alt="Outdoor Visual"
//             className="w-full h-full min-h-[120px] object-cover rounded-2xl"
//           />
//           <div className="absolute top-4 left-4">
//             <h2 className="text-xl sm:text-2xl md:text-3xl text-black font-semibold drop-shadow-md">
//               Outdoor <br /> Active
//             </h2>
//           </div>
//         </div>

//         <div className="relative flex-1 rounded-2xl overflow-hidden">
//           <img
//             src={assets.img11}
//             alt="Style Visual"
//             className="w-full h-full min-h-[120px] object-cover rounded-2xl"
//           />
//           <div className="absolute top-4 left-4">
//             <h2 className="text-xl sm:text-2xl md:text-3xl text-black font-semibold drop-shadow-md">
//               Casual <br /> Comfort
//             </h2>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MainBanner;

import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const MainBanner = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 lg:px-16 min-h-[50vh] md:min-h-[70vh] gap-4 mt-4">
      {/* Main Left Banner */}
      <div className="relative col-span-1 lg:col-span-2 rounded-2xl overflow-hidden">
        <img
          src={assets.img1}
          alt="Main Visual"
          className="w-full h-180 min-h-[250px] object-cover rounded-2xl"
        />

        {/* MOBILE VIEW ONLY */}
        <div className="absolute inset-0 px-4 flex flex-col justify-between md:hidden">
          {/* Top Text */}
          <div className="mt-4 text-white text-center">
            <h1 className="text-2xl font-bold drop-shadow-lg leading-tight">
              Fresh Picks <br /> for Every Season
            </h1>
            <p className="text-white text-base sm:text-lg md:text-xl mt-2 sm:mt-4 drop-shadow-md">
              Explore quality groceries & essentials <br />
              delivered to your door.
            </p>
          </div>

          {/* Bottom Buttons */}
          <div className="mb-4 flex flex-col gap-3">
            <Link
              to="/products"
              className="w-full px-5 py-3 bg-neutral-900 rounded-lg text-white text-center font-medium"
            >
              Shop Now
            </Link>
            <Link
              to="/deals"
              className="w-full px-5 py-3 bg-zinc-500 rounded-lg text-white text-center font-medium"
            >
              Explore Deals
            </Link>
          </div>
        </div>

        {/* TABLET & DESKTOP VIEW ONLY */}
        <div className="hidden md:block absolute top-4 sm:top-8 left-4 sm:left-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black font-bold drop-shadow-lg">
            Fresh Picks <br /> for Every Season
          </h1>
          <p className="text-black text-base sm:text-lg md:text-xl mt-2 sm:mt-4 drop-shadow-md">
            Explore quality groceries & essentials <br />
            delivered to your door.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-12 w-fit">
            <Link
              to="/products"
              className="px-5 sm:px-7 py-3 bg-neutral-900 transition-all duration-200 rounded-lg text-white text-center font-medium"
            >
              Shop Now
            </Link>
            <Link
              to="/deals"
              className="px-5 sm:px-7 py-3 bg-zinc-500 transition-all duration-200 rounded-lg text-white text-center font-medium"
            >
              Explore Deals
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side Images (Hidden on Mobile) */}
      <div className="hidden md:flex flex-col gap-4 h-180">
        <div className="relative flex-1 rounded-2xl overflow-hidden">
          <img
            src={assets.img8}
            alt="Outdoor Visual"
            className="w-full h-full min-h-[120px] object-cover rounded-2xl"
          />
          <div className="absolute top-4 left-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl text-black font-semibold drop-shadow-md">
              Outdoor <br /> Active
            </h2>
          </div>
        </div>

        <div className="relative flex-1 rounded-2xl overflow-hidden">
          <img
            src={assets.img11}
            alt="Style Visual"
            className="w-full h-full min-h-[120px] object-cover rounded-2xl"
          />
          <div className="absolute top-4 left-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl text-black font-semibold drop-shadow-md">
              Casual <br /> Comfort
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
