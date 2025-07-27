import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext"; // Import global app context
// import toast from "react-hot-toast";
// import { data } from "react-router-dom";

const SellerLogin = () => {
  // Extract values from global AppContext
  // const { isSeller, setIsSeller, navigate, axios } = useAppContext();
  const { isSeller, setIsSeller, navigate } = useAppContext();

  // Local state for email and password fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const onSubmitHandler = async (event) => {
    // try {
      event.preventDefault();
      // const { data } = await axios.post("/api/seller/login", {
      //   email,
      //   password,
      // });
      // if (data.success) {
      //   setIsSeller(true);
      //   navigate("/seller");
      // } else {
      //   toast.error(data.message);
      // }
  //   } catch (error) {
  //     toast.error(data.message);
  //   }
  // // };
  
// Simulated login logic
  if (email && password) {
    setIsSeller(true);
    navigate("/seller");
  } else {
    alert("Please enter email and password.");
  }
};

  // Redirect seller to the seller dashboard/homepage if already logged in
  useEffect(() => {
    if (isSeller) {
      navigate("/seller");
    }
  }, [isSeller]);

  // Render login form only if user is not already logged in as seller
  return (
    !isSeller && (
      <form
        onSubmit={onSubmitHandler}
        className="min-h-screen flex items-center text-sm text-gray-600"
      >
        <div className="flex flex-col gap-5 m-auto items-start p-8 py-12 min-w-80 sm:min-w-88 rounded-lg shadow-xl border border-gray-200">
          {/* Form title */}
          <p className="text-2xl font-semibold m-auto">
            <span className="text-orange-500">Seller</span> Login
          </p>

          {/* Email input */}
          <div className="w-full">
            <p>Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Enter your email"
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
              required
            />
          </div>

          {/* Password input */}
          <div className="w-full">
            <p>Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Enter your password"
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
              required
            />
          </div>

          {/* Submit/Login button */}
          <button className="w-full px-4.5 py-3 rounded-lg text-center font-medium bg-neutral-900 text-white cursor-pointer mt-2 text-base">
            Login
          </button>
        </div>
      </form>
    )
  );
};

export default SellerLogin;