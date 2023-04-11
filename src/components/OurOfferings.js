import React, { useState } from 'react';
import PreBooking from './PreBooking';
import PostBooking from './PostBooking';
import PostRegistration from './PostRegistration';

const OurOfferings = () => {
    const [show, setShow] = useState(2)

    const [tab1, setTab1] = useState(false)
    console.log(true);

    return (
        <div className='px-5 px-lg:10 xl:px-[200px]'>
            <div className='relative'>
                <h2 className='title pt-[25px] lg:pt-[35px] pb-[10px]'>Our Offerings</h2>
                <div className=' border-2 rounded-full h-[2px] w-[103px]  inset-x-0 mx-auto border-[#002550] absolute '></div>
            </div>
            <p className='normal-text text-sm lg:text-base font-normal text-[#1A1A1A] py-[10px] lg:pt-5  lg:pb-8'>This whole purchase journey can be divided into three stages. For more details, <a href="_" className='text-blue font-bold'>Click Here</a></p>



            {/*=================================
            =        Section OfferingCard     =
            ===================================*/}



            <div>
                <div className='lg:hidden'>
                    <ul
                        class="flex content-center gap-1 lg:gap-[30px] pb-[20px] md:pb-[34px] justify-between flex-row"
                        role="tablist"
                        data-te-nav-ref>
                        <li onClick={() => setShow(1)} role="presentation">
                            <a
                                href="#tabs-home"
                                class={`my-2 block lg:w-[100%] xl:w-[467px] lg:h-[100px] ${show === 1 ? 'h-16 lg:h-[100px] w-52 px-5' : "w-16 h-16 "} flex items-center justify-center  border-transparent 
                            text-xs font-medium uppercase leading-tight bg-[#F2F4F6] text-[#1A1A1A] hover:isolate hover:border-transparent  focus:isolate focus:border-b-2  data-[te-nav-active]:bg-[#CCD3DC] data-[te-nav-active]:text-[#1A1A1A]   dark:data-[te-nav-active]:border-[#000000] dark:data-[te-nav-active]:text-[##1A1A1A]`}
                                data-te-toggle="pill"
                                data-te-target="#tabs-home"
                                data-te-nav-active
                                role="tab"
                                aria-controls="tabs-home"
                                aria-selected="true"
                            >
                                <div className='flex items-center justify-center gap-1 lg:gap-5 text-center '>
                                    <span className='number w-0 h-0 lg:w-10 lg:h-10 pr-2 lg:p-0  '>1 </span>
                                    <span className={`normal-text  lg:block text-sm lg:text-xl ${show === 1 ? 'block text-start' : 'hidden'}`}>. Pre-Booking</span>
                                </div>

                            </a
                            >
                        </li>

                        <li onClick={() => setShow(2)} role="presentation">
                            <a
                                href="#tabs-messages"
                                class={`my-2 block lg:w-[100%] xl:w-[467px] lg:h-[100px] ${show === 2 ? 'h-16 px-5 w-52' : "w-16 h-16"} flex items-center justify-center  border-transparent 
                            text-xs font-medium uppercase leading-tight bg-[#F2F4F6] text-[#1A1A1A] hover:isolate hover:border-transparent  focus:isolate focus:border-b-2 data-[te-nav-active]:border-[#000000] data-[te-nav-active]:bg-[#CCD3DC] data-[te-nav-active]:text-[#1A1A1A]   dark:data-[te-nav-active]:border-[#000000] dark:data-[te-nav-active]:text-[##1A1A1A]`} data-te-toggle="pill"
                                data-te-target="#tabs-messages"
                                role="tab"
                                aria-controls="tabs-messages"
                                aria-selected="false"
                            >
                                <div className='flex items-center justify-center gap-2 lg:gap-5 py-5'>
                                    <span className='number w-0 h-0 pr-2 flex items-center'>2{show === 2 && "."} </span>
                                    <span className={`normal-text  lg:block text-sm lg:text-xl ${show === 2 ? 'block' : 'hidden'}`}> Post-Booking & <br /> Pre-Registration</span>
                                </div>
                            </a>
                        </li>

                        <li onClick={() => setShow(3)} role="presentation">
                            <a
                                href="#tabs-profile"
                                class={`my-2 block lg:w-[100%] xl:w-[467px] lg:h-[100px]  ${show === 3 ? 'h-16 px-5 w-52' : "w-16 h-16"} flex items-center justify-center border-transparent 
                            text-xs font-medium uppercase leading-tight bg-[#F2F4F6] text-[#1A1A1A] hover:isolate hover:border-transparent  focus:isolate focus:border-b-2 data-[te-nav-active]:border-[#000000] data-[te-nav-active]:bg-[#CCD3DC] data-[te-nav-active]:text-[#1A1A1A]   dark:data-[te-nav-active]:border-[#000000] dark:data-[te-nav-active]:text-[##1A1A1A]`} data-te-toggle="pill"
                                data-te-target="#tabs-profile"
                                role="tab"
                                aria-controls="tabs-profile"
                                aria-selected="false"
                            >
                                <div className='flex items-center text-blue font-semibold justify-center gap-2 lg:gap-5 text-center py-5'>
                                    <span className='number w-0 h-0 '>3</span>
                                    <span className={`normal-text  lg:block text-sm lg:text-xl text-blue ${show === 3 ? 'block' : 'hidden'}`}>. Post-Registration </span>
                                </div>
                            </a>
                        </li>

                    </ul>
                </div>

                <div className='hidden lg:block'>
                    <ul
                        class="grid grid-cols-3 lg:grid-cols-3 gap-[10px] lg:gap-[30px] pb-[10px] md:pb-[34px] list-none flex-col flex-wrap border-b-0 pl-0 md:flex-row"
                        role="tablist"
                        data-te-nav-ref>
                        <li role="presentation">
                            <a
                                href="#tabs-home"
                                class="my-2 block border-transparent 
                             text-xs font-medium uppercase focus:border-b-2 leading-tight bg-[#F2F4F6] text-[#1A1A1A] hover:isolate hover:border-transparent  focus:isolate focus:border-transparent data-[te-nav-active]:border-[#000000] data-[te-nav-active]:bg-[#CCD3DC] data-[te-nav-active]:text-[#1A1A1A]   dark:data-[te-nav-active]:border-[#000000] dark:data-[te-nav-active]:text-[##1A1A1A]"
                                data-te-toggle="pill"
                                data-te-target="#tabs-home"
                                data-te-nav-active
                                role="tab"
                                aria-controls="tabs-home"
                                aria-selected="true"
                            >
                                <div className='h-[100px] flex items-center justify-center gap-5  text-center '>
                                    <span className='number '>1</span>
                                    <span className='normal-text hidden lg:block text-xl font-normal'>Pre-Booking</span>
                                </div>

                            </a
                            >
                        </li>

                        <li role="presentation">
                            <a
                                href="#tabs-messages"
                                class="my-2 block focus:border-b-2 border-transparent 
                            text-xs font-medium uppercase leading-tight bg-[#F2F4F6] text-[#1A1A1A] hover:isolate hover:border-transparent  focus:isolate focus:border-transparent data-[te-nav-active]:border-[#000000] data-[te-nav-active]:bg-[#CCD3DC] data-[te-nav-active]:text-[#1A1A1A]   dark:data-[te-nav-active]:border-[#000000] dark:data-[te-nav-active]:text-[##1A1A1A]"
                                data-te-toggle="pill"
                                data-te-target="#tabs-messages"
                                role="tab"
                                aria-controls="tabs-messages"
                                aria-selected="false"
                            >
                                <div className='flex min-h-[100px] items-center justify-center gap-5  text-center py-5'>
                                    <span className='number '>2</span>
                                    <span className='normal-text hidden lg:block  text-xl font-normal'>Post-Booking & <br /> Pre-Registration</span>
                                </div>

                            </a>
                        </li>
                        <li role="presentation">
                            <a
                                href="#tabs-profile"
                                class="my-2 block focus:border-b-2 border-transparent 
                            text-xs font-medium uppercase leading-tight bg-[#F2F4F6] text-[#1A1A1A] hover:isolate hover:border-transparent  focus:isolate focus:border-transparent data-[te-nav-active]:border-[#000000] data-[te-nav-active]:bg-[#CCD3DC] data-[te-nav-active]:text-[#1A1A1A]   dark:data-[te-nav-active]:border-[#000000] dark:data-[te-nav-active]:text-[##1A1A1A]"
                                data-te-toggle="pill"
                                data-te-target="#tabs-profile"
                                role="tab"
                                aria-controls="tabs-profile"
                                aria-selected="false"
                            >
                                <div className='h-[100px] flex items-center justify-center gap-5  text-center py-5'>
                                    <span className='number'>3</span>
                                    <span className='normal-text hidden lg:block  text-xl font-normal'>Post-Registration </span>
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
                        data-te-tab-active>
                        <div>
                            {/* tab 1 */}
                            <PreBooking />

                        </div>
                    </div>
                    <div
                        class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                        id="tabs-profile"
                        role="tabpanel"
                        aria-labelledby="tabs-profile-tab">
                        <div>
                            {/* home page tab 3 done */}
                            <PostRegistration />
                        </div>
                    </div>

                    <div
                        class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                        id="tabs-messages"
                        role="tabpanel"
                        aria-labelledby="tabs-messages-tab">
                        <div>
                            {/* home page tab 2 */}
                            <PostBooking />

                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default OurOfferings;