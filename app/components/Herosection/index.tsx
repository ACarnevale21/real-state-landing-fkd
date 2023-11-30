import React from "react";
import ContactForm from "../Contact/ContactForm";

const HeroSection = () => {
  return (
    <section
      className="text-gray-400 bg-black/30 body-font hero-section-bg-img"
      id="home"
    >
      <div className="block left-0 right-0 top-0 bottom-0 mx-auto bg-black/70 z-[2]">
        <div className="container px-5 py-24 mx-auto flex flex-col items-center lg:w-3/4 md:w-full lg:flex-row w-full ">
          <div className="flex flex-col items-center text-center lg:w-1/2 lg:pr-16 lg:text-left mb-16 lg:mb-0 ">
            <h1 className="title-font  text-4xl mb-4 font-extrabold text-center text-white md:text-5xl xl:text-7xl">
              Free your home <br />
              Free your mind
            </h1>

            <p className="mb-8 leading-relaxed text-white">
              Dealing with financial issues as a homeowner? You’re not alone. At
              Bright Future, we’ve assisted countless homeowners in similar
              situations. Gain peace of mind by selling your house instantly for
              cash
            </p>
            <div className="flex justify-center items-center mx-auto">
              <a href="tel:+19546677091">
                <button className="inline-flex transition ease-in-out delay-0 text-black  bg-yellow-400 border-0 py-2 px-6 focus:outline-none hover:-translate-y-1 hover:scale-110 hover:bg-yellow-350 duration-300 rounded text-lg">
                  Give us a call.
                </button>
              </a>
            </div>
          </div>
          <div className="lg:w-1/2  md:w-3/4 sm:w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
