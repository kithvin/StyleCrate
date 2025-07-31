import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

// Reusable InputField component for form inputs
const InputField = ({ type, placeholder, name, handleChange, address }) => (
  <input
    className="w-full px-2 py-2.5 border border-gray-500/30 rounded outline-none text-gray-500 focus:border-primary transition"
    type={type}
    placeholder={placeholder}
    onChange={handleChange}
    name={name}
    value={address[name]} // Binds input value to the corresponding state property
  />
);
const AddAddress = () => {
  const { axios, user, navigate } = useAppContext();

  // State to store address input values
  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  // Handles input change for all fields using input's name
  const handleChange = (e) => {
    const { name, value } = e.target;

    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
    console.log(address);
  };

  // Form submit handler
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/address/add", { address });
      if (data.success) {
        toast.success(data.message);
        navigate("/cart");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (!user) {
      navigate("/cart");
    }
  }, []);

  return (
    <div className="mt-16 pb-16 ml-12 md:ml-24">
      {/* Title */}
      <p className="text-2xl md:text-3xl text-orange-500 font-semibold text-center md:text-left px-4 md:px-0 md:ml-8 -ml-6">
        Add <span className="font-semibold text-primary">Your</span> Shipping{" "}
        <span className="font-semibold text-primary">Address</span>
      </p>

      {/* Form & Image side by side on desktop */}

      <div className="flex flex-col-reverse md:flex-row justify-between mt-10 mr-12">
        {/* Form Section */}

        <div className="flex-1 max-w-md ">
          <form onSubmit={onSubmitHandler} className="space-y-6 mt-8 text-sm">
            {/* First & Last Name */}

            <div className="grid grid-cols-2 gap-6">
              <InputField
                handleChange={handleChange}
                address={address}
                name="firstName"
                type="text"
                placeholder="First Name"
              />
              <InputField
                handleChange={handleChange}
                address={address}
                name="lastName"
                type="text"
                placeholder="Last Name"
              />
            </div>

            {/* Email */}

            <InputField
              handleChange={handleChange}
              address={address}
              name="email"
              type="email"
              placeholder="Email address"
            />

            {/* Street */}

            <InputField
              handleChange={handleChange}
              address={address}
              name="street"
              type="text"
              placeholder="Street"
            />

            {/* City & State */}

            <div className="grid grid-cols-2 gap-6">
              <InputField
                handleChange={handleChange}
                address={address}
                name="city"
                type="text"
                placeholder="City"
              />
              <InputField
                handleChange={handleChange}
                address={address}
                name="state"
                type="text"
                placeholder="State"
              />
            </div>

            {/* Zipcode & Country */}

            <div className="grid grid-cols-2 gap-6">
              <InputField
                handleChange={handleChange}
                address={address}
                name="zipcode"
                type="number"
                placeholder="Zip Code"
              />
              <InputField
                handleChange={handleChange}
                address={address}
                name="country"
                type="text"
                placeholder="Country"
              />
            </div>

            {/* Phone */}

            <InputField
              handleChange={handleChange}
              address={address}
              name="phone"
              type="text"
              placeholder="Phone"
            />

            {/* Submit Button */}

            <button className="w-full px-5 py-3.5 text-base bg-neutral-900 rounded-lg text-white text-center font-medium mt-6 transition cursor-pointer">
              Save Address
            </button>
          </form>
        </div>

        {/* Right Side Image */}

        <img
          className="md:mr-90 mb-16 md:mt-0 w-125 h-auto"
          src={assets.add_address_image}
          alt="add Address"
        />
      </div>
    </div>
  );
};

export default AddAddress;
