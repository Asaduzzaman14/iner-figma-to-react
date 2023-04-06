import React from 'react';
import BlogBanner from '../components/Blogs/BlogBanner';
import { BsArrowRight } from 'react-icons/bs';

import blog1 from '../asset/blog/blogpageimg-1.png'
import blog2 from '../asset/blog/blogsPageImg2.png'
import { Link } from 'react-router-dom';

const Blogs = () => {
    return (
        <div className='pb-10 lg:pb-20'>
            <BlogBanner />

            <div>
                <div className='px-5 px-lg:10 xl:px-[200px]'>
                    <div className='grid gap-[46px] grid-cols-1 lg:grid-cols-2 '>
                        <div className='card w-[360px] lg:w-[711px] p-4 lg:p-[26px]'>
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
                                <Link to={'/blogDetails'}>
                                    <button className='w-full btn border text-[#002550] font-semibold rounded-sm mt-4 outline outline-1 text-lg p-2 flex justify-center items-center gap-2 '>View More<span><BsArrowRight className='text-2xl ' /></span></button>
                                </Link>
                            </div>
                        </div>

                        <div className='card w-[360px] lg:w-[711px] p-4 lg:p-[26px]'>
                            <div className='text-start'>
                                <img className='w-full' src={blog2} alt="" />
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
                                <Link to='/blogDetails'>
                                    <button className='w-full btn border text-[#002550] font-semibold rounded-sm mt-4 outline outline-1 text-lg p-2 flex justify-center items-center gap-2 '>View More<span><BsArrowRight className='text-2xl ' /></span></button>
                                </Link>
                            </div>
                        </div>

                        {/* <div className='card w-[360px] md:w-[355px] p-4 lg:p-6'>
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
                        </div> */}

                        {/* <div className='card w-[360px] md:w-[355px] p-4 lg:p-6'>
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
                        </div> */}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blogs;