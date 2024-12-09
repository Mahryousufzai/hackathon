import Image from 'next/image'
import React from 'react'

const Page = () => {
    return (
        <div className='flex flex-col gap-5'>
            <div className="  flex items-center justify-center pt-10 bg-gray-100">
                <div className="container mx-auto px-6 sm:px-12 lg:px-20 flex flex-col lg:flex-row items-center gap-10">
                    {/* Left Section: Product Image */}
                    <div className="flex-1">
                        <Image
                            src={"/images/center.png"} // Replace with actual image URL
                            alt="The Dandy Chair"
                            className="w-full object-cover rounded-lg shadow-md"
                            width={100}
                            height={100}
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

            <div className='flex flex-col gap-4 md:px-20'>
                <h1 className='text-[40px]'>You might also like</h1>
                <div className="flex gap-10 justify-evenly">
                    <div><Image src={"/images/Right.jpg"} alt="" title="" width={300} height={200} />
                        <p className="mt-2">The Dandy chair</p>
                        <p className="mt-2">£250</p></div>
                    <div><Image src={"/images/bottles.png"} alt="" title="" width={300} height={200} />
                        <p className="mt-2">Rustic Vase Set</p>
                        <p className="mt-2">£155</p></div>
                    <div><Image src={"/images/bottle.png"} alt="" title="" width={300} height={200} />
                        <p className="mt-2">The Silky Vase</p>
                        <p className="mt-2">£125</p></div>
                    <div><Image src={"/images/bulb.png"} alt="" title="" width={300} height={200} />
                        <p className="mt-2">The Lucy Lamp</p>
                        <p className="mt-2">£399</p></div>
                </div>
                <div>
                </div>
            </div>

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
        </div>
    )
}

export default Page