import React from "react";
import { assets, footerLinks } from "../assets/assets"; // Import logo and footer links

const Footer = () => {
  return (
    // Outer container with padding and background color

    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-24 bg-primary/10">
      {/* Top section with logo, description, and footer links */}

      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
        {/* Logo and short description */}
        <div>
          <img className="h-13 w-auto" src={assets.logo} alt="logo" />
          <p className="max-w-[410px] mt-6">
            Discover stylish clothing, quality fabrics, and everyday essentials.
            Shop easily, save time, and enjoy fast, reliable delivery straight
            to your door.
          </p>
        </div>

        {/* Footer link sections */}

        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
          {footerLinks.map((section, index) => (
            <div key={index}>
              {/* Section title */}

              <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
                {section.title}
              </h3>

              {/* Links under each section */}

              <ul className="text-sm space-y-1">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href={link.url} className="hover:underline transition">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom copyright text */}

      <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
        Copyright {new Date().getFullYear()} © STYLRCRATE All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
