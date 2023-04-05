import React from 'react';
import image from '../asset/announcement-pana.png'
import * as te from 'tw-elements';

const Contact = () => {
    return (
        <div className='px-4 px-lg:10 xl:px-[200px] py-7'>
            <div className='shadow-lg px-4 lg:px-16 '>


                <div >


                    {/* image and from  */}
                    {/* <div className='flex flex-col-reverse lg:flex-row gap-5 lg:justify-between '> */}
                    <div className='flex flex-col-reverse lg:flex-row gap-5 lg:justify-between items-center '>

                        {/* forms */}
                        <div className=' mx-auto '>
                            <div className='md:text-center'>
                                <h2 className=' text-[#1A1A1A] font-bold text-2xl '>Get In Touch With Us To Connect</h2>
                                <p className=' pb-7'>Contact Us</p>

                            </div>

                            <div className='flex flex-col lg:flex-row gap-5'>

                                {/* first cols */}
                                <div className='text-center mx-auto'>
                                    <div>
                                        <div>

                                            <div class="flex justify-start">
                                                <div class="relative w-[350px] h-[48px]" >
                                                    <input
                                                        type="text"
                                                        class="peer  block min-h-[auto] w-full h-full rounded border border-[#888888] bg-transparent py-0 px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-[#888888] dark:placeholder:text-[#888888] [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                        id="exampleFormControlInputText"
                                                        placeholder="Example label" />
                                                    <label
                                                        for="exampleFormControlInputText"
                                                        class="pointer-events-none  absolute top-3 left-3 max-w-[350px] origin-[0_0] truncate focus:mb-[10px] leading-[1.6] text-[#888888] transition-all duration-200 ease-out peer-focus:-translate-y-[1.4rem] focus:px-2 peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-[#888888] dark:peer-focus:text-[#888888] dark:peer-focus:bg-white"
                                                    >Full name
                                                    </label>
                                                </div>
                                            </div>
                                            <p className='mb-7 text-left text-gray-400'>Not more than 50 characters</p>
                                        </div>
                                    </div>
                                    <div>

                                        <div class="flex justify-start mb-7">
                                            <div class="relative mb-3 w-[350px] h-[48px]" >
                                                <input
                                                    type="text"
                                                    class="peer  block min-h-[auto] w-full h-full rounded border border-[#888888] bg-transparent py-0 px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-[#888888] dark:placeholder:text-[#888888] [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                    id="exampleFormControlInputText"
                                                    placeholder="Example label" />
                                                <label
                                                    for="exampleFormControlInputText"
                                                    class="pointer-events-none  absolute top-0 left-3  mb-0 max-w-[350px] origin-[0_0] truncate mt-[10px] leading-[1.6] text-[#888888] transition-all duration-200 ease-out peer-focus:-translate-y-[1.4rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-[#888888] dark:peer-focus:text-[#888888] dark:peer-focus:bg-white"
                                                >Phone
                                                </label>
                                            </div>
                                        </div>

                                        <div class="flex justify-center">
                                            <div class="relative mb-3 w-[350px] h-[48px]">

                                                <select
                                                    id="exampleFormControlInputText"
                                                    className='relative min-h-[auto] w-full ps-2 h-full rounded border border-[#888888]' data-te-select-init data-te-select-visible-options="3">
                                                    <option className=' py-4 text-sm text-[#1A1A1A]  opacity-60 bg-white hover:bg-gray-300' value="1">I am still searching</option>
                                                    <option value="2">I have registered and taken possession</option>
                                                    <option value="3">I have booked but registration is not done</option>
                                                    <option value="4">I am interested in selling</option>

                                                </select>
                                                <span className='absolute left-2 -top-3 bg-white px-2 text-[#888888]'>lavel</span>
                                            </div>
                                        </div>


                                        <div className='hidden lg:block '>
                                            <div className='flex  justify-start my-7'>
                                                <button className='btn w-[350px]  border bg-[#002550] rounded-md font-semibold text-white text-lg p-2'>REGISTER</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/*  2nd cols */}
                                <div className='mx-auto'>
                                    <div class="flex justify-centr mb-7">
                                        <div class="relative mb-3 w-[350px] h-[48px]" >
                                            <input
                                                type="text"
                                                class="peer  block min-h-[auto] w-full h-full rounded border border-[#888888] bg-transparent py-0 px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-[#888888] dark:placeholder:text-[#888888] [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                id="exampleFormControlInputText"
                                                placeholder="Example label" />
                                            <label
                                                for="exampleFormControlInputText"
                                                class="pointer-events-none  absolute top-3 left-3  mb-0 max-w-[350px] origin-[0_0] truncate leading-[1.6] text-[#888888] transition-all duration-200 ease-out peer-focus:-translate-y-[1.4rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.4rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-[#888888] dark:peer-focus:text-[#888888] dark:peer-focus:bg-white"
                                            >Email address
                                            </label>
                                        </div>
                                    </div>
                                    <div class="flex justify-start mb-7">
                                        <div class="relative mb-3 w-[350px] h-[48px]" >
                                            <input
                                                type="text"
                                                class="peer  block min-h-[auto] w-full h-full rounded border border-[#888888] bg-transparent py-0 px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-[#888888] dark:placeholder:text-[#888888] [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                id="exampleFormControlInputText"
                                                placeholder="Example label" />
                                            <label
                                                for="exampleFormControlInputText"
                                                class="pointer-events-none  absolute top-0 left-3  mb-0 max-w-[350px] origin-[0_0] truncate mt-[10px] leading-[1.6] text-[#888888] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.4rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-[#888888] dark:peer-focus:text-[#888888] dark:peer-focus:bg-white"
                                            >Country
                                            </label>
                                        </div>
                                    </div>
                                    <div className=' lg:hidden '>
                                        <div className='flex  justify-start my-7'>
                                            <button className='btn w-[350px]  border bg-[#002550] rounded-md font-semibold text-white text-lg p-2'>REGISTER</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* image */}
                        <div>
                            <img className=' w-[360px] lg:w-[447px] mx-auto mb-7 lg:mb-0' src={image} alt="" />
                        </div>

                    </div>

                </div>



            </div>
        </div>
    );
};

