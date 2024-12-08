import React from "react";

const BrandSection = () => {
  return (
    <div className="bg-gray-50">
      {/* Brand Difference Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-8">
            What makes our brand different
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-4xl text-gray-600 mb-4">🚚</div>
              <h3 className="text-lg font-medium text-gray-800">
                Next day as standard
              </h3>
              <p className="text-gray-600 text-sm">
                Order before 3pm and get your order the next day as standard
              </p>
            </div>
            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-4xl text-gray-600 mb-4">✔️</div>
              <h3 className="text-lg font-medium text-gray-800">
                Made by true artisans
              </h3>
              <p className="text-gray-600 text-sm">
                Handmade crafted goods made with real passion and craftsmanship
              </p>
            </div>
            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-4xl text-gray-600 mb-4">💳</div>
              <h3 className="text-lg font-medium text-gray-800">
                Unbeatable prices
              </h3>
              <p className="text-gray-600 text-sm">
                For our materials and quality you won’t find better prices
                anywhere
              </p>
            </div>
            {/* Feature 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-4xl text-gray-600 mb-4">♻️</div>
              <h3 className="text-lg font-medium text-gray-800">
                Recycled packaging
              </h3>
              <p className="text-gray-600 text-sm">
                We use 100% recycled packaging to ensure our footprint is
                manageable
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 sm:px-12 lg:px-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            Join the club and get the benefits
          </h2>
          <p className="text-gray-600 text-sm mb-8">
            Sign up for our newsletter and receive exclusive offers on new
            ranges, sales, pop-up stores, and more
          </p>
          <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full sm:w-auto flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-[#2A254B] text-white rounded-lg font-medium hover:bg-gray-900"
            >
              Sign up
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default BrandSection;