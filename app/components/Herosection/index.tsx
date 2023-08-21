import React from "react";
import ContactForm from "../Contact/ContactForm";

const HeroSection = () => {
  return (
    <section className="text-gray-400 bg-black/90 body-font hero-section-bg-img">
      <div className="block left-0 right-0 top-0 bottom-0 mx-auto bg-black/90 z-[2]">
        <div className="container w-25 px-5 py-24 mx-auto flex flex-col items-center md:flex-row">
          <div className="md:w-1/2 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Before they sold out
              <br className="hidden lg:inline-block" />
              readymade gluten
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-black bg-yellow-400 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-350 rounded text-lg">
                Give us a call
              </button>
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
