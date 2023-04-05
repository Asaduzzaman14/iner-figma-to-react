import React from 'react';
import blog1 from '../asset/blog/blog1.png'
import blog2 from '../asset/blog/blog2.png'
import blog3 from '../asset/blog/blog3.png'
import { BsArrowRight } from 'react-icons/bs';

const Blog = () => {
    return (
        <div className='pt-5'>
            <div className='bg-[#F2F4F6] py-4'>
                <div className='relative text-center'>
                    <h2 className='title pb-[35px]'>Blogs</h2>
                    <div className=' border-2 rounded-full h-[2px] w-[31px]  inset-x-0 mx-auto border-[#002550] absolute bottom-4'></div>
                </div>

                <div className='px-5 px-lg:10 xl:px-[200px]'>
                    <div className='grid gap-[46px] grid-cols-1 lg:grid-cols-3 '>
                        <div className='card w-[360px] md:w-[355px] p-4 lg:p-6'>
                            <div className='text-start'>
                                <img className='w-full' src={blog1} alt="" />
                                <h2 className='pt-[30px] pb-7 text-[#1A1A1A] font-bold'>Real Estate, Analysis</h2>
                                <div className='flex justify-between  text-[#1A1A1A] pb-[30px]'>
                                    <span className='font-semibold '>09 jun 2022</span>
                                    <span className='font-semibold'>By Admin</span>
                                </div>

                                <h2 className='pb-4 text-[28px] font-semibold'>Guide for personal property Buying </h2>

                                <p className='cart-desc text-[#1A1A1A] opacity-60 text-justify'>Lorem ipsum dolor sit amet, consectetur adipis
                                    cing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod...</p>
                            </div>
                            <div className='card-button text-[#002550]'>
                                <button className='w-full btn border text-[#002550] font-semibold rounded-sm mt-4 outline outline-1 text-lg p-2 flex justify-center items-center gap-2 '>View More<span><BsArrowRight className='text-2xl ' /></span></button>
                            </div>
                        </div>

                        <div className='card w-[360px] md:w-[355px] p-4 lg:p-6'>
                            <div className='text-start'>
                                <img className='w-full' src={blog2} alt="" />
                                <h2 className='pt-[30px] pb-7 text-[#1A1A1A] font-bold'>Real Estate, Analysis</h2>
                                <div className='flex justify-between  text-[#1A1A1A] pb-[30px]'>
                                    <span className='font-semibold '>09 jun 2022</span>
                                    <span className='font-semibold'>By Admin</span>
                                </div>

                                <h2 className='pb-4 text-[28px] font-semibold'>Guide for personal property Buying </h2>

                                <p className='cart-desc text-gray-500 text-justify'>Lorem ipsum dolor sit amet, consectetur adipis
                                    cing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod...</p>
                            </div>
                            <div className='card-button text-[#002550]'>
                                <button className='w-full btn border text-[#002550] font-semibold rounded-sm mt-4 outline outline-1 text-lg p-2 flex justify-center items-center gap-2 '>View More<span><BsArrowRight className='text-2xl ' /></span></button>
                            </div>
                        </div>

                        <div className='card w-[360px] md:w-[355px] p-4 lg:p-6'>
                            <div className='text-start'>
                                <img className='w-full' src={blog3} alt="" />
                                <h2 className='pt-[30px] pb-7 text-[#1A1A1A] font-bold'>Real Estate, Analysis</h2>
                                <div className='flex justify-between  text-[#1A1A1A] pb-[30px]'>
                                    <span className='font-semibold '>09 jun 2022</span>
                                    <span className='font-semibold'>By Admin</span>
                                </div>

                                <h2 className='pb-4 text-[28px]  font-semibold'>Guide for personal property Buying </h2>

                                <p className='cart-desc text-gray-500 text-justify'>Lorem ipsum dolor sit amet, consectetur adipis
                                    cing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod...</p>
                            </div>
                            <div className='card-button text-[#002550]'>
                                <button className='w-full btn border text-[#002550] font-semibold rounded-sm mt-4 outline outline-1 text-lg p-2 flex justify-center items-center gap-2 '>View More<span><BsArrowRight className='text-2xl ' /></span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;