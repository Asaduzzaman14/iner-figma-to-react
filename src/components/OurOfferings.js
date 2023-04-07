import React, { useState } from 'react';
import PreBooking from './PreBooking';
import PostBooking from './PostBooking';
import PostRegistration from './PostRegistration';

const OurOfferings = () => {

    const [tab1, setTab1] = useState(false)
    console.log(true);

    return (
        <div className='px-5 px-lg:10 xl:px-[200px]'>
            <div className='relative'>
                <h2 className='title pb-1 pt-[25px] lg:pt-[35px]'>Our Offerings</h2>
                <div className=' border-2 rounded-full h-[2px] w-[103px]  inset-x-0 mx-auto border-[#002550] absolute '></div>
            </div>
            <p className='normal-text font-normal text-[#1A1A1A] py-[10px] lg:pt-5  lg:pb-8'>This whole purchase journey can be divided into three stages. For more details, <a href="_" className='text-[#0A009B]'>Click Here</a></p>



            {/*=================================
            =        Section OfferingCard     =
            ===================================*/}



            <div>
                <ul
                    class="grid grid-cols-3 lg:grid-cols-3 gap-[10px] lg:gap-[30px] pb-[10px] md:pb-[34px] list-none flex-col flex-wrap border-b-0 pl-0 md:flex-row"
                    role="tablist"
                    data-te-nav-ref>
                    <li role="presentation">
                        <a
                            href="#tabs-home"
                            class="my-2 block border-b-2 border-transparent 
                             text-xs font-medium uppercase leading-tight bg-[#F2F4F6] text-[#1A1A1A] hover:isolate hover:border-transparent  focus:isolate focus:border-transparent data-[te-nav-active]:border-[#000000] data-[te-nav-active]:bg-[#CCD3DC] data-[te-nav-active]:text-[#1A1A1A]   dark:data-[te-nav-active]:border-[#000000] dark:data-[te-nav-active]:text-[##1A1A1A]"
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
                            class="my-2 block border-b-2 border-transparent 
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
                            class="my-2 block border-b-2 border-transparent 
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