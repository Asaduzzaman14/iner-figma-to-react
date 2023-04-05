import React from 'react';
import OfferingCard from './OfferingCard';
import PreBooking from './PreBooking';
import PostBooking from './PostBooking';
import PostRegistration from './PostRegistration';

const OurOfferings = () => {
    return (
        <div className='px-5 px-lg:10 xl:px-[200px]'>
            <h2 className='title '>Our Offerings</h2>
            <p className='normal-text mt-5'>This whole purchase journey can be divided into three stages. For more details, <a href="_" className='text-[#0A009B]'>Click Here</a></p>
            {/* <div className='py-8'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-7'>
                    <div className='flex items-center justify-center gap-5 bg-[#F2F4F6] text-center py-5'>
                        <span className='number '>1</span>
                        <span className='normal-text text-xl font-normal'>Pre-Booking</span>
                    </div>
                    <div className='flex items-center justify-center gap-5 bg-[#CCD3DC] text-center py-5'>
                        <span className='number '>2</span>
                        <span className='normal-text text-xl font-normal'>Post-Booking & <br /> Pre-Registration</span>
                    </div>
                    <div className='flex items-center justify-center gap-5 bg-[#F2F4F6] text-center py-5'>
                        <span className='number'>3</span>
                        <span className='normal-text text-xl font-normal'>Post-Registration </span>
                    </div>

                </div>
            </div> */}


            {/*=================================
            =        Section OfferingCard     =
            ===================================*/}



            <div>
                <ul
                    class="grid grid-cols-1 lg:grid-cols-3 gap-7 mb-5  list-none flex-col flex-wrap border-b-0 pl-0 md:flex-row"
                    role="tablist"
                    data-te-nav-ref>
                    <li role="presentation">
                        <a
                            href="#tabs-home"
                            class="my-2 block border-b-2 border-transparent 
                             text-xs font-medium uppercase leading-tight bg-[#F2F4F6] text-neutral-500 hover:isolate hover:border-transparent  focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:bg-[#CCD3DC] data-[te-nav-active]:text-primary   dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                            data-te-toggle="pill"
                            data-te-target="#tabs-home"
                            data-te-nav-active
                            role="tab"
                            aria-controls="tabs-home"
                            aria-selected="true"
                        >
                            <div className='h-[100px] flex items-center justify-center gap-5  text-center py-5'>
                                <span className='number '>1</span>
                                <span className='normal-text text-xl font-normal'>Pre-Booking</span>
                            </div>

                        </a
                        >
                    </li>

                    <li role="presentation">
                        <a
                            href="#tabs-messages"
                            class="my-2 block border-b-2 border-transparent 
                            text-xs font-medium uppercase leading-tight bg-[#F2F4F6] text-neutral-500 hover:isolate hover:border-transparent  focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:bg-[#CCD3DC] data-[te-nav-active]:text-primary   dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                            data-te-toggle="pill"
                            data-te-target="#tabs-messages"
                            role="tab"
                            aria-controls="tabs-messages"
                            aria-selected="false"
                        >
                            <div className='flex items-center justify-center gap-5  text-center py-5'>
                                <span className='number '>2</span>
                                <span className='normal-text text-xl font-normal'>Post-Booking & <br /> Pre-Registration</span>
                            </div>

                        </a>
                    </li>
                    <li role="presentation">
                        <a
                            href="#tabs-profile"
                            class="my-2 block border-b-2 border-transparent 
                            text-xs font-medium uppercase leading-tight bg-[#F2F4F6] text-neutral-500 hover:isolate hover:border-transparent  focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:bg-[#CCD3DC] data-[te-nav-active]:text-primary   dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
                            data-te-toggle="pill"
                            data-te-target="#tabs-profile"
                            role="tab"
                            aria-controls="tabs-profile"
                            aria-selected="false"
                        >
                            <div className='h-[100px] flex items-center justify-center gap-5  text-center py-5'>
                                <span className='number'>3</span>
                                <span className='normal-text text-xl font-normal'>Post-Registration </span>
                            </div>
                        </a>
                    </li>

                </ul>

                <div class="mb-6">
                    <div
                        class="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                        id="tabs-home"
                        role="tabpanel"
                        aria-labelledby="tabs-messages-tab"
                        data-te-tab-active>
                        <div>
                            {/* cards */}
                            <PreBooking />


                        </div>
                    </div>
                    <div
                        class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                        id="tabs-profile"
                        role="tabpanel"
                        aria-labelledby="tabs-profile-tab">
                        <div>
                            <PostRegistration />
                        </div>
                    </div>

                    <div
                        class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                        id="tabs-messages"
                        role="tabpanel"
                        aria-labelledby="tabs-profile-tab">
                        <div>
                            {/* <OfferingCard /> */}
                            <PostBooking />

                        </div>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default OurOfferings;