export default Contact;

{/* <div>
<div class="flex justify-start mb-7">
    <div class="relative mb-3 w-[350px] h-[48px]" >
        <input
            type="text"
            class="peer  block min-h-[auto] w-full h-full rounded border border-[#888888] bg-transparent py-0 px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-[#888888] dark:placeholder:text-[#888888] [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInputText"
            placeholder="Example label" />
        <label
            for="exampleFormControlInputText"
            class="pointer-events-none  absolute top-0 left-3  mb-0 max-w-[350px] origin-[0_0] truncate mt-[10px] leading-[1.6] text-[#888888] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-[#888888] dark:peer-focus:text-[#888888] dark:peer-focus:bg-white"
        >Email address
        </label>
    </div>
</div>
<div class="flex justify-start mb-7">
    <div class="relative mb-3 w-[350px] h-[48px]" >
        <input
            type="text"
            class="peer  block min-h-[auto] w-full h-full rounded border border-[#888888] bg-transparent py-0 px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-[#888888] dark:placeholder:text-[#888888] [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInputText"
            placeholder="Example label" />
        <label
            for="exampleFormControlInputText"
            class="pointer-events-none  absolute top-0 left-3  mb-0 max-w-[350px] origin-[0_0] truncate mt-[10px] leading-[1.6] text-[#888888] transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-[#888888] dark:peer-focus:text-[#888888] dark:peer-focus:bg-white"
        >Country
        </label>
    </div>
</div>
<div className=' lg:hidden '>
    <div className='flex  justify-start my-7'>
        <button className='btn w-[350px]  border bg-[#002550] rounded-md font-semibold text-white text-lg p-2'>REGISTER</button>
    </div>
</div>
</div> */}