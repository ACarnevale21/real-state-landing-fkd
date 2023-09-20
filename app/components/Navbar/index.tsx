"use client";
import Image from "next/image";
import React from "react";
import { useScrollPosition } from "@/app/hooks/useScrollPosition";

const Navbar = () => {
  const scrollPosition = useScrollPosition();
  return (
    <header
      className={`sticky top-0 z-50 transition-shadow text-gray-400 bg-black body-font ${
        scrollPosition > 0
          ? "shadow bg-opacity-70 backdrop-blur-lg backdrop-filter"
          : "shadow-none"
      }`}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center cursor-pointer text-white mb-4 md:mb-0">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-#040404f rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg> */}
          <Image alt="logo" src={"/icon.ico"} width={50} height={50} />
          <span className="ml-3 text-xl">Bright Future</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-white cursor-pointer" href="#home">
            Home
          </a>
          <a className="mr-5 hover:text-white cursor-pointer" href="#aboutus">
            About Us
          </a>
          <a
            className="mr-5 hover:text-white cursor-pointer"
            href="#testimonials"
          >
            Testimonials
          </a>
          <a
            className="mr-5 hover:text-white cursor-pointer"
            href="#contactForm"
          >
            Contact Us
          </a>
        </nav>
        {/* <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Button
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button> */}
      </div>
    </header>
  );
};

export default Navbar;
