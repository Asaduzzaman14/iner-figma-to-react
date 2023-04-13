import React, { useEffect } from "react";
import blogDetail1 from "../../asset/blog/blogDetail1.png";
import Blog from "../Blog";
import { Link, useNavigate } from "react-router-dom";
import facbook from "../../asset/icon/facebook.png";
import twitter from "../../asset/icon/twitter.png";
import instagram from "../../asset/icon/Instagram.png";
import linkedin from "../../asset/icon/linkedin.png";
import { BsArrowRight } from "react-icons/bs";

//

import blog1 from "../../asset/blog/blog1.png";
import blog2 from "../../asset/blog/blog2.png";
import blog3 from "../../asset/blog/blog3.png";
import leftArrow from "../../asset/icon/leftArrow.png";
import shortLeftArrow from "../../asset/icon/shortArrow.png";
import whiteshortLeftArrow from "../../asset/icon/shortArrowWhite.png";
import user from "../../asset/icon/user.png";
import date from "../../asset/icon/date.png";
import OtherBlogs from "./OtherBlogs";

const BlogDetails2 = () => {
  const naviagate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="mt-5 lg:mt-[70px] text-center px-5 px-lg:10 xl:px-[200px]">
        <div className="text-start">
          <p className="text-xs lg:text-[20px] pb-5 text-[#1A1A1A] flex gap-4">
            <div onClick={() => naviagate(-1)}>
              <img src={leftArrow} alt="" />
            </div>
            Artificial Intelligence in Realty
          </p>

          <img
            className="w-[360px] md:w-fi lg:w-fit xl:w-[1462px] mx-auto"
            src={blogDetail1}
            alt=""
          />

          <div className="flex justify-between lg:justify-normal lg:gap-40  text-[#1A1A1A] py-[36px]">
            <span className="font-semibold flex items-center gap-2">
              {" "}
              <img className="h-3" src={user} alt="" /> By Brajesh{" "}
            </span>
            <span className="font-semibold flex items-center gap-2 ">
              <img className="h-5" src={date} alt="" /> 23 Mar 2023
            </span>
          </div>

          <div className="relative bg-[#F2F4F6] py-3 px-5 lg:px-12 lg:py-4">
            <div className=" border-2 rounded-full h-full w-[2px]  border-[#002550] absolute top-0 left-0"></div>
            <p className="cart-desc text-sm lg:text-base  text-[#1A1A1A] pb-0 opacity-60 text-justify">
              This whole purchase journey of real estate purchase can be divided
              into three broad stages. For more details, click here
            </p>
          </div>
        </div>

        <div className="text-base lg:text-2xl ">
          <div className="text-start text-[#1A1A1A] opacity-60 pt-5 lg:pt-9">
            <p>
              The Indian real estate market has been on an upswing in recent
              years, with a growing number of developers and investors entering
              the space. In addition to the traditional factors that influence
              the market, such as economic growth, demographics, and government
              policies, a new factor is emerging as a game-changer: Artificial
              Intelligence (AI). AI has already made its presence felt in
              numerous industries, from finance to healthcare, and real estate
              is no exception. Below, we will explore the various applications
              of AI in the Indian real estate market and how it is transforming
              the industry.
            </p>

            <div className=" pt-3">
              <div className="flex text-2xl">
                <span>1.</span>
                <h2 className=" ms-2">Property Search and Discovery:</h2>
              </div>
              <p>
                The traditional way of searching for a property is
                time-consuming and often frustrating. However, AI-powered
                platforms such as NoBroker and Housing.com are trying to change
                the game by providing a more personalized and efficient
                experience. These platforms tend to use machine learning
                algorithms to understand the preferences and requirements of
                potential buyers and show them only relevant properties. This
                not only saves time but also provides a more accurate search
                experience
              </p>
            </div>
            <div className=" pt-3">
              <div className="flex text-2xl">
                <span>2.</span>
                <h2 className=" ms-2">Predictive Analytics:</h2>
              </div>
              <p>
                The traditional way of searching for a property is
                time-consuming and often frustrating. However, AI-powered
                platforms such as NoBroker and Housing.com are trying to change
                the game by providing a more personalized and efficient
                experience. These platforms tend to use machine learning
                algorithms to understand the preferences and requirements of
                potential buyers and show them only relevant properties. This
                not only saves time but also provides a more accurate search
                experience
              </p>
            </div>

            <div className=" pt-3">
              <div className="flex text-2xl">
                <span>3.</span>
                <h2 className=" ms-2">Property Valuation:</h2>
              </div>
              <p>
                AI-powered platforms such as PropEquity and 99acres tend to use
                machine learning algorithms to accurately predict the value of a
                property based on various factors such as location, amenities,
                and market trends. This information can be useful for buyers,
                sellers, and lenders who need to understand the true value of a
                property before making a transaction.
              </p>
            </div>

            <div className=" pt-3">
              <div className="flex text-2xl">
                <span>4.</span>
                <h2 className=" ms-2">Chatbots:</h2>
              </div>
              <p>
                AI-powered chatbots are becoming increasingly popular in the
                real estate industry, as they provide a more efficient and
                personalized customer service experience. Chatbots can answer
                common questions, provide property recommendations, and even
                schedule property viewings. This not only saves time for both
                customers and agents but also provides a 24/7 service that can
                improve customer satisfaction.
              </p>
            </div>
            <div className=" pt-3">
              <div className="flex text-2xl">
                <span>5.</span>
                <h2 className=" ms-2">Smart Buildings:</h2>
              </div>
              <p>
                AI is also being used to create smart buildings that are more
                efficient and sustainable.
              </p>
            </div>
            <div className=" pt-3">
              <div className="flex text-2xl">
                <span>6.</span>
                <h2 className=" ms-2">Fraud detection</h2>
              </div>
              <p>
                AI-powered fraud detection systems are being used in the Indian
                real estate sector to prevent fraud and ensure the security of
                transactions. Fraud detection systems use machine learning
                algorithms to analyze data and identify patterns that indicate
                fraudulent activity. These systems can be used to detect fraud
                in property listings, title transfers, and financial
                transactions. To conclude, AI technology is transforming the
                Indian real estate sector and has made it more efficient,
                accurate, and cost-effective through various applications
              </p>
            </div>
          </div>

          <div>
            <div className="py-[70px] hidden lg:block">
              <hr className=" text-[#CCD3DC]" />
            </div>

            <div className="hidden lg:block">
              <div className="flex justify-between">
                <Link to={"/blogDetails"}>
                  <button className=" px-[32px] py-4 btn border text-[#002550] font-semibold rounded-md mt-4 outline outline-1  p-2 flex justify-center items-center gap-2 ">
                    {" "}
                    <img src={shortLeftArrow} alt="" /> Previous Post
                  </button>
                </Link>
                <Link to={"/blogDetails3"}>
                  <button className="px-[32px] py-4 btn text-white bg-[#01244A] font-semibold rounded-md mt-4 outline outline-1 p-2 flex justify-center items-center gap-2 ">
                    Next post{" "}
                    <img className="ms-2" src={whiteshortLeftArrow} alt="" />
                  </button>
                </Link>
              </div>
            </div>

            <div className="text-start md:grid grid-cols-2 gap-5 lg:gap-16 justify-between pt-7 lg:pt-20">
              <div>
                <h2 className="text-2xl font-semibold lg:text-[28px] text-[#1A1A1A] ">
                  Share this Post and Follow us on :
                </h2>
                <p className="text-start text-[#1A1A1A] opacity-60 pt-3.5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
                <div className="flex text-start py-5 lg:py-10 gap-4">
                  <Link to="www.facebook.com">
                    <img className="w-12" src={instagram} alt="" />
                  </Link>
                  <Link to="www.facebook.com">
                    <img className="w-12" src={facbook} alt="" />
                  </Link>
                  <Link to="/">
                    <img className="w-12" src={twitter} alt="" />
                  </Link>
                  <Link to="/">
                    <img className="w-12" src={linkedin} alt="" />
                  </Link>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold lg:text-[28px] text-[#1A1A1A] ">
                  Contact Us For Regular Updates :
                </h2>
                <div className="hidden lg:block">
                  <Link to={"/"}>
                    <button className="px-[32px] py-4  btn border text-[#002550] font-semibold rounded-sm mt-4 outline outline-1 flex justify-center items-center gap-2 ">
                      Contact Now{" "}
                      <span>
                        <BsArrowRight />{" "}
                      </span>{" "}
                    </button>
                  </Link>
                </div>
                <Link to={"/"}>
                  <button className="w-[209px] text-lg lg:hidden btn border text-[#002550] font-semibold rounded-sm mt-4 outline outline-1  p-2 flex justify-center items-center gap-2 ">
                    Register Now{" "}
                    <span>
                      <BsArrowRight />{" "}
                    </span>{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ************************* */}
      {/* blogs */}
      {/* ************************* */}

      <OtherBlogs />
    </>
  );
};

export default BlogDetails2;
