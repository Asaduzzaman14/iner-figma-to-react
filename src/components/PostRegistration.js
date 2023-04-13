import React from "react";
import iamge1 from "../asset/offerig/postReg1.png";
import iamge2 from "../asset/offerig/postreg2.png";
import iamge3 from "../asset/offerig/postreg3.png";
import iamge4 from "../asset/offerig/postreg-4.png";
import rightArrow from "../asset/icon/rightArrow.png";
import { BsArrowRight } from "react-icons/bs";

import Slider from "react-slick";

const PostRegistration = () => {
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
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
    // <div className='grid gap-[46px] grid-cols-1 lg:grid-cols-3 '>
    <Slider {...settings}>
      <div>
        <div className="card w-[360px] lg:w-[711px] p-4 lg:p-6">
          <div>
            <img
              className="w-[330px] h-[245px]  lg:w-full lg:h-full"
              src={iamge1}
              alt=""
            />
            <h2 className="cart-title text-xl">Virtual Site Visit</h2>
            <p className="cart-desc text-[#1A1A1A] opacity-60 text-sm lg:text-lg text-justify">
              It becomes imperative to observe your apartment or plot very
              closely before paying the booking amount. We are here to assist
              with an AI-enabled UAV system. You just need to choose your
              convenient date and hour slots. We will provide both live
              streaming and...
            </p>

            <div className="card-button pb-0 text-[#002550]">
              <button className="py-[18px] px-[32px] btn border text-[#002550] font-semibold rounded-md  outline outline-1 text-lg p-2 flex justify-center items-center gap-2 ">
                Contact us
                <span>
                  <BsArrowRight className="text-2xl " />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="card w-[360px] lg:w-[711px] p-4 lg:p-6">
          <div>
            <img
              className="w-[330px] h-[245px]  lg:w-full lg:h-full"
              src={iamge2}
              alt=""
            />
            <h2 className="cart-title text-xl">Khata Transfer</h2>
            <p className="cart-desc text-[#1A1A1A] opacity-60 text-sm lg:text-lg text-justify">
              Various processes like Khata transfer and Bescom transfer after
              registration consume your precious time and money. Let us help you
              with those at nominal costs ensuring fast and transparent
              delivery.
            </p>

            <div className="card-button pb-0 text-[#002550]">
              <button className="py-[18px] px-[32px] btn border text-[#002550] font-semibold rounded-md  outline outline-1 text-lg p-2 flex justify-center items-center gap-2 ">
                Contact us
                <span>
                  <BsArrowRight className="text-2xl " />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="card w-[360px] lg:w-[711px] p-4 lg:p-6">
          <div>
            <img
              className="w-[330px] h-[245px]  lg:w-full lg:h-full"
              src={iamge3}
              alt=""
            />
            <h2 className="cart-title text-xl">BESCOM Transfer</h2>
            <p className="cart-desc text-[#1A1A1A] opacity-60 text-sm lg:text-lg text-justify">
              Various processes like Khata transfer and Bescom transfer after
              registration consume your precious time and money. Let us help you
              with those at nominal costs ensuring fast and transparent
              delivery.
            </p>

            <div className="card-button pb-0 text-[#002550]">
              <button className="py-[18px] px-[32px] btn border text-[#002550] font-semibold rounded-md  outline outline-1 text-lg p-2 flex justify-center items-center gap-2 ">
                Contact us
                <span>
                  <BsArrowRight className="text-2xl " />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="card w-[360px] lg:w-[711px] p-4 lg:p-6">
          <div>
            <img
              className="w-[330px] h-[245px]  lg:w-full lg:h-full"
              src={iamge4}
              alt=""
            />
            <h2 className="cart-title text-xl">Property Tax Transfer</h2>
            <p className="cart-desc text-[#1A1A1A] opacity-60 text-sm lg:text-lg text-justify">
              Various processes like Khata transfer and Bescom transfer after
              registration consume your precious time and money. Let us help you
              with those at nominal costs ensuring fast and transparent
              delivery.
            </p>

            <div className="card-button pb-0 text-[#002550]">
              <button className="py-[18px] px-[32px] btn border text-[#002550] font-semibold rounded-md  outline outline-1 text-lg p-2 flex justify-center items-center gap-2 ">
                Contact us
                <span>
                  <BsArrowRight className="text-2xl " />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default PostRegistration;
