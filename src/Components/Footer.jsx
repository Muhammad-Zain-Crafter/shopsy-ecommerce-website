import React from "react";
import logo from "../assets/logo.png";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { HiLocationMarker, HiPhone } from "react-icons/hi";

const Footer = () => {
  return (
    <div>
      <div className="flex md:flex-row flex-col mt-20 p-8 bg-gray-950 text-gray-300 gap-8 justify-between">
        <div className="flex flex-col md:items-start md:w-1/3 w-full gap-2">
          <div className="flex flex-row items-start gap-1">
            <img className="h-7 w-8" src={logo} alt="" />
            <h1 className="text-xl font-bold">Shopsy</h1>
          </div>
          <p>
            Bringing you the best in fashion and lifestyle. Discover
            high-quality products, exclusive deals, and seamless shopping
            experiences at Shopsy.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-bold">Important links</h1>
          <ul className="space-y-2">
            <li>Home</li>
            <li>Top Selling</li>
            <li>Top Rated</li>
            <li>Reviews</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-bold">Help Centre</h1>
          <ul className="space-y-2">
            <li>Discord Server</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="">
          <div className="text-gray-300 space-y-4">
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4 text-xl">
              <FaInstagram className="hover:text-gray-400 cursor-pointer" />
              <FaFacebookF className="hover:text-gray-400 cursor-pointer" />
              <FaLinkedinIn className="hover:text-gray-400 cursor-pointer" />
            </div>

            {/* Location */}
            <div className="flex items-center space-x-2 text-sm">
              <HiLocationMarker className="text-lg" />
              <span>Noida, Uttar Pradesh</span>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-2 text-sm">
              <HiPhone className="text-lg" />
              <span>+91 123456789</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-center py-4 text-xl text-white font-bold h-[65px]">
        &copy; 2025 Shopsy. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
