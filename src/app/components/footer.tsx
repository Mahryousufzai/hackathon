

// import React from "react";
// import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa"; // Import icons

// import { IoLogoSkype } from "react-icons/io";
// import { IoLogoPinterest } from "react-icons/io";

// const Footer = () => {
//   return (
//     <div className="h-96 bg-[#2A254B]">
//       <div className="flex flex-wrap space-x-8 pt-10 pl-20">
//         <div>
//           <h1 className="text-white text-lg font-Clash Display">Menu</h1>
//           <p className="text-white mt-4 text-sm">New arrivals</p>
//           <p className="text-white mt-4 text-sm">Best seller</p>
//           <p className="text-white mt-4 text-sm">Recently Viewed</p>
//           <p className="text-white mt-4 text-sm">Popular this week</p>
//           <p className="text-white mt-4 text-sm">All Products</p>
//         </div>
//         <div>
//           <h1 className="text-white text-lg font-Clash Display ml-20">
//             Catergory
//           </h1>
//           <p className="text-white mt-4 text-sm ml-20">Crockery</p>
//           <p className="text-white mt-4 text-sm ml-20">Furniture</p>
//           <p className="text-white mt-4 text-sm ml-20">Homeware</p>
//           <p className="text-white mt-4 text-sm ml-20">Plants pot</p>
//           <p className="text-white mt-4 text-sm ml-20">Chiar</p>
//           <p className="text-white mt-4 text-sm ml-20">Crockery</p>
//         </div>
//         <div className="pl-28">
//           <h1 className="text-white text-lg font-Clash Display">Our Company</h1>
//           <p className="text-white mt-4 text-sm">About Us</p>
//           <p className="text-white mt-4 text-sm">Vacancies</p>
//           <p className="text-white mt-4 text-sm">Contact Us</p>
//           <p className="text-white mt-4 text-sm">Privacy</p>
//           <p className="text-white mt-4 text-sm">Return Policy</p>
//         </div>
//         <div className="pl-28">
//           <h1 className="text-white text-lg font-Clash Display">
//             Join our mailing list
//           </h1>
//           <input
//             type="text"
//             placeholder="you@gmail.com"
//             className="bg-input-bg w-80 mt-5 h-12 p-5 rounded-sm"
//           />
//           <button className="bg-white h-12 w-32 rounded-sm mt-1">Sign Up</button>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="flex justify-between items-center border-t-2 m-auto w-11/12 my-8 pt-4">
//         {/* Left Section - Copyright */}
//         <p className="text-white text-sm">Copyright 2022 Avion LTD</p>

//         {/* Right Section - Icons */}
//         <div className="w-[264] h-[24px]  flex space-x-4">
//           <FaFacebookF className="text-white cursor-pointer" />
//           <FaLinkedinIn className="text-white cursor-pointer" />
//           <FaInstagram className="text-white cursor-pointer" />
//           <FaTwitter className="text-white cursor-pointer" />
//           <IoLogoSkype className="text-white cursor-pointer" />
//           <IoLogoPinterest  className="text-white cursor-pointer" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoLogoSkype, IoLogoPinterest } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-[#2A254B] py-10">
      {/* Top Section */}
      <div className="container mx-auto px-4 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Menu Section */}
        <div>
          <h1 className="text-white text-md">Menu</h1>
          <ul className="mt-4 space-y-2">
            <li className="text-white text-sm cursor-pointer">New arrivals</li>
            <li className="text-white text-sm cursor-pointer">Best seller</li>
            <li className="text-white text-sm cursor-pointer">Recently Viewed</li>
            <li className="text-white text-sm cursor-pointer">Popular this week</li>
            <li className="text-white text-sm cursor-pointer">All Products</li>
          </ul>
        </div>

        {/* Category Section */}
        <div>
          <h1 className="text-white text-md">Category</h1>
          <ul className="mt-4 space-y-2">
            <li className="text-white text-sm cursor-pointer">Crockery</li>
            <li className="text-white text-sm cursor-pointer">Furniture</li>
            <li className="text-white text-sm cursor-pointer">Homeware</li>
            <li className="text-white text-sm cursor-pointer">Plants pot</li>
            <li className="text-white text-sm cursor-pointer">Chair</li>
          </ul>
        </div>

        {/* Our Company Section */}
        <div>
          <h1 className="text-white ">Our Company</h1>
          <ul className="mt-4 space-y-2">
            <li className="text-white text-sm cursor-pointer">About Us</li>
            <li className="text-white text-sm cursor-pointer">Vacancies</li>
            <li className="text-white text-sm cursor-pointer">Contact Us</li>
            <li className="text-white text-sm cursor-pointer">Privacy</li>
            <li className="text-white text-sm cursor-pointer">Return Policy</li>
          </ul>
        </div>

        {/* Mailing List Section */}
        <div>
          <h1 className="text-white text-md">Join our mailing list</h1>
          <div className="mt-4">
            <input
              type="text"
              placeholder="you@gmail.com"
              className="w-full bg-gray-700 text-white placeholder-gray-400 px-4 py-2  "
            />
            <button className="mt-4 w-full bg-white text-gray-800 py-2  hover:bg-gray-200">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto px-4 lg:px-20 mt-10 border-t border-gray-600 pt-6 flex flex-col lg:flex-row justify-between items-center">
        <p className="text-white text-sm">Copyright 2022 Avion LTD</p>
        <div className="flex space-x-4 mt-4 lg:mt-0">
          <FaFacebookF className="text-white text-lg cursor-pointer hover:text-gray-400" />
          <FaLinkedinIn className="text-white text-lg cursor-pointer hover:text-gray-400" />
          <FaInstagram className="text-white text-lg cursor-pointer hover:text-gray-400" />
          <FaTwitter className="text-white text-lg cursor-pointer hover:text-gray-400" />
          <IoLogoSkype className="text-white text-lg cursor-pointer hover:text-gray-400" />
          <IoLogoPinterest className="text-white text-lg cursor-pointer hover:text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
