import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BiMenuAltLeft } from "react-icons/bi";

import logo from "../asset/logo.png";
import whitelogo from "../asset/whitelogo.png";
import menu from "../asset/Hamburger_MD.png";
import initIcon from "../asset/mobileblurIcon.png";

const Header = () => {
  const location = useLocation();

  console.log(location.pathname);
  let [open, setOpen] = useState(true);

  if (!open) {
    // document.body.style.shadow = "red";
  } else {
    // document.body.style.overflow = "scroll";
  }

  const body = document.querySelector("body");

  body.addEventListener("click", () => {
    console.log("1");
    // setOpen(false);
  });

  useEffect(() => {
    body.style.overflow = !open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      <div className=" shadow-md z-50 w-full  relative top-0 left-0">
        <div className=" lg:flex flex-col-reverse lg:flex-row justify-between h-[58px]  lg:h-[107px] px-5 py-0 lg:py-2 lg:px-[40px] 2xl:px-20 items-end lg:pb-[11px] bg-white">
          <div className="hidden lg:block relative  lg:flex-basis-1/4 lg:py-2 ">
            <Link to="/" class=" ">
              <img className="w-[68px] h-[63px] " src={logo} alt="" />
            </Link>
          </div>

          <div className="flex items-center pt-3 pb-[11px] justify-between">
            {/* mobile icon  */}
            <div
              onClick={() => setOpen(!open)}
              className="text-3xl  cursor-pointer lg:hidden"
            >
              <ion-icon name={open ? "close" : "menu"}>
                {" "}
                <img src={menu} alt="" />{" "}
              </ion-icon>
            </div>

            <div className="lg:hidden ">
              <Link to="/" class=" ">
                <img className="w-[68px]" src={initIcon} alt="" />
              </Link>
            </div>

            <Link to="/contactUs" className="lg:hidden">
              <button className="btn w-[110px] h-[35px] flex justify-center border text-xs sm-button">
                Register Now
              </button>
            </Link>
          </div>

          {/* <ul className={`lg:flex  justify-between  absolute lg:static  lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0  transition-all duration-500 bg-white ease-in ${open ? 'top-[80px]' : 'top-[-290px]'}`}> */}
          <div className=" mx-auto lg:pb-[11px]">
            <ul
              className={`flex flex-col justify-between bg-white w-[315px] absolute top-0  lg:static  lg:z-auto -z-[-10] left-0 bg-gray-300 h-screen lg:h-auto lg:w-auto lg:pl-0  transition-all duration-300 lg:bg-white ease-in ${
                open ? "left-[-320px]" : "left-[0]"
              }`}
            >
              <div className="lg:flex lg:justify-around">
                <div className="flex flex-col lg:flex-row text-start gap-5 lg:gap-2 lg:justify-between ">
                  <div>
                    <li className="  bg-blue h-[58px] flex justify-between items-center ps-6 lg:hidden">
                      <img
                        onClick={() => setOpen(true)}
                        className="w-[76px] z-20"
                        src={whitelogo}
                        alt=""
                      />
                      <span
                        onClick={() => setOpen(true)}
                        className="text-white pr-5 p-2 rounded-full cursor-pointer"
                      >
                        X
                      </span>
                    </li>

                    <li className="  bg-[#CCD3DC]  py-6 flex flex-col ps-6 lg:hidden">
                      <span className="font-semibold text-blue  text-lg">
                        Jones Ferdinand
                      </span>
                      <span className="text-blue opacity-60">Freelancer</span>
                    </li>
                  </div>

                  <li className=" ps-6 lg:px-5 lg:text-center lg:flex justify-center relative">
                    <Link
                      to={"/"}
                      onClick={() => setOpen(true)}
                      className={`lg:font-semibold  text-[#002550]   lg:opacity-100 hover:opacity-100 text-lg ${
                        location.pathname == "/"
                          ? "font-semibold text-blue opacity-100"
                          : "opacity-60"
                      } `}
                    >
                      Home
                    </Link>
                    {location.pathname == "/" && (
                      <div className=" border-2 rounded-full h-[2px] w-full hidden lg:block border-[#002550] absolute -bottom-[22px]"></div>
                    )}
                  </li>

                  <li className=" ps-6 lg:px-5 lg:text-center lg:flex justify-center relative">
                    <Link
                      to={"/ourOferings"}
                      onClick={() => setOpen(true)}
                      className={`lg:font-semibold text-[#002550]   lg:opacity-100 hover:opacity-100 text-lg ${
                        location.pathname == "/ourOferings"
                          ? "font-semibold text-blue opacity-100"
                          : "opacity-60"
                      } `}
                    >
                      Our Offerings
                    </Link>
                    {location.pathname == "/ourOferings" && (
                      <div className=" border-2 rounded-full h-[2px] w-full hidden lg:block border-[#002550] absolute -bottom-[22px]"></div>
                    )}
                  </li>
                  <li className=" ps-6 lg:px-5 lg:text-center lg:flex justify-center relative">
                    <Link
                      to={"/ourTeam"}
                      onClick={() => setOpen(true)}
                      className={`lg:font-semibold text-[#002550]   lg:opacity-100 hover:opacity-100 text-lg ${
                        location.pathname == "/ourTeam"
                          ? "font-semibold text-blue opacity-100"
                          : "opacity-60"
                      } `}
                    >
                      Our Team
                    </Link>
                    {location.pathname == "/ourTeam" && (
                      <div className=" border-2 rounded-full h-[2px] w-full hidden lg:block border-[#002550] absolute -bottom-[22px]"></div>
                    )}
                  </li>

                  <li className=" ps-6 lg:px-5 lg:text-center lg:flex justify-center relative">
                    <Link
                      to={"/contactUs"}
                      onClick={() => setOpen(true)}
                      className={`lg:font-semibold text-[#002550]   lg:opacity-100 hover:opacity-100 text-lg ${
                        location.pathname == "/contactUs"
                          ? "font-semibold text-blue opacity-100"
                          : "opacity-60"
                      } `}
                    >
                      Contact Us
                    </Link>
                    {location.pathname == "/contactUs" && (
                      <div className=" border-2 rounded-full h-[2px] w-full hidden lg:block border-[#002550] absolute -bottom-[22px]"></div>
                    )}
                  </li>
                  <li className=" ps-6 lg:px-5 lg:text-center lg:flex justify-center relative">
                    <Link
                      to={"/blogs"}
                      onClick={() => setOpen(true)}
                      className={`lg:font-semibold text-[#002550]   lg:opacity-100 hover:opacity-100 text-lg ${
                        location.pathname == "/blogs"
                          ? "font-semibold text-blue opacity-100"
                          : "opacity-60"
                      } `}
                    >
                      Blogs
                    </Link>
                    {location.pathname == "/blogs" && (
                      <div className=" border-2 rounded-full h-[2px] w-full hidden lg:block border-[#002550] absolute -bottom-[22px]"></div>
                    )}
                  </li>
                </div>
              </div>
              <div className="lg:hidden mb-5">
                <li className=" ps-6 text-start relative ">
                  <Link
                    to={"/logout"}
                    className="font-semibold text-[#002550] hover:opacity-100   text-lg"
                  >
                    Logout
                  </Link>
                </li>
              </div>
            </ul>
          </div>

          <Link to="/contactUs" className="hidden lg:block">
            <button className="btn w-[167px] h-[48px] flex justify-center text-center mx-auto border text-lg sm-button font-semibold">
              Register Now
            </button>
          </Link>
          {/* <Link to="/contactUs" className="hidden lg:block">
            <button className=" btn border bg-[#002550] rounded-md font-semibold text-white text-lg py-[11px] px-[25px]">
              Register Now
            </button>
          </Link> */}
        </div>
      </div>
    </>
  );
};

export default Header;
