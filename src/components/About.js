import React from "react";
import aboutImg from "../asset/image 27.png";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="font-sans mt-6 lg:mt-[35px] px-[15px] lg:px-10 xl:px-[200px]">
      <div className="w-[360px] md:w-full mx-auto bg-[#E6EAEE] p-[10px] md:p-6 lg:p-7 grid grid-cols-1 lg:grid-cols-2 items-center content-center gap-[10px] lg:gap-[30px]">
        <div>
          <img className="w-[340px] md:w-full mx-auto" src={aboutImg} alt="" />
        </div>

        <div className="text-start font-sans grid content-center">
          {/* <p className='normal-text font-normal text-[#1A1A1A] pb-[10px]'>Real Estate</p> */}
          <h2 className="font-sans text-xl md:text-xl text-blue lg:text-black lg:text-[36px] font-semibold pb-[10px] lg:pb-8">
            Who We Are
          </h2>
          <p className="text-sm lg:text-lg normal-text text-[#1A1A1A]  opacity-60 text-justify">
            The Indian real estate sector is resilient despite global headwinds.
            Returns are impressive and the sector is expected to reach US$ 1
            trillion in market size by 2030 (Niti Aayog report, 2021). However,
            the whole real estate purchase journey is very tedious and takes
            more than 2 years on average. Further, as the ticket size of this
            investment is large, security and trust become quite critical.
            Problems compound when you are currently away from your purchase
            destination. If you are experiencing difficulties in the real estate
            purchase journey, we are here to make it fast and transparent.
          </p>
          <div className="">
            <Link to={"contactUs"}>
              <button className="w-full lg:w-[170px]  btn border-[#01244A] border  rounded-sm mt-[10px] lg:mt-[50px] outline outline-1 text-lg p-2 flex justify-center items-center gap-2 ">
                Contract Now{" "}
                <span className="text-[#01244A] font-semibold text-2xl">
                  <BsArrowRight />
                </span>
              </button>
            </Link>
          </div>

          {/* <button className='md:hidden btn border border-[#01244A] font-semibold rounded-sm mt-4 outline outline-1 text-lg p-2 flex justify-center items-center gap-2'>Register Now <span className='text-[#01244A] font-semibold'><BsArrowRight /></span></button> */}
        </div>
      </div>
    </div>
  );
};

export default About;
