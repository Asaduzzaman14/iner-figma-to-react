import React from 'react';
import aboutImg from '../asset/image 27.png'
import { BsArrowRight } from 'react-icons/bs'
import { BiRightArrow, BiRightArrowAlt } from 'react-icons/bi';


const About = () => {
    return (
        <div className='mt-[35px] px-5 px-lg:10 xl:px-[200px]'>
            <div className='height-[480px] bg-[#E6EAEE] p-4 md:p-6 lg:p-7 grid grid-cols-1 lg:grid-cols-2 items-center content-center  gap-4'>
                <div>
                    <img className='w-[340px] lg:w-[731px] mx-auto' src={aboutImg} alt="" />
                </div>
                <div className='text-start font-sans grid content-center'>
                    <h2 className='font-sans text-sm md:text-xl text-[#1A1A1A] lg:text-3xl font-semibold pb-[10px] lg:pb-8'>Who We Are</h2>
                    <p className='normal-text text-[#98A1B3] text-justify'>The Indian real estate sector is resilient despite global headwinds. Returns are impressive and the sector is expected to reach US$ 1 trillion in market size by 2030 (Niti Aayog report, 2021). However, the whole real estate purchase journey is very tedious and takes more than 2 years on average. Further, as the ticket size of this investment is large, security and trust become quite critical. Problems compound when you are currently away from your purchase destination. If you are experiencing difficulties in the real estate purchase journey, we are here to make it fast and transparent.</p>
                    <div className='hidden md:block'>
                        <button className=' w-[170px] btn border  rounded-sm mt-4 outline outline-1 text-lg p-2 flex justify-center items-center gap-2 '>Contract Now <span><BsArrowRight /></span></button>
                    </div>

                    <button className='md:hidden btn border text-[#01244A] font-semibold rounded-sm mt-4 outline outline-1 text-lg p-2 flex justify-center items-center gap-2'>Register Now <span><BsArrowRight /></span></button>

                </div>
            </div>
        </div>
    );
};

export default About;