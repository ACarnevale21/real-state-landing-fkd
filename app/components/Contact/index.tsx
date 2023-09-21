import React from "react";
import ContactForm from "./ContactForm";
import { IoMdArrowRoundForward } from "react-icons/io";

const ContactSection = () => {
  return (
    <section className=" bg-black/30 contact-section-bg-img">
      <div className="grid grid-cols-1 bg-black/70 z-[2] md:grid-cols-2 md:mx-auto">
        <div className="mx-6 mb-12 mt-12 md:flex  md:flex-col md:p-8 md:justify-center md:items-center ">
          <div className="text-white text-3xl font-bold md:text-5xl md:text-center">
            <h1>We always buy houses at any price in any condition!</h1>
          </div>
          <div className="">
            <ul>
              <li className="my-2 md:mt-11">
                <div className="flex flex-row items-center">
                  <IoMdArrowRoundForward className="text-white h-6 w-6 mr-2" />
                  <h3 className="text-white text-xl font-bold md:text-2xl">
                    Do not pay unnecessary fees.
                  </h3>
                </div>
                <p className="text-white text-sm md:text-lg">
                  Bright Future has helped hundreds of homeowners do just that.
                  Many agents insist on charging you a percentage of the sale
                  price. With our flat rate fee and all inclusive services, you
                  only pay when your house is sold and closed.
                </p>
              </li>
              <li className="my-2 md:mt-11">
                <div className="flex flex-row items-center">
                  <IoMdArrowRoundForward className="text-white h-6 w-6 mr-2" />
                  <h3 className="text-white text-xl font-bold md:text-2xl">
                    No need to pay for repairs or remodeling .
                  </h3>
                </div>
                <p className="text-white text-sm md:text-lg">
                  When you choose to work with Bright Future, there’s no need to
                  remodel or repair your house. We’ll handle repairs, disposals,
                  and cleaning! Just tell us when you want to move out, pay your
                  rent and we’re all set!
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full p-8 mb-8 my-20" id="contactForm">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
