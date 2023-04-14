import React, { useState } from "react";
import logo from "../asset/4.png";
import { HiOutlineMail } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";
import { IoLogoInstagram } from "react-icons/io";
import {
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import email from "../asset/icon/email.png";
import phone from "../asset/icon/phone.png";
import smArrow from "../asset/icon/smallarrow.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const [show, setShow] = useState(false);
  const [showb, setShowb] = useState(false);

  return (
    <div className="bg-[#002550] pb-[19px] px-[30px] px-lg:10 xl:px-[200px]">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-3 text-white pt-[38px] text-start">
        <div className="pb-[60px]">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>

        {/* company details for mobile */}

        <div className=" lg:hidden">
          <div className="grid gap-[20px]">
            <h2
              onClick={() => setShow(!show)}
              className=" text-xl cursor-pointer flex items-center justify-between"
            >
              Company
              <img className={`${show && "rotate-180"}`} src={smArrow} alt="" />
            </h2>

            <div
              className={`opacity-60 font-semibold grid gap-5 ${
                !show && "hidden"
              }`}
            >
              <Link to="/">
                <p className="text-base ">Home</p>
              </Link>
              <Link to="/">
                <p className="text-base ">Our Offerings</p>
              </Link>
              <Link to="/">
                <p className="text-base ">Our Team</p>
              </Link>
              <Link to="/">
                <p className="text-base ">Contact Us</p>
              </Link>
            </div>
          </div>
        </div>

        {/*Useful Link for mobile */}

        <div className=" lg:hidden pt-2">
          <div className="grid gap-[20px]">
            <h2
              onClick={() => setShowb(!showb)}
              className=" text-xl cursor-pointer flex items-center justify-between"
            >
              Useful Link
              <img
                className={`${showb && "rotate-180"}`}
                src={smArrow}
                alt=""
              />
            </h2>

            <div
              className={`opacity-60 font-semibold grid gap-5 ${
                !showb && "hidden"
              }`}
            >
              <Link to="/blogs">
                <p className="text-base ">Blogs</p>
              </Link>
              <Link to="/">
                <p className="text-base ">FAQ’s</p>
              </Link>
            </div>
          </div>
        </div>

        {/* company details for laptop */}
        <div className="hidden lg:block">
          <div className=" grid gap-[20px]">
            <h2 className="font-bold text-[28px]">Company</h2>

            <div className=" grid gap-[25px] text-xl">
              <Link to="/">Home</Link>
              <Link to="/ourOferings">Our Offerings</Link>
              <Link to="/ourTeam">Our Team</Link>
              <Link to="/contactUs">Contact Us</Link>
            </div>
          </div>
        </div>

        {/*Useful Link for laptop */}

        <div className="hidden lg:block">
          <div className=" grid gap-[20px]">
            <h2 className="font-bold text-[28px]">Useful Link</h2>

            <div className=" grid gap-[25px] text-xl">
              <Link to="/blogs">Blogs</Link>
              <Link to="/"> FAQ’s</Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 lg:gap-[21px]">
          <div className="flex gap-[15px] lg:gap-5 items-center">
            <div>
              <img className="w-[26px] lg:w-[40px]" src={email} alt="" />
            </div>

            <div className="text-xl">
              <p className="lg:font-bold lg:text-2xl">Email: </p>
              <Link to="mailto:support@inreglobal.com" className="lg:pt-2.5">
                support@inreglobal.com{" "}
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-[15px] lg:gap-5">
            <span>
              <img className="w-[26px] lg:w-10" src={phone} alt="" />
            </span>
            <div className="text-xl">
              <p className="lg:font-bold lg:text-2xl">Phone: </p>
              <Link to="tel:+917019305889" className="lg:pt-2.5">
                +91 | 7019305889{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row  lg:justify-between text-white lg:font-semibold pt-5 lg:pt-10">
        <div>
          <p className="pt-[35px] text-[#CCD3DC] lg:text-white lg:opacity-100  lg:text-lg opacity-60 lg:pt-auto text-start lg:text-center">
            Copyright 2023. Designed by INRE Global
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 text-xl ">
          <Link
            to="http://linkedin.com/"
            className="flex cursor-pointer items-center gap-2"
          >
            <span className="text-xl">
              {" "}
              <AiOutlineLinkedin />{" "}
            </span>{" "}
            LinkedIn
          </Link>
          <Link to="http://facebook.com/" className="flex items-center gap-2">
            <span className="text-xl">
              {" "}
              <AiOutlineFacebook />{" "}
            </span>{" "}
            Facebook
          </Link>
          <Link to={"http://twitter.com/"} className="flex items-center gap-2">
            <span className="text-xl">
              {" "}
              <AiOutlineTwitter />{" "}
            </span>{" "}
            Twitter
          </Link>
          <Link
            to={"http://instagram.com/"}
            className="flex items-center gap-2"
          >
            <span className="text-xl">
              {" "}
              <IoLogoInstagram />{" "}
            </span>{" "}
            Instagram
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
