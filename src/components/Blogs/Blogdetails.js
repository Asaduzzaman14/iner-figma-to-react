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

const BlogDetails = () => {
  const naviagate = useNavigate();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <>
      <div className="mt-5 lg:mt-[70px] text-center px-5 px-lg:10 xl:px-[200px]">
        <div className="text-start">
          <p className="text-base lg:text-[20px] pb-5 text-[#1A1A1A] flex gap-4">
            <div onClick={() => naviagate(-1)}>
              <img src={leftArrow} alt="" />
            </div>
            Application of Blockchain in real estate industry
          </p>

          <img
            className="w-[360px] h-[270px] lg:w-fit xl:w-[1462px] mx-auto"
            src={blogDetail1}
            alt=""
          />

          <div className="flex justify-between lg:justify-normal lg:gap-40  text-[#1A1A1A] py-4 lg:py-[36px]">
            <span className="lg:font-semibold flex items-center gap-2">
              {" "}
              <img className="h-3" src={user} alt="" /> By Brajesh{" "}
            </span>
            <span className=" lg:font-semibold flex items-center gap-2 ">
              <img className="h-5" src={date} alt="" /> 23 Mar 2023
            </span>
          </div>

          <div className="relative bg-[#F2F4F6] py-3 px-5 lg:px-12 lg:py-4">
            <div className=" border-2 rounded-full h-full w-[2px]  border-[#002550] absolute top-0 left-0"></div>
            <p className="cart-desc text-base  text-[#1A1A1A] pb-0 opacity-60 text-justify">
              This whole purchase journey of real estate purchase can be divided
              into three broad stages. For more details, click here
            </p>
          </div>
        </div>

        <div className="text-base lg:text-2xl ">
          <div className="text-start text-[#1A1A1A] opacity-60 pt-5 lg:pt-9">
            <p>
              Blockchain technology has been considered as one of the most
              revolutionary technological advances in recent years. Initially
              developed as the underlying technology for cryptocurrencies such
              as Bitcoin, it has now found its way into a wide range of
              industries. One such industry is real estate, where blockchain is
              being increasingly used to streamline processes, reduce fraud, and
              increase transparency. In this article, we will explore the
              application of blockchain in real estate, along with figures and
              their sources.
            </p>

            <p className="pt-5">
              <p>What is blockchain?</p>
              Before delving into the application of blockchain in real estate,
              it is important to understand what blockchain is. In simple terms,
              blockchain is a decentralized, digital ledger that records
              transactions in a secure and transparent manner. It is a
              distributed database that maintains a continuously growing list of
              records called blocks, each of which contains a timestamp and a
              link to the previous block. This makes it virtually impossible to
              alter the data contained in the blockchain, making it an ideal
              technology for secure and transparent transactions.
            </p>

            <div>
              <p>Application of blockchain in real estate </p>
              <p>
                Real estate is a complex industry with multiple parties involved
                in the buying and selling of properties. The traditional process
                of buying and selling a property involves a lot of paperwork,
                which can be time-consuming and prone to errors. Blockchain
                technology can help streamline this process by providing a
                secure, transparent, and efficient platform for real estate
                transactions. Some of the ways in which blockchain is being used
                in real estate are:
              </p>
            </div>

            <div className="ms-3">
              <div className="pt-3">
                <div className="flex gap-1">
                  <span>1. </span>
                  <p className=""> Smart contracts:</p>
                </div>
                <p className="ms-4">
                  One of the most significant applications of blockchain in real
                  estate is the use of smart contracts. A smart contract is a
                  self-executing contract that is programmed to automatically
                  execute when certain conditions are met. In real estate, smart
                  contracts can be used to automate the transfer of property
                  ownership and the release of funds once the conditions of the
                  contract are met. This can help reduce the time and cost
                  involved in real estate transactions, as well as reduce the
                  risk of fraud.
                </p>
              </div>

              <div className="pt-3">
                <div className="flex gap-1">
                  <span>2. </span>
                  <p className="">Property title management</p>
                </div>
                <p className="ms-4">
                  Another area where blockchain can be useful in real estate is
                  property title management. Property titles are a crucial
                  component of real estate transactions, as they establish
                  ownership of the property. However, the current system of
                  property title management is often prone to errors, fraud, and
                  disputes. Blockchain technology can provide a secure and
                  transparent platform for managing property titles, which can
                  help reduce the risk of fraud and disputes.
                </p>
              </div>

              <div className="pt-3">
                <div className="flex gap-1">
                  <span>3. </span>
                  <p className=""> Real estate crowdfunding</p>
                </div>
                <p className="ms-4">
                  Real estate crowdfunding is an emerging trend in the real
                  estate industry, where multiple investors pool their resources
                  to invest in a property. Blockchain technology can be used to
                  provide a secure and transparent platform for real estate
                  crowdfunding, which can help reduce the risk of fraud and
                  increase investor confidence.
                </p>
              </div>

              <div className="pt-3">
                <div className="flex gap-1">
                  <span>4. </span>
                  <p className=""> Property valuation</p>
                </div>
                <p className="ms-4">
                  Property valuation is an important part of the real estate
                  industry, as it helps establish the market value of a
                  property. However, the current system of property valuation is
                  often subjective and prone to errors. Blockchain technology
                  can be used to provide a secure and transparent platform for
                  property valuation, which can help reduce the risk of errors
                  and increase the accuracy of valuations.
                </p>
              </div>
            </div>

            <div className="mt-3">
              <p className="">Benefits of using blockchain in real estate</p>
              <p>
                The use of blockchain in real estate can provide a number of
                benefits, including
              </p>
            </div>

            <div>
              <div className="pt-3">
                <div className="flex gap-1">
                  <span>1. </span>
                  <p className="">
                    {" "}
                    Increased transparency - Blockchain technology provides a
                    secure and transparent platform for real estate
                    transactions, which can help reduce the risk of fraud and
                    increase transparency.
                  </p>
                </div>
              </div>

              <div className="pt-3">
                <div className="flex gap-1">
                  <span>2. </span>
                  <p className="">
                    Reduced costs- By automating the real estate transaction
                    process and reducing the need for intermediaries, blockchain
                    can help reduce the costs involved in real estate
                    transactions.
                  </p>
                </div>
              </div>
              <div className="pt-3">
                <div className="flex gap-1">
                  <span>3. </span>
                  <p className="">
                    {" "}
                    Improved efficiency- The use of smart contracts and other
                    blockchain-based technologies can help automate the real
                    estate transaction process, which can help improve
                    efficiency and reduce the time involved in real estate
                    transactions.
                  </p>
                </div>
              </div>

              <div className="pt-3">
                <div className="flex gap-1">
                  <span>4. </span>
                  <p className="">
                    {" "}
                    Increased security- Blockchain technology provides a secure
                    platform for real estate transactions, which can help reduce
                    the risk of fraud and increase the security of transactions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="py-[70px] hidden lg:block">
              <hr className=" text-[#CCD3DC]" />
            </div>

            <div className="hidden lg:block">
              <div className="flex justify-between">
                <Link to={"/blogDetails3"}>
                  <button className=" px-[32px] py-4 btn border text-[#002550] font-semibold rounded-md mt-4 outline outline-1  p-2 flex justify-center items-center gap-2 ">
                    <img src={shortLeftArrow} alt="" />
                    Previous Post
                  </button>
                </Link>
                <Link to={"/artificial-Intelligence-in-Realty"}>
                  <button className="px-[32px] py-4 btn text-white bg-[#01244A] font-semibold rounded-md mt-4 outline outline-1 p-2 flex justify-center items-center gap-2 ">
                    Next post{" "}
                    <img className="ms-2" src={whiteshortLeftArrow} alt="" />
                  </button>
                </Link>
              </div>
            </div>

            <div className="text-start md:grid grid-cols-2 gap-5 lg:gap-16 justify-between pt-7 lg:pt-20">
              <div>
                <h2 className="text-2xl font-semibold lg:text-[28px] text-blue lg:text-[#1A1A1A] ">
                  Share this Post and Follow us on :
                </h2>
                <p className="text-start text-lg text-[#1A1A1A] opacity-60 pt-2.5 lg:pt-3.5">
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
                  {/* Contact Us For Regular Updates : */}
                  Register Now For Regular Updates :
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

export default BlogDetails;
