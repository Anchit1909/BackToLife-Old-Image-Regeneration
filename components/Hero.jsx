import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section className="mt-24 pb-10" id="home">
      <div className="relative flex md:justify-between mx-auto px-12 flex-col-reverse items-center justify-center md:flex-row mb-0 max-w-screen-xl">
        {/* Left */}
        <div className="relative flex flex-col space-y-5 lg:w-1/2 justify-center mt-12 md:mt-0 text-center lg:text-left">
          <a
            href="https://twitter.com/nutlope/status/1615597965787435015"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-1 bg-gray-50 text-sm transition duration-300 ease-in-out border rounded-2xl text-slate-500 hover:scale-105 font-default -mb-2 max-w-sm"
          >
            Used by over <span className="font-semibold">55,000</span> happy
            customers
          </a>
          <h1 className="text-black max-w-lg text-2xl font-medium font-clash text-center -mt-20 lg:text-6xl lg:text-left md:-mt-0">
            Restore Your Old Photos using AI with{" "}
            <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent font-semibold">
              BackToLife
            </span>
          </h1>
          <p className="text-[#767575] max-w-md mx-auto text-lg text-center font-poppins lg:text-lg lg:text-left lg:mt-0 lg:mx-0">
            Have old and scratched images? Let our AI restore them and prevent
            them from fading with time.
          </p>
          {/* Button Container */}
          <div className="flex items-center justify-center w-full space-x-4 lg:justify-start">
            <a
              href="/#originalmodel"
              className="px-3 py-2 text-sm font-semibold font-poppins text-white bg-black rounded-md shadow-md hover:bg-gray-700"
            >
              Restore your photos
            </a>
            <a
              href="#"
              className="px-3 py-2 text-sm font-semibold text-black bg-white font-poppins rounded-md shadow-md hover:border-black hover:bg-gray-200 hover:text-[#1f1f1f]"
            >
              Learn More
            </a>
          </div>
        </div>
        {/* Right */}
        <div className="relative flex items-center justify-center my-auto mx-auto lg:mx-0 lg:w-1/2 md:pl-6">
          <div className="absolute right-10 top-10 w-96 h-96 bg-[#8034BB]/30 rounded-full blur-3xl" />
          <Image
            src="/Hero_section_image.png"
            alt=""
            width={420}
            height={420}
            className="z-10"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
