import Image from 'next/image';
import React from 'react';

export default function Contact() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center  bg-gray-100 p-6">
      {/* Contact Form Section */}
      <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-6 py-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
        <form className="space-y-7">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Additional Content Section */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8 text-center md:text-left">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
        <p className="text-gray-600 mb-4">
          We&aposre here to help! Reach out to us with any questions or feedback.
        </p>
        <ul className="space-y-2">
          <li>
            <span className="font-medium text-gray-800">Phone:</span> 03121056822
          </li>
          <li>
            <span className="font-medium text-gray-800">Email:</span> mahrali016@gmail.com.com
          </li>
         
        </ul>
        <div>
          <Image
            src="/images/contact.png"
            width={200}
            height={200}
            alt="Contact Illustration"
            className="mx-auto md:mx-0 max-w-xs w-[400px]"
          />
        </div>
      </div>
    </div>
  );
}
