import React from "react";
import { IoCashOutline } from "react-icons/io5";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

function HowItWorks() {
  return (
    <div className="w-full bg-gray-100">
      <div className="bg-gray-100 mx-auto py-12 md:py-24 w-full md:grid md:grid-cols-2 md:items-center md:w-3/4">
        <div className="mx-4 mb-10">
          <h1 className="text-4xl font-bold mb-8 pt-8 md:text-6xl">
            How It Works
          </h1>
          <h2 className="text-lg font-bold mb-8">
            The Process is Much Easier Than You Think.
          </h2>
          <p className="text-md font-semibold mb-6">
            In just 3 simple steps, you can be done selling your house with cash
            in your pocket.
          </p>
          <p className="text-md font-semibold">All You Have To Do Is…</p>
        </div>
        <div>
          <div className="flex justify-center flex-col items-center text-center bg-gray-100 p-5 m-4 rounded-lg shadow-md md:flex-row md:items-center">
            <div className="rounded-full p-2 border-gray-900 border-4 mx-auto ">
              <AiOutlineMail className="h-14 w-14 text-gray-900 p-1" />
            </div>
            <div>
              <h1 className="text-3xl font-bold pt-1">1. Send Info</h1>
              <p className="text-lg font-medium pt-3 text-gray-900 md:p-4">
                Just fill out our simple form giving us some basic details about
                the house you want to sell.
              </p>
            </div>
          </div>

          <div className="flex justify-center flex-col items-center text-center bg-gray-100 p-5 m-4 rounded-lg shadow-md md:flex-row md:items-center">
            <div className="rounded-full p-2 border-gray-900 border-4 mx-auto ">
              <AiOutlinePhone className="h-14 w-14 text-gray-900 p-1" />
            </div>
            <div>
              <h1 className="text-3xl font-bold pt-1">2. Receive Offer </h1>
              <p className="text-lg font-medium pt-3 text-gray-900 md:p-4">
                We&apos;ll make an appointment to view your house. After that,
                you&apos;ll quickly receive a no-obligation offer.
              </p>
            </div>
          </div>
          <div className="flex justify-center flex-col items-center text-center bg-gray-100 p-5 mx-4 mt-4 shadow-md rounded-lg md:flex-row md:items-center">
            <div className="rounded-full p-2 border-gray-900 border-4 mx-auto ">
              <IoCashOutline className="h-14 w-14 text-gray-900 p-1" />
            </div>
            <div>
              <h1 className="text-3xl font-bold pt-1">3. Get Cash </h1>
              <p className="text-lg font-medium pt-3 text-gray-900 md:p-4">
                If you like our terms, simply set a closing date and receive
                your money.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
