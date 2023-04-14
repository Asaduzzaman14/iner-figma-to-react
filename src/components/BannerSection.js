import React from "react";
import banner from "../asset/banner.png";

const BannerSection = () => {
  return (
    <div className="lg:mt-[70px]  lg:px-10 xl:px-[200px]">
      <div className="relative">
        <img className="w-full min-h-[186px]" src={banner} alt="" />

        <div className="absolute capitalize inset-0 flex  items-center left-4 lg:left-[54px] text-sm lg:text-xl  2xl:text-5xl text-start text-white ">
          <p className="font-solway banner_title md: w-[103px] lg:w-[15%] text-md xl:w-[20%]">
            Making your{" "}
            <span className="font-solway banner_title text-[#14FF00] lg:text-[#FAFF00]">
              real estate
            </span>{" "}
            purchase journey faster and transparent
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
