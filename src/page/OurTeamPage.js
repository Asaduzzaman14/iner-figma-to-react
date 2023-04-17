import React from "react";
import About from "../components/About";
import image1 from "../asset/ourTeam/image1.png";
import image2 from "../asset/ourTeam/image2.png";
import image3 from "../asset/ourTeam/image3.png";
import aboutImg from "../asset/image 27.png";
import { BsArrowRight } from "react-icons/bs";
import Slider from "react-slick";
import "./ourTeam.css";

const OurTeampage = () => {
  var settings = {
    dots: true,

    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 777,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="mb-[25px]">
      <div className="bg-[#E6EAEE] pb-2 mb-[25px] lg:mb-[35px]">
        <div className=" py-5  lg:pt-[70px] lg:pb-[35px]">
          <div className="relative ">
            <h2 className="title pt-0 text-base lg:text-[32px] lg:leading-10 pb-[5px] lg:pb-[10px]">
              Our Team
            </h2>
            <div className=" border-2 rounded-full h-[2px] w-[81px] lg:w-[133px] inset-x-0 mx-auto border-[#002550] absolute bottom-0"></div>
          </div>
        </div>

        {/* ************************** */}
        {/* <About /> */}
        {/* ************************** */}

        <div className="font-sans px-5  lg:px-10  xl:px-[100px] 2xl:px-[200px]">
          <div className="w-[360px] md:w-full mx-auto bg-[#F2F4F6] p-4 md:p-6 lg:p-7 grid grid-cols-1 lg:grid-cols-2 items-center content-center gap-[10px] lg:gap-[30px]">
            <div>
              <img
                className="w-[340px] md:w-full mx-auto"
                src={aboutImg}
                alt=""
              />
            </div>

            <div className="text-start font-sans grid content-center">
              {/* <p className='normal-text font-normal text-[#1A1A1A] pb-[10px]'>Real Estate</p> */}
              <h2 className="font-sans text-xl md:text-xl text-blue lg:text-[#1A1A1A] lg:text-[36px] font-semibold pb-[10px] lg:pb-8">
                Who We Are
              </h2>
              <p className="normal-text text-[#1A1A1A] text-sm opacity-60 text-justify">
                The Indian real estate sector is resilient despite global
                headwinds. Returns are impressive and the sector is expected to
                reach US$ 1 trillion in market size by 2030 (Niti Aayog report,
                2021). However, the whole real estate purchase journey is very
                tedious and takes more than 2 years on average. Further, as the
                ticket size of this investment is large, security and trust
                become quite critical. Problems compound when you are currently
                away from your purchase destination. If you are experiencing
                difficulties in the real estate purchase journey, we are here to
                make it fast and transparent.
              </p>
              <div className="">
                <button className=" w-full h-[48px] lg:w-[167px] btn border-[#01244A] border  rounded-md mt-4 outline outline-1 text-lg p-2 flex justify-center items-center gap-2 ">
                  Contract Now{" "}
                  <span className="text-[#01244A] font-semibold text-2xl">
                    <BsArrowRight />
                  </span>
                </button>
              </div>

              {/* <button className="md:hidden btn border border-[#01244A] font-semibold rounded-sm mt-4 outline outline-1 text-lg p-2 flex justify-center items-center gap-2">
                Contract Now{" "}
                <span className="text-[#01244A] font-semibold">
                  <BsArrowRight />
                </span>
              </button> */}
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block px-5  lg:px-10  xl:px-[100px] 2xl:px-[200px]">
        <div className="pt-4 pb-9">
          <div className="grid lg:grid-flow-row gap-[36px] grid-cols-1 ">
            <div className="card bg-[#F2F4F6] w-[360px] lg:w-full  p-4 lg:p-12">
              <div className=" text-start">
                <div className="flex items-center gap-4 lg:gap-10 pb-5">
                  <div>
                    <img
                      className="w-[87px] h-[87px] rounded-lg mx-auto"
                      src={image1}
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className=" text-2xl lg:text-[28px] text-[#002550] font-semibold">
                      Brajesh Pathak
                    </h2>
                    <span className="text-[#1A1A1A] opacity-40 pb-3">
                      Co-Founder
                    </span>
                  </div>
                </div>
                <p className="cart-desc text-sm lg:text-lg text-[#1A1A1A] opacity-60 text-justify">
                  A Chartered Accountant & Company Secretary, has over a decade
                  of experience in managing realty focused venture capital
                  funds, and was heading Azure Capital Advisors Private Limited.
                  He has also been part of the managing committee and execution
                  committee of Azure Capital (100 Crore realty focused funds),
                  he has been part of the execution committee of various special
                  purpose vehicle of investee companies for plotted development,
                  villa projects, and apartments including development work &
                  construction management. He is deeply involved in the...{" "}
                </p>
              </div>
            </div>

            <div className="card bg-[#F2F4F6] w-[360px] lg:w-full  p-4 lg:p-12">
              <div className=" text-start">
                <div className="flex items-center gap-4 lg:gap-10 pb-5">
                  <div>
                    <img
                      className="w-[87px] h-[84px] rounded-lg mx-auto"
                      src={image2}
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="  text-2xl lg:text-[28px] text-[#002550] font-semibold">
                      Deepak Shukla
                    </h2>
                    <span className="text-[#1A1A1A] opacity-40 pb-3">
                      Co-Founder
                    </span>
                  </div>
                </div>
                <p className="cart-desc text-sm lg:text-lg text-[#1A1A1A] opacity-60 text-justify">
                  Deepak Shukla has completed his B.Tech (hons.) from the Indian
                  Institute of Technology (IIT) Kharagpur and obtained an MBA
                  from the Indian Institute of Management (IIM) Ahmedabad,
                  India. He has an overall experience of 11 years in firms like
                  Credit Suisse, FICO, Alvarez and Marsal and The World Bank
                  across geographies. In the past few years, his focus is in
                  solving real world challenges using AI. He has engaged in
                  development of voicebots for contact centres, automated
                  training and validation for Autonomous vehicles applications.
                </p>
              </div>
            </div>

            <div className="card bg-[#F2F4F6] w-[360px] lg:w-full  p-4 lg:p-12">
              <div className=" text-start">
                <div className="flex items-center gap-4 lg:gap-10 pb-5">
                  <div>
                    <img
                      className="w-[87px] h-[87px] rounded-lg mx-auto"
                      src={image3}
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className=" text-2xl lg:text-[28px] text-[#002550] font-semibold">
                      Alok Kumar Singh
                    </h2>
                    <span className="text-[#1A1A1A] opacity-40 pb-3">
                      Advisor
                    </span>
                  </div>
                </div>
                <p className="cart-desc text-sm lg:text-lg text-[#1A1A1A] opacity-60 text-justify">
                  Entrepreneur with pedigree from IIT-BHU and IIML, and more
                  than 25 years of experience in management responsibilities in
                  top tier companies including Infosys, Infosys BPO and Azure
                  Capital. Co-Founded Azure Capital, a Real Estate Private
                  Equity Fund and Azven Realty, a full service Real Estate
                  Development firm in Bangalore. Set-up and managed a SEBI
                  registered VC fund under Azure Capital. Actively involved in
                  mentoring and advising seed and growth stage startups at
                  C-Level in Visioning, Governance, Strategy Development &
                  Implementation, Growth...{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ***************************** */}
      {/* team slider for mobile */}
      {/* ***************************** */}

      <div className="lg:hidden ourTeam">
        <Slider {...settings}>
          <div>
            <div className="card bg-[#F2F4F6] w-[360px] lg:w-full  p-4 lg:p-12">
              <div className=" text-start">
                <div className="flex items-center gap-4 lg:gap-10 pb-5">
                  <div>
                    <img
                      className="w-[87px] h-[87px] rounded-lg mx-auto"
                      src={image1}
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="  text-2xl lg:text-[28px] text-[#002550] font-semibold">
                      Brajesh Pathak
                    </h2>
                    <span className="text-[#1A1A1A] opacity-40 pb-3">
                      Co-Founder
                    </span>
                  </div>
                </div>
                <p className="cart-desc text-sm lg:text-lg text-[#1A1A1A] opacity-60 text-justify">
                  A Chartered Accountant & Company Secretary, has over a decade
                  of experience in managing realty focused venture capital
                  funds, and was heading Azure Capital Advisors Private Limited.
                  He has also been part of the managing committee and execution
                  committee of Azure Capital (100 Crore realty focused funds),
                  he has been part of the execution committee of various special
                  purpose vehicle of investee companies for plotted development,
                  villa projects, and apartments including development work &
                  construction management. He is deeply involved in the...{" "}
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="card  bg-[#F2F4F6] w-[360px] lg:w-full  p-4 lg:p-12">
              <div className=" text-start">
                <div className="flex items-center gap-4 lg:gap-10 pb-5">
                  <div>
                    <img
                      className="w-[87px] h-[84px] rounded-lg mx-auto"
                      src={image2}
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="  text-2xl lg:text-[28px] text-[#002550] font-semibold">
                      Deepak Shukla
                    </h2>
                    <span className="text-[#1A1A1A] opacity-40 pb-3">
                      Co-Founder
                    </span>
                  </div>
                </div>
                <p className="cart-desc text-sm lg:text-lg text-[#1A1A1A] opacity-60 text-justify">
                  Deepak Shukla has completed his B.Tech (hons.) from the Indian
                  Institute of Technology (IIT) Kharagpur and obtained an MBA
                  from the Indian Institute of Management (IIM) Ahmedabad,
                  India. He has an overall experience of 11 years in firms like
                  Credit Suisse, FICO, Alvarez and Marsal and The World Bank
                  across geographies. In the past few years, his focus is in
                  solving real world challenges using AI. He has engaged in
                  development of voicebots for contact centres, automated
                  training and validation for Autonomous vehicles applications.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="card  bg-[#F2F4F6] w-[360px] lg:w-full  p-4 lg:p-12">
              <div className=" text-start">
                <div className="flex items-center gap-4 lg:gap-10 pb-5">
                  <div>
                    <img
                      className="w-[87px] h-[87px] rounded-lg mx-auto"
                      src={image3}
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="  text-2xl lg:text-[28px] text-[#002550] font-semibold">
                      Alok Kumar Singh
                    </h2>
                    <span className="text-[#1A1A1A] opacity-40 pb-3">
                      Advisor
                    </span>
                  </div>
                </div>
                <p className="cart-desc text-sm lg:text-lg text-[#1A1A1A] opacity-60 text-justify">
                  Entrepreneur with pedigree from IIT-BHU and IIML, and more
                  than 25 years of experience in management responsibilities in
                  top tier companies including Infosys, Infosys BPO and Azure
                  Capital. Co-Founded Azure Capital, a Real Estate Private
                  Equity Fund and Azven Realty, a full service Real Estate
                  Development firm in Bangalore. Set-up and managed a SEBI
                  registered VC fund under Azure Capital. Actively involved in
                  mentoring and advising seed and growth stage startups at
                  C-Level in Visioning, Governance, Strategy Development &
                  Implementation, Growth...{" "}
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default OurTeampage;
