

import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa"; // Import icons

import { IoLogoSkype } from "react-icons/io";
import { IoLogoPinterest } from "react-icons/io";

const Footer = () => {
  return (
    <div className="h-96 bg-[#2A254B]">
      <div className="flex flex-wrap space-x-8 pt-10 pl-20">
        <div>
          <h1 className="text-white text-lg font-Clash Display">Menu</h1>
          <p className="text-white mt-4 text-sm">New arrivals</p>
          <p className="text-white mt-4 text-sm">Best seller</p>
          <p className="text-white mt-4 text-sm">Recently Viewed</p>
          <p className="text-white mt-4 text-sm">Popular this week</p>
          <p className="text-white mt-4 text-sm">All Products</p>
        </div>
        <div>
          <h1 className="text-white text-lg font-Clash Display ml-20">
            Catergory
          </h1>
          <p className="text-white mt-4 text-sm ml-20">Crockery</p>
          <p className="text-white mt-4 text-sm ml-20">Furniture</p>
          <p className="text-white mt-4 text-sm ml-20">Homeware</p>
          <p className="text-white mt-4 text-sm ml-20">Plants pot</p>
          <p className="text-white mt-4 text-sm ml-20">Chiar</p>
          <p className="text-white mt-4 text-sm ml-20">Crockery</p>
        </div>
        <div className="pl-28">
          <h1 className="text-white text-lg font-Clash Display">Our Company</h1>
          <p className="text-white mt-4 text-sm">About Us</p>
          <p className="text-white mt-4 text-sm">Vacancies</p>
          <p className="text-white mt-4 text-sm">Contact Us</p>
          <p className="text-white mt-4 text-sm">Privacy</p>
          <p className="text-white mt-4 text-sm">Return Policy</p>
        </div>
        <div className="pl-28">
          <h1 className="text-white text-lg font-Clash Display">
            Join our mailing list
          </h1>
          <input
            type="text"
            placeholder="you@gmail.com"
            className="bg-input-bg w-80 mt-5 h-12 p-5 rounded-sm"
          />
          <button className="bg-white h-12 w-32 rounded-sm mt-1">Sign Up</button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-center border-t-2 m-auto w-11/12 my-8 pt-4">
        {/* Left Section - Copyright */}
        <p className="text-white text-sm">Copyright 2022 Avion LTD</p>

        {/* Right Section - Icons */}
        <div className="w-[264] h-[24px]  flex space-x-4">
          <FaFacebookF className="text-white cursor-pointer" />
          <FaLinkedinIn className="text-white cursor-pointer" />
          <FaInstagram className="text-white cursor-pointer" />
          <FaTwitter className="text-white cursor-pointer" />
          <IoLogoSkype className="text-white cursor-pointer" />
          <IoLogoPinterest  className="text-white cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;