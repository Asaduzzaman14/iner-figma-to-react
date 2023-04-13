import React from "react";
import Contact from "../components/Contact";

const ContactUs = () => {
  return (
    <div className="lg:pt-[65px] lg:mb-[83px]">
      <div className="relative lg:hidden text-center">
        <h2 className="title -pt-1 mt-0 pb-[35px]">Contact Us</h2>
        <div className=" border-2 rounded-full h-[2px] w-[54px]  inset-x-0 mx-auto border-[#002550] absolute bottom-4"></div>
      </div>

      <Contact />
    </div>
  );
};

export default ContactUs;
