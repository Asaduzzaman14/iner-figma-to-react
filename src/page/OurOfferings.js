import React from "react";
import * as te from "tw-elements";
import OfferingCard from "../components/OfferingCard";
import PreBooking from "../components/PreBooking";
import PostRegistration from "../components/PostRegistration";
import PostBooking from "../components/PostBooking";
import { useState } from "react";

const OurOfferings = () => {
  const [show, setShow] = useState("1");

  return (
    <div className="px-5  lg:px-10  xl:px-[100px] 2xl:px-[200px]">
      <div className="relative pt-6 lg:pt-[70px]">
        <h2 className="title text-base lg:text[32px] pt-0 pb-6">
          Our Offerings
        </h2>
        <div className=" border-2 rounded-full h-[2px] w-[103px]  inset-x-0 mx-auto border-[#002550] absolute bottom-4"></div>
      </div>

      <div className="lg:hidden">
        <ul
          class="flex content-center gap-3 lg:gap-[30px] pb-[20px] md:pb-[34px] justify-center flex-row"
          role="tablist"
          data-te-nav-ref
        >
          <li onClick={() => setShow(1)} role="presentation">
            <a
              href="#tabs-profile"
              class={`my-2 block lg:w-[100%] xl:w-[467px] lg:h-[100px] ${
                show == 1 ? "h-16 lg:h-[100px] w-52 px-5" : "w-16 h-16 "
              } flex items-center justify-center  border-transparent 
                            data-[te-nav-active]:shadow-[0px_0px_10px_rgba(0,0,0,0.3)]   text-xs font-medium uppercase leading-tight bg-[#F2F4F6] text-[#1A1A1A] hover:isolate hover:border-transparent  focus:isolate focus:border-b-2  data-[te-nav-active]:bg-[#CCD3DC] data-[te-nav-active]:text-[#1A1A1A]   dark:data-[te-nav-active]:border-[#000000] dark:data-[te-nav-active]:text-[#1A1A1A]`}
              data-te-toggle="pill"
              data-te-target="#tabs-profile"
              role="tab"
              aria-controls="tabs-profile"
              aria-selected="false"
              data-te-nav-active
            >
              <div className="flex items-center justify-center gap-1 lg:gap-5 text-center ">
                <span className="number w-0 h-0 lg:w-10 lg:h-10 pr-2 lg:p-0  ">
                  1{" "}
                </span>
                <span
                  className={`normal-text font-semibold lg:block text-sm lg:text-xl ${
                    show == 1 ? "block text-start" : "hidden"
                  }`}
                >
                  . Pre-Booking
                </span>
              </div>
            </a>
          </li>

          <li onClick={() => setShow(2)} role="presentation">
            <a
              href="#tabs-messages"
              class={`my-2 block lg:w-[100%] xl:w-[467px] lg:h-[100px] ${
                show === 2 ? "h-16 px-5 w-52" : "w-16 h-16"
              } flex items-center justify-center  border-transparent 
                            data-[te-nav-active]:shadow-[0px_0px_10px_rgba(0,0,0,0.3)]   text-xs font-medium uppercase leading-tight bg-[#F2F4F6] text-[#1A1A1A] hover:isolate hover:border-transparent  focus:isolate focus:border-b-2 data-[te-nav-active]:border-[#000000] data-[te-nav-active]:bg-[#CCD3DC] data-[te-nav-active]:text-[#1A1A1A]   dark:data-[te-nav-active]:border-[#000000] dark:data-[te-nav-active]:text-[##1A1A1A]`}
              data-te-toggle="pill"
              data-te-target="#tabs-messages"
              role="tab"
              aria-controls="tabs-messages"
              aria-selected="false"
            >
              <div className="flex items-center justify-center gap-2 lg:gap-5 py-5">
                <span className="number w-0 h-0 pr-2 flex items-center">
                  2{show === 2 && "."}{" "}
                </span>
                <span
                  className={`normal-text font-semibold text-start lg:block text-sm lg:text-xl ${
                    show === 2 ? "block" : "hidden"
                  }`}
                >
                  {" "}
                  Post-Booking & <br /> Pre-Registration
                </span>
              </div>
            </a>
          </li>

          <li onClick={() => setShow(3)} role="presentation">
            <a
              href="#tabs-home"
              class={`my-2 block lg:w-[100%] xl:w-[467px] lg:h-[100px]  ${
                show === 3 ? "h-16 px-5 w-52" : "w-16 h-16"
              } flex items-center justify-center border-transparent 
                            data-[te-nav-active]:shadow-[0px_0px_10px_rgba(0,0,0,0.3)]   text-xs font-medium uppercase leading-tight bg-[#F2F4F6] text-[#1A1A1A] hover:isolate hover:border-transparent  focus:isolate focus:border-b-2 data-[te-nav-active]:border-[#000000] data-[te-nav-active]:bg-[#CCD3DC] data-[te-nav-active]:text-[#1A1A1A]   dark:data-[te-nav-active]:border-[#000000] dark:data-[te-nav-active]:text-[##1A1A1A]`}
              data-te-toggle="pill"
              data-te-target="#tabs-home"
              role="tab"
              aria-controls="tabs-home"
              aria-selected="true"
            >
              <div className="flex items-center text-blue font-semibold justify-center gap-2 lg:gap-5 text-center py-5">
                <span className="number w-0 h-0 ">3</span>
                <span
                  className={`normal-text font-semibold lg:block text-sm lg:text-xl text-blue ${
                    show === 3 ? "block" : "hidden"
                  }`}
                >
                  . Post-Registration{" "}
                </span>
              </div>
            </a>
          </li>
        </ul>
      </div>

      <div className="py-5">
        <div className="hidden lg:block">
          <ul
            class="  grid grid-cols-1 lg:grid-cols-3 gap-7 mb-5  list-none flex-col flex-wrap border-b-0 pl-0 md:flex-row"
            role="tablist"
            data-te-nav-ref
          >
            <li role="presentation">
              <a
                href="#tabs-profile"
                class="my-2 block border-b-2 border-white border-transparent 
                data-[te-nav-active]:shadow-[0px_0px_10px_rgba(0,0,0,0.3)]   text-xs font-medium uppercase leading-tight bg-[#F2F4F6] text-neutral-500 hover:isolate hover:border-transparent  focus:isolate focus:border-transparent data-[te-nav-active]:border-[#002550] data-[te-nav-active]:bg-[#CCD3DC] data-[te-nav-active]:text-[#1A1A1A]   dark:data-[te-nav-active]:border-primary[#002550] dark:data-[te-nav-active]:text-primary[#1A1A1A]"
                data-te-toggle="pill"
                data-te-target="#tabs-profile"
                role="tab"
                aria-controls="tabs-profile"
                aria-selected="false"
                data-te-nav-active
              >
                <div className="h-[100px] flex items-center justify-center gap-5 lg:text-2xl text-center ">
                  <span className="number ">1</span>
                  <span className="normal-text font-semibold lg:text-2xl hidden lg:block">
                    Pre-Booking
                  </span>
                </div>
              </a>
            </li>

            <li role="presentation">
              <a
                href="#tabs-messages"
                class="my-2 block border-b-2 border-white border-transparent 
                                data-[te-nav-active]:shadow-[0px_0px_10px_rgba(0,0,0,0.3)] text-xs font-medium uppercase leading-tight bg-[#F2F4F6] text-neutral-500 hover:isolate hover:border-transparent  focus:isolate focus:border-transparent data-[te-nav-active]:border-[#002550] data-[te-nav-active]:bg-[#CCD3DC] data-[te-nav-active]:text-[#1A1A1A]   dark:data-[te-nav-active]:border-primary[#002550] dark:data-[te-nav-active]:text-primary[#1A1A1A]"
                data-te-toggle="pill"
                data-te-target="#tabs-messages"
                role="tab"
                aria-controls="tabs-messages"
                aria-selected="false"
              >
                <div className="flex min-h-[100px] items-center justify-center gap-5 lg:text-2xl text-center py-5">
                  <span className="number ">2</span>
                  <span className="normal-text font-semibold lg:text-2xl hidden lg:block">
                    Post-Booking & <br /> Pre-Registration
                  </span>
                </div>
              </a>
            </li>

            <li role="presentation">
              <a
                href="#tabs-home"
                class="my-2 block border-b-2 border-white border-transparent 
                                data-[te-nav-active]:shadow-[0px_0px_10px_rgba(0,0,0,0.3)]  text-xs font-medium uppercase leading-tight bg-[#F2F4F6] text-neutral-500 hover:isolate hover:border-transparent  focus:isolate focus:border-transparent data-[te-nav-active]:border-[#002550] data-[te-nav-active]:bg-[#CCD3DC] data-[te-nav-active]:text-[#002550]   dark:data-[te-nav-active]:border-primary[#002550] dark:data-[te-nav-active]:text-primary-[#002550"
                data-te-toggle="pill"
                data-te-target="#tabs-home"
                role="tab"
                aria-controls="tabs-home"
                aria-selected="true"
              >
                {" "}
                <div className="h-[100px] flex items-center justify-center gap-5 lg:text-2xl text-center py-5">
                  <span className="number">3</span>
                  <span className="normal-text font-semibold hidden lg:block font-semibold lg:text-2xl">
                    Post-Registration{" "}
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </div>

        <div class="mb-6">
          <div
            class="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="tabs-home"
            role="tabpanel"
            aria-labelledby="tabs-home-tab"
          >
            <div>
              {/* card 3 */}

              <PostRegistration />
            </div>
          </div>
          <div
            class="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="tabs-profile"
            role="tabpanel"
            aria-labelledby="tabs-profile-tab"
            data-te-tab-active
          >
            <div>
              {/* card 1 */}
              <PreBooking />
            </div>
          </div>

          <div
            class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
            id="tabs-messages"
            role="tabpanel"
            aria-labelledby="tabs-profile-tab"
          >
            <div>
              {/* slider 2 */}
              <PostBooking />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurOfferings;
