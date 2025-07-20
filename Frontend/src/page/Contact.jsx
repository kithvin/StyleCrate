import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      {/* Header Section */}
      <div className="pt-24 pb-10 text-center px-4 bg-gradient-to-br from-white">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Let’s Talk Style
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
          Have questions about fit, shipping, or styling? Our team of fashion
          consultants is here to help.
        </p>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-16 lg:px-24 xl:px-32 py-2 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Store Details */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold md:mb-11 mb-7 text-primary">Visit Our Showroom</h2>

            <div className="space-y-6">
              {/* Location */}
              <div className="flex items-start gap-4">
                <img src={assets.location_icon} alt="Location" className="w-6 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Location</h3>
                  <p className="text-gray-600">12 Trendsetter Blvd</p>
                  <p className="text-gray-600">Colombo 07, Sri Lanka</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <img src={assets.phone_icon} alt="Phone" className="w-6 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Phone Support</h3>
                  <p className="text-gray-600">+94 77 123 9876 (General)</p>
                  <p className="text-gray-600">+94 76 321 1234 (Styling Help)</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <img src={assets.email_icon} alt="Email" className="w-6 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Email Us</h3>
                  <p className="text-gray-600">support@stylecrate.lk</p>
                  <p className="text-gray-600">stylist@stylecrate.lk</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <img src={assets.clock_icon} alt="Hours" className="w-6 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Opening Hours</h3>
                  <p className="text-gray-600"><strong>Mon–Fri:</strong> 9:00 AM – 8:00 PM</p>
                  <p className="text-gray-600"><strong>Sat–Sun:</strong> 10:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Store Map */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-primary">Find Us</h2>
            <div className="rounded-md overflow-hidden w-full h-64 md:h-96 lg:h-[400px] xl:h-[500px]">
              <iframe
                title="Style Crate Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126741.85974277937!2d79.77350915000001!3d6.9270786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593e6a58b6b3%3A0x48cb193e413fce3a!2sColombo%2007%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1718683456789!5m2!1sen!2slk"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
