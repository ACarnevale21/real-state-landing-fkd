"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";

import emailjs from "@emailjs/browser";
import {
  ContactFormValues,
  InitialTouchedValuesInterface,
} from "./ContactInterfaces";

const initValues: ContactFormValues = {
  name: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  message: "",
};

const initState = { values: initValues, isLoading: false };

const initTouched: InitialTouchedValuesInterface = {
  name: false,
  lastName: false,
  email: false,
  phone: false,
  address: false,
  message: false,
};
const ContactForm = () => {
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState(initTouched);
  const form = useRef<HTMLFormElement | null>(null);

  const { values, isLoading } = state;

  const onBlur = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { target } = event;
    setTouched((prev) => ({ ...prev, [target.name]: true }));
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { target } = event;
    setState((prev) => ({
      ...prev,
      values: { ...prev.values, [target.name]: target.value },
    }));
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("SERVICE_ID", "TEMPLATE_ID", form.current, "PUBLIC_KEY")
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="lg:w-3/4 md:w-full sm:w-full mx-auto pt-2 pb-6 bg-white rounded-lg shadow-gray-900 shadow-md ">
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
          <h1 className="sm:text-3xl text-2xl title-font mb-4 text-black/90">
            Contact Us
          </h1>
        </div>

        <div className="flex justify-center content-center items-center md:flex-col">
          <div className="flex flex-wrap -m-2">
            <form className="relative" ref={form} onSubmit={sendEmail}>
              <div className="flex-row p-2 w-full md:flex-row lg:flex">
                <div className="md:mr-2">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-800 font-semibold"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={onBlur}
                    name="name"
                    placeholder="Full name"
                    className="w-full bg-gray-200 rounded border border-gray-300 focus:ring-2 focus:ring-yellow-600 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="leading-7 text-sm text-gray-800 font-semibold"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={onBlur}
                    name="lastName"
                    placeholder="Last name"
                    className="w-full bg-gray-200 rounded border border-gray-300 focus:ring-2 focus:ring-yellow-600 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
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
                  value={values.email}
                  onBlur={onBlur}
                  onChange={handleChange}
                  placeholder="email@address.com"
                  className="w-full bg-gray-200 rounded border border-gray-300 focus:border-yellow-500 focus:bg-yellow-6-0 focus:ring-2 focus:ring-yellow-600 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="p-2 w-full">
                <label
                  htmlFor="phone"
                  className="leading-7 text-sm text-gray-800 font-semibold"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={onBlur}
                  placeholder="+1 (xxx) xxx-xx-xx"
                  className="w-full bg-gray-200 rounded border border-gray-300 focus:border-yellow-500 focus:bg-yellow-6-0 focus:ring-2 focus:ring-yellow-600 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="p-2 w-full">
                <label
                  htmlFor="address"
                  className="leading-7 text-sm text-gray-800 font-semibold"
                >
                  Enter Property Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  value={values.address}
                  onChange={handleChange}
                  onBlur={onBlur}
                  placeholder="49 Smith St. Saint Cloud, MN 56301"
                  className="w-full bg-gray-200 rounded border border-gray-300 focus:border-yellow-500 focus:bg-yellow-6-0 focus:ring-2 focus:ring-yellow-600 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="p-2 w-full">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-800 font-semibold"
                >
                  What&apos;s your situation?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={values.message}
                  onChange={handleChange}
                  onBlur={onBlur}
                  placeholder="Tell us about your situation.."
                  className="w-full bg-gray-200 rounded border border-gray-300 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-600 h-32 text-base outline-none text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="flex mx-auto transition ease-in-out delay-0 text-gray-900  bg-yellow-400 border-0 py-2 px-8 focus:outline-none hover:-translate-y-1 hover:scale-110 hover:duration-300 rounded text-lg"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
