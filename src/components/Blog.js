import React from "react";
import blog1 from "../asset/blog/blog1.png";
import blog2 from "../asset/blog/blog2.png";
import blog3 from "../asset/blog/blog3.png";
import { BsArrowRight } from "react-icons/bs";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Blog = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
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
    <div className="lg:pt-[35px]">
      <div className="lg:bg-[#F2F4F6] pt-6 lg:py-14">
        <div className="relative text-center">
          <h2 className="title text-base lg:text-[32px] mt-0 pt-0 pb-[5px] lg:pb-2.5">
            Blogs
          </h2>
          <div className=" border-2 rounded-full h-[2px] w-[31px] lg:w-[54px] inset-x-0 mx-auto border-[#002550] absolute bottom"></div>
        </div>

        <div className="pt-[20px] lg:pt-[35px] px-5 lg:px-10 xl:px-[100px] 2xl:px-[200px]">
          <Slider {...settings} className="grid  place-items-stretch h-auto">
            <div className="">
              <div className="card rounded-[10px] w-[360px] lg:w-[455px] p-4 lg:p-6">
                <div className="text-start">
                  <img className=" w-[407px]" src={blog1} alt="" />
                  <h2 className="pt-5 lg:pt-[30px] lg:pb-7 text-[16px] text-[#002550] ">
                    Real Estate, Analysis
                  </h2>
                  <div className="flex justify-between text-[16px] font-medium mt-3 lg:font-semibold text-[#1A1A1A] pb-5 lg:pb-[30px]">
                    <span className=" ">09 jun 2022</span>
                    <span className="opacity-50 lg:opacity-100">By Admin</span>
                  </div>

                  <h2 className="pb-4 text-xl  xl:text-2xl  leading-7 text-[#002550] font-semibold">
                    Application of Blockchain in real estate industry
                  </h2>

                  <p className="cart-desc text-sm lg:text-base text-[#1A1A1A] opacity-60 text-justify">
                    Blockchain technology has been considered as one of the most
                    revolutionary technological advances in recent years
                  </p>
                </div>

                <div className="card-button pt-2.5 lg:mt-6 pb-0 text-[#002550]">
                  <Link
                    to="/blogDetails"
                    className="h-[48px] xl:h-[61px]  py-[18px] px-[32px] btn border text-[#002550] font-semibold rounded-md  outline outline-1 text-lg p-2 flex justify-center items-center gap-2 "
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
              <div className="card rounded-[10px] w-[360px]  lg:w-[455px] p-4 lg:p-6">
                <div className="text-start">
                  <img className=" w-[407px]" src={blog2} alt="" />
                  <h2 className="pt-5 lg:pt-[30px] lg:pb-7 text-[16px] text-[#002550] ">
                    Real Estate, Analysis
                  </h2>
                  <div className="flex justify-between text-[16px] font-medium mt-3 lg:font-semibold text-[#1A1A1A] pb-5 lg:pb-[30px]">
                    <span className=" ">09 jun 2022</span>
                    <span className="opacity-50 lg:opacity-100">By Admin</span>
                  </div>

                  <h2 className="pb-4 text-xl  xl:text-2xl  leading-7 text-[#002550] font-semibold">
                    Real estate Purchase Challenges in Bengaluru
                  </h2>

                  <p className="cart-desc text-sm lg:text-base text-[#1A1A1A] opacity-60 text-justify">
                    There are several problems that buyers may face during real
                    estate purchase in Bengaluru. Some of the major problems are
                    as follows
                  </p>
                </div>

                <div className="card-button pt-2.5 xl:mt-[22px] pb-0 text-[#002550]">
                  <Link
                    to="/blogDetails3"
                    className="h-[48px] xl:h-[61px]  py-[18px] px-[32px] btn border text-[#002550] font-semibold rounded-md  outline outline-1 text-lg p-2 flex justify-center items-center gap-2 "
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
              <div className="card rounded-[10px] w-[360px]  lg:w-[455px] p-4 lg:p-6">
                <div className="text-start">
                  <img className=" w-[407px]" src={blog3} alt="" />
                  <h2 className="pt-5 lg:pt-[30px] lg:pb-7 text-[16px] text-[#002550] ">
                    Real Estate, Analysis
                  </h2>
                  <div className="flex justify-between text-[16px] font-medium mt-3 lg:font-semibold text-[#1A1A1A] pb-5 lg:pb-[30px]">
                    <span className=" ">09 jun 2022</span>
                    <span className="opacity-50 lg:opacity-100">By Admin</span>
                  </div>

                  <h2 className="pb-4 text-xl  xl:text-2xl leading-7 text-[#002550] font-semibold">
                    Artificial Intelligence in <br /> Realty
                  </h2>

                  <p className="cart-desc text-sm lg:text-base text-[#1A1A1A] opacity-60 text-justify">
                    The Indian real estate market has been on an upswing in
                    recent years, with a growing number of developers and
                    investors entering the space
                  </p>
                </div>

                <div className="card-button pt-2.5 xl:mt-1 pb-0 text-[#002550]">
                  <Link
                    to="/artificial-Intelligence-in-Realty"
                    className="h-[48px] xl:h-[61px]  py-[18px] px-[32px] btn border text-[#002550] font-semibold rounded-md  outline outline-1 text-lg p-2 flex justify-center items-center gap-2 "
                  >
                    View More
                    <span>
                      <BsArrowRight className="text-2xl " />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </Slider>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Blog;
