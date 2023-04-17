import React from "react";
import Contact from "../components/Contact";

const ContactUs = () => {
  return (
    <div className="lg:pt-[70px] lg:mb-[83px]">
      <div className="">
        <div className="relative text-center">
          <h2 className="title pt-5 lg:pt-1 text-base lg:text-[32px] -pt-1 mt-0  lg:pb-[35px]">
            Contact Us
          </h2>
          <div className=" border-2 rounded-full h-[2px] w-[54px]  inset-x-0 mx-auto border-[#002550] absolute -bottom-[5px]"></div>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default ContactUs;
