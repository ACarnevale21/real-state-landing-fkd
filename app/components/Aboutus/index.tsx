import React from "react";
import Image from "next/image";
import aboutPick from "../../assets/about-us.png";

function AboutUs() {
  return (
    <section className="text-gray-600 body-font bg-white" id="aboutus">
      <div className="w-3/4 xl:h-[46rem] md:w-full xl:w-3/4 mx-auto flex px-5 pt-24 pb-8 xl:flex-row flex-col items-center">
        <div className="xl:flex-grow md:w-1/2 lg:pr-24 md:pr-8 flex flex-col xl:items-start xl:text-left mb-16 md:mb-0 items-center text-center">
          <div>
            <h1 className="title-font sm:text-4xl text-4xl mb-4 font-bold text-gray-900">
              About Us
              <br className="hidden lg:inline-block" />
            </h1>

            <p className="mb-8 leading-relaxed">
              At Bright Future, we provide a unique and fast solution for
              property owners facing challenging mortgage situations. Because we
              know how hard and energy consuming these moments are, we give our
              clients the chance to free themselves from financial stress by
              selling their home for cash. Our innovative approach was created
              to make sure that families and homeowners can move forward with
              their lives while achieving an effective result.
            </p>
          </div>
          <div>
            <h1 className="title-font sm:text-4xl text-4xl mb-4 font-bold text-gray-900">
              Mission
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed">
              We help our clients overcome difficult times by providing them
              with the best real estate management, tailored to meet their needs
              ahead. We work with professional ethics, honesty, and discretion
              at all stages of the house purchase process, knowing our clients
              are going through challenging times. Our approach is rooted in
              experience; we are not like any other commercial agency – we
              genuinely want to help you.
            </p>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2">
          <Image
            src={aboutPick}
            width={1000}
            height={1000}
            alt="Picture of the author"
            className="object-cover object-center rounded"
          />
        </div>
      </div>
      <div className="flex justify-center mx-auto py-10 ">
        <button className="flex mx-auto transition ease-in-out delay-0 text-gray-900  bg-yellow-400 border-0 py-2 px-8 focus:outline-none hover:-translate-y-1 hover:scale-110 hover: duration-300 rounded text-lg">
          Give us a call
        </button>
      </div>
    </section>
  );
}

export default AboutUs;
