import Image from "next/image"; // Ensure you're importing Image from Next.js

import React from "react";
import Left from "../../../public/images/center.png"; // Correct image import


const ProductPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20 flex flex-col lg:flex-row items-center gap-10">
        {/* Left Section: Product Image */}
        <div className="flex-1">
          <Image
            src={Left} // Replace with actual image URL
            alt="The Dandy Chair"
            className="w-full object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Right Section: Product Details */}
        <div className="flex-1 max-w-lg">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            The Dandy Chair
          </h1>
          <p className="text-2xl text-gray-600 font-medium mb-6">£250</p>

          {/* Product Description */}
          <p className="text-gray-700 text-base mb-6">
            A timeless design, with premium materials features as one of our
            most popular and iconic pieces. The Dandy Chair is perfect for any
            stylish living space with beech legs and lambskin leather
            upholstery.
          </p>
          <ul className="list-disc list-inside text-gray-700 text-sm mb-6 space-y-2">
            <li>Premium material</li>
            <li>Handmade upholstery</li>
            <li>Quality timeless classic</li>
          </ul>

          {/* Dimensions */}
          <div className="mb-6">
            <h3 className="text-gray-800 font-semibold text-lg mb-2">
              Dimensions
            </h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-gray-600 font-medium">Height</p>
                <p className="text-gray-800">110cm</p>
              </div>
              <div>
                <p className="text-gray-600 font-medium">Width</p>
                <p className="text-gray-800">75cm</p>
              </div>
              <div>
                <p className="text-gray-600 font-medium">Depth</p>
                <p className="text-gray-800">50cm</p>
              </div>
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <button className="px-3 py-2 text-gray-700 hover:bg-gray-100">
                -
              </button>
              <input
                type="number"
                defaultValue="1"
                className="w-12 text-center text-gray-800 focus:outline-none"
              />
              <button className="px-3 py-2 text-gray-700 hover:bg-gray-100">
                +
              </button>
            </div>
            <button className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;