import React from "react";
import Image from "next/image";
import FeatureImage2 from "../../../public/images/flower.png";

const FeatureSecond = () => {
  return (
    <>
      <div className="flex">
        <div>
          <Image src={FeatureImage2} alt="Feature image" width={1440} height={603} />
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
    </>
  );
};

export default FeatureSecond;