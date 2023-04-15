import React from "react";
import BlogBanner from "../components/Blogs/BlogBanner";
import { BsArrowRight } from "react-icons/bs";

import blog1 from "../asset/blog/blogpageimg-1.png";
import blog2 from "../asset/blog/blogsPageImg2.png";
import blog3 from "../asset/blog/blog3.png";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Blogs = () => {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerPadding: "100px",

    // nextArrow: {color:"#000"}
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
    <div className="pb-10 lg:pb-20">
      <div className="relative lg:hidden mb-4 pb-1.5 text-center">
        <h2 className="title mt-0 py-[20px] ">Blogs</h2>
        <div className=" border-2 rounded-full h-[2px] w-[26px]  inset-x-0 mx-auto border-[#002550] absolute bottom-4"></div>
      </div>

      <BlogBanner />

      <div className="mt-6 lg:mt-9">
        <div className="px-5 px-lg:10 xl:px-[100px] 2xl:px-[200px]">
          {/* <div className='grid gap-[46px] grid-cols-2 lg:grid-cols-2 '> */}
          <Slider {...settings} className="">
            <div className="">
              <div className="card w-[360px] lg:w-[711px] p-4 lg:p-[26px]">
                <div className="text-start">
                  <img
                    className="w-full  h-[207px] lg:h-[319px]"
                    src={blog1}
                    alt=""
                  />
                  <h2 className="pt-[30px] pb-7 text-[#1A1A1A] font-bold">
                    Real Estate, Analysis
                  </h2>
                  <div className="flex justify-between  text-[#1A1A1A] pb-[30px]">
                    <span className="font-semibold ">09 jun 2022</span>
                    <span className="font-semibold">By Admin</span>
                  </div>

                  <h2 className="pb-4 text-xl xl:text-[28px]  font-semibold">
                    Application of Blockchain in real estate industry{" "}
                  </h2>

                  <p className="cart-desc text-sm lg:text-base text-[#1A1A1A] opacity-60 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipis cing elit,
                    sed do eiusmod temp incididuut labore dolore magna aliqua do
                    eiusmod...
                  </p>
                </div>
                <div className=" text-[#002550]">
                  <Link to={"/blogDetails"}>
                    <button className="w-full lg:w-fit py-[18px] px-[32px] btn border text-[#002550] font-semibold rounded-md mt-4 outline outline-1 text-lg p-2 flex justify-center items-center gap-2 ">
                      View More
                      <span>
                        <BsArrowRight className="text-2xl " />
                      </span>
                    </button>
                  </Link>
                </div>
                {/* <div className="card-button pb-0 text-[#002550]">
                  <Link to={"/blogDetails"}></Link>
                  <button className="py-[18px] px-[32px] btn border text-[#002550] font-semibold rounded-md  outline outline-1 text-lg p-2 flex justify-center items-center gap-2 ">
                    View More
                    <span>
                      <BsArrowRight className="text-2xl " />
                    </span>
                  </button>
                </div> */}
              </div>
            </div>

            <div className="">
              <div className="card w-[360px] lg:w-[711px] p-4 lg:p-[26px]">
                <div className="text-start">
                  <img
                    className="w-full  h-[207px] lg:h-[319px]"
                    src={blog2}
                    alt=""
                  />
                  <h2 className="pt-[30px] pb-7 text-[#1A1A1A] font-bold">
                    Real estate Purchase Challenges in Bengaluru
                  </h2>
                  <div className="flex justify-between  text-[#1A1A1A] pb-[30px]">
                    <span className="font-semibold ">09 jun 2022</span>
                    <span className="font-semibold">By Admin</span>
                  </div>

                  <h2 className="pb-4 text-xl xl:text-[28px]  font-semibold">
                    Artificial Intelligence in Realty
                  </h2>

                  <p className="cart-desc text-sm lg:text-base text-[#1A1A1A] opacity-60 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipis cing elit,
                    sed do eiusmod temp incididuut labore dolore magna aliqua do
                    eiusmod...
                  </p>
                </div>
                <div className="text-[#002550]">
                  <Link to="/artificial-Intelligence-in-Realty">
                    <button className="w-full lg:w-fit  py-[18px] px-[32px]  btn border text-[#002550] font-semibold rounded-md mt-4 outline outline-1 text-lg p-2 flex justify-center items-center gap-2 ">
                      View More
                      <span>
                        <BsArrowRight className="text-2xl " />
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="">
              <div className="card w-[360px] lg:w-[711px] p-4 lg:p-[26px]">
                <div className="text-start">
                  <img
                    className="w-full h-[207px] lg:h-[319px]"
                    src={blog3}
                    alt=""
                  />
                  <h2 className="pt-[30px] pb-7 text-[#1A1A1A] font-bold">
                    Real Estate, Analysis
                  </h2>
                  <div className="flex justify-between  text-[#1A1A1A] pb-[30px]">
                    <span className="font-semibold ">09 jun 2022</span>
                    <span className="font-semibold">By Admin</span>
                  </div>

                  <h2 className="pb-4 text-xl xl:text-[28px]  font-semibold">
                    Guide for personal property Buying{" "}
                  </h2>

                  <p className="cart-desc text-sm lg:text-base text-[#1A1A1A] opacity-60 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipis cing elit,
                    sed do eiusmod temp incididuut labore dolore magna aliqua do
                    eiusmod...
                  </p>
                </div>
                <div className="text-[#002550]">
                  <Link to="/blogDetails3">
                    <button className="w-full lg:w-fit  py-[18px] px-[32px]  btn border text-[#002550] font-semibold rounded-md mt-4 outline outline-1 text-lg p-2 flex justify-center items-center gap-2 ">
                      View More
                      <span>
                        <BsArrowRight className="text-2xl " />
                      </span>
                    </button>
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

export default Blogs;
