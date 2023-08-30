import React from "react";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section
      className="text-gray-900 bg-white body-font shadow-md relative"
      id="contactForm"
    >
      <div className="flex w-3/5 px-5 py-24 mx-auto">
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
