import React, { useState } from "react";

const LargeTab = () => {
  const [show, setShow] = useState(2);

  const [tab1, setTab1] = useState(false);

  return (
    <div className="hidden lg:block">
      <ul
        class="grid grid-cols-3 lg:grid-cols-3 gap-[10px] lg:gap-[30px] pb-[10px] md:pb-[34px] list-none flex-col flex-wrap border-b-0 pl-0 md:flex-row"
        role="tablist"
        data-te-nav-ref
      >
        <li role="presentation">
          <a
            href="#tabs-home"
            class="block border-b-2 border-white border-transparent 
            data-[te-nav-active]:shadow-[0px_0px_10px_rgba(0,0,0,0.3)]   text-xs font-medium uppercase leading-tight bg-[#F2F4F6] text-[#1A1A1A] hover:isolate hover:border-transparent  focus:isolate focus:border-transparent data-[te-nav-active]:border-[#000000] data-[te-nav-active]:bg-[#CCD3DC] data-[te-nav-active]:text-[#1A1A1A]   dark:data-[te-nav-active]:border-[#000000] dark:data-[te-nav-active]:text-[##1A1A1A]"
            data-te-toggle="pill"
            data-te-target="#tabs-home"
            role="tab"
            aria-controls="tabs-home"
            aria-selected="true"
          >
            <div className="h-[100px] flex items-center justify-center gap-5 px-3 lg:text-2xl text-center py-5">
              <span className="number">1</span>
              <span className="normal-text hidden text-start lg:block font-semibold lg:text-2xl">
                Pre-Booking
              </span>
            </div>
          </a>
        </li>

        <li role="presentation">
          <a
            href="#tabs-messages"
            class="block border-b-2 border-white border-transparent 
            data-[te-nav-active]:shadow-[0px_0px_10px_rgba(0,0,0,0.3)]   text-xs font-medium uppercase leading-tight bg-[#F2F4F6] text-[#1A1A1A] hover:isolate hover:border-transparent  focus:isolate focus:border-transparent data-[te-nav-active]:border-[#000000] data-[te-nav-active]:bg-[#CCD3DC] data-[te-nav-active]:text-[#1A1A1A]   dark:data-[te-nav-active]:border-[#000000] dark:data-[te-nav-active]:text-[##1A1A1A]"
            data-te-toggle="pill"
            data-te-target="#tabs-messages"
            data-te-nav-active
            role="tab"
            aria-controls="tabs-messages"
            aria-selected="false"
          >
            <div className="flex min-h-[100px] items-center justify-center gap-5 lg:text-2xl text-center py-5">
              <span className="number ">2</span>
              <span className="normal-text text-start lg:text-2xl hidden lg:block">
                Post-Booking & <br /> Pre-Registration
              </span>
            </div>
          </a>
        </li>
        <li role="presentation">
          <a
            href="#tabs-profile"
            class=" block border-b-2 border-white border-transparent 
                        data-[te-nav-active]:shadow-[0px_0px_10px_rgba(0,0,0,0.3)]   text-xs font-medium uppercase leading-tight bg-[#F2F4F6] text-[#1A1A1A] hover:isolate hover:border-transparent  focus:isolate focus:border-transparent data-[te-nav-active]:border-[#000000] data-[te-nav-active]:bg-[#CCD3DC] data-[te-nav-active]:text-[#1A1A1A]   dark:data-[te-nav-active]:border-[#000000] dark:data-[te-nav-active]:text-[##1A1A1A]"
            data-te-toggle="pill"
            data-te-target="#tabs-profile"
            role="tab"
            aria-controls="tabs-profile"
            aria-selected="false"
          >
            <div className="h-[100px] flex items-center justify-center gap-5 px-3 lg:text-2xl text-center py-5">
              <span className="number">3</span>
              <span className="normal-text hidden text-start lg:block  lg:text-2xl">
                Post-Registration{" "}
              </span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LargeTab;
