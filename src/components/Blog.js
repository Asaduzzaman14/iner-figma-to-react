import React from 'react';
import blog1 from '../asset/blog/blog1.png'
import blog2 from '../asset/blog/blog2.png'
import blog3 from '../asset/blog/blog3.png'

const Blog = () => {
    return (
        <div className='pt-9'>
            <div className='bg-[#F2F4F6] py-[56px]'>
                <h2 className='title pb-9'>Blogs</h2>

                <div className='px-5 px-lg:10 xl:px-[200px]'>
                    <div className='grid gap-[46px] grid-cols-1 lg:grid-cols-3 '>
                        <div className='card md:w-[455px] p-4'>
                            <div className='text-start'>
                                <img className='w-full' src={blog1} alt="" />
                                <h2 className='pt-[30px] pb-7 text-[#002550]'>Real Estate, Analysis</h2>
                                <div className='flex justify-between  text-[#1A1A1A] pb-[30px]'>
                                    <span className='font-semibold '>09 jun 2022</span>
                                    <span className='font-semibold'>By Admin</span>
                                </div>

                                <h2 className='pb-4 text-[28px] text-[#002550] font-semibold'>Guide for personal property Buying </h2>

                                <p className='cart-desc text-gray-500 text-justify'>Lorem ipsum dolor sit amet, consectetur adipis
                                    cing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod...</p>
                            </div>
                            <div className='card-button'>
                                <button className=' btn border  rounded-sm  outline outline-1  text-lg p-1 px-4'>View More</button>
                            </div>
                        </div>

                        <div className='card md:w-[455px] p-4'>
                            <div className='text-start'>
                                <img className='w-full' src={blog2} alt="" />
                                <h2 className='pt-[30px] pb-7 text-[#002550]'>Real Estate, Analysis</h2>
                                <div className='flex justify-between  text-[#1A1A1A] pb-[30px]'>
                                    <span className='font-semibold '>09 jun 2022</span>
                                    <span className='font-semibold'>By Admin</span>
                                </div>

                                <h2 className='pb-4 text-[28px] text-[#002550] font-semibold'>Guide for personal property Buying </h2>

                                <p className='cart-desc text-gray-500 text-justify'>Lorem ipsum dolor sit amet, consectetur adipis
                                    cing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod...</p>
                            </div>
                            <div className='card-button'>
                                <button className=' btn border  rounded-sm  outline outline-1  text-lg p-1 px-4'>View More</button>
                            </div>
                        </div>

                        <div className='card md:w-[455px] p-4'>
                            <div className='text-start'>
                                <img className='w-full' src={blog3} alt="" />
                                <h2 className='pt-[30px] pb-7 text-[#002550]'>Real Estate, Analysis</h2>
                                <div className='flex justify-between  text-[#1A1A1A] pb-[30px]'>
                                    <span className='font-semibold '>09 jun 2022</span>
                                    <span className='font-semibold'>By Admin</span>
                                </div>

                                <h2 className='pb-4 text-[28px] text-[#002550] font-semibold'>Guide for personal property Buying </h2>

                                <p className='cart-desc text-gray-500 text-justify'>Lorem ipsum dolor sit amet, consectetur adipis
                                    cing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod...</p>
                            </div>
                            <div className='card-button'>
                                <button className=' btn border  rounded-sm  outline outline-1  text-lg p-1 px-4'>View More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;