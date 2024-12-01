"use client"; // Indicate this is a Client Component

import React from "react";
import Link from "next/link";

const Hero: React.FC = () => {
  const backgroundImageUrl =
    "https://res.cloudinary.com/dvzdodv1r/image/upload/v1732105664/woment-min_pk6isx_b17qrz.webp";

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
      <div className="absolute inset-0 h-full w-full flex items-center justify-center">
        <div className="text-white text-center px-4 md:px-8">
           
 

          {/* Shop Now Button */}
          <Link href="/collections/womenSuit">
            <button
              className="rounded border-2 border-neutral-50 px-7 py-3 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:outline-none"
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
