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

      <div className="border py-4 gap-3 flex ">
        <div className="py-6 px-5 border">1</div>
        <h2 className="border">aaa</h2>
        <div className="py-2 px-5 border">
          2lore Lorem ipsum dolor sit amet.
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="py-6 px-5 border">3</div>
      </div>
    </div>
  );
};

export default ContactUs;
