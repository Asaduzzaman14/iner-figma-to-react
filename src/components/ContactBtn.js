import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const ContactBtn = () => {
  return (
    <div>
      <div className="card-button pt-2.5 pb-0 text-[#002550]">
        <Link
          to="/contactUs"
          className="h-[48px] xl:h-[61px]  py-[18px] px-[32px] btn border text-[#002550] font-semibold rounded-md  outline outline-1 text-lg p-2 flex justify-center items-center gap-2 "
        >
          Contact us
          <span>
            <BsArrowRight className="text-2xl " />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ContactBtn;
