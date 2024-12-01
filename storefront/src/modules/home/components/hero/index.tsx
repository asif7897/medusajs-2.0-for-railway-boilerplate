"use client"; // Indicate this is a Client Component

import React from "react";
import Link from "next/link";

const Hero: React.FC = () => {
  const backgroundImageUrl =
    "https://seasky2004.s3.ap-south-1.amazonaws.com/seasky_image/others/woment-min_pk6isx_b17qrz.webp";

  return (
    <div
      className="hero-wrapper relative overflow-hidden rounded-lg"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        minHeight: "75vh", // Match height for consistent styling
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 h-full w-full bg-black bg-opacity-10 flex items-center justify-end px-4 md:px-8">
        <div className="text-white text-right">
         
          

          {/* Shop Now Button */}
          <Link href="/collections/womenSuit">
            <button
              className="rounded-lg border-2 border-neutral-50 px-6 py-3 text-sm md:text-base font-medium uppercase leading-normal text-neutral-50 transition-transform duration-300 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:outline-none transform hover:scale-105"
            >
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;