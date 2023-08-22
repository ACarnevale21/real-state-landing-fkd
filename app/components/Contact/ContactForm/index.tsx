import React from "react";
import Image from "next/image";

const ContactForm = () => {
  return (
    <div className="w-3/5 mx-auto p-2 bg-white rounded-lg shadow-gray-900 shadow-md">
      <div className="h-24 w-24 rounded-full z-15 bg-black mx-auto shadow drop-shadow-2xl shadow-black">
        <div className="relative h-auto p-0 z-15 -mt-14 flex justify-center flex-wrap items-center">
          <Image
            alt="logo"
            src={"/icon.ico"}
            width={96}
            height={96}
            className="m-0 p-0"
          />
        </div>
      </div>
      <div className="w-full py-2 px-4 ">
        <div className="flex flex-col text-center w-full mb-2">
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-black/90">
            Contact Us !
          </h1>
        </div>
        <div className="lg:w-full md:w-2/3">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-800 font-semibold"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:ring-2 focus:ring-yellow-600 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-800 font-semibold"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-yellow-6-0 focus:ring-2 focus:ring-yellow-600 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-800 font-semibold"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-600 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto transition ease-in-out delay-150 text-gray-900 font-bold bg-yellow-400 border-0 py-2 px-8 focus:outline-none hover:-translate-y-1 hover:scale-110 hover: duration-300 rounded text-lg">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
