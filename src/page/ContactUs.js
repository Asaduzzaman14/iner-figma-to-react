import React from "react";
import Contact from "../components/Contact";

const ContactUs = () => {
  return (
    <div className=" lg:mb-[83px]">
      <div className=" py-5  lg:pt-[70px] ">
        <div className="relative ">
          <h2 className="title pt-0 text-base lg:text-[32px] lg:leading-10 pb-[5px] lg:pb-[10px]">
            Contact Us
          </h2>
          <div className=" border-2 rounded-full h-[2px] w-[54px] lg:w-[133px] inset-x-0 mx-auto border-[#002550] absolute bottom-0"></div>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default ContactUs;
