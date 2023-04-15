import React from "react";
import blog1 from "../../asset/blog/blog1.png";
import blog2 from "../../asset/blog/blog2.png";
import blog3 from "../../asset/blog/blog3.png";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const OtherBlogs = () => {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // nextArrow: {color:"#000"}
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
    <div className="pt-5">
      <div className="bg-[#F2F4F6] pb-5 lg:py-[57px]">
        <div className="relative text-center">
          <h2 className="title text-base lg:text-[28px] pb-[35px]">
            You May Aslo Like This
          </h2>
          <div className=" border-2 rounded-full h-[2px] w-[152px]  inset-x-0 mx-auto border-[#002550] absolute bottom-4"></div>
        </div>

        {/* slider */}

        <div className="px-5  lg:px-10  xl:px-[100px] 2xl:px-[200px]">
          <Slider {...settings}>
            {/* <div className="grid gap-[46px] grid-cols-1 lg:grid-cols-3 "> */}
            <div>
              <div className="card w-[360px]  lg:w-[455px] p-4 lg:p-6">
                <div className="text-start">
                  <img className="w-full" src={blog1} alt="" />
                  <h2 className="py-5 lg:pt-[30px] text-base pb-7 text-[#1A1A1A] lg:font-bold">
                    Real Estate, Analysis
                  </h2>
                  <div className="flex justify-between  text-[#1A1A1A] pb-5 lg:pb-[30px]">
                    <span className="font-semibold ">09 jun 2022</span>
                    <span className="font-semibold">By Admin</span>
                  </div>

                  <h2 className="pb-2.5 lg:pb-4 text-xl text-blue xl:text-[28px] xl:leading-[38px] font-semibold">
                    Application of Blockchain in real estate industry
                  </h2>

                  <p className="cart-desc text-sm lg:text-base text-[#1A1A1A] opacity-60 text-justify">
                    {" "}
                    Blockchain technology has been considered as one of the most
                    revolutionary technological advances in recent years...
                  </p>
                </div>

                <div className="card-button py-0 text-[#002550]">
                  <Link
                    to="/blogDetails"
                    className="h-[48px] xl:h-[61px]  py-[18px] px-[32px] w-full lg:w-fit   btn border text-[#002550] font-semibold rounded-md mt-4 outline outline-1 text-lg p-2 flex justify-center items-center gap-2 "
                  >
                    View More
                    <span>
                      <BsArrowRight className="text-2xl " />
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <div className="card w-[360px]  lg:w-[455px] p-4 lg:p-6">
                <div className="text-start">
                  <img className="w-full" src={blog2} alt="" />
                  <h2 className="py-5 lg:pt-[30px] text-base pb-7 text-[#1A1A1A] lg:font-bold">
                    Real Estate, Analysis
                  </h2>
                  <div className="flex justify-between  text-[#1A1A1A] pb-5 lg:pb-[30px]">
                    <span className="font-semibold ">09 jun 2022</span>
                    <span className="font-semibold">By Admin</span>
                  </div>

                  <h2 className="pb-2.5 lg:pb-4 text-xl text-blue xl:text-[28px] xl:leading-[38px] font-semibold">
                    Real estate Purchase Challenges in Bengaluru
                  </h2>

                  <p className="cart-desc text-sm lg:text-base text-[#1A1A1A] opacity-60 text-justify">
                    There are several problems that buyers may face during real
                    estate purchase in Bengaluru. Some of the major problems...
                  </p>
                </div>

                <div className="card-button py-0 text-[#002550]">
                  <Link
                    to="/blogDetails3"
                    className="h-[48px] xl:h-[61px]  py-[18px] px-[32px] w-full lg:w-fit  btn border text-[#002550] font-semibold rounded-md mt-4 outline outline-1 text-lg p-2 flex justify-center items-center gap-2 "
                  >
                    View More
                    <span>
                      <BsArrowRight className="text-2xl " />
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <div className="card w-[360px]  lg:w-[455px] p-4 lg:p-6">
                <div className="text-start">
                  <img className="w-full" src={blog3} alt="" />
                  <h2 className="py-5 lg:pt-[30px] text-base pb-7 text-[#1A1A1A] lg:font-bold">
                    Real Estate, Analysis
                  </h2>
                  <div className="flex justify-between  text-[#1A1A1A] pb-5 lg:pb-[30px]">
                    <span className="font-semibold ">09 jun 2022</span>
                    <span className="font-semibold">By Admin</span>
                  </div>

                  <h2 className="pb-2.5 lg:pb-4 text-xl text-blue xl:text-[28px] xl:leading-[38px] font-semibold">
                    Artificial Intelligence in Realty
                  </h2>

                  <p className="cart-desc text-sm lg:text-base text-[#1A1A1A] opacity-60 text-justify">
                    The Indian real estate market has been on an upswing in
                    recent years, with a growing number of developers and
                  </p>
                </div>
                <div className="card-button py-0 text-[#002550]">
                  <Link
                    to="/artificial-Intelligence-in-Realty"
                    className="h-[48px] xl:h-[61px]  py-[18px] px-[32px] w-full lg:w-fit   btn border text-[#002550] font-semibold rounded-md mt-4 outline outline-1 text-lg p-2 flex justify-center items-center gap-2 "
                  >
                    View More
                    <span>
                      <BsArrowRight className="text-2xl " />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            {/* </div> */}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default OtherBlogs;
