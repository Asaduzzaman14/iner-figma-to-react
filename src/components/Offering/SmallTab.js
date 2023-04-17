import React, { useState } from "react";

const SmallTab = () => {
  const [show, setShow] = useState(2);

  const [tab1, setTab1] = useState(false);
  return (
    <div className="lg:hidden pb-[10px]">
      <ul
        class="flex content-center gap-2.5 lg:gap-[30px] pb-[20px] md:pb-[34px] justify-center flex-row"
        role="tablist"
        data-te-nav-ref
      >
        <li onClick={() => setShow(1)} role="presentation">
          <a
            href="#tabs-home"
            class={` lg:w-[100%] xl:w-[467px] lg:h-[100px] ${
              show == 1
                ? "h-16 w-[206px] lg:h-[100px]  px-5 border-b-2"
                : "w-16 h-16 "
            } flex items-center justify-center  border-transparent 
                              data-[te-nav-active]:shadow-[0px_0px_10px_rgba(0,0,0,0.3)]   text-xs font-medium uppercase leading-tight bg-[#F2F4F6] text-[#1A1A1A] hover:isolate hover:border-transparent  focus:isolate focus:border-b-2  data-[te-nav-active]:bg-[#CCD3DC] data-[te-nav-active]:text-[#1A1A1A]   dark:data-[te-nav-active]:border-[#000000] dark:data-[te-nav-active]:text-[#1A1A1A]`}
            data-te-target="#tabs-home"
            data-te-toggle="pill"
            role="tab"
            aria-controls="tabs-home"
            aria-selected="false"
          >
            <div className="flex items-center justify-center gap-2.5 lg:gap-5 text-center ">
              <span
                className={`number font-semibold w-0 h-0 lg:w-10 lg:h-10 pr-2 lg:p-0 ${
                  show === 1 && "text-base"
                } `}
              >
                1{show === 1 && "."}{" "}
              </span>
              <span
                className={`normal-text text-blue lg:block text-sm lg:text-xl ${
                  show === 1 ? "block text-start" : "hidden"
                }`}
              >
                Pre-Booking
              </span>
            </div>
          </a>
        </li>

        <li onClick={() => setShow(2)} role="presentation">
          <a
            href="#tabs-messages"
            class={` block lg:w-[100%] xl:w-[467px] lg:h-[100px] ${
              show === 2 ? "h-16 px-5 w-52 border-b-2" : "w-16 h-16"
            } flex items-center justify-center  border-transparent 
            data-[te-nav-active]:shadow-[0px_0px_10px_rgba(0,0,0,0.3)]   text-xs font-medium uppercase leading-tight bg-[#F2F4F6] text-[#1A1A1A] hover:isolate hover:border-transparent  focus:isolate focus:border-b-2 data-[te-nav-active]:border-[#000000] data-[te-nav-active]:bg-[#CCD3DC] data-[te-nav-active]:text-[#1A1A1A]   dark:data-[te-nav-active]:border-[#000000] dark:data-[te-nav-active]:text-[#1A1A1A]`}
            data-te-toggle="pill"
            data-te-target="#tabs-messages"
            data-te-nav-active
            role="tab"
            aria-controls="tabs-messages"
            aria-selected="true"
          >
            <div className="flex items-center justify-center gap-2.5 lg:gap-5">
              <span
                className={`number font-semibold w-0 h-0 lg:w-10 lg:h-10 pr-2 lg:p-0 ${
                  show === 2 && "text-base"
                } `}
              >
                2{show === 2 && "."}{" "}
              </span>
              <span
                className={`normal-text text-blue lg:block text-sm lg:text-xl ${
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
            href="#tabs-profile"
            class={` block lg:w-[100%]  lg:h-[100px]  ${
              show === 3 ? "h-16 w-[206px]" : "w-16 h-16"
            } flex items-center justify-center border-transparent border-b-2 border-white
                              data-[te-nav-active]:shadow-[0px_0px_10px_rgba(0,0,0,0.3)]   text-xs font-medium uppercase leading-tight bg-[#F2F4F6] text-[#1A1A1A] hover:isolate hover:border-transparent  focus:isolate focus:border-b-2 data-[te-nav-active]:border-[#000000] data-[te-nav-active]:bg-[#CCD3DC] data-[te-nav-active]:text-[#1A1A1A]   dark:data-[te-nav-active]:border-[#000000] dark:data-[te-nav-active]:text-[#1A1A1A]`}
            data-te-toggle="pill"
            data-te-target="#tabs-profile"
            role="tab"
            aria-controls="tabs-profile"
            aria-selected="false"
          >
            <div className="flex items-center text-blue justify-center gap-2.5 lg:gap-5 text-center py-5">
              <span
                className={`number font-semibold w-0 h-0 lg:w-10 lg:h-10 pr-2 lg:p-0 ${
                  show === 3 && "text-base"
                } `}
              >
                3{show === 3 && "."}{" "}
              </span>
              <span
                className={`normal-text text-center lg:block text-sm lg:text-xl text-blue ${
                  show === 3 ? "block" : "hidden"
                }`}
              >
                Post-Registration
              </span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SmallTab;
