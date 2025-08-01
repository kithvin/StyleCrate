// import React from "react";

// // NewsLetter Component - A subscription section to collect user emails
// const NewsLetter = () => {
//   return (
//     <div className="flex flex-col items-center justify-center text-center space-y-2 mt-20 md:mt-26 pb-14">
//       {/* Title */}
//       <h1 className="md:text-4xl text-neutral-900 text-2xl font-semibold">Be the First to Know !</h1>

//       {/* Description */}
//       <p className="md:text-lg text-gray-500/70 pb-8">
//         Get updates on new arrivals, fresh collections, and what’s happening next.
//       </p>

//       {/* Subscription Form */}
//       <form className="flex items-center justify-between max-w-2xl md:w-full md:h-13 h-12">
//         {/* Email Input Field */}
//         <input
//           className="border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-2 text-gray-500 text-center"
//           type="text"
//           placeholder="Enter your email id"
//           required
//         />

//         {/* Subscribe Button */}
//         <button
//           type="submit"
//           className="md:px-12 px-6 h-full text-white bg-black hover:bg-primary-dull transition-all cursor-pointer rounded-md rounded-l-none"
//         >
//           Subscribe
//         </button>
//       </form>
//     </div>
//   );
// };

// export default NewsLetter;

import React, { useState } from "react";
import axios from "axios";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter an email.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/newsletter", { email });
      alert("You are subscribed to our page!");
      setEmail(""); // Clear input
    } catch (error) {
      console.error("Subscription failed:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2 mt-20 md:mt-26 pb-14">
      {/* Title */}
      <h1 className="md:text-4xl text-neutral-900 text-2xl font-semibold">Be the First to Know!</h1>

      {/* Description */}
      <p className="md:text-lg text-gray-500/70 pb-8">
        Get updates on new arrivals, fresh collections, and what’s happening next.
      </p>

      {/* Subscription Form */}
      <form
        onSubmit={handleSubscribe}
        className="flex items-center justify-between max-w-2xl md:w-full md:h-13 h-12"
      >
        {/* Email Input Field */}
        <input
          className="border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-2 text-gray-500 text-center"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email id"
          required
        />

        {/* Subscribe Button */}
        <button
          type="submit"
          className="md:px-12 px-6 h-full text-white bg-black hover:bg-primary-dull transition-all cursor-pointer rounded-md rounded-l-none"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
