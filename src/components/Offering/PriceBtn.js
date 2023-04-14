import React from "react";
import ContactBtn from "../ContactBtn";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const PriceBtn = () => {
  return (
    <div>
      <div className="flex pt-2.5 justify-between items-center">
        <div className="card-button pt-2.5 pb-0 text-[#002550]">
          <Link
            to="/contactUs"
            className="h-[48px] xl:h-[61px] px-5 2xl:px-[32px] btn border text-[#002550] font-semibold rounded-md  outline outline-1 text-lg p-2.5 flex justify-center items-center gap-2 "
          >
            Contact us
            <span>
              <BsArrowRight className="text-2xl " />
            </span>
          </Link>
        </div>
        <span className="text-sm 2xl:text-lg">INR 3000 per project</span>
      </div>
    </div>
  );
};

export default PriceBtn;
