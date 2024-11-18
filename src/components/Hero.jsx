import React from "react";

export default function Hero() {
  return (
    <header className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
      <img
        src="/assets/hero-image-wr.jpg"
        alt="Hero"
        className="w-full h-full object-cover"
      />
      <img
        src="/assets/Logo.svg"
        alt="Logo"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
    </header>
  );
}
