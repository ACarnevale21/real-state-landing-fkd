import React from "react";
import ContactForm from "../Contact/ContactForm";

const HeroSection = () => {
  return (
    <section
      className="text-gray-400 bg-black/10 body-font hero-section-bg-img"
      id="home"
    >
      <div className="block left-0 right-0 top-0 bottom-0 mx-auto bg-black/50 z-[2]">
        <div className="container lg:w-3/4 px-5 py-24 mx-auto flex flex-col items-center md:w-full md:flex-row sm:w-full ">
          <div className="md:w-1/2 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-white">
              Free your home, free your mind:
              <br className="hidden lg:inline-block" />
              Sell your house instantly and leave mortgage stress behind
            </h1>
            <p className="mb-8 leading-relaxed text-white">
              Dealing with financial issues as a homeowner? You’re not alone. At
              Bright Future, we’ve assisted countless homeowners in similar
              situations. Gain peace of mind by selling your house instantly for
              cash
            </p>
            <div className="flex justify-center">
              <button className="inline-flex transition ease-in-out delay-0 text-black  bg-yellow-400 border-0 py-2 px-6 focus:outline-none hover:-translate-y-1 hover:scale-110 hover:bg-yellow-350 duration-300 rounded text-lg">
                Give us a call
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 md:w-full sm:w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
