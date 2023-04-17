import React from "react";
import image1 from "../asset/ourTeam/image1.png";
import image2 from "../asset/ourTeam/image2.png";
import image3 from "../asset/ourTeam/image3.png";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const OurTeam = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          adaptiveHeight: false,
        },
      },
      {
        breakpoint: 777,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="team px-5 lg:px-10 xl:px-[100px] 2xl:px-[200px]">
      <div className="relative text-center pb-[20px]">
        <h2 className="title text-base lg:text-[32px] pt-0 pb-[5px] lg:pb-2.5 lg:pt-[10px]">
          Our Team Members
        </h2>
        <div className=" border-2 rounded-full h-[2px] w-[103px]  inset-x-0 mx-auto border-[#002550] absolute bottom"></div>
      </div>

      <div>
        {/* <div className='grid gap-[46px] grid-cols-1 lg:grid-cols-3 '> */}
        <Slider className="" {...settings}>
          <div className="items">
            <div className="card  flex flex-col justify-between lg:h-[650px] xl:h-[690px] w-[360px] lg:w-[455px] p-4 lg:p-6 ">
              <div className="text-start ">
                <img className="w-[330px] lg:w-[407px]" src={image1} alt="" />
                <h2 className="pt-5 lg:pb-3 text-xl text-[#002550] font-semibold">
                  Brajesh Pathak
                </h2>
                <div className="py-3 ">
                  <span className="text-[#1A1A1A] opacity-40 ">Co-Founder</span>
                </div>
                <p className="cart-desc text-sm lg:text-lg text-[#1A1A1A] opacity-60 text-justify">
                  A Chartered Accountant & Company Secretary, has over a decade
                  of experience in managing realty focused venture capital
                  funds, and was heading Azure Capital Advisors Private Limited.
                  He has also been...
                </p>
              </div>
              <Link
                to="/ourTeam"
                className="text-end font-semibold  pt-4 text-[#1A1A1A]   lg:text-blue lg:font-normal text-[16px] opacity-60 lg:opacity-100 cursor-pointer"
              >
                {" "}
                View More
              </Link>
            </div>
          </div>

          <div className="items">
            <div className="card flex flex-col justify-between w-[360px] lg:h-[650px] xl:h-[690px] lg:w-[455px] p-4 lg:p-6 ">
              <div className="text-start  ">
                <img className="w-[330px] lg:w-[407px]" src={image2} alt="" />
                <h2 className="pt-5 pb-3 text-xl text-[#002550] font-semibold">
                  Deepak Shukla
                </h2>
                <div className="py-3">
                  <span className="text-[#1A1A1A] opacity-40 pb-3">
                    Co-Founder
                  </span>
                </div>
                <p className="cart-desc text-sm lg:text-lg text-[#1A1A1A] opacity-60 text-justify">
                  Deepak Shukla has completed his B.Tech (hons.) from the Indian
                  Institute of Technology (IIT) Kharagpur and obtained an MBA
                  from the Indian Institute of Management (IIM) Ahmedabad,
                  India. He has an...
                </p>
              </div>
              <Link
                to="/ourTeam"
                className="text-end font-semibold  pt-4 text-[#1A1A1A]   lg:text-blue lg:font-normal text-[16px] opacity-60 lg:opacity-100 cursor-pointer"
              >
                {" "}
                View More
              </Link>
            </div>
          </div>

          <div className="items">
            <div className="card  flex flex-col justify-between w-[360px] lg:h-[650px] xl:h-[690px] lg:w-[455px] p-4 lg:p-6 ">
              <div className="text-start">
                <img className="w-[330px] lg:w-[407px]" src={image3} alt="" />
                <h2 className="pt-5 pb-3 text-xl text-[#002550] font-semibold">
                  Alok Kumar Singh
                </h2>
                <div className="py-3">
                  <span className="text-[#1A1A1A] opacity-40 pb-3">
                    Advisor
                  </span>
                </div>
                <p className="cart-desc text-sm lg:text-lg text-[#1A1A1A] opacity-60 text-justify">
                  Entrepreneur with pedigree from IIT-BHU and IIML, and more
                  than 25 years of experience in management responsibilities in
                  top tier companies including Infosys, Infosys BPO and Azure
                  Capital...
                </p>
              </div>
              <Link
                to="/ourTeam"
                className="text-end font-semibold  pt-4 text-[#1A1A1A]   lg:text-blue lg:font-normal text-[16px] opacity-60 lg:opacity-100 cursor-pointer"
              >
                {" "}
                View More
              </Link>
            </div>
          </div>
        </Slider>
        {/* </div> */}
      </div>
    </div>
  );
};

export default OurTeam;
