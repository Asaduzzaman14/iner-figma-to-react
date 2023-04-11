import React from 'react';
import blog1 from '../asset/blog/blog1.png'
import blog2 from '../asset/blog/blog2.png'
import blog3 from '../asset/blog/blog3.png'
import { BsArrowRight } from 'react-icons/bs';

const Blog = () => {
    return (
        <div className='lg:pt-[35px]'>
            <div className='lg:bg-[#F2F4F6] pt-6 lg:py-14'>
                <div className='relative text-center'>
                    <h2 className='title mt-0 pt-0 pb-[10px]'>Blogs</h2>
                    <div className=' border-2 rounded-full h-[2px] w-[31px]  inset-x-0 mx-auto border-[#002550] absolute bottom'></div>
                </div>

                <div className='pt-[20px] lg:pt-[35px] px-5 px-lg:10 xl:px-[200px]'>
                    <div className='grid gap-[46px] grid-cols-1 lg:grid-cols-3 '>

                        <div className='card w-[360px]  lg:w-[455px] p-4 lg:p-6'>
                            <div className='text-start'>
                                <img className=' w-[407px]' src={blog1} alt="" />
                                <h2 className='pt-5 lg:pt-[30px] lg:pb-7 text-[16px] text-[#002550] '>Real Estate, Analysis</h2>
                                <div className='flex justify-between text-[16px] text-[#1A1A1A] pb-5 lg:pb-[30px]'>
                                    <span className='font-semibold '>09 jun 2022</span>
                                    <span className='font-semibold'>By Admin</span>
                                </div>

                                <h2 className='pb-4 text-[28px] text-[#002550] font-semibold'>Guide for personal property Buying </h2>

                                <p className='cart-desc text-base text-[#1A1A1A] opacity-60 text-justify'>Lorem ipsum dolor sit amet, consectetur adipis
                                    cing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod...</p>
                            </div>
                            <div className='card-button pb-0 text-[#002550]'>
                                <button className='w-full lg:w-fit lg:py-[18px] lg:px-[32px] btn border text-[#002550] font-semibold rounded-sm mt-4 outline outline-1 text-lg p-2 flex justify-center items-center gap-2 '>View More<span><BsArrowRight className='text-2xl ' /></span></button>
                            </div>
                        </div>


                        <div className='card w-[360px]  lg:w-[455px] p-4 lg:p-6'>
                            <div className='text-start'>
                                <img className=' w-[407px]' src={blog1} alt="" />
                                <h2 className='pt-5 lg:pt-[30px] lg:pb-7 text-[16px] text-[#002550] '>Real Estate, Analysis</h2>
                                <div className='flex justify-between text-[16px] text-[#1A1A1A] pb-5 lg:pb-[30px]'>
                                    <span className='font-semibold '>09 jun 2022</span>
                                    <span className='font-semibold'>By Admin</span>
                                </div>

                                <h2 className='pb-4 text-[28px] text-[#002550] font-semibold'>Guide for personal property Buying </h2>

                                <p className='cart-desc text-base text-[#1A1A1A] opacity-60 text-justify'>Lorem ipsum dolor sit amet, consectetur adipis
                                    cing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod...</p>
                            </div>
                            <div className='card-button pb-0 text-[#002550]'>
                                <button className='w-full lg:w-fit lg:py-[18px] lg:px-[32px] btn border  text-[#002550] font-semibold rounded-sm mt-4 outline outline-1 text-lg p-2 flex justify-center items-center gap-2 '>View More<span><BsArrowRight className='text-2xl ' /></span></button>
                            </div>
                        </div>

                        <div className='card w-[360px]  lg:w-[455px] p-4 lg:p-6'>
                            <div className='text-start'>
                                <img className=' w-[407px]' src={blog1} alt="" />
                                <h2 className='pt-5 lg:pt-[30px] lg:pb-7 text-[16px] text-[#002550] '>Real Estate, Analysis</h2>
                                <div className='flex justify-between text-[16px] text-[#1A1A1A] pb-5 lg:pb-[30px]'>
                                    <span className='font-semibold '>09 jun 2022</span>
                                    <span className='font-semibold'>By Admin</span>
                                </div>

                                <h2 className='pb-4 text-[28px] text-[#002550] font-semibold'>Guide for personal property Buying </h2>

                                <p className='cart-desc text-base text-[#1A1A1A] opacity-60 text-justify'>Lorem ipsum dolor sit amet, consectetur adipis
                                    cing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod...</p>
                            </div>
                            <div className='card-button pb-0 text-[#002550]'>
                                <button className='w-full lg:w-fit lg:py-[18px] lg:px-[32px] btn border text-[#002550] font-semibold rounded-sm mt-4 outline outline-1 text-lg p-2 flex justify-center items-center gap-2 '>View More<span><BsArrowRight className='text-2xl ' /></span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;