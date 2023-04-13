import React from "react";
import iamge1 from "../asset/postBokingRegi/image1.png";
import iamge2 from "../asset/postBokingRegi/image2.png";
import iamge3 from "../asset/postBokingRegi/image3.png";
import iamge4 from "../asset/postBokingRegi/image4.png";
import iamge5 from "../asset/postBokingRegi/image5.png";
import iamge6 from "../asset/postBokingRegi/image6.png";

import { BsArrowRight } from "react-icons/bs";

import Slider from "react-slick";
import { Link } from "react-router-dom";

const PostBooking = () => {
  var settings = {
    // dots: true,
    infinite: true,
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
    <Slider {...settings}>
      {/* <div className='grid gap-[46px] grid-cols-1 lg:grid-cols-3 '> */}

      <div>
        <div className="card w-[360px] lg:w-[711px] p-4 lg:p-6">
          <div className="text-start">
            <img
              className="w-[330px] h-[245px] lg:w-full lg:h-full "
              src={iamge1}
              alt=""
            />
            <h2 className="cart-title text-xl">Title Diligence</h2>
            <p className="cart-desc text-[#1A1A1A] opacity-60 text-sm lg:text-lg text-justify">
              Title diligence is normally seen as an activity that requires the
              serious involvement of experienced legal consulates as the entire
              premise of ownership lies in title diligence and various
              compliances with housing norms. This activity also requires a lot
              of coordination between the legal consulates and developers which
              is a time-consuming affair without understanding the context, We
              using Ai enabled platform has eased out the process...
            </p>
            <div className="card-button pb-0 text-[#002550]">
              <button className="py-[18px] px-[32px] btn border text-[#002550] font-semibold rounded-md  outline outline-1 text-lg p-2 flex justify-center items-center gap-2 ">
                Contact us
                <span>
                  <BsArrowRight className="text-2xl " />
                </span>
              </button>
              <span>INR 3000/Project</span>
            </div>

            {/* <div className='card-button'>
                            <button className=' btn border  rounded-md  outline outline-1 text-sm lg:text-lg font-sans font-semibold text-[#01244A] p-1 px-4 flex items-center gap-2'>Contract Now<span><BsArrowRight /></span></button>
                            <span>INR 3000/Project</span>
                        </div> */}
          </div>
        </div>
      </div>

      <div>
        <div className="card w-[360px] lg:w-[711px] p-4 lg:p-6">
          <div>
            <img
              className="w-[330px] h-[245px] lg:w-full lg:h-full"
              src={iamge2}
              alt=""
            />
            <h2 className="cart-title text-xl">
              Sustainable Marketability Of Title
            </h2>
            <p className="cart-desc text-[#1A1A1A] opacity-60 text-sm lg:text-lg text-justify">
              Real estate is still the most informal industry in India with
              certain malpractices. It is frequently observed that sellers
              create multiple rights on the same property which makes the
              purchase experience unpleasant. Here, we bring the proposition of
              regular checks on the government records like the encumbrance
              certificate of the particular property. This is further
              supplemented with a legal opinion report by the expert. This
              ensures that...
            </p>

            <Link to="/contactUs" className="card-button pb-0 text-[#002550]">
              <button className="py-[18px] px-[32px] btn border text-[#002550] font-semibold rounded-md  outline outline-1 text-lg p-2 flex justify-center items-center gap-2 ">
                Contact us
                <span>
                  <BsArrowRight className="text-2xl " />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <div className="card w-[360px] lg:w-[711px] p-4 lg:p-6">
          <div>
            <img
              className="w-[330px] h-[245px] lg:w-full lg:h-full"
              src={iamge3}
              alt=""
            />
            <h2 className="cart-title text-xl">Virtual Site Visit</h2>
            <p className="cart-desc text-[#1A1A1A] opacity-60 text-sm lg:text-lg text-justify">
              After booking the property, monitoring is required to ensure that
              the developer is sticking to the development plan. Here, InRe
              brings the proposition of “ Virtual visits at Post- Booking
              stage”. We help the customer to inspect the site with the help of
              AI-enabled UAVs. By covering the aerial view of the project, the
              overall development of the project at the maximum possible heights
              could be observed. This can replace or complement...
            </p>

            <Link to="/contactUs" className="card-button pb-0 text-[#002550]">
              <button className="py-[18px] px-[32px] btn border text-[#002550] font-semibold rounded-md  outline outline-1 text-lg p-2 flex justify-center items-center gap-2 ">
                Contact us
                <span>
                  <BsArrowRight className="text-2xl " />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <div className="card w-[360px] lg:w-[711px] p-4 lg:p-6">
          <div>
            <img
              className="w-[330px] h-[245px] lg:w-full lg:h-full"
              src={iamge4}
              alt=""
            />
            <h2 className="cart-title text-xl">Hassle Free Registration </h2>
            <p className="cart-desc text-[#1A1A1A] opacity-60 text-sm lg:text-lg text-justify">
              The registration process involves visiting registrar offices and
              coordinating with lawyers, brokers, and sellers. Documents that
              are presented in the registrar's offices seem deficient or
              incorrect in almost 50% of the cases and need to be rectified very
              soon adding to hassles and delays. It becomes even more difficult
              when you are out of the city and just visiting for the
              registration process. To prevent these unnecessary travel times
              and ...
            </p>

            <Link to="/contactUs" className="card-button pb-0 text-[#002550]">
              <button className="py-[18px] px-[32px] btn border text-[#002550] font-semibold rounded-md  outline outline-1 text-lg p-2 flex justify-center items-center gap-2 ">
                Contact us
                <span>
                  <BsArrowRight className="text-2xl " />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <div className="card w-[360px] lg:w-[711px] p-4 lg:p-6">
          <div>
            <img
              className="w-[330px] h-[245px] lg:w-full lg:h-full"
              src={iamge5}
              alt=""
            />
            <h2 className="cart-title text-xl">TDS & Capital Gain</h2>
            <p className="cart-desc text-[#1A1A1A] opacity-60 text-sm lg:text-lg text-justify">
              Adhering to compliance is strictly required in the process of
              property purchase. As per the Income tax Act 1956, if the property
              value is more than 50 Lakhs then TDS @ 1% needs to be deducted by
              the buyer out of the sale consideration and the same needs to be
              paid on behalf of the seller to the Central Government of India.
              Failing to deduct TDS and pay to the government of India within
              the due date, the applicable monthly interest rate is...
            </p>

            <Link to="/contactUs" className="card-button pb-0 text-[#002550]">
              <button className="py-[18px] px-[32px] btn border text-[#002550] font-semibold rounded-md  outline outline-1 text-lg p-2 flex justify-center items-center gap-2 ">
                Contact us
                <span>
                  <BsArrowRight className="text-2xl " />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <div className="card w-[360px] lg:w-[711px] p-4 lg:p-6">
          <div>
            <img
              className="w-[330px] h-[245px] lg:w-full lg:h-full"
              src={iamge6}
              alt=""
            />
            <h2 className="cart-title text-xl">Pre-Delivery Inspection</h2>
            <p className="cart-desc text-[#1A1A1A] opacity-60 text-sm lg:text-lg text-justify">
              The most difficult task during the property buying process,
              especially in residential units like apartments and villas is to
              measure the quality of work done by the developer/ contractor/
              third party and to identify the flaws which protect the interest
              of the buyer before taking the delivery of the house. It is the
              primary responsibility of the developer/ contractor/ third party
              to fix those issues before delivery. But, It is frequently seen...
            </p>

            <Link to="/contactUs" className="card-button pb-0 text-[#002550]">
              <button className="py-[18px] px-[32px] btn border text-[#002550] font-semibold rounded-md  outline outline-1 text-lg p-2 flex justify-center items-center gap-2 ">
                Contact us
                <span>
                  <BsArrowRight className="text-2xl " />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* </div> */}
    </Slider>
  );
};

export default PostBooking;
