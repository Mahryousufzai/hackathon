import React from "react";
import Image from "next/image";
import Photo from "../../../public/images/Right.jpg";
import Photo1 from "../../../public/images/bottles.png";
import Photo2 from "../../../public/images/bottle.png";
import Photo3 from "../../../public/images/bulb.png";

const RelatedProducts = () => {
  const products = [
    {
      id: 1,
      name: "The Dandy Chair",
      price: "£250",
      image: Photo, // Imported image
    },
    {
      id: 2,
      name: "Rustic Vase Set",
      price: "£155",
      image: Photo1, // Imported image
    },
    {
      id: 3,
      name: "The Silky Vase",
      price: "£125",
      image: Photo2, // Imported image
    },
    {
      id: 4,
      name: "The Lucy Lamp",
      price: "£399",
      image: Photo3, // Imported image
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-8">
          You might also like
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              {/* Product Image */}
              <Image
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              {/* Product Details */}
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View Collection Button */}
        <div className="text-center mt-8">
          <button className="px-6 py-3  text-[#2A254B] rounded-lg font-medium bg-[#F9F9F9] hover:bg-gray-900">
            View collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;