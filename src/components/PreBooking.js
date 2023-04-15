import React from "react";
import iamge1 from "../asset/offerig/image1.png";
import iamge2 from "../asset/offerig/image2.png";
import iamge3 from "../asset/offerig/image3.png";
import rightArrow from "../asset/icon/rightArrow.png";
import Slider from "react-slick";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import ContactBtn from "./ContactBtn";
import PriceBtn from "./Offering/PriceBtn";

const PreBooking = () => {
  var settings = {
    // dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
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
    <div>
      <div className="hidden lg:block">
        <div className=" grid gap-[46px] grid-cols-1 lg:grid-cols-2 ">
          <div className="card max-w-full w-[360px] md:w-[711px] p-4 lg:p-6">
            <div className="text-start">
              <img className="w-[663px] mx-auto" src={iamge1} alt="" />
              <h2 className="cart-title py-2.5  xl:pt-[30px] xl:pb-5  text-xl xl:text-[28px]">
                {" "}
                Background Verification
              </h2>
              <p className="cart-desc text-[#1A1A1A] opacity-60 text-sm lg:text-lg text-justify">
                It is observed that people invest more than 10 years of savings
                in real estate. Hence, they are automatically conscious of the
                developer brand, past track record of the project delivered, the
                project progress, and the financial acumen of the developer.
                This is especially significant in the case of primary
                transactions. Here, InRe brings the proposition of “ Background
                verification of developers”. Based on our experience and
                industry...
              </p>
              <PriceBtn />

              {/* <div className="flex justify-between items-center">
                <ContactBtn />
                <span className="text-lg">INR 3000 per project</span>
              </div> */}

              {/* <div className="card-button pb-0 text-[#002550]">
                <Link
                  to="/contactUs"
                  className="py-[18px] px-[32px] btn border text-[#002550] font-semibold rounded-md  outline outline-1 text-lg p-2 flex justify-center items-center gap-2 "
                >
                  Contact us
                  <span>
                    <BsArrowRight className="text-2xl " />
                  </span>
                </Link>
                <span>INR 3000/Project</span>
              </div> */}
            </div>
          </div>

          <div className="card w-[360px] md:w-[711px] p-4 lg:p-6">
            <div className="text-start">
              <img className="w-[663px] mx-auto" src={iamge2} alt="" />
              <h2 className="cart-title py-2.5  xl:pt-[30px] xl:pb-5 text-xl xl:text-[28px]">
                {" "}
                Pre-booking Virtual site visit
              </h2>
              <p className="cart-desc text-[#1A1A1A] opacity-60 text-sm lg:text-lg text-justify">
                This requires multiple visits in multiple places deferring the
                buying process by more than 45 days. Also, it is difficult for
                people to compare two properties just based on visits. Here,
                InRe brings the proposition of “ Virtual visits at Pre- Booking
                stage”. We help the customer to visit the site with the help of
                AI enabled UAVs. This can replace the physical visit to the
                maximum possible extent by providing the live streaming feature.
                It also ...
              </p>
              <div>
                <ContactBtn />
              </div>

              {/* <div className="card-button pb-0 text-[#002550]">
                <Link
                  to="/contactUs"
                  className="py-[18px] px-[32px] btn border text-[#002550] font-semibold rounded-md  outline outline-1 text-lg p-2 flex justify-center items-center gap-2 "
                >
                  Contact us
                  <span>
                    <BsArrowRight className="text-2xl " />
                  </span>
                </Link>
                <span>INR 3000/Project</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* carasol for mobile */}

      <div className="lg:hidden">
        <Slider {...settings}>
          {/* <div className=' grid gap-[46px] grid-cols-1 lg:grid-cols-2 '> */}
          <div>
            <div className="card w-[360px] md:w-[711px] p-4 lg:p-6">
              <div className="text-start">
                <img className="w-[663px] mx-auto" src={iamge1} alt="" />
                <h2 className="cart-title  xl:pt-[30px] xl:pb-5  xl:py-5 text-xl xl:text-[28px]">
                  {" "}
                  Background Verification
                </h2>
                <p className="cart-desc text-[#1A1A1A] opacity-60 text-sm lg:text-lg text-justify">
                  It is observed that people invest more than 10 years of
                  savings in real estate. Hence, they are automatically
                  conscious of the developer brand, past track record of the
                  project delivered, the project progress, and the financial
                  acumen of the developer. This is especially significant in the
                  case of primary transactions. Here, InRe brings the
                  proposition of “ Background verification of developers”. Based
                  on our experience and industry...
                </p>

                <PriceBtn />

                {/* <div className="card-button pb-0 text-[#002550]">
                  <Link
                    to="/contactUs"
                    className="py-[18px] px-[32px] btn border text-[#002550] font-semibold rounded-sm  outline outline-1 text-lg p-2 flex justify-center items-center gap-2 "
                  >
                    Contact us
                    <span>
                      <BsArrowRight className="text-2xl " />
                    </span>
                  </Link>
                  <span className="text-[#002550] text-sm">
                    INR 3000/Project
                  </span>
                </div> */}
              </div>
            </div>
          </div>

          <div>
            <div className="card w-[360px] md:w-[711px] p-4 lg:p-6">
              <div className="text-start">
                <img className="w-[663px] mx-auto" src={iamge2} alt="" />
                <h2 className="cart-title py-2.5   xl:pt-[30px] xl:pb-5 text-xl xl:text-[28px]">
                  {" "}
                  Pre-booking Virtual site visit
                </h2>
                <p className="cart-desc text-[#1A1A1A] opacity-60 text-sm lg:text-lg text-justify">
                  This requires multiple visits in multiple places deferring the
                  buying process by more than 45 days. Also, it is difficult for
                  people to compare two properties just based on visits. Here,
                  InRe brings the proposition of “ Virtual visits at Pre-
                  Booking stage”. We help the customer to visit the site with
                  the help of AI enabled UAVs. This can replace the physical
                  visit to the maximum possible extent by providing the live
                  streaming feature. It also ...
                </p>
                <ContactBtn />

                {/* <div className="card-button pb-0 text-[#002550]">
                  <Link
                    to="/contactUs"
                    className="py-[18px] px-[32px] btn border text-[#002550] font-semibold rounded-sm  outline outline-1 text-lg p-2 flex justify-center items-center gap-2 "
                  >
                    Contact us
                    <span>
                      <BsArrowRight className="text-2xl " />
                    </span>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default PreBooking;
