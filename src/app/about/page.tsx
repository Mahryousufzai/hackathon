import Image from 'next/image'
import React from 'react'

const AboutPage = () => {
    return (
        <div>
            <div className="flex h-[277] w-[1440]">
                <div className="ml-[100px] mb-[100px] mt-[100px] font-[Clash-Display] text-[36px]   leading-[50.4px] text-left   w-[704px] h-[100px] top-[88px] left-[128px]">A brand built on the love of craftmanship,<br />
                    quality and outstanding customer service</div>
                <div><button className="bg-gray-100 ml-[200px]  text-black text-base tracking-wide py-3.5 px-6    eml-[100px] mb-[100px] mt-[100px]">
                    View our Product
                </button></div>
            </div>

            <div className="w-full h-auto flex items-center justify-center px-4 sm:px-8 md:px-[120px] gap-6 sm:gap-[36px] ">
      {/* Left Section */}
      <div className="w-full sm:w-[630px] bg-[#2A254B] p-6 sm:px-[64px] sm:py-[54px] text-white">
        <h1 className="font-clash-display text-[24px] sm:text-[32px] font-normal leading-snug sm:leading-[39.36px] text-left underline decoration-transparent mb-4">
          It started with a small idea
        </h1>
        <p className="font-satoshi text-[16px] sm:text-[18px] leading-relaxed text-left mb-6">
          A global brand with local beginnings, our story began in a small studio in South London in early 2014.
        </p>
        <div className="text-left">
          <button className="bg-gray-800 text-white px-6 py-3 font-medium hover:bg-gray-900 transition-all">
            View Collection
          </button>
        </div>
      </div>
                <div className="w-[630px] h-[430px] flex items-start justify-evenly">
                    <Image src={"/images/back.png"} alt="image" height={430} width={630} />
                </div>
            </div>

            <div className="flex md:px-10">
                <div>
                    <Image src={"/images/flower.png"} alt="Feature image" width={1440} height={603} />
                </div>
                <div className="ml-8 px-[56px]">
                    <h1 className="text-2xl font-bold">
                        Our service isnt just personal, its actually hyper personally exquisite
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design, so our Chelsea boutique became the hotbed for the London interior design community.
                    </p>
                    <button className="w-full md:w-auto px-6 py-3 bg-gray-800 text-white font-medium rounded-lg mt-6 hover:bg-gray-900 bottom-0">
                        Get in touch
                    </button>
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

export default AboutPage