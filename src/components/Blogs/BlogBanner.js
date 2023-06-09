import React from "react";
import bannerImage from "../../asset/blog/bannerImage.png";

const BlogBanner = () => {
  return (
    <div className=" bg-[#E6EAEE] ">
      <div className="py-[35px] px-3 lg:px-10 xl:px-[100px] 2xl:px-[200px]">
        <div className=" bg-[#F2F4F6] w-[360px] lg:w-full mx-auto p-4 md:p-6 lg:p-7 grid grid-cols-1 lg:grid-cols-2 items-center content-center  gap-4">
          <div>
            <img
              className="w-[340px] lg:w-[731px] mx-auto"
              src={bannerImage}
              alt=""
            />
          </div>
          <div className="text-start grid content-center">
            {/* <p className='normal-text font-normal text-[#1A1A1A] pb-[10px]'>Real Estate</p> */}
            <h2 className="font-sans text-xl text-[#002550] lg:text-3xl font-semibold lg:font-bold pb-[10px] lg:pb-8">
              The Most Expensive Bangalore Real Estate Sales For 2023
            </h2>
            <p className="normal-text text-[#98A1B3]  lg:text-xl text-justify">
              The Indian real estate sector is resilient despite global
              headwinds. Returns are impressive and the sector is expected to
              reach US$ 1 trillion in market size by 2030 (Niti Aayog report,
              2021). However, the whole real estate purchase journey is very
              tedious and takes more than 2 years on average. Further, as the
              ticket size of this investment is large, security and trust become
              quite critical. Problems compound when you are currently away from
              your purchase destination. If you are experiencing difficulties in
              the real estate purchase journey,..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogBanner;
